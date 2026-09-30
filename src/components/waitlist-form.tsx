"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { ArrowRightIcon } from "./icons";

const initialState: WaitlistState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-brand-deep shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-px disabled:opacity-70"
    >
      {pending ? "Joining…" : "Join the list"}
      {!pending && <ArrowRightIcon className="h-4 w-4" />}
    </button>
  );
}

/** Sits on the brand-filled CTA card, so it is styled for a blue background. */
export function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, initialState);

  return (
    <div className="mt-8 w-full max-w-lg">
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby="waitlist-status"
          className="min-w-0 flex-1 rounded-full border border-white/30 bg-white/15 px-6 py-3.5 text-[15px] text-white outline-none backdrop-blur-sm placeholder:text-white/60 focus:border-white/70"
        />
        <SubmitButton />
      </form>

      <p
        id="waitlist-status"
        role="status"
        aria-live="polite"
        className={`mt-4 min-h-5 text-sm font-medium ${
          state.status === "error" ? "text-[#FFD6DB]" : "text-white/85"
        }`}
      >
        {state.message || "No spam. One email when testing opens, and nothing else."}
      </p>
    </div>
  );
}
