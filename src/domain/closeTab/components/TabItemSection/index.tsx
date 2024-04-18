import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import ButtonCard from '@/src/ui/components/ButtonCard';
import Sheet from '@/src/ui/components/Sheet';
import TabItemForm from '../TabItemForm';
import useSheet from '@/src/ui/hooks/use-sheet';
import List from '@/src/ui/components/List';
import { TabItemFormType } from '../../types/TabItemFormTypes';
import Button from '@/src/ui/components/Button';
import TabItemRemove from '../TabItemRemove';

interface TabItemSectionProps {
  tab: TabModel;
  addTabItem: Function;
  removeTabItem: Function;
  splitTabRemainder: Function;
  removeTabSplit: Function;
}

const TabItemSection: FunctionComponent<TabItemSectionProps> = ({
  tab,
  addTabItem,
  removeTabItem,
  splitTabRemainder,
  removeTabSplit,
}) => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  const [mode, setMode] = useState<TabItemFormType>('none');
  const [selectedId, setSelectedId] = useState<string>('');

  const handleEditItem = (id: string) => {
    setSelectedId(id);
    setMode('edit');
    openSheet();
  };

  const handleRemoveTabItem = (id: string) => {
    removeTabItem(id);
    closeSheet(false);
  };

  const handleEditSplit = () => {
    setMode('split');
    openSheet();
  };

  const handleRemoveTabSplit = () => {
    removeTabSplit();
    closeSheet(false);
  };

  return (
    <div className="mt-4 flex flex-col gap-4 overflow-y-auto h-full pb-4">
      <div>
        <List
          data={tab.getItemsSummary().map(({ id, payers, value }) => {
            return {
              id: id,
              item: payers,
              value: value,
              onEdit: () => handleEditItem(id),
            };
          })}
        />
        {tab.getSplit().length > 0 && (
          <List
            data={[
              {
                id: 'remainder',
                item: tab.getSplitSummary().payers,
                value: tab.getSplitSummary().remainder,
                onEdit: () => handleEditSplit(),
              },
            ]}
          />
        )}
      </div>
      <ButtonCard
        label="Adicionar consumo"
        iconSrc="/add.svg"
        onClick={() => {
          setMode('add');
          openSheet();
        }}
      />
      {tab.getSplit().length === 0 && (
        <ButtonCard
          label="Pagar restante"
          iconSrc="/add.svg"
          onClick={() => {
            setMode('split');
            openSheet();
          }}
        />
      )}
      <Sheet
        open={open}
        willClose={willClose}
        closeSheet={closeSheet}
        headerOptions={
          <TabItemRemove
            mode={mode}
            selectedId={selectedId}
            handleRemoveTabItem={handleRemoveTabItem}
            handleRemoveTabSplit={handleRemoveTabSplit}
            canRemoveSplit={tab.getSplit().length > 0}
          />
        }
      >
        <TabItemForm
          tab={tab}
          addTabItem={addTabItem}
          closeSheet={closeSheet}
          selectedId={selectedId}
          splitTabRemainder={splitTabRemainder}
          mode={mode}
        />
      </Sheet>
    </div>
  );
};

export default TabItemSection;
