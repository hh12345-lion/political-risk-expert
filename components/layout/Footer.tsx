import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-field/60">
      <div className="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <Image src="/brand/monogram.svg" alt="" width={327} height={304} unoptimized className="w-11 shrink-0" />
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Political Risk Expert matches counsel with independent expert witnesses. Not a law firm.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[12px] uppercase tracking-[0.12em] text-mute">
          <a href={`mailto:${SITE_EMAIL}`} className="text-meridian hover:text-ink">
            {SITE_EMAIL}
          </a>
          <Link href="/blog" className="hover:text-ink">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
          <Link href="/image-credits" className="hover:text-ink">
            Image credits
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/appoint" className="text-ink hover:text-meridian">
            Enquire
          </Link>
        </div>
      </div>
    </footer>
  );
}
