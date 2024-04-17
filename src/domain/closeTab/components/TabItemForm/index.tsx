import { FunctionComponent, useId, useState } from 'react';
import TabModel from '../../models/TabModel';
import Typography from '@/src/ui/components/Typography';
import TabPayerForm from '../TabPayerForm';
import useTabPayer from '../../hooks/use-tab-payer';
import TabExpenseForm from '../TabExpenseForm';
import useTabExpense from '../../hooks/use-tab-expense';
import TabItemOptions from '../TabItemOptions';
import { TabItemType } from '../../types/TabItemType';

interface TabItemFormProps {
  tab: TabModel;
  addTabItem: Function;
  closeSheet: Function;
  selectedId?: string;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({
  tab,
  addTabItem,
  closeSheet,
  selectedId,
}) => {
  const { payers, expenses, serviceFee } = tab.findItem(selectedId);
  const { tabPayers, addPayer, removePayer } = useTabPayer(payers);
  const {
    tabExpenses,
    addExpense,
    removeExpense,
    addServiceFee,
    removeServiceFee,
    itemServiceFee,
    getItemExpenseTotal,
  } = useTabExpense(expenses, serviceFee);

  const handleAddItem = () => {
    const item: TabItemType = {
      id: selectedId ? selectedId : crypto.randomUUID(),
      expenses: tabExpenses,
      payers: tabPayers,
      serviceFee: itemServiceFee,
    };
    addTabItem(item);
    closeSheet();
  };

  const enableSave = () => {
    if (tabPayers.length === 0) {
      return false;
    }

    if (tabExpenses.length === 0) {
      return false;
    }

    return true;
  };

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
        itemServiceFee={itemServiceFee}
        addServiceFee={addServiceFee}
        removeServiceFee={removeServiceFee}
        getItemExpenseTotal={getItemExpenseTotal}
      />
      <TabItemOptions
        getItemExpenseTotal={getItemExpenseTotal}
        closeSheet={closeSheet}
        handleAddItem={handleAddItem}
        enableSave={enableSave}
      />
    </div>
  );
};

export default TabItemForm;
