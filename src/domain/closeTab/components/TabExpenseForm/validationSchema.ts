import { ZodType, z } from 'zod';
import { TabPayerType } from '../../types/TabPayerType';
import { TabExpenseType } from '../../types/TabExpenseType';

export const TabExpenseSchema: ZodType<TabExpenseType> = z.object({
  id: z.string(),
  item: z.string().min(2),
  value: z.string().regex(new RegExp(/^\d+(?:[,.]\d{1,2})*$/)),
  quantity: z.coerce.number(),
  type: z.union([z.literal('amount'), z.literal('percentage')]),
});
