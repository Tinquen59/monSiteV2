<template>
    <div class="mx-auto col-12 col-md-6 cardInfo">
      <!-- formulaire avis site -->
      <div class="px-4 pt-4 pb-2 rounded bgCard">
        <div class="d-flex justify-content-between">
          <h4 class="mb-4 text-center">Quel est votre avis sur le site ?</h4>
          <i class="fas fa-angle-right rotateColor" :class="{rotateActive: displayForm === 1}" @click="affichage(1)"></i>
        </div>

        <!-- si le formulaire n'est pas correct -->
        <div class="alert alert-danger" v-if="errorsAvis.length && displayForm === 1">
          <ul>
            <li v-for="error in errorsAvis" :key="error.id">{{ error }}</li>
          </ul>
        </div>

        <!-- si le formulaire a bien été envoyé -->
        <div class="alert alert-success" v-if="sendSuccessAvis && displayForm === 1">
          Merci d'avoir répondu au formulaire
        </div>

        <form v-if="displayForm === 1" @submit.prevent="verifFormAvis">
          <input class="form-control" type="text" placeholder="Pseudo *" v-model="formAvis.pseudo">
          <textarea name="message" id="message" class="mt-3 form-control" rows="6" placeholder="Votre message... *" v-model="formAvis.texte"></textarea>

          <div class="d-flex flex-row justify-content-between">
            <small class="font-italic text-muted">* : champ obligatoire</small>

            <small class="font-italic" :class="{ 'text-danger': formAvis.texte.length < 15, 'text-success': formAvis.texte.length >= 15 }">{{ formAvis.texte.length }}</small>
          </div>

          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary text-center">Envoyer</button>
          </div>
        </form>
      </div>

      <!-- formulaire idée jeux -->
      <div class="px-4 pt-4 pb-2 mt-4 rounded bgCard marginWithFooter">
        <div class="d-flex justify-content-between">
          <h4 class="mb-4 text-center">Des idées de jeux ?</h4>
          <i class="fas fa-angle-right rotateColor" :class="{rotateActive: displayForm === 2}" @click="affichage(2)"></i>
        </div>

        <!-- si le formulaire n'est pas correct -->
        <div class="alert alert-danger" v-if="errorsJeux.length && displayForm === 2">
          <ul>
            <li v-for="error in errorsJeux" :key="error.id">{{ error }}</li>
          </ul>
        </div>

        <!-- si le formulaire a bien été envoyé -->
        <div class="alert alert-success" v-if="sendSuccessJeux && displayForm === 2">
          Merci d'avoir répondu au formulaire
        </div>

        <form v-if="displayForm === 2" @submit.prevent="verifFormJeux">
          <input class="form-control" type="text" placeholder="Pseudo" v-model="formJeux.pseudo">
          <textarea name="message" id="message" class="mt-3 form-control" rows="6" placeholder="Votre message..." v-model="formJeux.texte"></textarea>

          <div class="d-flex flex-row justify-content-between">
            <small class="font-italic text-muted">* : champ obligatoire</small>

            <small class="font-italic" :class="{ 'text-danger': formJeux.texte.length < 15, 'text-success': formJeux.texte.length >= 15 }">{{ formJeux.texte.length }}</small>
          </div>

          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary text-center">Envoyer</button>
          </div>
        </form>
      </div>

      <piedDePage/>
    </div>
</template>

<script>
import piedDePage from '../components/template/PiedDePage'
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase'

const date = new Date()
const dateNow = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() // permet d'avoir la date d'aujourd'hui
const hoursNow = date.getHours() + ':' + date.getMinutes() // permet d'avoir l'heure de maintenant

const app = Firebase.initializeApp(firebaseConfig)
const db = app.database()
const elementsFormAvis = db.ref('Formulaire Avis Site')
const elementsFormJeux = db.ref('Formulaire Jeux Site')

export default {
  components: {
    piedDePage
  },
  data () {
    return {
      displayForm: 0,
      formAvis: {
        pseudo: '',
        texte: '',
        dateEnvoi: null
      },
      sendSuccessAvis: false,
      errorsAvis: [],
      formJeux: {
        pseudo: '',
        texte: '',
        dateEnvoi: null
      },
      sendSuccessJeux: false,
      errorsJeux: []
    }
  },
  methods: {
    affichage (element) {
      if (element === this.displayForm) {
        this.displayForm = 0
      } else {
        this.displayForm = element
      }
    },
    verifFormAvis () {
      this.errorsAvis = []
      this.sendSuccessAvis = false

      this.formAvis.pseudo = this.formAvis.pseudo.trim()

      if (this.formAvis.pseudo.length === 0) {
        this.errorsAvis.push('Veuillez indiquer un pseudo')
      } else if (this.formAvis.pseudo.length < 3) {
        this.errorsAvis.push('Votre pseudo doit comporter 3 caractères minimun')
      }

      if (this.formAvis.texte.length <= 14) {
        this.errorsAvis.push('Votre message doit comporter 15 caractères minimun')
      }

      if (this.errorsAvis.length === 0) {
        this.sendSuccessAvis = true
        this.formAvis.dateEnvoi = dateNow + ' ' + hoursNow
        this.submitForm(this.formAvis, elementsFormAvis)
      }
    },
    verifFormJeux () {
      this.errorsJeux = []
      this.sendSuccessJeux = false

      console.log('je passe par là')

      this.formJeux.pseudo = this.formJeux.pseudo.trim()

      if (this.formJeux.pseudo.length === 0) {
        this.errorsJeux.push('Veuillez indiquer un pseudo')
      } else if (this.formJeux.pseudo.length < 3) {
        this.errorsJeux.push('Votre pseudo doit comporter 3 caractères minimun')
      }

      if (this.formJeux.texte.length <= 14) {
        this.errorsJeux.push('Votre message doit comporter 15 caractères minimun')
      }

      if (this.errorsJeux.length === 0) {
        this.sendSuccessJeux = true
        this.formJeux.dateEnvoi = dateNow + ' ' + hoursNow
        this.submitForm(this.formJeux, elementsFormJeux)
      }
    },
    submitForm (elementSend, dataTable) {
      dataTable.push(elementSend)
      elementSend.pseudo = ''
      elementSend.texte = ''
    }
  }
}
</script>

<style scoped>
  .fa-angle-right {
    font-size: 2rem;
  }

  .rotateColor:hover {
    color: #27ae60;
    cursor: pointer;
    /* rotate: 90deg; */
  }

  .rotateActive {
    rotate: 90deg;
    color: #27ae60;
    padding-right: 10px;
  }
</style>
