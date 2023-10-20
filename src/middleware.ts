import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// export default authMiddleware({
//   publicRoutes: ["/", "/landing", "/api/webhook/clerk"],
//   ignoredRoutes: ["/api/webhook/clerk"],
// });

export const middleware = (request: NextRequest) => {
  let session = request.cookies.get("__session");

  const publicPath = ["/sign-in", "/sign-up", "/landing"];

  if (!session && !publicPath.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  if (session && publicPath.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  console.log("user session", session);
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
