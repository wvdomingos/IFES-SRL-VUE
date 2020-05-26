<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
            <label for="feedback-user">Codigo</label>
            <b-input
              style="width: 120px"
              v-model="departamento.codigo"
              readonly />
          <label for="descricaoDepart">Descrição do Departamento</label>
          <b-input
            v-model.trim="$v.departamento.descricao.$model"
            id="descricaoDepart" />
          <b-form-invalid-feedback
          :state="$v.departamento.descricao.required">
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="responsavel">Responsável</label>
          <b-form-select
            id="responsavel"
            v-model="departamento.responsavel"
            :options="responsaveis"
            class="mb-3">
            <template v-slot:first>
              <b-form-select-option
              :value="null"
              disabled>
                --Selecione o Responsável do Departamento--
              </b-form-select-option>
            </template>
        </b-form-select>
          <label for="textarea">Observação</label>
          <b-form-textarea
            id="textarea"
            v-model="departamento.observacao"
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
  name: 'departamentoForm',
  data: () => ({
    departamento: {
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
      if (!localStorage.idDepartamento) {
        localStorage.setItem('idDepartamento', 0);
      }
      if (!localStorage.departamentos) {
        localStorage.setItem('departamentos', '[]');
      }
    },
    submit() {
      console.log(this.departamento);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.departamento.codigo = parseInt(JSON.parse(localStorage.idDepartamento), 10);
          this.departamento.codigo += 1;
          const deps = JSON.parse(localStorage.departamentos);
          console.log(deps);
          deps.push(this.departamento);
          localStorage.setItem('departamentos', JSON.stringify(deps));
          localStorage.idDepartamento = this.departamento.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    departamento: {
      descricao: { required },
    },
  },
};
</script>
