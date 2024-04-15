import { useState } from 'react';
import { TabExpenseType } from '../types/TabExpenseType';

export default function useTabExpense(expenses?: TabExpenseType[]) {
  const [tabExpenses, setTabExpenses] = useState<TabExpenseType[] | []>(
    expenses || []
  );

  function addExpense(data: TabExpenseType) {
    setTabExpenses((e) => [...e, data]);
  }

  function removeExpense(expenseId: string) {
    setTabExpenses((e) => e.filter(({ id }) => expenseId !== id));
  }

  return { tabExpenses, addExpense, removeExpense };
}
