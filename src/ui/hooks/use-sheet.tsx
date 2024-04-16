import { useState } from 'react';

export default function useSheet() {
  const [open, setOpen] = useState<boolean>(false);
  const [willClose, setWillClose] = useState<boolean>(false);

  const openSheet = () => {
    setOpen(true);
  };

  const closeSheet = (openEvent: boolean) => {
    setWillClose(!openEvent);

    setTimeout(() => {
      setOpen(openEvent);
      return setWillClose(false);
    }, 200);
  };

  return {
    open,
    willClose,
    openSheet,
    closeSheet,
  };
}
