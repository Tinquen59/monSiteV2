<template>
    <div class="container-fluid d-flex flex-column flex-md-row-reverse justify-content-md-around align-items-md-center mb-md-0 pb-md-4 col-md-6 cardInfo">

<!--      SCORE DU JEU    -->
      <div class="mx-auto mx-md-0 col-md-7 ml-5 mb-4 p-3 d-flex row justify-content-center rounded bgScoreCard">
        <div class="d-flex flex-column">
          <p class="px-2 bgPseudoScore">Vous</p>
          <p class="text-center bgScore">{{ scoreJoueur }}</p>
        </div>

        <div class="d-flex align-items-center">
          <p class="mx-3 deuxPoints"> - </p>
        </div>
        <!--<div class="col-1 d-flex align-items-center">
          <div class="vsScore"></div>
        </div>-->

        <div class="d-flex-flex-column">
          <p class="px-2 bgPseudoScore">Ordi</p>
          <p class="text-center bgScore">{{ scoreOrdi }} </p>
        </div>
      </div>

<!--      entête de la carte-->
      <div class="col-12 mr-md-5 p-3 rounded bgCard">
        <div class="d-flex justify-content-between">
          <router-link class="iconBack" :to="{name: 'Jeux'}">
            <i class="fas fa-arrow-circle-left"></i>
          </router-link>

          <div class="iconBack">
            <i v-if="helpGame === false" class="fas fa-question" @click="openHelp"></i>
            <i v-else class="fas fa-times" @click="closeHelp"></i>
          </div>
        </div>

<!--        plateau de jeu    -->
        <div class="overflow-auto" v-if="endGame === false && helpGame === false">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <img src="../../assets/pierre.png" width="100" @click="pierre"/>
              <img class="my-3" src="../../assets/papier.png" width="100" @click="feuille"/>
              <img src="../../assets/ciseaux.png" width="100" @click="ciseaux"/>
            </div>

            <div class="d-flex align-items-center">
              <img src="../../assets/vs.png" width="100"/>
            </div>

            <div class="d-flex align-items-center">
              <img :src="require(`../../assets/${ordi}.png`)" width="100"/>
            </div>
          </div>
        </div>

<!--      si c'est la fin de la partie    -->
        <div class="text-center my-4" v-if="endGame === true">
          <p>{{ messageEnd }}</p>
          <div class="btn-group">
            <button class="btn btn-success" @click="replay">Rejouer</button>
            <button class="btn btn-danger"><router-link :to="{name: 'Jeux'}" class="btnLeave">Quitter</router-link></button>
          </div>
        </div>

<!--        plus d'information    -->
        <div class="my-4" v-if="helpGame === true">
          <div>
            <h3>Comment Jouer ?</h3>
            <p class="pl-3">Cliquer qur la pierre, la feuille ou le ciseaux</p>
            <p class="pl-3">Le premier à 5 points gagne</p>
          </div>

          <div>
            <h3>Comment marquer un point ?</h3>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Vous</th>
                  <th scope="col">VS</th>
                  <th scope="col">ordi</th>
                  <th scope="col">victoire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Pierre</th>
                  <td></td>
                  <td>Ciseaux</td>
                  <td>+1</td>
                </tr>
                <tr>
                  <th>Feuille</th>
                  <td></td>
                  <td>Pierre</td>
                  <td>+1</td>
                </tr>
                <tr>
                  <th>Ciseaux</th>
                  <td></td>
                  <td>Papier</td>
                  <td>+1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      shifumis: ['pierre', 'papier', 'ciseaux'],
      ordi: 'point-interrogation',
      scoreJoueur: 0,
      scoreOrdi: 0,
      endGame: false,
      messageEnd: '',
      helpGame: false
    }
  },
  methods: {
    pierre () {
      this.ordi = this.shifumis[Math.floor(this.shifumis.length * Math.random())]

      if (this.ordi === 'papier') {
        this.scoreOrdi += 1
      } else if (this.ordi === 'ciseaux') {
        this.scoreJoueur += 1
      }

      this.finDePartie()
    },
    feuille () {
      this.ordi = this.shifumis[Math.floor(this.shifumis.length * Math.random())]

      if (this.ordi === 'pierre') {
        this.scoreJoueur += 1
      } else if (this.ordi === 'ciseaux') {
        this.scoreOrdi += 1
      }

      this.finDePartie()
    },
    ciseaux () {
      this.ordi = this.shifumis[Math.floor(this.shifumis.length * Math.random())]

      if (this.ordi === 'pierre') {
        this.scoreOrdi += 1
      } else if (this.ordi === 'papier') {
        this.scoreJoueur += 1
      }

      this.finDePartie()
    },
    finDePartie () {
      if (this.scoreJoueur === 5) {
        this.messageEnd = 'Bravo, vous avez gagné !'
      } else if (this.scoreOrdi === 5) {
        this.messageEnd = 'Dommage, vous avez perdu !'
      }

      if (this.scoreJoueur === 5 || this.scoreOrdi === 5) {
        console.log('fin de la partie')
        this.endGame = true
      }
    },
    replay () {
      this.endGame = false
      this.scoreJoueur = 0
      this.scoreOrdi = 0
    },
    openHelp () {
      this.helpGame = true
    },
    closeHelp () {
      this.helpGame = false
    }
  }
}
</script>

<style scoped>
  .fas.fa-times{
    color: red;
  }

  .fas.fa-times{
    transition: 1s;
  }

  .fas.fa-times:hover{
    rotate: 180deg;
  }

  .bgScoreCard{
    background-color: #14ae67;
    border: 5px solid #fff;
    box-shadow: 5px 5px #727171;
  }

  .bgPseudoScore{
    background-color: #383635;
    border: 5px solid #fff;
    color: #dadf00;
    font-weight: bold;
  }

  .bgScore{
    background-color: #383635;
    border: 5px solid #fff;
    color: #dadf00;
    font-size: 2rem;
  }

  .vsScore{
    background: red;
    width: 100%;
  }

  .deuxPoints{
    /*-webkit-text-stroke: 2px white;*/
    color: red;
    font-size: 2rem;
    font-weight: 700;
  }

  .fas.fa-question{
    cursor: help;
  }

  .bgHelp{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    z-index: 9999;
  }
</style>
