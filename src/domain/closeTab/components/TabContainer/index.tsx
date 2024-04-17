'use client';

import { FunctionComponent } from 'react';
import useTab from '../../hooks/use-tab';
import TabTotalForm from '../TabTotalForm';
import TabItemSection from '../TabItemSection';
import TabSummarySection from '../TabSummarySection';

const TabContainer: FunctionComponent = () => {
  const { tab, setTabTotal, addTabItem } = useTab();

  return (
    <div className="mt-4 mb-[160px]">
      <TabTotalForm tab={tab} setTabTotal={setTabTotal} />
      {tab.getTotal() > 0 && (
        <TabItemSection tab={tab} addTabItem={addTabItem} />
      )}
      <TabSummarySection tab={tab} />
    </div>
  );
};

export default TabContainer;
