<template>
  <div>
    <b-container>
      <b-card>
        <b-form  @submit.prevent="submit">
            <label for="feedback-user">Codigo</label>
            <b-input
              style="width: 120px"
              v-model="produto.codigo"
              readonly />
          <label for="descricao">Descrição do Produto</label>
          <b-input
            v-model.trim="$v.produto.descricao.$model"
            id="descricao" />
          <b-form-invalid-feedback
          :state="$v.produto.descricao.required">
          Campo obrigatorio</b-form-invalid-feedback>
          <label for="tipo">Tipo (Equipamento / Serviço)</label>
          <b-form-select
            id="tipo"
            v-model="produto.tipo"
            :options="tipos"
            class="mb-3">
            <template v-slot:first>
              <b-form-select-option
              :value="null"
              disabled>
                --Selecione o tipo de produto--
              </b-form-select-option>
            </template>
          </b-form-select>
          <label for="textarea">Observação</label>
          <b-form-textarea
            id="textarea"
            v-model="produto.observacao"
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
  name: 'produtoForm',
  data: () => ({
    produto: {
      codigo: '',
      descricao: '',
      tipo: null,
      observacao: '',
    },
    submitStatus: null,
    tipos: [],
  }),
  mounted() {
    this.listTipos();
  },
  methods: {
    listTipos() {
      if (localStorage.tipos) {
        this.tipos = JSON.parse(localStorage.tipos);
      } else {
        const a = ['1 - Equipamentos', '2 - Serviços', '3 - Outros'];
        localStorage.setItem('tipos', JSON.stringify(a));
        this.tipos = a;
      }
      if (!localStorage.idProduto) {
        localStorage.setItem('idProduto', 0);
      }
      if (!localStorage.produtos) {
        localStorage.setItem('produtos', '[]');
      }
    },
    submit() {
      console.log(this.produto);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        console.log('Deu ruim');
      } else {
        try {
          this.produto.codigo = parseInt(JSON.parse(localStorage.idProduto), 10);
          this.produto.codigo += 1;
          const deps = JSON.parse(localStorage.produtos);
          console.log(deps);
          deps.push(this.produto);
          localStorage.setItem('produtos', JSON.stringify(deps));
          localStorage.idProduto = this.produto.codigo;
        } catch (ex) {
          console.log(ex);
        }
      }
    },
  },
  validations: {
    produto: {
      descricao: { required },
    },
  },
};
</script>
