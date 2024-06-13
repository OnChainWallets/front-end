export interface Plan {
    id: number
    plan_type: string
    plan_duration: string
    plan_block_chain: string
    plan_price: number
    payment_type: string | null
}