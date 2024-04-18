import Button from '@/src/ui/components/Button';
import LinkCard from '@/src/ui/components/LinkCard';
import Typography from '@/src/ui/components/Typography';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-6 pb-8 px-6 flex flex-col items-stretch justify-center h-[100dvh]">
      <div className="flex flex-col grow justify-center">
        <Typography as="h1" variant="h1">
          O que você gostaria de fazer?
        </Typography>
        <div className="mt-6 flex flex-col gap-4">
          <LinkCard
            title="Fechar conta"
            description="Pra cada pessoa pagar o que consumiu"
            iconSrc="/receipt.svg"
            href="/conta"
          />
          {/* <LinkCard
            title="Dividir gastos"
            description="Igualmente entre duas ou mais pessoas"
            iconSrc="/split.svg"
            href=""
          /> */}
        </div>
      </div>
      <Typography
        as="p"
        variant="small"
        className="font-mono border-dotted border-t-2 border-t-teal-900 text-center"
      >
        desenvolvido por{' '}
        <Button
          label="@dada1smo"
          type="button"
          color="basic"
          padding="clear"
          size="md"
          link={{
            href: 'https://github.com/dada1smo',
            target: '_blank',
          }}
        />
      </Typography>
    </main>
  );
}
