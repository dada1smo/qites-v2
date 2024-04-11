import { ChangeEvent, FunctionComponent, HTMLInputTypeAttribute } from 'react';
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form';
import PillInput, { PillInputProps, fieldVariants } from '../Base';
import { VariantProps } from 'class-variance-authority';

interface ControlledPillInputProps {
  name: string;
  control: Control<FieldValues, any>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onInputChange?: Function;
  onInputBlur?: Function;
  coerceNumber?: boolean;
  preffix?: string;
  label?: string;
  step?: string;
  fieldProps?: VariantProps<typeof fieldVariants>;
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

const ControlledPillInput: FunctionComponent<ControlledPillInputProps> = ({
  name,
  control,
  placeholder,
  type,
  onInputChange,
  onInputBlur,
  preffix,
  label,
  step,
  fieldProps,
  inputMode,
  pattern,
  coerceNumber,
  autoFocus,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <PillInput
          name={name}
          onBlur={() => {
            if (onInputBlur) {
              onInputBlur();
            }
            onBlur();
          }}
          onChange={(e) => {
            const targetValue = handleNumberInput(e, type);

            if (onInputChange) {
              onInputChange(targetValue);
            }

            if (coerceNumber) {
              const changedValue = handleCommaLocaleFloat(e);
              return onChange(changedValue);
            }

            onChange(targetValue);
          }}
          value={value}
          inputRef={ref}
          error={error}
          placeholder={placeholder}
          type={type}
          preffix={preffix}
          label={label}
          step={step}
          fieldProps={fieldProps}
          inputMode={inputMode}
          pattern={pattern}
          autoFocus={autoFocus}
        />
      )}
    />
  );
};

export default ControlledPillInput;

function handleNumberInput(
  e: ChangeEvent<HTMLInputElement>,
  type?: HTMLInputTypeAttribute
) {
  if (!type) {
    return e.target.value;
  }

  if (type === 'number') {
    return parseFloat(e.target.value);
  }

  return e.target.value;
}

const handleCommaLocaleFloat = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  const split = value.split(',');
  const join = split.join('.');
  return join;
};
