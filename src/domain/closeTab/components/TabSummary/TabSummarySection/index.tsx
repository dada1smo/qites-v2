'use client';

import { FunctionComponent } from 'react';
import TabModel from '../../../models/TabModel';
import SummaryItem from '@/src/ui/components/SummaryItem';
import Sheet from '@/src/ui/components/Sheet';
import useSheet from '@/src/ui/hooks/use-sheet';
import Button from '@/src/ui/components/Button';
import List from '@/src/ui/components/List';
import { formatCurrency } from '@/src/utils/format';

interface TabSummarySectionProps {
  tab: TabModel;
  closeTab: Function;
}

const TabSummarySection: FunctionComponent<TabSummarySectionProps> = ({
  tab,
  closeTab,
}) => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  const { tabRemaining, tabPayers } = tab.getTabSummary();

  return (
    <div className="fixed left-0 bottom-0 w-screen h-[160px] bg-slate-900 rounded-t-2xl py-4 px-6 flex flex-col gap-2">
      <SummaryItem label="Restante" value={tabRemaining} />
      <SummaryItem label="Pagantes" value={tabPayers} />
      {tab.getUniquePayers().length > 0 && (
        <div className="mt-2 flex justify-center">
          <Button
            label="Pagamento por pessoa"
            type="button"
            color="main"
            padding="regular"
            onClick={() => openSheet()}
          />
        </div>
      )}
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
        <div className="mt-4 flex justify-center">
          <Button
            label="Encerrar conta"
            type="button"
            color="main"
            padding="regular"
            onClick={() => {
              closeTab();
              closeSheet(false);
            }}
          />
        </div>
      </Sheet>
    </div>
  );
};

export default TabSummarySection;
