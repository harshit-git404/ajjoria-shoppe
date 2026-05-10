import type { PropsWithChildren } from "react";

import { cn } from "@/utils";

type SiteShellProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}>;

export function SiteShell({
  children,
  className,
  contentClassName,
}: SiteShellProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black",
        className,
      )}
    >
      <main
        className={cn(
          "flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start",
          contentClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
}
