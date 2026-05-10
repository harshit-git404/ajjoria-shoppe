import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils";

type ExternalLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function ExternalLink({
  children,
  className,
  rel,
  target = "_blank",
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn(className)}
      rel={rel ?? "noopener noreferrer"}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
