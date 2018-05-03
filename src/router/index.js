import Vue from 'vue'
import Router from 'vue-router'
import topNav from '@/components/topNav'
import main from '@/components/main'
import movie from '@/components/movie'
import book from '@/components/book'
import more from '@/components/more'
import search from '@/components/searchPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/Book/:id',
      name: 'book',
      component: book
    },
    {
      path: '/Movie/:id',
      name: 'movie',
      component: movie
    },
    {
      path: '/search/:q',
      name: 'search',
      component: search
    },
    {
      path: '/more',
      name: 'more',
      component: more
    },
  ]
})
