import { NextResponse, type NextRequest } from "next/server";

// Redirect all routes to /artists/allej except /artists/ayabarae and assets
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Allow target artist pages
  if (pathname === "/artists/ayabarae" || pathname === "/artists/allej") {
    return NextResponse.next();
  }

  // Redirect everything else (including 404s) to /artists/allej
  const url = req.nextUrl.clone();
  url.pathname = "/artists/allej";
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Match all paths
  matcher: "/:path*",
};


