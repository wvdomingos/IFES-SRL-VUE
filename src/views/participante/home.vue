<template>
    <div>
      <div>
        <b-button
          variant="info"
          class="my-2"
          style="float: right"
          to="participante/novo/"> Novo </b-button>
      </div>
      <div>
        <b-table
        fixed
        bordered
        striped
        hover
        :items="participantes"
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
  name: 'participante',
  data: () => ({
    participantes: [],
    /*
      fields nao e obrigatorio, ele puxa o nome do objeto,
      coloquei pra fixa esses valores. tendo outros campos so mostra esse
      se tiver vazio tbem mostra do mesmo jeito
     */
    fields: [
      { key: 'codigo', sortable: true },
      { key: 'nomeParticipante', sortable: true },
      { key: 'emailParticipante', sortable: true },
      { key: 'cpfParticipante', sortable: false },
    ],
  }),
  async mounted() {
    this.buscarParticipantes();
  },
  methods: {
    async buscarParticipantes() {
      this.participantes = JSON.parse(localStorage.participantes);
    },
  },
  computed: {

  },
};
</script>
