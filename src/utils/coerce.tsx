export function coerceToNumber(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  const split = value.split(',');

  if (split.length > 1) {
    const join = split.join('.');
    return parseFloat(join);
  }

  return Number(value);
}
