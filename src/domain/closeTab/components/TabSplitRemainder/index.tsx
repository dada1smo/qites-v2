import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import { TabPayerType } from '../../types/TabPayerType';
import List from '@/src/ui/components/List';

interface TabSplitRemainderProps {
  tab: TabModel;
  tabPayers: TabPayerType[];
}

const TabSplitRemainder: FunctionComponent<TabSplitRemainderProps> = ({
  tab,
  tabPayers,
}) => {
  const { value, details } = tab.getSplitSummary();

  return (
    <List
      data={[
        {
          id: 'remainder',
          item: 'Restante',
          value: value,
          details: `${details} por pessoa`,
        },
      ]}
    />
  );
};

export default TabSplitRemainder;
