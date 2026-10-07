import Image from "next/image";

const washes = {
  blue: { base: "bg-meridian", veil: "from-ink/75 via-meridian/20 to-transparent" },
  ink: { base: "bg-ink", veil: "from-ink/80 via-ink/20 to-transparent" },
} as const;

/**
 * Greyscale photograph blended into a brand colour, finished with the gold
 * blade from the monogram. Fills its positioned parent.
 */
export function BrandImage({
  src,
  alt,
  tone = "blue",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  preload = false,
  position = "object-center",
  blade = "br",
}: {
  src: string;
  alt: string;
  tone?: keyof typeof washes;
  sizes?: string;
  preload?: boolean;
  position?: string;
  /** Corner that carries the gold blade. */
  blade?: "br" | "bl" | "none";
}) {
  const w = washes[tone];
  return (
    <div className={`absolute inset-0 overflow-hidden ${w.base}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        quality={62}
        className={`object-cover opacity-75 mix-blend-luminosity ${position}`}
      />
      <div aria-hidden className={`absolute inset-0 bg-gradient-to-tr ${w.veil}`} />
      {blade !== "none" && (
        <Image
          src="/brand/blade.svg"
          alt=""
          width={110}
          height={180}
          unoptimized
          aria-hidden
          className={`pointer-events-none absolute bottom-0 w-[clamp(4.5rem,12vw,8rem)] ${
            blade === "br" ? "right-5 sm:right-8" : "left-5 -scale-x-100 sm:left-8"
          } translate-y-[18%]`}
        />
      )}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-brass" />
    </div>
  );
}
