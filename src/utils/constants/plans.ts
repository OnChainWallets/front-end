export interface Plan {
    name: string
        description: string
        values: {
            monthly: number
            quarterly: number
            yearly: number
        }
        benefits: {
          blockChain: string
          balance: string
          extract: string
          graph: string
          wallet: string
          tokens: string
          csv?: string
          portfolio?: string
          support?: string
          telegram?: string
}
}
export const plans:Plan[] = [
    {
        name: 'Free',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium.',
        values: {
            monthly: 0.00,
            quarterly: 0.00,
            yearly: 0.00
        },
        benefits: {
          blockChain: '1 block-chain',
          balance: 'Balance of only the 200 largest tokens',
          extract: 'Extract',
          graph: 'No graph',
          wallet: 'Can save wallets',
          tokens: 'Cannot add tokens'
        }
    },
    {
        name: 'Beginner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium.',
        values: {
            monthly: 125.00,
            quarterly: 100.00,
            yearly: 90.00
        },
        benefits: {
          blockChain: '1 block-chain',
          balance: 'Balance of only the 200 largest tokens',
          extract: 'Extract',
          graph: 'No graph',
          wallet: 'Can save wallets',
          tokens: 'Cannot add tokens'
        }
    },
    {
        name: 'Basic',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium.',
        values: {
            monthly: 480.00,
            quarterly: 400.00,
            yearly: 360.00
        },
        benefits: {
          blockChain: 'All blockchains',
          balance: 'Balance of only the 300 largest tokens',
          extract: 'Extract',
          graph: 'No graph',
          wallet: 'Can save wallets',
          tokens: 'Cannot add tokens'
        }
    },
    {
        name: 'Pro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium.',
        values: {
            monthly: 600.00,
            quarterly: 500.00,
            yearly: 450.00
        },
        benefits: {
          blockChain: 'All blockchains',
          balance: 'Balance all available tokens',
          extract: 'Extract',
          graph: 'With Graph',
          wallet: 'Can save wallets',
          tokens: 'Can add 1 token per day',
          csv: 'Can Download CSV',
          portfolio: 'Portfolio control',
          support: 'Personalized support',
          telegram: 'Telegram group'
        }
    }
]