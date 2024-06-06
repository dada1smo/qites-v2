export const formatCurrency = (value?: number | string) => {
  if (!value) {
    return 'R$ 0,00';
  }

  const replace = value.toString().replace(',', '');
  const float = Number(replace);
  const currencyBR = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(float);

  return currencyBR;
};

export function formatFloatLocale(value: string) {
  const split = value.split(',');
  const join = split.join('.');
  return join;
}
