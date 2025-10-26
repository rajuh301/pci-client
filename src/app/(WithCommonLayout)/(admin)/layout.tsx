"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  Home,
  Users,
  BookOpen,
  FilePlus,
  ListChecks,
  LogOut,
  BookCopy,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { logout } from "@/src/services/AuthService";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-900 dark:to-slate-800">
      {/* Sidebar */}
      <AdminSidebar>
        <NavItem
          active={pathname === "/admin/dashboard"}
          href="/admin/dashboard"
          icon={<Home className="h-5 w-5" />}
        >
          Dashboard
        </NavItem>
        <NavItem
          active={pathname.includes("/admin/approved-students")}
          href="/admin/approved-students"
          icon={<Users className="h-5 w-5" />}
        >
          Approved Students
        </NavItem>
        <NavItem
          active={pathname.includes("/admin/enrolments")}
          href="/admin/enrolments"
          icon={<ListChecks className="h-5 w-5" />}
        >
          All Enrolments
        </NavItem>
        <NavItem
          active={pathname === "/admin/create-course"}
          href="/admin/create-course"
          icon={<FilePlus className="h-5 w-5" />}
        >
          Create Course
        </NavItem>
        
        
        <NavItem
          active={pathname.includes("/admin/all-courses")}
          href="/admin/all-courses"
          icon={<BookOpen className="h-5 w-5" />}
        >
          All Courses
        </NavItem>

        <NavItem
          active={pathname.includes("/admin/add-class")}
          href="/admin/add-class"
          icon={<BookCopy className="h-5 w-5" />}
        >
          Add-Class
        </NavItem>




        <div className="mt-auto">
          <button
            className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium rounded-lg text-pink-600 hover:bg-pink-100 dark:text-pink-400 dark:hover:bg-slate-700 transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </AdminSidebar>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 min-h-[calc(100vh-48px)]">
          {children}
        </div>
      </main>
    </div>
  );
}

// Sidebar Component
const AdminSidebar = ({ children }: { children: ReactNode }) => (
  <aside className="w-64 bg-white dark:bg-slate-800 shadow-lg p-4 flex flex-col border-r border-gray-200 dark:border-slate-700">
    <div className="mb-8 p-4">
      <h1 className="text-xl font-bold text-center text-pink-600 dark:text-pink-400">
         অ্যাডমিন
      </h1>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
         Institute
      </p>
    </div>
    <nav className="flex-1 flex flex-col gap-1">{children}</nav>
  </aside>
);

// Nav Item Component
const NavItem = ({
  href,
  active,
  icon,
  children,
}: {
  href: string;
  active: boolean;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <Link
    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
      active
        ? "bg-pink-100 text-pink-600 dark:bg-slate-700 dark:text-pink-400"
        : "text-gray-700 hover:bg-pink-50 dark:text-gray-300 dark:hover:bg-slate-700"
    }`}
    href={href}
  >
    <span
      className={`${active ? "text-pink-600 dark:text-pink-400" : "text-gray-500 dark:text-gray-400"}`}
    >
      {icon}
    </span>
    {children}
  </Link>
);
