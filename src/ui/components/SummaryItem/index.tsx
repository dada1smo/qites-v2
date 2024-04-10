import { FunctionComponent } from 'react';
import Typography from '../Typography';

interface SummaryItemProps {
  label: string;
  value: string;
}

const SummaryItem: FunctionComponent<SummaryItemProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Typography as="h4" variant="strong">
        {label}
      </Typography>
      <Typography as="p" variant="number">
        {value}
      </Typography>
    </div>
  );
};

export default SummaryItem;
