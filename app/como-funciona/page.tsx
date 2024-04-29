/* eslint-disable react/no-unescaped-entities */
import Button from '@/src/ui/components/Button';
import Typography from '@/src/ui/components/Typography';
import { FunctionComponent } from 'react';

const About: FunctionComponent = () => {
  return (
    <main className="pt-16 pb-8 px-6 flex flex-col items-stretch h-[100dvh] gap-3 overflow-hidden">
      <Typography as="h1" variant="h1">
        Como funciona
      </Typography>
      <div className="flex flex-col gap-3 overflow-y-auto">
        <Typography as="p" variant="p" className="text-teal-400">
          <strong>Qites</strong> é uma aplicação web criada para ajudar a
          dividir contas e gastos entre pessoas.
        </Typography>
        <Typography as="p" variant="small">
          É uma calculadora. Só que com funcionalidades aplicadas.
        </Typography>
        <Typography as="p" variant="small">
          Em <strong>"Fechar conta"</strong>, você adiciona o total da conta e
          em seguida pode incluir consumos específicos de uma ou mais pessoas.
          No fim, você pode dividir o restante entre todos os participantes ou
          só alguns.
        </Typography>
        <Typography as="p" variant="small">
          Clicando em <strong>"Pagamento por pessoa" </strong>é possível ver
          quanto ficou pra cada um.
        </Typography>
        <Typography as="p" variant="small">
          Não salvamos nada em banco de dados, apenas no Local Storage do seu
          navegador. Se você quiser limpar as informações salvas, basta clicar
          em <strong>"Encerrar conta"</strong> e fica tudo zerado.
        </Typography>
        <Typography as="p" variant="small">
          Se identificarmos que ainda temos uma conta sua salva, vamos abrir ela
          automaticamente pra você continuar de onde parou.
        </Typography>
        <Typography as="p" variant="small">
          <strong>Qites</strong> é um projeto gratuito e open-source. Se quiser
          dar uma olhada no código acesse:{' '}
          <Button
            label="dada1smo/qites-v2"
            type="button"
            color="basic"
            padding="clear"
            size="md"
            link={{
              href: 'https://github.com/dada1smo/qites-v2',
              target: '_blank',
            }}
          />
        </Typography>
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
};

export default About;
