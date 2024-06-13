import Stripe from 'stripe'
import { env } from '../utils/config/env'

export const stripe = new Stripe(env.STRIPE_SECRET_KEY ? env.STRIPE_SECRET_KEY : '', {
    apiVersion: '2024-04-10',
    appInfo: {
        name: 'OnChainWallet',
    }
})