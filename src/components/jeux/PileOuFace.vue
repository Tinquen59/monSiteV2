<template>
  <div class="mx-auto mb-0 pb-4 col-12 col-md-6 cardInfo">

    <div class="mb-4 p-3 d-flex justify-content-between rounded bgCard" v-if="changerPseudo === true">
      <div class="col-9 form-group">
        <input type="text" id="pseudo" class="form-control" v-model="pseudo" @input="verifPseudo"/>
        <small v-if="taillePseudo === false" class="font-italic text-danger">Le pseudo doit contenir minimum 4 caractères et maximum 10 caractères</small>
      </div>
      <i class="text-danger fas fa-times" @click="enleverAffichagePseudo"></i>
    </div>

    <div class="p-3 rounded bgCard">
      <router-link class="iconBack" :to="{name: 'Jeux'}">
        <i class="fas fa-arrow-circle-left"></i>
      </router-link>
      <div class="text-center">
        <img class="taillePiece animPiece" :src="require(`../../assets/${miseOrdi}`)" alt="test"/>
      </div>

      <p v-if="messageResultat" class="text-center mb-0 mt-3" :class="{ 'text-success': resultat === true, 'text-danger': resultat === false }">{{ messageResultat }}</p>

      <p v-if="counterCombo >= 2"><span>x{{ counterCombo }}</span> victoires</p>

      <div v-if="taillePseudo === true" class="d-flex flex-column align-items-center mt-4">
        <button class="col-5 btn btn-primary rounded-pill btnMise" @click="vsPile">Pile</button>
        <button class="col-5 btn btn-primary rounded-pill mt-3" @click="vsFace">Face</button>
      </div>

      <div v-if="changerPseudo === false" class="text-center mt-5">
        <button class="col-8 btn btn-secondary" @click="afficherPseudo">Changer de pseudo</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      miseJoueur: null,
      cotesPiece: ['pile.png', 'face.png'],
      randomOrdi: null,
      miseOrdi: 'pile_ou_face.png',
      messageResultat: null,
      resultat: true,
      counterCombo: 0,
      changerPseudo: false,
      pseudo: 'moldu',
      taillePseudo: true
    }
  },
  methods: {
    vsPile () {
      this.randomOrdi = Math.floor(Math.random() * Math.floor(this.cotesPiece.length))
      console.log(this.randomOrdi)
      if (this.randomOrdi === 0) {
        this.miseOrdi = this.cotesPiece[0]
        this.resultat = true
        this.messageResultat = `Bravo ${this.pseudo}, vous avez gagnez`
        this.counterCombo += 1
      } else if (this.randomOrdi === 1) {
        this.miseOrdi = this.cotesPiece[1]
        this.resultat = false
        this.messageResultat = `Dommage ${this.pseudo}, vous avez perdu`
        this.counterCombo = 0
      } else {
        this.messageResultat = null
        this.counterCombo = 0
      }
    },
    vsFace () {
      this.randomOrdi = Math.floor(Math.random() * Math.floor(this.cotesPiece.length))
      console.log(this.randomOrdi)
      if (this.randomOrdi === 0) {
        this.miseOrdi = this.cotesPiece[0]
        this.resultat = false
        this.messageResultat = `Dommage ${this.pseudo}, vous avez perdu`
        this.counterCombo = 0
      } else if (this.randomOrdi === 1) {
        this.miseOrdi = this.cotesPiece[1]
        this.resultat = true
        this.messageResultat = `Bravo ${this.pseudo}, vous avez gagnez`
        this.counterCombo += 1
      } else {
        this.messageResultat = null
      }
    },
    afficherPseudo () {
      this.changerPseudo = true
    },
    enleverAffichagePseudo () {
      this.changerPseudo = false
    },
    verifPseudo () {
      if (this.pseudo.length >= 4) {
        this.taillePseudo = true
      } else {
        this.taillePseudo = false
      }
    }
  }
}
</script>

<style scoped>
  .fas.fa-times{
    cursor: pointer;
  }

  .taillePiece{
    width: 120px;
  }

  .animPiece{
    animation-duration: 1s;
    animation-name: animLeft;
  }

  @keyframes animLeft {
    from { transform: translateX(-100%) }
    to { transform: translateX(0)}
  }

  .btnMise{
    box-shadow: 5px 2px #007bff;
  }
</style>
