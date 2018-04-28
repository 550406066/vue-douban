import Vue from 'vue'
import Vuex from 'vuex'
import movie from './modules/movie'
import book from './modules/book'
import search from './modules/search'
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    movie,
    book,
    search
  },
})