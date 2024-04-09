import { cn } from '@/src/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { FunctionComponent, ReactNode } from 'react';

const typographyVariants = cva('font-sans', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold text-teal-200',
      h2: 'text-2xl font-bold lg:text-3xl',
      h3: 'text-2xl font-medium lg:text-3xl',
      h4: 'text-xl font-medium lg:text-lg',
      subtitle: 'text-2xl leading-7',
      strong: 'text-lg leading-6 font-medium text-slate-100',
      p: 'text-lg leading-6 text-slate-300',
      link: 'text-base underline',
      number: 'text-xl leading-6 font-mono font-bold text-teal-600',
    },
    align: {
      center: 'text-center',
      right: 'text-right',
      left: 'text-left',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li' | 'label';
  children: ReactNode;
  className?: string;
  id?: string;
  htmlFor?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
  as: Tag = 'p',
  variant,
  align,
  children,
  className,
  id,
  htmlFor,
}) => {
  return (
    <Tag
      id={id}
      htmlFor={htmlFor}
      className={cn(typographyVariants({ variant, align, className }))}
    >
      {children}
    </Tag>
  );
};

export default Typography;
