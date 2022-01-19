import Vue from 'vue';
import VueCurrencyFilter from 'vue-currency-filter';

Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
});

Vue.filter('date', value => {
  if (!value) {
    return value;
  }

  const date = new Date(value);
  return date.toLocaleDateString('pt-BR');
});

Vue.filter('dateUtc', value => {
  if (!value) {
    return value;
  }

  const originalDate = new Date(value);

  const timezoneOffsetInMilis = (new Date()).getTimezoneOffset() * 60000;
  const adjustedDate = new Date(originalDate.getTime() + timezoneOffsetInMilis);

  return adjustedDate.toLocaleDateString('pt-BR');
});

Vue.filter('formatPercent', value => Number(value).toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }));

Vue.filter('formatMoney', value => Number(value).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}));

Vue.filter('formatMoneyWithoutCurrency', value => new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value));
