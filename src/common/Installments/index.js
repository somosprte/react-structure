import { NumberFormat } from '~/common';

const minInstallment = 40;

export const array = price => {
  const installments = Math.floor(price / minInstallment) <= 10 ? Math.floor(price / minInstallment) : 10;

  return Array.from({ length: !!installments ? installments : 1 }).map((value, index) => ({
    label: `${index + 1}x de R$${NumberFormat(price / (index + 1), 2, ',', '.')}`,
    value: index + 1,
  }));
};

export const max = (price, full = true) => {
  const installments = Math.floor(price / minInstallment) <= 10 ? Math.floor(price / minInstallment) : 10;
  const max = !!installments ? installments : 1;

  return `${max} x de R$ ${NumberFormat(price / max, 2, ',', '.')}${full ? ' sem juros' : ''}`;
};

export const format = (price, installment) => {
  return `${installment}x de R$ ${NumberFormat(price / installment, 2, ',', '.')}`;
};
