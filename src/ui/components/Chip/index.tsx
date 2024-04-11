import { FunctionComponent, MouseEventHandler } from 'react';
import Typography from '../Typography';
import Button from '../Button';

interface ChipProps {
  label: string;
  onRemove?: MouseEventHandler<HTMLButtonElement>;
}

const Chip: FunctionComponent<ChipProps> = ({ label, onRemove }) => {
  return (
    <div className="flex items-center py-1 px-3 bg-slate-700 rounded-3xl gap-2">
      <Typography as="span" variant="p">
        {label}
      </Typography>
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
