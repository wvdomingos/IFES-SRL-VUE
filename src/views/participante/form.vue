<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
            <label for="feedback-user">Codigo</label>
            <b-input
              style="width: 120px"
              readonly />
          <label for="nomeParticipante">Nome Completo do Participante</label>
          <b-input
            id="nomeParticipante"/>
          <b-form-invalid-feedback>
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="emailParticipante">E-mail</label>
          <b-input
            id="emailParticipante" />
          <b-form-invalid-feedback>
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="cpfParticipante">CPF</label>
          <b-input
            id="emailParticipante" />
          <b-form-invalid-feedback>
          Campo obrigatorio</b-form-invalid-feedback>
          <b-button
            class="my-4"
            style="float: right"
            variant="success"
            type="submit">
            Salvar</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>
<style scoped>

</style>
<script>
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'participanteForm',
  data: () => ({
    participante: {
      codigo: '',
      nomeParticipante: '',
      emailParticipante: '',
      cpfParticipante: '',
    },
    submitStatus: null,
  }),
  methods: {
    listResposaveis() {
      if (!localStorage.idParticipante) {
        localStorage.setItem('idParticipante', 0);
      }
      if (!localStorage.participantes) {
        localStorage.setItem('participantes', '[]');
      }
    },
    submit() {
      console.log(this.participante);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.participante.codigo = parseInt(JSON.parse(localStorage.idParticipante), 10);
          this.participante.codigo += 1;
          const deps = JSON.parse(localStorage.participantes);
          console.log(deps);
          deps.push(this.participante);
          localStorage.setItem('participantes', JSON.stringify(deps));
          localStorage.idParticipante = this.participante.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    participante: {
      nomeParticipante: { required },
    },
  },
};
</script>
