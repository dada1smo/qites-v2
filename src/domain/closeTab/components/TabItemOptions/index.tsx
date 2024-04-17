import Button from '@/src/ui/components/Button';
import Typography from '@/src/ui/components/Typography';
import { FunctionComponent } from 'react';

interface TabItemOptionsProps {
  getItemExpenseTotal?: Function;
  closeSheet: Function;
  handleSave: Function;
  enableSave: () => boolean;
}

const TabItemOptions: FunctionComponent<TabItemOptionsProps> = ({
  getItemExpenseTotal,
  closeSheet,
  handleSave,
  enableSave,
}) => {
  return (
    <div className="absolute bottom-0 left-0 w-full py-4 h-[96px] bg-slate-900 rounded-3xl">
      <div className="w-full flex justify-center">
        <div className="inline-flex items-center text-center gap-2">
          <Button
            label="Voltar"
            type="button"
            color="basic"
            padding="regular"
            onClick={() => closeSheet(false)}
          />
          <Button
            label="Salvar"
            type="button"
            color="main"
            padding="regular"
            onClick={() => handleSave()}
            disabled={!enableSave()}
          />
        </div>
      </div>
    </div>
  );
};

export default TabItemOptions;
