<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="departamento/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="departamentos"
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
  name: 'departamento',
  data: () => ({
    departamentos: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'código', sortable: true },
      { key: 'descrição Depart.', sortable: true },
      { key: 'Responsável', sortable: true },
      { key: 'Observação', sortable: true },
    ],
  }),
  async mounted() {
    this.buscarDepartamentos();
  },
  methods: {
    async buscarDepartamentos() {
      this.departamentos = JSON.parse(localStorage.departamentos);
    },
  },
  computed: {

  },
};
</script>
