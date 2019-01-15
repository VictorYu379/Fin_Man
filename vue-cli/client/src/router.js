import Vue from 'vue'
import Router from 'vue-router'
import SecureComponent from "./views/secure.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "secure"
            }
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
})