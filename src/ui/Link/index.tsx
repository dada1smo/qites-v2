import { FunctionComponent, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  className?: string;
  children: ReactNode;
}

const Link: FunctionComponent<LinkProps> = (props) => {
  return <NextLink {...props}>{props.children}</NextLink>;
};

export default Link;
