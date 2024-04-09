import { FunctionComponent, MouseEventHandler } from 'react';
import Image from '../Image';
import Typography from '../Typography';

interface ButtonCardProps {
  label: string;
  iconSrc: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonCard: FunctionComponent<ButtonCardProps> = ({
  label,
  iconSrc,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-800 w-full flex gap-3 rounded-3xl px-4 py-3"
    >
      <Image
        src={iconSrc}
        alt=""
        width={24}
        height={24}
        style={{ width: 'auto', height: 'auto' }}
      />
      <Typography as="span" variant="p">
        {label}
      </Typography>
    </button>
  );
};

export default ButtonCard;
