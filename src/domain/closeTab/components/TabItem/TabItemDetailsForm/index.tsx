import useCustomForm from '@/src/infraestructure/hooks/use-custom-form';
import Form from '@/src/ui/components/Form';
import { FunctionComponent } from 'react';
import { TabItemDetailsType } from '../../../types/TabItemType';
import { TabItemSchema } from './validationSchema';
import { coerceToNumber } from '@/src/utils/coerce';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';

interface TabItemDetailsFormProps {}

const TabItemDetailsForm: FunctionComponent<TabItemDetailsFormProps> = () => {
  const defaultValues = {
    id: crypto.randomUUID(),
    item: '',
    value: '',
    quantity: 1,
  };

  const { control, register, handleSubmit, reset } =
    useCustomForm<TabItemDetailsType>({
      schema: TabItemSchema,
      defaultValues,
    });

  const submit = (data: any) => {
    const value = coerceToNumber(data.value);
  };

  return (
    <Form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col bg-slate-800 py-2 px-3 rounded-2xl"
    >
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
      <div className="flex items-center">
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
    </Form>
  );
};

export default TabItemDetailsForm;
