import { createOpenAI } from "@ai-sdk/openai";
import { Output, streamText } from "ai";
import { z } from "zod";

export const intakeSchema = z.object({
  practiceArea: z.string(),
  confidence: z.enum(["high", "medium", "low"]),
  summary: z.string(),
  documents: z.array(z.string()),
  questions: z.array(z.string()),
  deadlines: z.array(z.string()),
});
export type IntakeResult = z.infer<typeof intakeSchema>;

const PRACTICE_AREAS = [
  "Commercial Arbitration",
  "Sovereign Advisory",
  "Corporate Restructuring",
  "Intellectual Property",
  "Contracts & Commercial Law",
  "Business Formation & Licensing",
  "Litigation",
  "Other / Needs review",
];

const INSTRUCTIONS = `You are an intake assistant for an Ethiopian law practice (Wendwosen Hirpo & Associates, Addis Ababa).
Classify the prospective client's matter into exactly one of these practice areas: ${PRACTICE_AREAS.join("; ")}.
Then prepare a consultation preparation checklist: documents to bring, questions the client should be ready to answer, and time-sensitive items to check (e.g. limitation periods, filing or renewal dates) phrased as things to confirm with counsel.
Never give legal advice, opinions on the merits, or predictions of outcome. Keep the summary to two neutral sentences. 4-7 items per list. Write in the same language the client used.`;

export async function runIntake(matter: string, apiKey: string): Promise<IntakeResult> {
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    instructions: INSTRUCTIONS,
    messages: [{ role: "user", content: matter }],
    output: Output.object({ schema: intakeSchema }),
    maxRetries: 0,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  return await result.output;
}
