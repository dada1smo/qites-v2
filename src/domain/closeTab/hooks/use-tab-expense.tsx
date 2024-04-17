import { useState } from 'react';
import { TabExpenseType } from '../types/TabExpenseType';
import { TabServiceFeeType } from '../types/TabServiceFeeType';
import {
  calcExpenseSum,
  calcExpenseSumServiceFee,
  calcServiceFee,
} from '@/src/utils/calc';

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

  function getItemExpenseTotal() {
    return parseFloat(
      calcExpenseSumServiceFee(tabExpenses, serviceFee?.percentage).toFixed(2)
    );
  }

  return {
    tabExpenses,
    addExpense,
    removeExpense,
    serviceFee,
    addServiceFee,
    removeServiceFee,
    getItemExpenseTotal,
  };
}
