'use client';

import { FunctionComponent } from 'react';
import Menu from '../Menu';
import useSheet from '../../hooks/use-sheet';
import Button from '../Button';

const Nav: FunctionComponent = () => {
  const { open, willClose, openSheet, closeSheet } = useSheet();

  return (
    <>
      <div className="top-0 fixed h-16 w-full px-6 py-2 flex items-center">
        <Button
          label="Menu"
          type="button"
          color="basic"
          padding="clear"
          shape="circle"
          icon={{ src: '/menu.svg', position: 'center', size: 24 }}
          onClick={() => openSheet()}
        />
      </div>
      <Menu open={open} willClose={willClose} closeSheet={closeSheet}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-end gap-1">
            <Button
              label="Início"
              type="button"
              color="basic"
              padding="clear"
              size="lg"
              decoration="underline"
              link={{
                href: '/',
                onLinkClick: () => closeSheet(false),
              }}
            />
            <Button
              label="Como funciona"
              type="button"
              color="basic"
              padding="clear"
              size="lg"
              decoration="underline"
              link={{
                href: '/conta',
                onLinkClick: () => closeSheet(false),
              }}
            />
            <Button
              label="Fechar conta"
              type="button"
              color="basic"
              padding="clear"
              size="lg"
              decoration="underline"
              link={{
                href: '/conta',
                onLinkClick: () => closeSheet(false),
              }}
            />
          </div>
          <div className="h-32"></div>
        </div>
      </Menu>
    </>
  );
};

export default Nav;
