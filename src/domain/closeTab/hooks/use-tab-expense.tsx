import { useState } from 'react';
import { TabExpenseType } from '../types/TabExpenseType';
import { TabServiceFeeType } from '../types/TabServiceFeeType';
import {
  calcExpenseSum,
  calcExpenseSumServiceFee,
  calcServiceFee,
} from '@/src/utils/calc';

export default function useTabExpense(
  expenses: TabExpenseType[] | [],
  serviceFee: TabServiceFeeType | null
) {
  const [tabExpenses, setTabExpenses] = useState<TabExpenseType[] | []>(
    expenses
  );
  const [itemServiceFee, setItemServiceFee] =
    useState<TabServiceFeeType | null>(serviceFee);

  function addExpense(data: TabExpenseType) {
    setTabExpenses((e) => [...e, data]);
  }

  function removeExpense(expenseId: string) {
    setTabExpenses((e) => e.filter(({ id }) => expenseId !== id));
  }

  function addServiceFee(data: TabServiceFeeType) {
    setItemServiceFee(data);
  }

  function removeServiceFee() {
    setItemServiceFee(null);
  }

  function getItemExpenseTotal() {
    return parseFloat(
      calcExpenseSumServiceFee(tabExpenses, itemServiceFee?.percentage).toFixed(
        2
      )
    );
  }

  return {
    tabExpenses,
    addExpense,
    removeExpense,
    itemServiceFee,
    addServiceFee,
    removeServiceFee,
    getItemExpenseTotal,
  };
}
