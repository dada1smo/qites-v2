import { FunctionComponent, MouseEventHandler } from 'react';
import Image from '../Image';
import Typography from '../Typography';

interface ButtonCardProps {
  label: string;
  value?: string;
  iconSrc?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonCard: FunctionComponent<ButtonCardProps> = ({
  label,
  value,
  iconSrc,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-900 w-full flex gap-3 rounded-3xl px-4 py-2"
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          style={{ width: 'auto', height: 'auto' }}
        />
      )}
      <Typography as="span" variant="small" className="font-medium">
        {label}
      </Typography>
      {value && (
        <Typography as="span" variant="small" className="font-bold font-mono">
          {value}
        </Typography>
      )}
    </button>
  );
};

export default ButtonCard;
