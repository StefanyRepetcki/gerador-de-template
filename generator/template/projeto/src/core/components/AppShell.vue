<template>
  <div>
    <CAppbar
      ref="appbar"
      :is-box-info-loading="isBoxInfoLoading"
      :company-info="resumoEmpresa"
      :zendesk-articles="getListaArtigosBuscaZendesk"
      :buttons-list="buttonsList"
      :is-loading-articles="isListaArtigosZendeskLoading"
      @onDadosAcessoButtonClick="handleDadosAcessoClick"
      @onCompanyChange="company => handleCompanyChange(company)"
      @onTypeSearch="handleTypeSearch"
      @onMgmClick="(mgm) => handleMgmClick(mgm)"
      @onTicketClick="(ticket) => handleTicketClick(ticket)"
      @onPendencyClick="(pendency) => handlePendencyClick(pendency)"
      @onLogoutClick="handleLogout"
      @onDigitalCertificateClick="(certificate) => handleDigitalCertificate(certificate)"
    />

    <CMenu
      :menu-items="getMenuItems"
      current-menu="Home"
      @onMenuClick="(menu) => handleMenuClick(menu)"
      @onLogoClick="handleLogoClick"
      @onSubmenuClick="(submenuItem) => handleSubmenuClick(submenuItem)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const APPS = {
  conciliacao: 'conciliacao',
  notaEntrada: 'nota-entrada',
  notaTomada: 'nota-tomada',
  painelDeControle: 'painel-de-controle',
  sistema: 'sistema',
};

export default {
  name: 'AppShell',

  computed: {
    ...mapGetters(['getMenuItems', 'getAppbarData', 'getEmpresaAtual', 'getEmpresas', 'isBoxInfoLoading']),
    ...mapGetters('ajuda', ['getListaArtigosBuscaZendesk', 'getListaChamados', 'isListaArtigosZendeskLoading']),
    ...mapGetters('mgm', ['getResumoMgm']),
    ...mapGetters('pendencias', ['getQuantidadePendencias', 'getListaPendencias']),
    buttonsList() {
      return [
        {
          mobileIcon: 'action/search',
          mobileLabel: 'Pesquisa',
          onlyMobile: true,
        },
        {
          buttonLabel: 'Fale com a gente',
          mobileLabel: 'Atendimento',
          mobileIcon: 'communication/chat',
        },
        {
          buttonLabel: 'Dados da empresa',
          buttonIcon: 'content/how_to_reg',
          mobileLabel: 'Empresa',
          badge: this.getQuantidadePendencias,
          buttonAction: this.handleDadosEmpresaClick,
        },
      ];
    },
    resumoEmpresa() {
      return {
        chamados: this.getListaChamados,
        empresaAtual: this.getEmpresaAtual,
        empresas: this.getEmpresas,
        mgm: this.getResumoMgm,
        pendencias: this.getListaPendencias,
      };
    },
  },

  methods: {
    handleActionTypeMenus(menu) {
      const actionTypeMenus = {
        'ver-minhas-aliquotas': () => this.redirectModalAliquotas(),
        'ver-minhas-aliquotas-nova-aba': () => this.redirectMinhasAliquotas(),
        'cobrar-cartao': () => this.redirectModalCobrarCartao(),
      };

      const func = actionTypeMenus[menu.id];
      if (func) func();
    },

    handleRouteApplication(menu) {
      const application = menu.application || APPS.sistema;
      const { route } = menu;
      return { application, route };
    },

    redirectMinhasAliquotas() {
      window.open('#/minhas-aliquotas', '_blank');
    },

    redirectModalAliquotas() {
      this.$router.push('/aliquotas');
    },

    redirectModalCobrarCartao() {
      this.$router.push('/cobrar-por-cartao');
    },
  },
};
</script>
