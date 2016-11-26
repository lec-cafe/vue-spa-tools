import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)

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

const store = new Vuex.Store({
  state: {
    events: []
  },
  mutations: {
    UPDATE_EVENTS(state,events){
        state.events = events
    }
  },
  actions: {
    load(store){
      console.log("hogehoge")
      fetch("./api.json").then((response)=>{
        return response.json()
      }).then((json)=>{
        store.commit("UPDATE_EVENTS",json.events);
      })
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
