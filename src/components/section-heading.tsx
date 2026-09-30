export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className="pill inline-block rounded-full px-3 py-1.5 text-xs font-semibold">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[clamp(1.85rem,4.2vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
        {title}
      </h2>
      {body ? <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{body}</p> : null}
    </div>
  );
}
