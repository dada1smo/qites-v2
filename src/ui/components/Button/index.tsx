import NextLink from 'next/link';
import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent, MouseEventHandler } from 'react';
import Image from '../Image';
import { cn } from '@/src/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium font-sans',
  {
    variants: {
      color: {
        basic: `transparent text-teal-500`,
        main: `bg-teal-600 hover:bg-teal-700 text-slate-100`,
        alt: 'bg-slate-600 hover:bg-slate-700 text-slate-100',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base min-h-[24px] min-w-[24px]',
        lg: 'text-lg',
      },
      padding: {
        clear: 'p-0',
        compact: 'py-1 px-4',
        regular: 'py-3 px-6',
      },
      shape: {
        rounded: 'rounded-3xl',
        circle: 'rounde-full',
      },
    },
    defaultVariants: {
      color: 'basic',
      size: 'md',
      padding: 'regular',
      shape: 'rounded',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  type: 'button' | 'submit';
  link?: {
    href: string;
  };
  icon?: {
    src: string;
    position: 'before' | 'after' | 'center';
    size: number;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  type,
  link,
  icon,
  onClick,
  color,
  size,
  padding,
  shape,
}) => {
  const buttonClasses = cn(buttonVariants({ color, size, padding, shape }));

  const iconComponent = (position: string) => {
    let classes;

    switch (position) {
      case 'before':
        classes = 'mr-2';
        break;
      case 'after':
        classes = 'ml-2';
        break;
    }

    if (icon) {
      return (
        <Image
          src={icon.src}
          alt=""
          width={icon.size}
          height={icon.size}
          className={classes}
        />
      );
    }

    return null;
  };

  return link ? (
    <NextLink href={link.href} className={buttonClasses}>
      {icon && icon.position === 'before' && iconComponent(icon.position)}
      {icon && icon.position === 'center'
        ? iconComponent(icon.position)
        : label}
      {icon && icon.position === 'after' && iconComponent(icon.position)}
    </NextLink>
  ) : (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {icon && icon.position === 'before' && iconComponent(icon.position)}
      {icon && icon.position === 'center'
        ? iconComponent(icon.position)
        : label}
      {icon && icon.position === 'after' && iconComponent(icon.position)}
    </button>
  );
};

export default Button;
