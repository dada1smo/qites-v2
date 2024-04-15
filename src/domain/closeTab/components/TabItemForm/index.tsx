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
  const id = useId();

  const { tabPayers, addPayer, removePayer } = useTabPayer();
  const { tabExpenses, addExpense, removeExpense } = useTabExpense([]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Typography as="h3" variant="strong">
          Quem vai pagar?
        </Typography>
        <TabPayerForm
          tab={tab}
          tabPayers={tabPayers}
          addPayer={addPayer}
          removePayer={removePayer}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Typography as="h3" variant="strong">
          Pagar o quê?
        </Typography>
        <TabExpenseForm
          tab={tab}
          tabExpenses={tabExpenses}
          addExpense={addExpense}
          removeExpense={removeExpense}
        />
      </div>
    </div>
  );
};

export default TabItemForm;
