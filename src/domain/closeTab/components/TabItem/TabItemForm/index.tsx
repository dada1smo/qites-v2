import { FunctionComponent } from 'react';
import TabModel from '../../../models/TabModel';
import { TabItemFormType } from '../../../types/TabItemFormTypes';
import TabItemDetailsForm from '../TabItemDetailsForm';

interface TabItemFormProps {
  tab: TabModel;
  addTabItem: Function;
  closeSheet: Function;
  selectedId?: string;
  mode: TabItemFormType;
  splitTabRemainder: Function;
}

const TabItemForm: FunctionComponent<TabItemFormProps> = ({
  tab,
  addTabItem,
  closeSheet,
  selectedId,
  mode,
  splitTabRemainder,
}) => {
  return (
    <div className="flex flex-col gap-6 relative pb-[160px] max-h-full h-full overflow-hidden">
      <TabItemDetailsForm />
    </div>
  );
};

export default TabItemForm;
