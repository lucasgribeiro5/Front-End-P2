import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarrinhoView from "../views/CarrinhoView.vue";
import FormularioContato from "../views/FormularioContrato.vue";


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
  ],
});

export default router;
