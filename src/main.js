import Vue from 'vue'
import App from './App.vue'

import EventList from './event_list.vue'
import EventDetail from './event_detail.vue'

Vue.component("event-list",EventList)
Vue.component("event-detail",EventDetail)

new Vue({
  el: '#app',
  render: h => h(App),
})
