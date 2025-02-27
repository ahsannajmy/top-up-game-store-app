import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";
import { JWTPayload } from "./interface/auth-interface";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const PUBLIC_PATHS = ["/admin/login", "/login", "/register"];
  const targetedUrl = req.nextUrl.pathname;

  if (!token && !PUBLIC_PATHS.includes(targetedUrl)) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  if (token) {
    const payload = jwtDecode<JWTPayload>(token);
    if (payload.role === "ADMIN" && PUBLIC_PATHS.includes(targetedUrl)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path", "/admin/login", "/dashboard"],
};
