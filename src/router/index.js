import { createRouter, createWebHistory } from "vue-router";
import TransactionDetails from "@/components/TransactionDetails.vue";
import Dashboard from "@/components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/transaction-details",
      name: "transaction",
      component: TransactionDetails,
    },

    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
  ],
});

export default router;
