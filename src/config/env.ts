import { z } from 'zod';

export const envSchema = z.object({
    PUBLIC_API_URL: z.string(),
});

export type EnvType = z.infer<typeof envSchema>;

// export const env = envSchema.parse(process.env);
