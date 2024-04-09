import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import ButtonCard from '@/src/ui/components/ButtonCard';

interface AddTabItemProps {
  tab: TabModel;
}

const AddTabItem: FunctionComponent<AddTabItemProps> = ({ tab }) => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <ButtonCard
        label="Adicionar consumo"
        iconSrc="/add.svg"
        onClick={() => console.log('test')}
      />
      <ButtonCard
        label="Dividir restante"
        iconSrc="/add.svg"
        onClick={() => console.log('test')}
      />
    </div>
  );
};

export default AddTabItem;
