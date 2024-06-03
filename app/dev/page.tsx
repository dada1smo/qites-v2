'use client';

import useLocalStorage from '@/src/infraestructure/hooks/use-local-storage';
import Button from '@/src/ui/components/Button';
import Typography from '@/src/ui/components/Typography';
import { FunctionComponent } from 'react';

const Dev: FunctionComponent = () => {
  const { removeLocalStorage } = useLocalStorage();

  return (
    <main className="pt-16 pb-8 px-6 flex flex-col items-stretch h-[100dvh] gap-3 overflow-hidden">
      <Typography as="h1" variant="h1">
        Dev
      </Typography>
      <div className="mt-4 flex justify-center">
        <Button
          label="Limpar dados"
          type="button"
          color="main"
          padding="regular"
          onClick={() => {
            removeLocalStorage('qites-tab');
          }}
        />
      </div>
    </main>
  );
};

export default Dev;
