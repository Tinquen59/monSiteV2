import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Jeux from '../components/Jeux.vue'
import PileOuFace from '../components/jeux/PileOuFace'
import Shifumi from '../components/jeux/Shifumi'
import DevineNombre from '../components/jeux/DevineNombre'
import Formulaire from '../components/Formulaire.vue'
import Calculatrice from '../components/Calculatrice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Jeux',
    name: 'Jeux',
    component: Jeux
  },
  {
    path: '/Jeux/PileOuFace',
    name: 'PileOuFace',
    component: PileOuFace
  },
  {
    path: '/Jeux/DevineNombre',
    name: 'DevineNombre',
    component: DevineNombre
  },
  {
    path: '/Jeux/Shifumi',
    name: 'Shifumi',
    component: Shifumi
  },
  {
    path: '/Formulaire',
    name: 'Formulaire',
    component: Formulaire
  },
  {
    path: '/Calculatrice',
    name: 'Calculatrice',
    component: Calculatrice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
