import * as React from "react";
import Link from "next/link";

import { footerLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid max-w-6xl grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Copyright &copy; 2024. All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
