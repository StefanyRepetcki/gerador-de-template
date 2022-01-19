function cnpjValidator(cnpj) {
  if (cnpj === '00000000000000'
    || cnpj === '11111111111111'
    || cnpj === '22222222222222'
    || cnpj === '33333333333333'
    || cnpj === '44444444444444'
    || cnpj === '55555555555555'
    || cnpj === '66666666666666'
    || cnpj === '77777777777777'
    || cnpj === '88888888888888'
    || cnpj === '99999999999999'
    || cnpj.length !== 14) {
    return false;
  }

  let size = cnpj.length - 2;
  let cnpjNumbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);

  let position = size - 7;
  let sum = 0;

  for (let i = size; i >= 1; i -= 1) {
    sum += parseInt(cnpjNumbers.charAt(size - i), 10) * position;
    position -= 1;
    if (position < 2) {
      position = 9;
    }
  }

  let totalLessSum = 11 - (sum % 11);
  let result = sum % 11 < 2 ? 0 : totalLessSum;
  if (result !== parseInt(digits.charAt(0), 10)) {
    return false;
  }
  size += 1;
  cnpjNumbers = cnpj.substring(0, size);
  sum = 0;
  position = size - 7;
  for (let i = size; i >= 1; i -= 1) {
    sum += parseInt(cnpjNumbers.charAt(size - i), 10) * position;
    position -= 1;
    if (position < 2) {
      position = 9;
    }
  }
  totalLessSum = 11 - (sum % 11);
  result = sum % 11 < 2 ? 0 : totalLessSum;

  if (result !== parseInt(digits.charAt(1), 10)) {
    return false;
  }
  return true;
}

function cpfValidator(cpf) {
  let soma;
  let resto;
  soma = 0;
  if (cpf === '00000000000'
    || cpf === '11111111111'
    || cpf === '22222222222'
    || cpf === '33333333333'
    || cpf === '44444444444'
    || cpf === '55555555555'
    || cpf === '66666666666'
    || cpf === '77777777777'
    || cpf === '88888888888'
    || cpf === '99999999999'
    || cpf.length !== 11) {
    return false;
  }

  for (let i = 1; i <= 9; i += 1) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(9, 10), 10)) {
    return false;
  }

  soma = 0;
  for (let i = 1; i <= 10; i += 1) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(10, 11), 10)) {
    return false;
  }
  return true;
}

export {
  cnpjValidator, cpfValidator,
};
