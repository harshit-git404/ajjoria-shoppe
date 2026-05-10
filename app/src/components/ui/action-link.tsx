import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/utils";

type ActionLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function ActionLink({
  children,
  className,
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={cn(
        "flex h-12 w-full items-center justify-center rounded-full px-5 transition-colors md:w-[158px]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
