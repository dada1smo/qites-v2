import { FormEventHandler, FunctionComponent, ReactNode } from 'react';

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className: string;
}

const Form: FunctionComponent<FormProps> = ({
  onSubmit,
  children,
  className,
}) => {
  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      {children}
    </form>
  );
};

export default Form;
