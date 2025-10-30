import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register", "/adminLogin"];

type Role = "STUDENT" | "ADMIN";

const roleBasedRoutes: Record<Role, RegExp[]> = {
  STUDENT: [/^\/enrollment/],
  ADMIN: [/^\/admin/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  // ✅ Debug logging (optional)
  console.log("User:", user);
  console.log("Path:", pathname);

  // Allow open access to auth pages
  if (AuthRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // If no user at all
  if (!user) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(
        new URL(`/adminLogin?redirect=${pathname}`, request.url),
      );
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url),
      );
    }
  }

  // Role-based access control
  const userRole = user.role as Role;

  if (roleBasedRoutes[userRole]) {
    const routes = roleBasedRoutes[userRole];
    const isAuthorized = routes.some((route) => pathname.match(route));

    if (isAuthorized) {
      return NextResponse.next();
    }
  }

  // Not authorized — redirect to homepage
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
    "/enrollment/:path*", // ✅ added this line
    "/login",
    "/register",
    "/adminLogin",
  ],
};
