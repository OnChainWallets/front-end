import { z } from 'zod';
import dotenv from 'dotenv';
import fs from 'fs';


const envFile = dotenv.parse(fs.readFileSync('.env'));


const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_API_KEY: z.string(),
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
  STRIPE_SECRET_KEY: z.string()
});


const parsedEnv = envSchema.safeParse(envFile);

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  );
  throw new Error('Invalid environment variables.');
}

// Exportar as variáveis de ambiente validadas
export const env = parsedEnv.data;
