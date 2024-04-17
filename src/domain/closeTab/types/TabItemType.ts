import { TabExpenseType } from './TabExpenseType';
import { TabPayerType } from './TabPayerType';
import { TabServiceFeeType } from './TabServiceFeeType';

export interface TabItemType {
  id: string;
  expenses: TabExpenseType[];
  payers: TabPayerType[];
  serviceFee: TabServiceFeeType | null;
}
