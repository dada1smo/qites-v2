import { ZodType, z } from 'zod';
import { TabTotalType } from '../../../types/TabTotalType';

export const TabTotalSchema: ZodType<TabTotalType> = z.object({
  tabTotal: z.string().regex(new RegExp(/^\d+(?:[,.]\d{1,2})*$/)),
});
