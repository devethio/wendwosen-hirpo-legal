import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { IntakeResult } from "./intake.server";

export type IntakeResponse = { ok: true; result: IntakeResult } | { ok: false; error: string };

export const analyzeMatter = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ matter: z.string().trim().min(20).max(4000) }).parse(d))
  .handler(async ({ data }): Promise<IntakeResponse> => {
    const key = process.env["LOVABLE_API_KEY"];
    if (!key) return { ok: false, error: "The assistant is not configured yet." };
    try {
      const { runIntake } = await import("./intake.server");
      return { ok: true, result: await runIntake(data.matter, key) };
    } catch (e: unknown) {
      const status = (e as { statusCode?: number })?.statusCode;
      console.error("intake failed", status, e);
      if (status === 429) return { ok: false, error: "The assistant is busy. Please try again in a minute." };
      if (status === 402 || status === 403) return { ok: false, error: "The assistant is temporarily unavailable. Please contact the chambers directly." };
      return { ok: false, error: "Something went wrong preparing your checklist. Please try again." };
    }
  });
