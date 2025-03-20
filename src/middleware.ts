
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'



export default async function middleware(request: NextRequest) {

  const current_req = request.nextUrl.pathname;
  const accessToken = request.cookies.get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
  }

}

export const config = {
  matcher: [
    '/contructor/:path*',
  ],
};
