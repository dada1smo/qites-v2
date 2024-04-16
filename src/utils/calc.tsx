import { TabExpenseType } from '../domain/closeTab/types/TabExpenseType';
import { coerceToNumber } from './coerce';

export function calcExpenseSum(expenses: TabExpenseType[]) {
  const expenseTotal = parseFloat(
    expenses
      .map(({ value, quantity }) => coerceToNumber(value) * quantity)
      .reduce((value, current) => value + current, 0)
      .toFixed(2)
  );

  return expenseTotal;
}

export function calcServiceFee(
  expenses: TabExpenseType[],
  percentage?: number
) {
  if (!percentage) {
    return 0;
  }

  const expenseTotal = calcExpenseSum(expenses);
  const fee = parseFloat((expenseTotal / percentage).toFixed(2));

  return fee;
}
