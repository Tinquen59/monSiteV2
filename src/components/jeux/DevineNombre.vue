<template>
    <div class="mx-auto mb-0 pb-4 col-6 rounded cardInfo bgCard">
      <router-link class="iconBack" :to="{name: 'Jeux'}">
        <i class="fas fa-arrow-circle-left"></i>
      </router-link>

      <div>
        <form v-if="endGame === false" class="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2" @submit.prevent="sendNumber">
          <input class="col-9 form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" maxlength="2" autofocus v-model="nombreJoueur" @input="devineNombre">
          <button type="submit"><i class="fas fa-search" aria-hidden="true"></i></button>
          <label class="w-100 col-9 font-italic">Un nombre entre 0 et 99 <span class="position-absolute text-gray positionCounter" :class="{'text-warning': counter === 3, 'text-danger': counter < 3}">{{ counter }}</span></label>
        </form>
        <p v-if="messageAide">{{ messageAide }}</p>

        <p v-if="messageErreur.length" class="text-danger">{{ messageErreur }}</p>

        <p v-if="messageSuccess" class="text-success">Félicitation vous avez trouvé le nombre !</p>

<!--        si c'est la fin de la partie-->
        <div v-if="endGame" class="text-center">
          <p>{{ messageEndGame }}</p>
          <div class="btn-group">
            <button class="btn btn-success" @click="replay">Rejouer</button>
            <button class="btn btn-danger"><router-link :to="{name: 'Jeux'}" class="btnLeave">Quitter</router-link></button>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      nombreJoueur: '',
      nombreRecherche: null,
      nombreRechercheMax: 100,
      messageErreur: '',
      messageSuccess: false,
      messageAide: '',
      endGame: false,
      messageEndGame: '',
      counter: 5
    }
  },
  created () {
    this.nombreRecherche = Math.floor(Math.random() * Math.floor(this.nombreRechercheMax))
  },
  methods: {
    // validRegex (element, testRegex) {
    //   const regex = testRegex
    //   return regex.test(element)
    // },
    sendNumber () {
      if (this.nombreJoueur.length > 0) {
        if (Number(this.nombreJoueur) !== this.nombreRecherche) {
          if (Number(this.nombreJoueur) > this.nombreRecherche) {
            this.messageAide = 'Vous êtes trop haut'
          } else if (Number(this.nombreJoueur) < this.nombreRecherche) {
            this.messageAide = 'Vous êtes trop bas'
          } else {
            this.messageAide = ''
          }

          this.messageSuccess = false
          this.nombreJoueur = ''
          if (this.counter === 1) {
            this.endGame = true
            this.messageAide = ''
            this.messageEndGame = 'Dommage vous avez perdu !'
          } else {
            this.counter -= 1
          }
        } else if (Number(this.nombreJoueur) === this.nombreRecherche) {
          this.endGame = true
          this.messageAide = ''
          this.nombreJoueur = ''
          this.messageEndGame = `Bravo vous avez gagné en ${5 - this.counter + 1} tour(s)`
        }
      }

      // else if (this.nombreJoueur >)
    },
    devineNombre () {
      // console.log(this.nombreJoueur)
      const regex = /^[0-9]+$/
      // console.log(regex.test(this.nombreJoueur))
      if (!regex.test(this.nombreJoueur)) {
        this.messageErreur = 'Vueillez indiquer un nombre/chiffre valide'
      } else {
        this.messageErreur = ''
      }
    },
    replay () {
      this.counter = 5
      this.endGame = false
    }
  },
  mounted () {
    if (this.messageErreur.length === 0) {
      this.messageErreur = 'Vueillez indiquer un nombre/chiffre valide'
    }
  }
}
</script>

<style scoped>
  input.form-control{
    border: none;
    border-bottom: 1px solid #000;
  }

  .active-cyan-2 input.form-control[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #4dd0e1;
    box-shadow: 0 1px 0 0 #4dd0e1;
  }
  .active-cyan-2 .fa {
    color: #4dd0e1;
  }

  form button{
    border: none;
    background-color: #fff;
  }

  .positionCounter{
    left: 0;
  }
</style>
