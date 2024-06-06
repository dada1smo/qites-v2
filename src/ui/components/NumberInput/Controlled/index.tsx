import { FunctionComponent, HTMLInputTypeAttribute } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import NumberInput from '../Base';
import { VariantProps } from 'class-variance-authority';
import { fieldVariants } from '../../PillInput/Base';

interface ControlledNumberInputProps {
  name: string;
  control: Control<FieldValues, any>;
  placeholder?: string;
  onInputChange?: Function;
  onInputBlur?: Function;
  fieldProps?: VariantProps<typeof fieldVariants>;
}

const ControlledNumberInput: FunctionComponent<ControlledNumberInputProps> = ({
  name,
  control,
  placeholder,
  onInputChange,
  onInputBlur,
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
        <NumberInput
          name={name}
          onBlur={() => {
            if (onInputBlur) {
              onInputBlur();
            }
            onBlur();
          }}
          onChange={(e: any) => {
            const targetValue = e.target.value;

            if (onInputChange) {
              onInputChange(targetValue);
            }

            onChange(targetValue);
          }}
          value={value}
          inputRef={ref}
          error={error}
          placeholder={placeholder}
          fieldProps={fieldProps}
        />
      )}
    />
  );
};

export default ControlledNumberInput;
