import Stripe from "stripe"

export interface StripePlan {
    id: string;
    name: string;
    description: string;
    prices: {
        id: string;
        interval: Stripe.Price.Recurring.Interval;
        unit_amount: string | number;
    }[];
}


export interface CheckoutSession extends Stripe.Response<Stripe.Checkout.Session> { }