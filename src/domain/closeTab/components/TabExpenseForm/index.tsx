import { FunctionComponent, useId, useState } from 'react';
import TabModel from '../../models/TabModel';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import useCustomForm from '@/src/application/hooks/use-custom-form';
import { TabExpenseType } from '../../types/TabExpenseType';
import { TabExpenseSchema } from './validationSchema';
import Form from '@/src/ui/components/Form';
import Button from '@/src/ui/components/Button';
import Chip from '@/src/ui/components/Chip';
import { coerceToNumber } from '@/src/utils/coerce';

interface TabExpenseFormProps {
  tab: TabModel;
  tabExpenses: TabExpenseType[];
  addExpense: Function;
  removeExpense: Function;
  expenseId?: string;
}

const TabExpenseForm: FunctionComponent<TabExpenseFormProps> = ({
  tab,
  expenseId,
  tabExpenses,
  addExpense,
  removeExpense,
}) => {
  const [id, setId] = useState(crypto.randomUUID());

  const { control, register, handleSubmit, reset } =
    useCustomForm<TabExpenseType>({
      schema: TabExpenseSchema,
      defaultValues: {
        id: expenseId ? expenseId : id,
        item: '',
        value: '',
        quantity: 1,
        type: 'amount',
      },
    });

  const submit = (data: any) => {
    const value = coerceToNumber(data.value);
    addExpense({ ...data, value });
    const newId = crypto.randomUUID();
    reset({
      id: newId,
      item: '',
      value: '',
      quantity: 1,
      type: 'amount',
    });
    setId(newId);
  };

  console.log(id);

  return (
    <div className="flex flex-col gap-2">
      {tabExpenses.map(({ item, quantity, value, id }) => {
        return (
          <Chip
            key={id}
            label={`${item}`}
            value={`(x${quantity}) R$ ${coerceToNumber(value) * quantity}`}
            onRemove={() => removeExpense(id)}
          />
        );
      })}
      <Form
        onSubmit={handleSubmit(submit)}
        className="flex bg-teal-900 py-2 px-3 rounded-3xl items-center"
      >
        <div className="flex flex-col flex-1 overflow-hidden">
          <ControlledPillInput
            control={control}
            name="item"
            placeholder="Item"
            type="text"
            fieldProps={{
              color: 'transparent',
              padding: 'clear',
              size: 'full',
            }}
          />
          <div className="flex overflow-x-auto gap-2">
            <input id="id" type="text" hidden readOnly {...register('id')} />
            <ControlledPillInput
              control={control}
              name="value"
              preffix="R$"
              placeholder="0,00"
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              fieldProps={{ color: 'transparent', padding: 'clear' }}
            />
            <ControlledPillInput
              control={control}
              name="quantity"
              preffix="Qtd."
              placeholder="1"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              fieldProps={{ color: 'transparent', padding: 'clear' }}
            />
          </div>
          <input
            id="type"
            type="text"
            hidden
            value="amount"
            readOnly
            {...register('type')}
          />
        </div>
        <Button
          label="Adicionar novo"
          type="submit"
          color="basic"
          shape="circle"
          size="md"
          padding="clear"
          icon={{ src: '/add.svg', position: 'center', size: 24 }}
        />
      </Form>
    </div>
  );
};

export default TabExpenseForm;
