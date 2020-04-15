import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeHome from '../views/home/home.vue';
import DepartamentoHome from '../views/departamento/home.vue';
import DepartamentoForm from '../views/departamento/form.vue';
import EventoHome from '../views/evento/home.vue';
import EventoForm from '../views/evento/form.vue';
import LocalHome from '../views/local/home.vue';
import LocalForm from '../views/local/form.vue';
import ParticipanteHome from '../views/participante/home.vue';
import ParticipanteForm from '../views/participante/form.vue';
import ProdutoHome from '../views/produto/home.vue';
import ProdutoForm from '../views/produto/form.vue';
import ResponsavelHome from '../views/responsavel/home.vue';
import ResponsavelForm from '../views/responsavel/form.vue';
import SolicitanteHome from '../views/solicitante/home.vue';
import SolicitanteForm from '../views/solicitante/form.vue';
import SobreHome from '../views/sobre/home.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Seja Bem Vindo(a)',
      components: {
        dash: HomeHome,
      },
    },
    ],
  },
  {
    path: '/departamento',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Departamentos',
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
  {
    path: '/evento',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Eventos',
      components: {
        dash: EventoHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Evento',
      components: {
        dash: EventoForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Evento',
      components: {
        dash: EventoForm,
      },
    },
    ],
  },
  {
    path: '/local',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Locais',
      components: {
        dash: LocalHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Local',
      components: {
        dash: LocalForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Local',
      components: {
        dash: LocalForm,
      },
    },
    ],
  },
  {
    path: '/participante',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Participantes',
      components: {
        dash: ParticipanteHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Participante',
      components: {
        dash: ParticipanteForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Participante',
      components: {
        dash: ParticipanteForm,
      },
    },
    ],
  },
  {
    path: '/produto',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Produtos',
      components: {
        dash: ProdutoHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Produto',
      components: {
        dash: ProdutoForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Produto',
      components: {
        dash: ProdutoForm,
      },
    },
    ],
  },
  {
    path: '/responsavel',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Responsáveis',
      components: {
        dash: ResponsavelHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Responsavel',
      components: {
        dash: ResponsavelForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Responsavel',
      components: {
        dash: ResponsavelForm,
      },
    },
    ],
  },
  {
    path: '/solicitante',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Lista de Solicitantes',
      components: {
        dash: SolicitanteHome,
      },
    }, {
      path: 'novo',
      name: 'Cadastrar Solicitante',
      components: {
        dash: SolicitanteForm,
      },
    }, {
      path: 'edit/:id',
      name: 'Editar Solicitante',
      components: {
        dash: SolicitanteForm,
      },
    },
    ],
  },
  {
    path: '/sobre',
    // You could also have named views at the top
    component: Dashboard,
    children: [{
      path: '/',
      name: 'Sobre o Sistema',
      components: {
        dash: SobreHome,
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
