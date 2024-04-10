import useCustomForm from '@/src/application/hooks/use-custom-form';
import { FunctionComponent } from 'react';
import { TabTotalSchema } from './validationSchema';
import { TabTotalType } from '../../types/TabTotalType';
import Form from '@/src/ui/components/Form';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import TabModel from '../../models/TabModel';
import { FieldValues } from 'react-hook-form';

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

  const submit = (data: FieldValues) => {
    console.log(data);
    setTabTotal(data.tabTotal);
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
        type="number"
        preffix="R$"
        step="0.01"
      />
    </Form>
  );
};

export default TabTotalForm;
