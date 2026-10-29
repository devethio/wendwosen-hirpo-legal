import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { IntakeResult } from "./intake.server";

// Errors are codes; the page shows them in the visitor's language.
export type IntakeError = "not_configured" | "busy" | "unavailable" | "failed";
export type IntakeResponse = { ok: true; result: IntakeResult } | { ok: false; error: IntakeError };

export const analyzeMatter = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ matter: z.string().trim().min(20).max(4000) }).parse(d))
  .handler(async ({ data }): Promise<IntakeResponse> => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) return { ok: false, error: "not_configured" };
    try {
      const { runIntake } = await import("./intake.server");
      return { ok: true, result: await runIntake(data.matter, key) };
    } catch (e: unknown) {
      const status = (e as { statusCode?: number })?.statusCode;
      console.error("intake failed", status, e);
      if (status === 429) return { ok: false, error: "busy" };
      if (status === 402 || status === 403) return { ok: false, error: "unavailable" };
      return { ok: false, error: "failed" };
    }
  });
