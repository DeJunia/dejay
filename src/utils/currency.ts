export const formatWithCommas = (value: number | string) => {
  const number = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(number)) return 'Invalid number';
  return number.toLocaleString(); // adds commas
};