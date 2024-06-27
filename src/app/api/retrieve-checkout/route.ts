import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {

   const sessionId = String(req.nextUrl.searchParams.get("session_id"))

   const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
   })

   return NextResponse.json(session)

}