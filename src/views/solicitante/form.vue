<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
            <label for="feedback-user">Codigo</label>
            <b-input
              style="width: 120px"
              v-model="solicitante.codigo"
              readonly />
            <label for="login">Login</label>
            <b-input
              style="width: 320px"
              v-model.trim="solicitante.login"
              id="login" />
            <label for="senha">Senha</label>
            <b-input
              style="width: 320px"
              v-model.trim="solicitante.senha"
              id="senha" />
            <label for="confirmarSenha">Confirme a Senha</label>
            <b-input
              style="width: 320px"
              v-model.trim="solicitante.confirmarSenha"
              id="confirmarSenha" />
            <label for="nomeCompleto">Nome Completo</label>
            <b-input
              v-model.trim="$v.solicitante.nomeCompleto.$model"
              id="nomeCompleto" />
            <b-form-invalid-feedback
            :state="$v.solicitante.nomeCompleto.required">
            Campo obrigatorio</b-form-invalid-feedback>
            <label for="feedback-user">E-mail</label>
            <b-input
              v-model.trim="solicitante.email"
              id="email" />
            <label for="feedback-user">CPF</label>
            <b-input
              style="width: 320px"
              v-model.trim="solicitante.cpf"
              id="cpf" />
            <label for="feedback-user">Departamento</label>
            <b-input
              v-model.trim="solicitante.departamento"
              id="departamento" />
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
  name: 'solicitanteForm',
  data: () => ({
    solicitante: {
      codigo: '',
      login: '',
      senha: '',
      confirmarSenha: '',
      nomeCompleto: '',
      email: '',
      cpf: '',
      departamento: '',
    },
    submitStatus: null,
    departamentos: [],
  }),
  mounted() {
    this.listDepartamentos();
  },
  methods: {
    submit() {
      console.log(this.solicitante);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.solicitante.codigo = parseInt(JSON.parse(localStorage.idDepartamento), 10);
          this.solicitante.codigo += 1;
          const deps = JSON.parse(localStorage.departamentos);
          console.log(deps);
          deps.push(this.solicitante);
          localStorage.setItem('departamentos', JSON.stringify(deps));
          localStorage.idDepartamento = this.solicitante.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    solicitante: {
      nomeCompleto: { required },
    },
  },
};
</script>
