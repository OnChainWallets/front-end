import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { StripePlan } from "@/domain/entities/stripe-plan";

export async function GET(): Promise<NextResponse> {
    let stripePlans: StripePlan[] = [];
    let hasMore = true;
    let lastProductId: string | null = null;

    while (hasMore) {
        const response: Stripe.ApiList<Stripe.Product> = await stripe.products.list({
            limit: 10,
            expand: ['data.default_price'],
            starting_after: lastProductId || undefined
        });

        const plans: StripePlan[] = await Promise.all(response.data
            .filter(plan => plan.active)
            .map(async plan => {
                const pricesResponse = await stripe.prices.list({
                    product: plan.id,
                    expand: ['data.product']
                });

                const prices = pricesResponse.data.map(price => ({
                    id: price.id,
                    interval: price.recurring?.interval || 'unknown' as Stripe.Price.Recurring.Interval,
                    unit_amount: price.unit_amount || 0
                }));

                return {
                    id: plan.id,
                    name: plan.name,
                    description: plan.description || '',
                    prices
                };
            })
        );

        stripePlans = [...stripePlans, ...plans];
        hasMore = response.has_more;
        lastProductId = response.data.length > 0 ? response.data[response.data.length - 1].id : null;
    }

    return NextResponse.json(stripePlans);
}
