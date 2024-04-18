import TabContainer from '@/src/domain/closeTab/components/TabContainer';
import Typography from '@/src/ui/components/Typography';

export default function Tab() {
  return (
    <main className="pt-16 pb-8 px-6 flex flex-col items-stretch h-[100dvh]">
      <Typography as="h1" variant="h1">
        Fechar conta
      </Typography>

      <TabContainer />
    </main>
  );
}
