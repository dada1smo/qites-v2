import {
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
  HTMLInputTypeAttribute,
} from 'react';
import Typography from '../../Typography';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/src/utils/cn';

export const fieldVariants = cva(
  'rounded-3xl py-1 pl-3 pr-2 flex gap-2 w-full justify-between items-center',
  {
    variants: {
      color: {
        primary: 'bg-slate-900',
        secondary: 'bg-teal-900',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export interface PillInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name: string;
  inputRef?: any;
  label?: string;
  placeholder?: string;
  error?: any;
  type?: HTMLInputTypeAttribute;
  preffix?: string;
  fieldProps?: VariantProps<typeof fieldVariants>;
  step?: string;
}

const PillInput: FunctionComponent<PillInputProps> = ({
  value,
  onChange,
  onBlur,
  name,
  inputRef,
  label,
  placeholder,
  error,
  type,
  preffix,
  fieldProps,
  step,
}) => {
  return (
    <div className={cn(fieldVariants({ ...fieldProps }))}>
      {label && (
        <Typography as="p" variant="strong">
          {label}
        </Typography>
      )}
      <div className="flex gap-2">
        {preffix && (
          <Typography as="span" variant="number">
            {preffix}
          </Typography>
        )}
        <input
          name={name}
          id={name}
          value={value}
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          className="w-20 bg-transparent text-xl leading-6 font-mono font-bold text-teal-600 placeholder:text-teal-800"
          step={step}
        />
      </div>
    </div>
  );
};

export default PillInput;
