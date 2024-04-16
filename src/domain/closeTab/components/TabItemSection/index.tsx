import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import ButtonCard from '@/src/ui/components/ButtonCard';
import Sheet from '@/src/ui/components/Sheet';
import TabItemForm from '../TabItemForm';
import useSheet from '@/src/ui/hooks/use-sheet';

interface TabItemSectionProps {
  tab: TabModel;
}

const TabItemSection: FunctionComponent<TabItemSectionProps> = ({ tab }) => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  const [mode, setMode] = useState<'none' | 'add' | 'split'>('none');

  return (
    <div className="mt-6 flex flex-col gap-4 overflow-y-auto">
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
        {mode === 'add' && <TabItemForm tab={tab} closeSheet={closeSheet} />}
        {mode === 'split' && <TabItemForm tab={tab} closeSheet={closeSheet} />}
      </Sheet>
    </div>
  );
};

export default TabItemSection;
