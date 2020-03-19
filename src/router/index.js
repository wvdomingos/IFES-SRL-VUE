import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DepartamentoHome from '../views/departamento/home.vue';
import DepartamentoForm from '../views/departamento/form.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/departamento',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Listar Departamento',
      components: {
        dash: DepartamentoHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Departamento',
      components: {
        dash: DepartamentoForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Departamento',
      components: {
        dash: DepartamentoForm,
      },
    },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
