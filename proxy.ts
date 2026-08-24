import { NextRequest, NextResponse } from "next/server";
import {
  prefersMarkdown,
  homepageMarkdown,
  aboutMarkdown,
  contactMarkdown,
  privacyMarkdown,
} from "@/lib/markdown";

const MARKDOWN_ROUTES: Record<string, () => string> = {
  "/": homepageMarkdown,
  "/about": aboutMarkdown,
  "/contact": contactMarkdown,
  "/privacy": privacyMarkdown,
};

export const config = {
  matcher: ["/", "/about", "/contact", "/privacy"],
};

export function proxy(request: NextRequest) {
  const buildMarkdown = MARKDOWN_ROUTES[request.nextUrl.pathname];
  const accept = request.headers.get("accept");

  if (buildMarkdown && prefersMarkdown(accept)) {
    return new NextResponse(buildMarkdown(), {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept, Accept-Encoding");
  return response;
}
