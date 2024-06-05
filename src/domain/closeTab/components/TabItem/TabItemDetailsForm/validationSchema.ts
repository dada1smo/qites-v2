import { ZodType, z } from 'zod';
import { TabItemDetailsType, TabItemType } from '../../../types/TabItemType';

export const TabItemSchema: ZodType<TabItemDetailsType> = z.object({
  id: z.string(),
  item: z.string().min(2),
  value: z.string().regex(new RegExp(/^\d+(?:[,.]\d{1,2})*$/)),
  quantity: z.coerce.number(),
});
