import Vue from "vue";
import VueRouter from "vue-router";
import Overview from "../views/Overview.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "overview",
        component: Overview,
    },
    {
        path: "/create",
        name: "create",
        component: function () {
            return import("../views/Create.vue");
        },
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: function () {
            return import("../views/Edit.vue");
        },
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
