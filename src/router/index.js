import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarrinhoView from "../views/CarrinhoView.vue";
import FormularioContato from "../views/FormularioContrato.vue";
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import LoginColaborador from "../views/Logincolaborador.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/carrinho",
      name: "carrinho",
      component: CarrinhoView,
    },
    {
      path: "/FormularioContato",
      name: "Fale",
      component: FormularioContato,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Cadastro",
      name: "Cadastro",
      component: Cadastro,
    },
    {
      path: "/LoginColaborador",
      name: "LoginColaborador",
      component: LoginColaborador,
    },
  ],
});

export default router;
