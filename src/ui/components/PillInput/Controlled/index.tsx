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
  preffix?: string;
  label?: string;
  fieldProps?: VariantProps<typeof fieldVariants>;
}

const ControlledPillInput: FunctionComponent<ControlledPillInputProps> = ({
  name,
  control,
  placeholder,
  type,
  onInputChange,
  preffix,
  label,
  fieldProps,
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
          onBlur={onBlur}
          onChange={(e) => {
            const targetValue = handleNumberInput(e, type);
            if (onInputChange) {
              onInputChange(targetValue);
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
          fieldProps={fieldProps}
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
