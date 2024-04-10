import { ZodType, z } from 'zod';
import { TabPayerType } from '../../types/TabPayerType';

export const TabPayerSchema: ZodType<TabPayerType> = z.object({
  name: z.string().min(2),
});
