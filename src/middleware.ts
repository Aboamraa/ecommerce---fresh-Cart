import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const data = await getToken({ req: request });
 
  const pathName = request.nextUrl.pathname;
  // console.log("datadatadata: ", data);
  if (data && (pathName == "/Login" || pathName == "/Register")) {
    // console.log("ssssssssssss",request.url);
    
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!data && (pathName == "/Cart" || pathName == "/Orders")) {
    return NextResponse.redirect(new URL("/Login", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/Cart", "/Orders", "/Login", "/Register"],
};
