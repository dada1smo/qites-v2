import { FunctionComponent } from 'react';
import Button from '../Button';
import Typography from '../Typography';

export interface ListItemProps {
  id: string;
  item: string;
  value: string;
  details?: string;
  onRemove?: Function;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  id,
  item,
  value,
  details,
  onRemove,
}) => {
  return (
    <li className="flex justify-between border-dotted border-b-2 border-b-teal-900 py-1 gap-3">
      <div className="grow flex items-center gap-2">
        <div className="flex flex-col justify-between grow">
          <Typography as="span" variant="small">
            {item}
          </Typography>
          <Typography
            as="span"
            variant="extraSmall"
            className="text-slate-400 font-bold font-mono"
          >
            {details}
          </Typography>
        </div>
        <Typography
          as="span"
          variant="small"
          className="font-mono font-bold text-right whitespace-nowrap"
        >
          {value}
        </Typography>
      </div>
      {onRemove && (
        <Button
          label="Remover"
          type="button"
          color="basic"
          shape="circle"
          padding="clear"
          icon={{ src: '/close.svg', position: 'center', size: 24 }}
          onClick={() => onRemove(id)}
        />
      )}
    </li>
  );
};

export default ListItem;
