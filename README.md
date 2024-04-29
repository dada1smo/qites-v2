Qites é uma aplicação web criada para ajudar a dividir contas e gastos entre pessoas.

É uma calculadora. Só que com funcionalidades aplicadas.

Em "Fechar conta", você adiciona o total da conta e em seguida pode incluir consumos específicos de uma ou mais pessoas. No fim, você pode dividir o restante entre todos os participantes ou só alguns.

Clicando em "Pagamento por pessoa" é possível ver quanto ficou pra cada um.

Não salvamos nada em banco de dados, apenas no Local Storage do seu navegador. Se você quiser limpar as informações salvas, basta clicar em "Encerrar conta" e fica tudo zerado.

Se identificarmos que ainda temos uma conta sua salva, vamos abrir ela automaticamente pra você continuar de onde parou.

Qites é um projeto gratuito e open-source, você pode encontrar uma versão ativa em: [https://qites.vercel.app/como-funciona](https://qites.vercel.app/como-funciona)

## Rodando localmente

Para rodar o server local:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu browser para ver a aplicação em dev.