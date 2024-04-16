import * as Dialog from '@radix-ui/react-dialog';
import { FunctionComponent, ReactNode, useState } from 'react';
import './styles.css';
import Button from '../Button/index';

interface SheetProps {
  open: boolean;
  willClose: boolean;
  closeSheet: (open: boolean) => void;
  children: ReactNode;
}

const Sheet: FunctionComponent<SheetProps> = ({
  open,
  willClose,
  closeSheet,
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
          className={`fixed left-0 bg-slate-900 w-full h-[98dvh] rounded-t-3xl p-6 ${
            willClose && 'bottom-sheet-hide'
          } ${open ? 'bottom-0 bottom-sheet-show' : 'bottom-[-98dvh]'}`}
        >
          <div className="mb-2">
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
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Sheet;
