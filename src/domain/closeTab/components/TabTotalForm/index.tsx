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
  const { control, handleSubmit } = useCustomForm<TabTotalType>({
    schema: TabTotalSchema,
  });

  const submit = (data: FieldValues) => {
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
        placeholder="000,00"
        control={control}
        type="number"
        preffix="R$"
      />
    </Form>
  );
};

export default TabTotalForm;
