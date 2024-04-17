import { FunctionComponent, useId, useState } from 'react';
import TabModel from '../../models/TabModel';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import useCustomForm from '@/src/application/hooks/use-custom-form';
import { TabExpenseType } from '../../types/TabExpenseType';
import { TabExpenseSchema } from './validationSchema';
import Form from '@/src/ui/components/Form';
import Button from '@/src/ui/components/Button';
import { coerceToNumber } from '@/src/utils/coerce';
import { TabServiceFeeType } from '../../types/TabServiceFeeType';
import { calcServiceFee } from '@/src/utils/calc';
import Typography from '@/src/ui/components/Typography';
import { ListItemProps } from '@/src/ui/components/ListItem';
import List from '@/src/ui/components/List';
import { formatCurrency } from '@/src/utils/format';

interface TabExpenseFormProps {
  tab: TabModel;
  tabExpenses: TabExpenseType[];
  addExpense: Function;
  removeExpense: Function;
  itemServiceFee: TabServiceFeeType | null;
  addServiceFee: Function;
  removeServiceFee: Function;
  getItemExpenseTotal: Function;
}

const TabExpenseForm: FunctionComponent<TabExpenseFormProps> = ({
  tab,
  tabExpenses,
  addExpense,
  removeExpense,
  itemServiceFee,
  addServiceFee,
  removeServiceFee,
  getItemExpenseTotal,
}) => {
  const { control, register, handleSubmit, reset } =
    useCustomForm<TabExpenseType>({
      schema: TabExpenseSchema,
      defaultValues: {
        id: crypto.randomUUID(),
        item: '',
        value: '',
        quantity: 1,
      },
    });

  const addServicePercentage = () => {
    addServiceFee({
      item: '10 por cento',
      percentage: 10,
    });
  };

  const submit = (data: any) => {
    const value = coerceToNumber(data.value);
    addExpense({ ...data, value });
    reset({
      id: crypto.randomUUID(),
      item: '',
      value: '',
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="flex justify-between">
        <Typography as="h3" variant="strong">
          Pagar o quê?
        </Typography>
        {getItemExpenseTotal() > 0 && (
          <Typography as="p" variant="number">
            {formatCurrency(getItemExpenseTotal())}
          </Typography>
        )}
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        <List
          data={tabExpenses}
          transformData={handleExpensesList}
          onRemove={removeExpense}
        />
        {itemServiceFee && (
          <List
            data={[
              {
                id: 'percentage',
                item: itemServiceFee?.item,
                value: formatCurrency(
                  calcServiceFee(tabExpenses, itemServiceFee?.percentage)
                ),
                onRemove: () => removeServiceFee(),
              },
            ]}
          />
        )}
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
        {!itemServiceFee && (
          <div className="mt-2">
            <Button
              label="Adicionar 10%"
              type="button"
              color="basic"
              padding="clear"
              icon={{ src: '/add.svg', position: 'before', size: 24 }}
              onClick={addServicePercentage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabExpenseForm;

function handleExpensesList(expenses: TabExpenseType[]): ListItemProps[] {
  return expenses.map(({ item, quantity, value, id }) => {
    return {
      item: item,
      id: id,
      value: formatCurrency(coerceToNumber(value) * quantity),
      details: `${formatCurrency(value)} x ${quantity}`,
    };
  });
}
