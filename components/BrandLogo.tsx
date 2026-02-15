"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type BrandLogoProps = {
  /** Use white text for dark backgrounds (e.g. footer) */
  variant?: "default" | "light";
  className?: string;
  href?: string;
};

export function BrandLogo({
  variant = "default",
  className = "",
  href = "/",
}: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);
  const textColor = variant === "light" ? "text-white" : "text-[#003566]";
  const content = (
    <>
      {!imgError && (
        <Image
          src="/images/logo.png"
          alt=""
          width={40}
          height={40}
          className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 object-contain"
          onError={() => setImgError(true)}
        />
      )}
      <span
        className={`font-bold text-sm sm:text-base tracking-tight whitespace-nowrap ${textColor}`}
      >
        BOWMAN MFB
      </span>
    </>
  );

  const wrapperClass = `inline-flex items-center gap-2 shrink-0 ${className}`.trim();

  return href ? (
    <Link href={href} className={wrapperClass} aria-label="Bowman MFB - Home">
      {content}
    </Link>
  ) : (
    <span className={wrapperClass}>{content}</span>
  );
}
