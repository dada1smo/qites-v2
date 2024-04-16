import { FunctionComponent, useId, useState } from 'react';
import TabModel from '../../models/TabModel';
import Typography from '@/src/ui/components/Typography';
import TabPayerForm from '../TabPayerForm';
import useTabPayer from '../../hooks/use-tab-payer';
import TabExpenseForm from '../TabExpenseForm';
import useTabExpense from '../../hooks/use-tab-expense';

interface TabItemFormProps {
  tab: TabModel;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({ tab }) => {
  const { tabPayers, addPayer, removePayer } = useTabPayer();
  const {
    tabExpenses,
    addExpense,
    removeExpense,
    addServiceFee,
    removeServiceFee,
    serviceFee,
  } = useTabExpense([]);

  return (
    <div className="flex flex-col gap-6">
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
      />
    </div>
  );
};

export default TabItemForm;
