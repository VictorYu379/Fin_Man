import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        }
    ]
})