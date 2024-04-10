'use client';

import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import SummaryItem from '@/src/ui/components/SummaryItem';

interface TabSummarySectionProps {
  tab: TabModel;
}

const TabSummarySection: FunctionComponent<TabSummarySectionProps> = ({
  tab,
}) => {
  const { tabRemaining, tabPayers } = tab.getTabSummary();
  return (
    <div className="fixed left-0 bottom-0 w-screen h-[160px] bg-slate-900 rounded-t-3xl p-6 flex flex-col gap-2">
      <SummaryItem label="Restante" value={tabRemaining} />
      <SummaryItem label="Pagantes" value="Ninguém ainda" />
    </div>
  );
};

export default TabSummarySection;
