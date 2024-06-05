import { TabExpenseType } from './TabExpenseType';
import { TabPayerType } from './TabPayerType';
import { TabServiceFeeType } from './TabServiceFeeType';

export interface TabItemDetailsType {
  id: string;
  item: string;
  quantity: number;
  value: number | string;
}

export interface TabItemType extends TabItemDetailsType {
  expenses: TabExpenseType[];
  payers: TabPayerType[];
  serviceFee: TabServiceFeeType | null;
}
