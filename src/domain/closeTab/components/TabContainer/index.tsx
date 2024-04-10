'use client';

import { FunctionComponent } from 'react';
import useTab from '../../hooks/use-tab';
import TabTotalForm from '../TabTotalForm';
import TabItemSection from '../TabItemSection';
import TabSummarySection from '../TabSummarySection';

const TabContainer: FunctionComponent = () => {
  const { tab, setTabTotal } = useTab();

  return (
    <div className="mt-4 mb-[160px]">
      <TabTotalForm tab={tab} setTabTotal={setTabTotal} />
      <TabItemSection tab={tab} />
      <TabSummarySection tab={tab} />
    </div>
  );
};

export default TabContainer;
