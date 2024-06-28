import { stripe } from "@/lib/stripe";
import { env } from "@/utils/config/env";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    //test
    const { priceId } = await req.json()

    if (req.method !== 'POST') {
        throw new Error('Method not allowed.')
    }

    if (!priceId) {
        throw new Error('Price not found.')
    }


    const success_url = `${env.NEXT_PUBLIC_BASE_URL}/dashboard/plans/success-checkout?session_id={CHECKOUT_SESSION_ID}`
    const cancel_url = `${env.NEXT_PUBLIC_BASE_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: 'subscription',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ],
    })

    return NextResponse.json(checkoutSession.url)

}