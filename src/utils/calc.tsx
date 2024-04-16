import { TabExpenseType } from '../domain/closeTab/types/TabExpenseType';
import { coerceToNumber } from './coerce';

export function calcServiceFee(percentage: number, expenses: TabExpenseType[]) {
  const expenseTotal = parseFloat(
    expenses
      .map(({ value, quantity }) => coerceToNumber(value) * quantity)
      .reduce((value, current) => value + current, 0)
      .toFixed(2)
  );
  const fee = parseFloat((expenseTotal / percentage).toFixed(2));

  return fee;
}
