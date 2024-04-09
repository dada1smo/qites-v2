import LinkCard from '@/src/ui/LinkCard';
import Typography from '@/src/ui/Typography';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="pt-6 pb-8 px-6 flex flex-col items-stretch justify-end h-screen">
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
        <LinkCard
          title="Dividir gastos"
          description="Igualmente entre duas ou mais pessoas"
          iconSrc="/split.svg"
          href=""
        />
      </div>
    </main>
  );
}
