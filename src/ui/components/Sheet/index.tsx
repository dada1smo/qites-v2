import * as Dialog from '@radix-ui/react-dialog';
import { FunctionComponent, ReactNode, useState } from 'react';
import './styles.css';
import Button from '../Button/index';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

const Sheet: FunctionComponent<SheetProps> = ({
  open,
  onOpenChange,
  children,
}) => {
  const [willClose, setWillClose] = useState<boolean>(false);

  const handleClose = (openEvent: boolean) => {
    setWillClose(!openEvent);

    setTimeout(() => {
      onOpenChange(openEvent);
      return setWillClose(false);
    }, 200);
  };

  return (
    <Dialog.Root defaultOpen={false} open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed top-0 left-0 h-screen w-screen bg-slate-900 ${
            willClose && 'overlay-hide'
          } ${open ? 'opacity-30 overlay-show' : 'opacity-0'}`}
        />
        <Dialog.Content
          className={`fixed left-0 bg-slate-900 w-full h-[98vh] rounded-t-3xl p-6 ${
            willClose && 'bottom-sheet-hide'
          } ${open ? 'bottom-0 bottom-sheet-show' : 'bottom-[-98vh]'}`}
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
