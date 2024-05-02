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
  const isAuthenticated = request.cookies.get('token')
  
  const path = request.nextUrl.pathname
  const isPathEmpty = path === '/'
  const isPathPrivate = privatePaths.some((route) => path.startsWith(route))
  const isAuthPath = authPaths.some((route) => path.startsWith(route))
  
  console.log('[CURRENT PATH]', path)

  if (!isAuthenticated) {
    if (isPathPrivate || isPathEmpty) {
      console.log('[REDIRECTING TO LOGIN]')
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }
  else if (isPathEmpty || isAuthPath) {
    console.log('[REDIRECTING TO DASHBOARD]')
    return NextResponse.redirect(new URL('/dashboard', request.url))
  } 
}
