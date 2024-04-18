import { FunctionComponent, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '../Button';
import './styles.css';

interface MenuProps {
  open: boolean;
  willClose: boolean;
  closeSheet: (open: boolean) => void;
  headerOptions?: ReactNode;
  children: ReactNode;
}

const Menu: FunctionComponent<MenuProps> = ({
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
          className={`fixed top-0 left-0 h-[100dvh] w-[100dvw] bg-slate-900 ${
            willClose && 'overlay-hide'
          } ${open ? 'opacity-30 overlay-show' : 'opacity-0'}`}
        />
        <Dialog.Content
          className={`fixed top-0 left-0 bg-slate-900 w-[90vw] h-full rounded-r-3xl p-6 ${
            willClose && 'left-menu-hide'
          } ${open ? 'left-0 left-menu-show' : 'left-[-90dvh]'}`}
        >
          <div className="mb-2 flex items-center">
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

export default Menu;
