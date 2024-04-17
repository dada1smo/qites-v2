import { TabItemType } from './TabItemType';
import { TabPayerType } from './TabPayerType';

export interface TabType {
  id: string;
  total: number;
  items: TabItemType[];
  split: TabPayerType[];
}
