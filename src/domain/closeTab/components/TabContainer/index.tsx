'use client';

import { FunctionComponent } from 'react';
import useTab from '../../hooks/use-tab';
import TabTotalForm from '../TabTotal/TabTotalForm';
import TabItemSection from '../TabItem/TabItemSection';
import TabSummarySection from '../TabSummary/TabSummarySection';
import Sheet from '@/src/ui/components/Sheet';
import useSheet from '@/src/ui/hooks/use-sheet';

const TabContainer: FunctionComponent = () => {
  const {
    tab,
    setTabTotal,
    addTabItem,
    removeTabItem,
    splitTabRemainder,
    removeTabSplit,
    closeTab,
  } = useTab();

  return (
    <div className="mt-4 pb-[180px] overflow-hidden h-full">
      <TabTotalForm tab={tab} setTabTotal={setTabTotal} />
      <TabItemSection
        tab={tab}
        addTabItem={addTabItem}
        removeTabItem={removeTabItem}
        splitTabRemainder={splitTabRemainder}
        removeTabSplit={removeTabSplit}
      />
      <TabSummarySection tab={tab} closeTab={closeTab} />
    </div>
  );
};

export default TabContainer;
