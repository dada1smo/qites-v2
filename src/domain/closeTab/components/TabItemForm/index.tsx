import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import Typography from '@/src/ui/components/Typography';
import TabPayerForm from '../TabPayerForm';
import { TabPayerType } from '../../types/TabPayerType';
import useTabPayer from '../../hooks/use-tab-payer';

interface TabItemFormProps {
  tab: TabModel;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({ tab }) => {
  const { tabPayers, addPayer, removePayer } = useTabPayer();

  return (
    <div className="flex flex-col gap-4">
      <Typography as="h3" variant="strong">
        Quem vai pagar?
      </Typography>
      <TabPayerForm
        tab={tab}
        tabPayers={tabPayers}
        addPayer={addPayer}
        removePayer={removePayer}
      />
    </div>
  );
};

export default TabItemForm;
