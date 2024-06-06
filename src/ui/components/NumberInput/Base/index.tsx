import {
  ChangeEventHandler,
  FocusEventHandler,
  FunctionComponent,
  useState,
} from 'react';
import PillInput, { fieldVariants } from '../../PillInput/Base';
import { VariantProps } from 'class-variance-authority';
import { coerceToNumber } from '@/src/utils/coerce';
import Button from '../../Button';

interface NumberInputProps {
  value: string;
  onChange: Function;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name: string;
  inputRef?: any;
  label?: string;
  placeholder?: string;
  error?: any;
  fieldProps?: VariantProps<typeof fieldVariants>;
}

const NumberInput: FunctionComponent<NumberInputProps> = ({
  value,
  onChange,
  fieldProps,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const updateOnChange = (e: any) => {
    const targetValue = e.target.value.replace(/\D+/g, '');
    const numberValue = coerceToNumber(targetValue);

    if (numberValue >= 1 && numberValue <= 999) {
      setInputValue(targetValue);
      onChange(e);
    }
  };

  const updateNumber = (step: number) => {
    const numberValue = coerceToNumber(inputValue);
    const eq = numberValue + step;
    const toString = eq.toString();

    if (eq >= 1 && eq <= 999) {
      setInputValue(toString);
      onChange({ target: { value: toString } });
    }
  };

  return (
    <div className="inline-flex justify-start">
      <PillInput
        value={inputValue}
        inputMode="numeric"
        type="text"
        pattern="[0-9]*"
        onChange={updateOnChange}
        inputSize={3}
        fieldProps={{ ...fieldProps, textAlign: 'center' }}
        buttonBefore={
          <Button
            label="Diminuir"
            type="button"
            color="basic"
            shape="circle"
            padding="clear"
            icon={{ src: '/minus.svg', position: 'center', size: 24 }}
            onClick={() => updateNumber(-1)}
          />
        }
        buttonAfter={
          <Button
            label="Aumentar"
            type="button"
            color="basic"
            shape="circle"
            padding="clear"
            icon={{ src: '/add.svg', position: 'center', size: 24 }}
            onClick={() => updateNumber(1)}
          />
        }
        {...props}
      />
    </div>
  );
};

export default NumberInput;
