'use client';

import Button from '@/src/ui/components/Button';
import Typography from '@/src/ui/components/Typography';
import { FunctionComponent, useState } from 'react';

const ScreenSizeWarning: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(true);

  if (open) {
    return (
      <div className="lg:visible invisible lg:flex hidden fixed w-screen h-screen bg-slate-900 z-50 flex-col justify-center items-center">
        <div className="w-1/2 flex flex-col gap-4 items-start">
          <Typography as="p" variant="h1">
            Oi!
          </Typography>
          <Typography as="p" variant="h1">
            Você está acessando em um dispositivo desktop/laptop.
          </Typography>
          <Typography as="p" variant="h1">
            Por favor, diminua o tamanho da janela ou acesse pelo celular para
            uma experiência mais legal :)
          </Typography>
          <Button
            label="Quero ver assim mesmo"
            type="button"
            color="basic"
            padding="clear"
            size="lg"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    );
  }
};

export default ScreenSizeWarning;
