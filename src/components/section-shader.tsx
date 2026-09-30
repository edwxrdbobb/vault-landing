import type { CSSProperties } from "react";

type Variant = "aurora" | "mesh" | "beam" | "orb" | "grid";
type Tone = "blue" | "teal" | "violet" | "mixed";

const palette = {
  blue: ["rgba(47,107,245,0.58)", "rgba(90,160,255,0.36)", "rgba(30,82,216,0.42)"],
  teal: ["rgba(61,214,176,0.42)", "rgba(47,128,255,0.36)", "rgba(18,180,140,0.32)"],
  violet: ["rgba(139,92,246,0.48)", "rgba(47,128,255,0.34)", "rgba(109,40,217,0.38)"],
  mixed: ["rgba(47,128,255,0.5)", "rgba(61,214,176,0.34)", "rgba(139,92,246,0.42)"],
} as const;

function blob(color: string, style: CSSProperties, animation: string): CSSProperties {
  return {
    ...style,
    background: `radial-gradient(closest-side, ${color}, rgba(7,10,24,0) 100%)`,
    animation: `var(${animation})`,
  };
}

/**
 * An animated mesh-gradient field that sits behind a section.
 *
 * Drifting colour blobs plus, depending on the variant, a rotating conic sweep
 * or a perspective grid — with a grain layer on top so the gradients don't
 * band on wide screens. Everything animates on transform/opacity only, and the
 * global reduced-motion rule freezes it.
 */
export function SectionShader({
  variant = "mesh",
  tone = "blue",
  className = "",
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  const [c1, c2, c3] = palette[tone];

  return (
    <div aria-hidden className={`shader-field ${className}`}>
      {variant === "grid" && <div className="shader-grid" />}

      {variant === "beam" && (
        <div
          className="shader-sweep"
          style={{
            top: "-60%",
            left: "50%",
            height: "170%",
            width: "170%",
            transform: "translateX(-50%)",
          }}
        />
      )}

      {variant === "orb" ? (
        <>
          <div
            className="shader-blob"
            style={blob(
              c1,
              { top: "-30%", left: "50%", height: "150%", width: "90%", marginLeft: "-45%" },
              "--animate-pulse-soft",
            )}
          />
          <div
            className="shader-blob"
            style={blob(
              c3,
              { bottom: "-40%", left: "50%", height: "110%", width: "70%", marginLeft: "-35%" },
              "--animate-blob-c",
            )}
          />
        </>
      ) : (
        <>
          <div
            className="shader-blob"
            style={blob(
              c1,
              { top: "-25%", left: "-15%", height: "120%", width: "65%" },
              "--animate-blob-a",
            )}
          />
          <div
            className="shader-blob"
            style={blob(
              c2,
              { top: "10%", right: "-18%", height: "115%", width: "62%" },
              "--animate-blob-b",
            )}
          />
          {variant !== "aurora" && (
            <div
              className="shader-blob"
              style={blob(
                c3,
                { bottom: "-35%", left: "28%", height: "95%", width: "55%" },
                "--animate-blob-c",
              )}
            />
          )}
        </>
      )}

      <div className="shader-grain" />
    </div>
  );
}
