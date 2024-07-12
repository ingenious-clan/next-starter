import { SidebarNavItem, SiteConfig } from "types";

const site_url = process.env.NEXT_PUBLIC_APP_URL || "";

export const siteConfig: SiteConfig = {
  name: "IngeniousClan",
  description:
    "Get your project off to an explosive start with IngeniousClan! Harness the power of Next.js 14 and Shadcn/ui to build your next big thing.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  mailSupport: "hello@ingeniousclan.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
