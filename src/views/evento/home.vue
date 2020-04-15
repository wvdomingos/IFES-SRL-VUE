<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="evento/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="eventos"
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
  name: 'evento',
  data: () => ({
    evento: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'codigo', sortable: true },
      { key: 'descricao', sortable: true },
      { key: 'responsavel', sortable: true },
      { key: 'observacao', sortable: true },
      { key: '#', sortable: false },
    ],
  }),
  async mounted() {
    this.buscarEventos();
  },
  methods: {
    async buscarEventos() {
      this.eventos = JSON.parse(localStorage.eventos);
    },
  },
  computed: {

  },
};
</script>
