import React from 'react';
import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

type Props = {
  href: string;
  children: string;
};
export default function Link({ children, href }: Props) {
  return (
    <NextLink passHref legacyBehavior href={href}>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
}
