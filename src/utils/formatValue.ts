/* eslint-disable @typescript-eslint/explicit-function-return-type */
const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatData = (data: Date) =>
  new Date(data).toLocaleDateString('pt-BR');
// return new Intl.DateTimeFormat('pt-BR', {
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit',
// }).format(timestamp);
export default formatValue;
