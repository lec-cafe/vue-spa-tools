import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './app.vue'
import AppHeader from './app_header.vue'

import EventList from './event_list.vue'
import EventDetail from './event_detail.vue'
import EventGuide from './event_guide.vue'

const router = new VueRouter({
  mode: "history",
  routes: [
    {path : "/list",       component: EventList },
    {path : "/guide",  component: EventGuide },
    {path : "/detail", component: EventDetail },
    {path : "/detail/:id", component: EventDetail },
    {path : "/",       redirect: "/list"},
  ]
})

Vue.component("app-header",AppHeader)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
