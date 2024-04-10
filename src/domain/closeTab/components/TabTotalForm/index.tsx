import useCustomForm from '@/src/application/hooks/use-custom-form';
import { ChangeEvent, FunctionComponent, useEffect } from 'react';
import { TabTotalSchema } from './validationSchema';
import { TabTotalType } from '../../types/TabTotalType';
import Form from '@/src/ui/components/Form';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import TabModel from '../../models/TabModel';
import useDetectMobileKeyboard from '@/src/ui/hooks/use-detect-mobile-keyboard';
import { coerceToNumber } from '@/src/utils/coerce';

interface TabTotalFormProps {
  tab: TabModel;
  setTabTotal: (total: number) => void;
}

const TabTotalForm: FunctionComponent<TabTotalFormProps> = ({
  tab,
  setTabTotal,
}) => {
  const defaultTotal = tab.getTotal() === 0 ? undefined : tab.getTotal();

  const { control, handleSubmit } = useCustomForm<TabTotalType>({
    schema: TabTotalSchema,
    defaultValues: {
      tabTotal: defaultTotal,
    },
  });

  const submit = (data: any) => {
    const { tabTotal } = data;
    const value = coerceToNumber(tabTotal);
    setTabTotal(value);
  };

  return (
    <Form
      onSubmit={handleSubmit(submit)}
      className="flex items-center justify-between w-full"
    >
      <ControlledPillInput
        name="tabTotal"
        label="Total a pagar"
        placeholder="0,00"
        control={control}
        preffix="R$"
        type="text"
        inputMode="decimal"
        pattern="[0-9]*"
        onInputBlur={handleSubmit(submit)}
      />
    </Form>
  );
};

export default TabTotalForm;
