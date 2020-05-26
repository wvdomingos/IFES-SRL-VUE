<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
          <label for="feedback-user">Código</label>
          <b-input
            style="width: 120px"
            v-model="local.codigo"
            readonly />
          <label for="descricao">Descrição do Local</label>
          <b-input
            v-model.trim="$v.local.descricao.$model"
            id="descricao" />
            <b-form-invalid-feedback
              :state="$v.local.descricao.required">
              Campo obrigatorio</b-form-invalid-feedback>
          <label for="capacidade">Capacidade</label>
          <b-input
            style="width: 120px"
            v-model.trim="local.codigo"
            id='capacidade' />
          <label for="responsavel">Responsavel</label>
          <b-form-select
            id="responsavel"
            v-model="local.responsavel"
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
          <label for="departamento">Departamento</label>
            <b-input
              v-model.trim="local.codigo"
              id='departamento' />
          <label for="textarea">Observação</label>
          <b-form-textarea
            id="textarea"
            v-model="local.observacao"
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
  name: 'localForm',
  data: () => ({
    local: {
      codigo: '',
      descricao: '',
      capacidade: '',
      responsavel: null,
      departamento: '',
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
      if (!localStorage.idLocal) {
        localStorage.setItem('idLocal', 0);
      }
      if (!localStorage.locais) {
        localStorage.setItem('locais', '[]');
      }
    },
    submit() {
      console.log(this.local);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.local.codigo = parseInt(JSON.parse(localStorage.idLocal), 10);
          this.local.codigo += 1;
          const deps = JSON.parse(localStorage.locais);
          console.log(deps);
          deps.push(this.local);
          localStorage.setItem('locais', JSON.stringify(deps));
          localStorage.idLocal = this.local.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    local: {
      descricao: { required },
    },
  },
};
</script>
