"use client";
import { useState } from "react";
import Link from "next/link";

import { useUser } from "@/src/contex/user.provider";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";

export const Navbar = () => {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/courses", label: "কোর্সসমূহ" },
    { href: "/facilities", label: "সুবিধাসমূহ" },
    { href: "/contact", label: "যোগাযোগ" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-pink-600 dark:text-pink-400">
              বুদ্ধিবৃত্ত
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeSwitch />
              {user ? (
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium bg-pink-600 text-white hover:bg-pink-700"
                  href="/dashboard"
                >
                  ড্যাশবোর্ড
                </Link>
              ) : (
                <Link
                  className="px-3 py-2 rounded-md text-sm font-medium bg-pink-600 text-white hover:bg-pink-700"
                  href="/login"
                >
                  লগইন
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <button
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-pink-500 focus:outline-none transition-colors"
              onClick={toggleMenu}
            >
              <span className="sr-only">মেনু খুলুন</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-800 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-100 dark:hover:bg-slate-700 transition-colors"
              href={item.href}
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
            {user ? (
              <Link
                className="block w-full px-3 py-2 rounded-md text-base font-medium bg-pink-600 text-white hover:bg-pink-700 text-center"
                href="/dashboard"
                onClick={toggleMenu}
              >
                ড্যাশবোর্ড
              </Link>
            ) : (
              <Link
                className="block w-full px-3 py-2 rounded-md text-base font-medium bg-pink-600 text-white hover:bg-pink-700 text-center"
                href="/login"
                onClick={toggleMenu}
              >
                লগইন
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
