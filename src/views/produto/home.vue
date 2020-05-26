<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="produto/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="produtos"
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
  name: 'produto',
  data: () => ({
    produtos: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'codigo', sortable: true },
      { key: 'descricao', sortable: true },
      { key: 'Tipo', sortable: true },
    ],
  }),
  async mounted() {
    this.buscarProdutos();
  },
  methods: {
    async buscarProdutos() {
      this.produtos = JSON.parse(localStorage.produtos);
    },
  },
  computed: {

  },
};
</script>
