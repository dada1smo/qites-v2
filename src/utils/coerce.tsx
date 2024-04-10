export function coerceToNumber(value: string) {
  const split = value.split(',');

  if (split.length > 1) {
    const join = split.join('.');
    return parseFloat(join);
  }

  return Number(value);
}
