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
  const remainder = tab.getRemaining();
  const remainderCurrency = tab.getRemainderCurrency();

  return (
    <List
      data={[
        {
          id: 'remainder',
          item: 'Restante',
          value: remainderCurrency,
          details: `${formatCurrency(
            parseFloat((remainder / tabPayers.length).toFixed(2))
          )} por pessoa`,
        },
      ]}
    />
  );
};

export default TabSplitRemainder;
