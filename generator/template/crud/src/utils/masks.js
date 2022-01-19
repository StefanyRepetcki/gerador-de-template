import formatCnpj from '@brazilian-utils/format-cnpj';
import formatCpf from '@brazilian-utils/format-cpf';

const onlyNumbers = value => (
  value.replace(/[^0-9]/g, '')
);

const formatPhone = value => {
  if (!value) return '';

  const cleanValue = onlyNumbers(value);

  return cleanValue.slice(0, 11).split('').reduce((accumulatedValue, currentValue, currentIndex) => {
    const newValue = `${accumulatedValue}${currentValue}`;

    if (currentIndex !== cleanValue.length - 1) {
      if (currentIndex === 0) return `(${newValue}`;
      if (currentIndex === 1) return `${newValue}) `;
      if (currentIndex === 6) return `${newValue}-`;
    }
    return newValue;
  }, '');
};

const maskCnpj = value => formatCnpj(value);
const maskCpf = value => formatCpf(value);
const maskPhone = value => formatPhone(value);

const getMoneyMask = value => parseFloat(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
export {
  maskCnpj,
  maskCpf,
  maskPhone,
  onlyNumbers,
  getMoneyMask,
};
