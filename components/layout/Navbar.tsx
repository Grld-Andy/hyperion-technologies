"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Moon, Sun, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu/dropdown when navigating — derived during render
  // (not in an effect) to avoid an extra render pass.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-royal-950/90 backdrop-blur-md shadow-md shadow-royal-950/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-hyperion flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal-700 to-royal-500 font-display text-lg font-bold text-gold-300">
            H
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-bold ${
                scrolled ? "text-royal-950 dark:text-white" : "text-royal-950 dark:text-white"
              }`}
            >
              {SITE.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600">Technologies</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.href)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 hover:text-royal-600 dark:text-white/80 dark:hover:text-gold-300 transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && openDropdown === link.href && (
                <div className="absolute left-0 top-full w-56 rounded-xl border border-mid-gray bg-white p-2 shadow-xl dark:bg-royal-900 dark:border-royal-700">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-royal-50 hover:text-royal-700 dark:text-white/80 dark:hover:bg-royal-800"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mid-gray text-ink/70 hover:text-royal-600 dark:border-royal-700 dark:text-white/70"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={`tel:${CONTACT.phoneIntl}`}
            className="flex items-center gap-2 text-sm font-medium text-ink/80 dark:text-white/80"
          >
            <Phone className="h-4 w-4 text-gold-600" /> {CONTACT.phone}
          </a>
          <Button href="/contact" size="sm">
            Enroll Now
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mid-gray text-ink lg:hidden dark:border-royal-700 dark:text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mid-gray bg-white px-5 pb-6 pt-2 lg:hidden dark:bg-royal-950 dark:border-royal-800">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="py-1">
              <Link
                href={link.href}
                className="block rounded-lg px-2 py-2.5 font-medium text-ink dark:text-white"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 border-l border-mid-gray pl-3 dark:border-royal-700">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-2 py-2 text-sm text-slate dark:text-white/70"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a href={`tel:${CONTACT.phoneIntl}`} className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-gold-600" /> {CONTACT.phone}
            </a>
            <Button href="/contact" className="w-full">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
