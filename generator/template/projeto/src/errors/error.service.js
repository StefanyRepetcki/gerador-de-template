import ErrorsConstants from './errors.constants';

const errorMap = {
  'exception/erro-negocial-a': 'Não foi possível ativar os stories. Verifique as configurações do seu navegador',
  'exception/erro-negocial-b': 'Não foi possível ativar a integração da conta. Verifique se você selecionou o banco correto',
  'exception/erro-negocial-c': 'Não foi possível resgatar o benefício. A quantidade é insuficiente',
  'exception/erro-negocial-d': 'Não foi recalcular o vencimento da guia. Verifique se o imposto selecionado tem validade',
  'exception/erro-negocial-e': 'Relatório não encontrado. Verifique o filtro e tente novamente',
  'exception/erro-negocial-f': 'Não foi agendar a ligação. Verifique se o seu plano disponibiliza essa opção',
};

/**
 * Dado um objeto contendo o erro retornado pelo back-end,
 * extrai os identificadores de erros negociais.
 *
 * @param {Object} errorData atributo data da response
 * @returns Array com identificadores dos erros. Caso errorData
 * não esteja no formato padronizado, retorna um array com um
 * identificador de erro inesperado.
 */
const extractErrorIdentifiers = errorData => {
  if (
    !errorData
    || !errorData.detalhes
  ) {
    return [ErrorsConstants.UNEXPECTED_ERROR_IDENTIFIER];
  }

  return errorData.detalhes.map(
    errorDetail => (errorDetail.identificador),
  );
};

export {
  errorMap,
  extractErrorIdentifiers,
};
