import { FunctionComponent } from 'react';
import Link from '../Link';
import Image from '../Image';
import Typography from '../Typography';

interface LinkCardProps {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

const LinkCard: FunctionComponent<LinkCardProps> = ({
  title,
  description,
  iconSrc,
  href,
}) => {
  return (
    <Link
      href={href}
      className="bg-slate-900 w-full flex gap-3 rounded-3xl px-6 py-4"
    >
      <Image src={iconSrc} alt="" width={24} height={24} />
      <div className="flex flex-col gap-1">
        <Typography as="h3" variant="strong" className="text-slate-100">
          {title}
        </Typography>
        <Typography as="p" variant="p" className="text-slate-400">
          {description}
        </Typography>
      </div>
    </Link>
  );
};

export default LinkCard;
