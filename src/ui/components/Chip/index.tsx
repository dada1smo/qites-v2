import { FunctionComponent, MouseEventHandler } from 'react';
import Typography from '../Typography';
import Button from '../Button';

interface ChipProps {
  label: string;
  value?: string;
  onRemove?: MouseEventHandler<HTMLButtonElement>;
}

const Chip: FunctionComponent<ChipProps> = ({ label, value, onRemove }) => {
  return (
    <div className="flex items-center py-1 px-3 bg-slate-700 rounded-3xl gap-2 justify-between">
      <div className="flex flex-col justify-between w-full overflow-hidden">
        <Typography as="span" variant="p" className="truncate overflow-hidden">
          {label}
        </Typography>
        {value && (
          <Typography as="span" variant="number" className="text-slate-300">
            {value}
          </Typography>
        )}
      </div>
      <Button
        label="Remover"
        type="button"
        color="basic"
        shape="circle"
        padding="clear"
        icon={{ src: '/close.svg', position: 'center', size: 24 }}
        onClick={onRemove}
      />
    </div>
  );
};

export default Chip;
