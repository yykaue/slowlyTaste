import 'babel-polyfill'
import iView from './components/theThirdParty/iview/index'
import Cookie from 'js-cookie'
import { sync } from 'vuex-router-sync'
import 'iview/dist/styles/iview.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import store from './staore'
import './assets/css/reset.css'

sync(store, router)
Vue.use(iView)

router.beforeEach((to, from, next) => {
  // const titles = to.meta.title ? to.meta.title : '慢滋慢味'
  // window.document.title = titles

  const Cookier = Cookie.get('rank') // recluse
  const toData = to.name

  if (!Cookier && toData !== 'landing') {
    router.push({ path: 'landing' })
  } else if (Cookier && toData === 'landing') {
    router.push({ path: 'background/withClients' })
  } else if ((Cookier && toData === 'index') || (Cookier && toData === null)) {
    router.push({ path: 'background/withClients' })
  }

  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
