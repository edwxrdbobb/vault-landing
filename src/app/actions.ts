"use server";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Early-access signup.
 *
 * This currently validates the address and records it in the server log. To
 * persist signups, call your backend here — e.g. a Convex mutation via
 * `ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!).mutation(...)` — or
 * hand off to whichever mailing list you use.
 */
export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL.test(email)) {
    return { status: "error", message: "That email doesn't look right — try again." };
  }

  console.info("[waitlist] signup", email);

  return {
    status: "success",
    message: "You're on the list. We'll email you when testing opens.",
  };
}
