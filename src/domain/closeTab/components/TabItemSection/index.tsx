import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import ButtonCard from '@/src/ui/components/ButtonCard';
import Sheet from '@/src/ui/components/Sheet';
import TabItemForm from '../TabItemForm';
import useSheet from '@/src/ui/hooks/use-sheet';
import List from '@/src/ui/components/List';

interface TabItemSectionProps {
  tab: TabModel;
  addTabItem: Function;
}

const TabItemSection: FunctionComponent<TabItemSectionProps> = ({
  tab,
  addTabItem,
}) => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  const [mode, setMode] = useState<'none' | 'add' | 'split'>('none');

  return (
    <div className="mt-4 flex flex-col gap-4 overflow-y-auto">
      <List
        data={tab.getItemsSummary().map(({ id, payers, value }) => {
          return {
            id: id,
            item: payers,
            value: value,
            onEdit: () => console.log(id),
          };
        })}
      />
      <ButtonCard
        label="Adicionar consumo"
        iconSrc="/add.svg"
        onClick={() => {
          setMode('add');
          openSheet();
        }}
      />
      <ButtonCard
        label="Dividir restante"
        iconSrc="/add.svg"
        onClick={() => console.log('test')}
      />
      <Sheet open={open} willClose={willClose} closeSheet={closeSheet}>
        {mode === 'add' && (
          <TabItemForm
            tab={tab}
            addTabItem={addTabItem}
            closeSheet={closeSheet}
          />
        )}
        {mode === 'split' && (
          <TabItemForm
            tab={tab}
            addTabItem={addTabItem}
            closeSheet={closeSheet}
          />
        )}
      </Sheet>
    </div>
  );
};

export default TabItemSection;
