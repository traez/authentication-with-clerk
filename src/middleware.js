import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

let domainURL = process.env.UNAUTHENTICATED_URL;

const isPublicRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) {
    auth().protect({ unauthenticatedUrl: `${domainURL}/sign-in` });
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
