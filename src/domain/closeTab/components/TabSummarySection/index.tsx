'use client';

import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import SummaryItem from '@/src/ui/components/SummaryItem';
import Sheet from '@/src/ui/components/Sheet';
import useSheet from '@/src/ui/hooks/use-sheet';
import Button from '@/src/ui/components/Button';
import List from '@/src/ui/components/List';
import { formatCurrency } from '@/src/utils/format';

interface TabSummarySectionProps {
  tab: TabModel;
}

const TabSummarySection: FunctionComponent<TabSummarySectionProps> = ({
  tab,
}) => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  const { tabRemaining, tabPayers } = tab.getTabSummary();

  return (
    <div className="fixed left-0 bottom-0 w-screen h-[160px] bg-slate-900 rounded-t-3xl p-6 flex flex-col gap-2">
      <SummaryItem label="Restante" value={tabRemaining} />
      <SummaryItem label="Pagantes" value={tabPayers} />
      <div className="mt-2 flex justify-center">
        <Button
          label="Ver pagamento individual"
          type="button"
          color="main"
          padding="regular"
          onClick={() => openSheet()}
        />
      </div>
      <Sheet open={open} willClose={willClose} closeSheet={closeSheet}>
        <List
          data={tab.getAllPayments().map(({ name, payment }, index) => {
            return {
              id: name,
              item: `${index + 1}. ${name}`,
              value: payment,
            };
          })}
        />
        <div className="mt-2">
          <SummaryItem label="Total" value={formatCurrency(tab.getTotal())} />
        </div>
      </Sheet>
    </div>
  );
};

export default TabSummarySection;
