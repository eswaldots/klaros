import { SiteFooter } from "@/components/landing/site-footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white w-screen md:overflow-y-visible overflow-y-hidden">
      {children}
      <SiteFooter />
    </main>
  );
}
