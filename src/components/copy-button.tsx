"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure origin or denied permission) — leave the
      // code on screen for the visitor to select manually.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label}: ${value}`}
      className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ink-2 transition-colors hover:text-ink"
    >
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-positive" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied" : "Copy code"}
    </button>
  );
}
