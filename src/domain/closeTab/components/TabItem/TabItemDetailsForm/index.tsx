import useCustomForm from '@/src/infraestructure/hooks/use-custom-form';
import Form from '@/src/ui/components/Form';
import { FunctionComponent } from 'react';
import { TabItemDetailsType } from '../../../types/TabItemType';
import { TabItemSchema } from './validationSchema';
import { coerceToNumber } from '@/src/utils/coerce';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import ControlledNumberInput from '@/src/ui/components/NumberInput/Controlled';
import { formatFloatLocale } from '@/src/utils/format';

interface TabItemDetailsFormProps {}

const TabItemDetailsForm: FunctionComponent<TabItemDetailsFormProps> = () => {
  const defaultValues = {
    id: crypto.randomUUID(),
    item: '',
    value: '',
    total: '',
    quantity: 1,
  };

  const { control, register, handleSubmit, reset, getValues, setValue } =
    useCustomForm<TabItemDetailsType>({
      schema: TabItemSchema,
      defaultValues,
    });

  const coerceValuesToNumber = (
    initialValue?: string,
    initialQuantity?: string,
    initialTotal?: string
  ) => {
    const formValues = getValues();
    const value = coerceToNumber(initialValue || formValues.value);
    const quantity = coerceToNumber(initialQuantity || formValues.quantity);
    const total = coerceToNumber(initialTotal || formValues.total);

    return { value, quantity, total };
  };

  const handleQuantity = (inputValue: string) => {
    const { value, quantity, total } = coerceValuesToNumber(
      undefined,
      inputValue,
      undefined
    );

    if (value === 0 && total === 0) {
      return;
    }

    if (value > 0) {
      console.log(formatResult(value * quantity));
      return setValue('total', formatResult(value * quantity));
    }

    if (total > 0) {
      return setValue('value', formatResult(total / quantity));
    }
  };

  const handleValue = (inputValue: string) => {
    const { value, quantity, total } = coerceValuesToNumber(
      inputValue,
      undefined,
      undefined
    );

    return setValue('total', formatResult(value * quantity));
  };

  const handleTotal = (inputValue: string) => {
    const { value, quantity, total } = coerceValuesToNumber(
      undefined,
      undefined,
      inputValue
    );

    return setValue('value', formatResult(total / quantity));
  };

  const submit = (data: any) => {
    const value = coerceToNumber(data.value);
  };

  return (
    <Form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
      <div className="flex flex-col bg-slate-800 py-2 px-3 rounded-2xl">
        <ControlledPillInput
          control={control}
          name="item"
          placeholder="Nome do item"
          type="text"
          fieldProps={{
            color: 'transparent',
            padding: 'clear',
            size: 'full',
          }}
        />
        <input id="id" type="text" hidden readOnly {...register('id')} />
        <ControlledNumberInput
          control={control}
          name="quantity"
          fieldProps={{ color: 'transparent', padding: 'clear' }}
          onInputChange={handleQuantity}
        />
      </div>
      <div className="flex flex-col bg-slate-800 py-2 px-3 rounded-2xl">
        <ControlledPillInput
          control={control}
          name="value"
          preffix="R$"
          label="Valor unid."
          placeholder="0,00"
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          fieldProps={{ color: 'transparent', padding: 'clear' }}
          onInputChange={handleValue}
        />
      </div>
      <div className="flex flex-col bg-slate-800 py-2 px-3 rounded-2xl">
        <ControlledPillInput
          control={control}
          name="total"
          preffix="R$"
          label="Total"
          placeholder="0,00"
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          fieldProps={{ color: 'transparent', padding: 'clear' }}
          onInputChange={handleTotal}
        />
      </div>
    </Form>
  );
};

export default TabItemDetailsForm;

function formatResult(result: number) {
  return result.toFixed(2).toString();
}
