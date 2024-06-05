import * as Dialog from '@radix-ui/react-dialog';
import { FunctionComponent, ReactNode, useState } from 'react';
import './styles.css';
import Button from '../Button/index';

interface SheetProps {
  open: boolean;
  willClose: boolean;
  closeSheet: (open: boolean) => void;
  headerOptions?: ReactNode;
  children: ReactNode;
}

const Sheet: FunctionComponent<SheetProps> = ({
  open,
  willClose,
  closeSheet,
  headerOptions,
  children,
}) => {
  return (
    <Dialog.Root defaultOpen={false} open={open} onOpenChange={closeSheet}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed top-0 left-0 h-[100dvh] w-screen bg-slate-900 ${
            willClose && 'overlay-hide'
          } ${open ? 'opacity-30 overlay-show' : 'opacity-0'}`}
        />
        <Dialog.Content
          className={`fixed left-0 bg-slate-900 w-full h-[98dvh] rounded-t-2xl px-6 py-4 ${
            willClose && 'bottom-sheet-hide'
          } ${open ? 'bottom-0 bottom-sheet-show' : 'bottom-[-98dvh]'}`}
        >
          <div className="mb-3 flex items-center">
            <Dialog.Close asChild>
              <Button
                label="Fechar"
                type="button"
                color="basic"
                shape="circle"
                padding="clear"
                icon={{ src: '/arrow-back.svg', position: 'center', size: 24 }}
              />
            </Dialog.Close>
            {headerOptions && (
              <div className="grow flex items-center justify-end gap-2">
                {headerOptions}
              </div>
            )}
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sheet;
