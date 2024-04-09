import useCustomForm from '@/src/application/hooks/use-custom-form';
import { FunctionComponent } from 'react';
import { TabTotalSchema } from './validationSchema';
import { TabTotalType } from '../../types/TabTotalType';
import Typography from '@/src/ui/components/Typography';
import Form from '@/src/ui/components/Form';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';

interface TabTotalFormProps {
  // fix
  tabModel?: any;
}

const TabTotalForm: FunctionComponent<TabTotalFormProps> = ({ tabModel }) => {
  const { control, handleSubmit } = useCustomForm<TabTotalType>({
    schema: TabTotalSchema,
  });

  return (
    <Form
      onSubmit={handleSubmit(() => console.log('test'))}
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
