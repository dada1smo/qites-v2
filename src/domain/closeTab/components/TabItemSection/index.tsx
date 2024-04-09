import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import ButtonCard from '@/src/ui/components/ButtonCard';
import Sheet from '@/src/ui/components/Sheet';

interface TabItemSectionProps {
  tab: TabModel;
}

const TabItemSection: FunctionComponent<TabItemSectionProps> = ({ tab }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="mt-6 flex flex-col gap-4">
      <ButtonCard
        label="Adicionar consumo"
        iconSrc="/add.svg"
        onClick={() => setOpen(true)}
      />
      <ButtonCard
        label="Dividir restante"
        iconSrc="/add.svg"
        onClick={() => console.log('test')}
      />
      <Sheet open={open} onOpenChange={setOpen}>
        Hello
      </Sheet>
    </div>
  );
};

export default TabItemSection;
