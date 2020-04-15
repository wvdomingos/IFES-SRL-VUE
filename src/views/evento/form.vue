<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
            <label for="feedback-user">Codigo</label>
            <b-input
              style="width: 120px"
              v-model="evento.codigo"
              readonly />
          <label for="descricaoEvento">Descrição do Evento</label>
          <b-input
            v-model.trim="$v.evento.descricaoEvento.$model"
            id="descricaoEvento" />
          <b-form-invalid-feedback
          :state="$v.evento.descricaoEvento.required">
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="solicitanteEvento">Solicitante do Evento</label>
          <b-input
            id="solicitanteEvento" />
          <label for="organizador">Organizador do Evento</label>
          <b-form-select
            id="organizador"
            v-model="evento.organizador"
            :options="organizadores"
            class="mb-3">
            <template v-slot:first>
              <b-form-select-option
              :value="null"
              disabled>
                --Selecione um Organizador--
              </b-form-select-option>
            </template>
        </b-form-select>
          <label for="departamentoResp">Departamento do Responsável</label>
          <b-input
            id="departamentoResp" />
          <label for="dataPrevInicio">Data Prevista Início do Evento</label>
          <b-input
            type='date'
            id="dataPrevInicio" />
          <label for="dataPrevTermino">Data Prevista Término do Evento</label>
          <b-input
            type='date'
            id="dataPrevTermino" />
          <label for="textarea">Observação do Evento</label>
          <b-form-textarea
            id="textarea"
            v-model="evento.observacao"
            placeholder="Informe a observação"
            rows="4"
            max-rows="10"
          ></b-form-textarea>
          <b-button
            class="my-4"
            style="float: right"
            variant="success"
            type="submit"
            :disabled="this.$v.$invalid || this.submitStatus === 'PENDING'">
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
  name: 'eventoForm',
  data: () => ({
    evento: {
      codigo: '',
      descricaoEvento: '',
      solicitante: '',
      organizador: null,
      departamentoResp: '',
      dataPrevInicio: '',
      dataPrevTermino: '',
      observacao: '',
    },
    submitStatus: null,
    organizadores: [],
  }),
  mounted() {
    this.listOrganizadores();
  },
  methods: {
    listOrganizadores() {
      if (localStorage.organizadores) {
        this.organizadores = JSON.parse(localStorage.organizadores);
      } else {
        const a = ['Joao', 'Jose', 'Maria', 'Qualquer'];
        localStorage.setItem('organizadores', JSON.stringify(a));
        this.organizadores = a;
      }
      if (!localStorage.idevento) {
        localStorage.setItem('idevento', 0);
      }
      if (!localStorage.eventos) {
        localStorage.setItem('eventos', '[]');
      }
    },
    submit() {
      console.log(this.evento);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.evento.codigo = parseInt(JSON.parse(localStorage.idevento), 10);
          this.evento.codigo += 1;
          const deps = JSON.parse(localStorage.eventos);
          console.log(deps);
          deps.push(this.evento);
          localStorage.setItem('eventos', JSON.stringify(deps));
          localStorage.idevento = this.evento.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    evento: {
      descricaoEvento: { required },
    },
  },
};
</script>
