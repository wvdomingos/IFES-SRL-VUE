<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="solicitante/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="solicitantes"
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
  name: 'solicitante',
  data: () => ({
    solicitantes: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'codigo', sortable: true },
      { key: 'login', sortable: true },
      { key: 'Nome do Solicitante', sortable: true },
      { key: 'email', sortable: true },
      { key: 'cpf', sortable: true },
    ],
  }),
  async mounted() {
    this.buscarSolicitantes();
  },
  methods: {
    async buscarSolicitantes() {
      this.solicitantes = JSON.parse(localStorage.solicitantes);
    },
  },
  computed: {

  },
};
</script>
