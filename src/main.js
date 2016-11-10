import Vue from 'vue'

import App from './app.vue'
import AppHeader from './app_header.vue'

import EventList from './event_list.vue'
import EventDetail from './event_detail.vue'
import EventGuide from './event_guide.vue'

Vue.component("app-header",AppHeader)
Vue.component("event-guide",EventGuide)
Vue.component("event-list",EventList)
Vue.component("event-detail",EventDetail)

new Vue({
  el: '#app',
  render: h => h(App),
})
