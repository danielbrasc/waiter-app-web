export function formatCurrency(value: number, currencyFormat: string){
  return new Intl.NumberFormat(
    'pt-br',
    { style: 'currency', currency: currencyFormat })
    .format(value);
}
