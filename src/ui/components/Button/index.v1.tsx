import NextLink from 'next/link';
import { FunctionComponent, MouseEventHandler } from 'react';
import Image from '../Image';

type ButtonVariant =
  | 'basic'
  | 'main'
  | 'alt'
  | 'main_reversed'
  | 'alt_reversed'
  | 'success'
  | 'danger'
  | 'caution';

type VariantCollection = {
  [key in ButtonVariant]: string;
};

const buttonVariants: VariantCollection = {
  basic: `transparent text-teal-500`,
  main: `bg-teal-600 hover:bg-teal-700 text-white`,
  alt: `bg-alt-600 hover:bg-alt-700 text-white border-2 border-alt-600 hover:border-alt-700`,
  main_reversed: `bg-transparent hover:text-main-500 text-main-800 border-2 border-main-900 hover:border-main-500`,
  alt_reversed: `bg-transparent hover:text-alt-700 text-alt-600 border-2 border-alt-600 hover:border-alt-700`,
  success: '',
  danger: '',
  caution: '',
};

type ButtonSize = 'sm' | 'md' | 'lg';

type SizeCollection = {
  [key in ButtonSize]: string;
};

type ButtonShape = 'regular' | 'circle' | 'circle_sm' | 'compact';

type ShapeCollection = {
  [key in ButtonShape]: string;
};

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  link?: {
    href: string;
  };
  icon?: {
    src: string;
    position: 'before' | 'after' | 'center';
    size: number;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit';
}

export const ButtonTransition = 'transition duration-300';
export const ButtonBase = `font-sans inline-flex items-center justify-center ${ButtonTransition}`;

const buttonSizes: SizeCollection = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-3 px-6 text-lg',
};

const buttonShapes: ShapeCollection = {
  regular: 'rounded-full',
  circle_sm: 'rounded-full !p-1 h-6 w-6',
  circle: 'rounded-full !p-2 h-12 w-12',
  compact: '!px-2 !py-1 !border-0 !background-transparent',
};

const Button: FunctionComponent<ButtonProps> = ({
  label,
  link,
  variant = 'basic',
  size = 'md',
  shape = 'regular',
  icon,
  onClick,
  type,
}) => {
  const buttonClasses = `${ButtonBase} ${
    buttonVariants[variant as keyof VariantCollection]
  } ${buttonSizes[size as keyof SizeCollection]} ${
    buttonShapes[shape as keyof ShapeCollection]
  }`;

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
