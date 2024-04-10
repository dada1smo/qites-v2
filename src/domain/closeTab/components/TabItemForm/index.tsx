import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import Typography from '@/src/ui/components/Typography';
import TabPayerForm from '../TabPayerForm';

interface TabItemFormProps {
  tab: TabModel;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({ tab }) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography as="h3" variant="strong">
        Quem vai pagar?
      </Typography>
      <TabPayerForm tab={tab} />
    </div>
  );
};

export default TabItemForm;
