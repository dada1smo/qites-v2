import { ZodType, z } from 'zod';
import { TabTotalType } from '../../types/TabTotalType';

export const TabTotalSchema: ZodType<TabTotalType> = z.object({
  tabTotal: z.number().min(0.01),
});
