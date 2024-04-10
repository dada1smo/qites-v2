import TabContainer from '@/src/domain/closeTab/components/TabContainer';
import TabTotalForm from '@/src/domain/closeTab/components/TabTotalForm';
import Typography from '@/src/ui/components/Typography';

export default function Home() {
  return (
    <main className="pt-16 pb-8 px-6 flex flex-col items-stretch h-screen">
      <Typography as="h1" variant="h1">
        Fechar conta
      </Typography>

      <TabContainer />
    </main>
  );
}
