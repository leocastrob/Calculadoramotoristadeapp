
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("pt-BR").format(Math.round(value * 100) / 100);
};
