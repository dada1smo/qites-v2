import { FunctionComponent, useId, useState } from 'react';
import TabModel from '../../models/TabModel';
import Typography from '@/src/ui/components/Typography';
import TabPayerForm from '../TabPayerForm';
import useTabPayer from '../../hooks/use-tab-payer';
import TabExpenseForm from '../TabExpenseForm';
import useTabExpense from '../../hooks/use-tab-expense';
import TabItemOptions from '../TabItemOptions';

interface TabItemFormProps {
  tab: TabModel;
  closeSheet: Function;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({
  tab,
  closeSheet,
}) => {
  const { tabPayers, addPayer, removePayer } = useTabPayer();
  const {
    tabExpenses,
    addExpense,
    removeExpense,
    addServiceFee,
    removeServiceFee,
    serviceFee,
    getItemExpenseTotal,
  } = useTabExpense([]);

  return (
    <div className="flex flex-col gap-6 relative pb-[100px] max-h-full h-full overflow-hidden">
      <TabPayerForm
        tab={tab}
        tabPayers={tabPayers}
        addPayer={addPayer}
        removePayer={removePayer}
      />
      <TabExpenseForm
        tab={tab}
        tabExpenses={tabExpenses}
        addExpense={addExpense}
        removeExpense={removeExpense}
        serviceFee={serviceFee}
        addServiceFee={addServiceFee}
        removeServiceFee={removeServiceFee}
        getItemExpenseTotal={getItemExpenseTotal}
      />
      <TabItemOptions
        getItemExpenseTotal={getItemExpenseTotal}
        closeSheet={closeSheet}
      />
    </div>
  );
};

export default TabItemForm;
