import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = [
  '/dashboard'
]

const authPaths = [
  '/signin',
  '/signup',
]

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('access_token')

  const path = request.nextUrl.pathname
  const isPathEmpty = path === '/'
  const isPathPrivate = privatePaths.some((route) => path.startsWith(route))
  const isAuthPath = authPaths.some((route) => path.startsWith(route))

  if (!isAuthenticated) {
    if (isPathPrivate) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  else if (isPathEmpty || isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}