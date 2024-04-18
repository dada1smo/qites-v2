import { FunctionComponent } from 'react';
import { TabItemFormType } from '../../types/TabItemFormTypes';
import Button from '@/src/ui/components/Button';

interface TabItemRemoveProps {
  mode: TabItemFormType;
  handleRemoveTabItem: Function;
  handleRemoveTabSplit: Function;
  selectedId: string;
  canRemoveSplit: boolean;
}

const TabItemRemove: FunctionComponent<TabItemRemoveProps> = ({
  mode,
  handleRemoveTabItem,
  handleRemoveTabSplit,
  selectedId,
  canRemoveSplit,
}) => {
  if (mode === 'edit') {
    return (
      <Button
        label="Remover"
        type="button"
        color="basic"
        shape="circle"
        padding="clear"
        icon={{ src: '/trash.svg', position: 'center', size: 24 }}
        onClick={() => handleRemoveTabItem(selectedId)}
      />
    );
  }

  if (mode === 'split' && canRemoveSplit) {
    return (
      <Button
        label="Remover"
        type="button"
        color="basic"
        shape="circle"
        padding="clear"
        icon={{ src: '/trash.svg', position: 'center', size: 24 }}
        onClick={() => handleRemoveTabSplit()}
      />
    );
  }

  return undefined;
};

export default TabItemRemove;
