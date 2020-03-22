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
          <label for="descricao">Descrição</label>
          <b-input
            v-model.trim="$v.evento.descricao.$model"
            id="descricao" />
          <b-form-invalid-feedback
          :state="$v.evento.descricao.required">
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="responsavel">Responsavel</label>
          <b-form-select
            id="responsavel"
            v-model="evento.responsavel"
            :options="responsaveis"
            class="mb-3">
            <template v-slot:first>
              <b-form-select-option
              :value="null"
              disabled>
                --Selecione o responsavel--
              </b-form-select-option>
            </template>
        </b-form-select>
          <label for="textarea">Observação</label>
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
      descricao: '',
      responsavel: null,
      observacao: '',
    },
    submitStatus: null,
    responsaveis: [],
  }),
  mounted() {
    this.listResposaveis();
  },
  methods: {
    listResposaveis() {
      if (localStorage.responsaveis) {
        this.responsaveis = JSON.parse(localStorage.responsaveis);
      } else {
        const a = ['Joao', 'Jose', 'Maria', 'Qualquer'];
        localStorage.setItem('responsaveis', JSON.stringify(a));
        this.responsaveis = a;
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
      descricao: { required },
    },
  },
};
</script>
