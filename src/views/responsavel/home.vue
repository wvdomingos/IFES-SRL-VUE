<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="responsavel/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="responsaveis"
        :fields="fields" />
    </div>
    </div>
</template>
<style scoped>
  .tabelas {
    margin: 5px;
    width: 100%;
  }
</style>
<script>
export default {
  name: 'responsavel',
  data: () => ({
    responsaveis: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'codigo', sortable: true },
      { key: 'login', sortable: true },
      { key: 'Nome do Responsável', sortable: true },
      { key: 'email', sortable: true },
      { key: 'cpf', sortable: true },
    ],
  }),
  async mounted() {
    this.buscarResponsaveis();
  },
  methods: {
    async buscarResponsaveis() {
      this.responsaveis = JSON.parse(localStorage.responsaveis);
    },
  },
  computed: {

  },
};
</script>
