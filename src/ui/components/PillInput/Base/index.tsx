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
  'rounded-3xl flex gap-2 w-full justify-between items-center',
  {
    variants: {
      color: {
        main: 'bg-slate-900 *:text-teal-600',
        alt: 'bg-teal-900 *:text-teal-400',
        transparent: 'bg-transparent *:text-teal-400',
      },
      padding: {
        clear: 'py-1 px-0',
        regular: 'py-1 pl-3 pr-3',
      },
      size: {
        grow: '',
        full: '[&>div>input]:!w-full [&>div>input]:!max-w-full',
      },
    },
    defaultVariants: {
      color: 'main',
      padding: 'regular',
      size: 'grow',
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
  inputMode?:
    | 'email'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal';
  pattern?: string;
  autoFocus?: boolean;
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
  inputMode,
  pattern,
  autoFocus,
}) => {
  const valueSize = value ? value.length : 4;

  return (
    <div className={cn(fieldVariants({ ...fieldProps }))}>
      {label && (
        <Typography as="label" variant="strong">
          {label}
        </Typography>
      )}
      <div className="flex gap-2 items-center">
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
          className={
            'min-w-[1ch] max-w-28 max-h-[24px] bg-transparent text-xl leading-6 font-mono font-bold placeholder-inherit placeholder:opacity-70'
          }
          step={step}
          inputMode={inputMode}
          pattern={pattern}
          style={{ width: `${valueSize}ch` }}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
};

export default PillInput;
