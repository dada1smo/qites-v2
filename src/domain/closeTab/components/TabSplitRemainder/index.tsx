import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import { TabPayerType } from '../../types/TabPayerType';
import List from '@/src/ui/components/List';
import { formatCurrency } from '@/src/utils/format';

interface TabSplitRemainderProps {
  tab: TabModel;
  tabPayers: TabPayerType[];
}

const TabSplitRemainder: FunctionComponent<TabSplitRemainderProps> = ({
  tab,
  tabPayers,
}) => {
  const { value, details, remainder } = tab.getSplitSummary();

  return (
    <List
      data={[
        {
          id: 'remainder',
          item: 'Restante',
          value: remainder,
          details: `${formatCurrency(
            parseFloat((value / tabPayers.length).toFixed(2))
          )} por pessoa (x${tabPayers.length})`,
        },
      ]}
    />
  );
};

export default TabSplitRemainder;
