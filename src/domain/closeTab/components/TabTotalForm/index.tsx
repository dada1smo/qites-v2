import useCustomForm from '@/src/application/hooks/use-custom-form';
import { FunctionComponent } from 'react';
import { TabTotalSchema } from './validationSchema';
import { TabTotalType } from '../../types/TabTotalType';
import Typography from '@/src/ui/Typography';

interface TabTotalFormProps {
  // fix
  tabModel?: any;
}

const TabTotalForm: FunctionComponent<TabTotalFormProps> = ({ tabModel }) => {
  const { control, handleSubmit, errors } = useCustomForm<TabTotalType>({
    schema: TabTotalSchema,
  });

  return (
    <div>
      <Typography as="p" variant="strong">
        Total a pagar
      </Typography>
    </div>
  );
};

export default TabTotalForm;
