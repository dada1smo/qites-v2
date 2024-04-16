import { useState } from 'react';
import { TabExpenseType } from '../types/TabExpenseType';
import { TabServiceFeeType } from '../types/TabServiceFeeType';

export default function useTabExpense(expenses?: TabExpenseType[]) {
  const [tabExpenses, setTabExpenses] = useState<TabExpenseType[] | []>(
    expenses || []
  );
  const [serviceFee, setServiceFee] = useState<TabServiceFeeType | null>(null);

  function addExpense(data: TabExpenseType) {
    setTabExpenses((e) => [...e, data]);
  }

  function removeExpense(expenseId: string) {
    setTabExpenses((e) => e.filter(({ id }) => expenseId !== id));
  }

  function addServiceFee(data: TabServiceFeeType) {
    setServiceFee(data);
  }

  function removeServiceFee() {
    setServiceFee(null);
  }

  return {
    tabExpenses,
    addExpense,
    removeExpense,
    serviceFee,
    addServiceFee,
    removeServiceFee,
  };
}
