<template>
  <div class="container mb-0 pb-0 d-flex justify-content-center cardInfo">
    <div class="col-9">
      <!-- button en-tête -->
      <div class="px-0 mb-lg-4 d-flex flex-column flex-lg-row flex-nowrap btn-group">
        <button class="btn w-100 btn-light border-bottom font-weight-bold btnTitle" v-for="listeButton in listeButtons" :key="listeButton.id" :class="{'btnTitleActive': listeButton.id === displayContenu}" @click="changerContenu(listeButton.id)">{{ listeButton.title }}</button>
      </div>

    <!-- contenu card -->
      <div class="d-flex row mt-1 p-4 bg-light rounded marginWithFooter">
        <div class="text-center" v-if="displayContenu === 1">
          <div class="pb-3 d-flex flex-column align-items-center flex-md-row">
            <img src="../assets/moiPP.jpg" alt="photo profil" class="rounded" width="120px">
            <p class="h2 text-center text-md-left d-flex align-items-center pl-3">
              Quentin Andrieu <br>
              Permis B
            </p>
          </div>
          <p class="textDescription">Actuellement, je suis à la 3W Academy pour y suivre une formation de développeur intégrateur web option react et nodejs.</p>
        </div>

        <div class="h-100 w-100" v-if="displayContenu === 2">
          <div class="d-flex flex-column">
            <div class="d-flex justify-content-around">
              <i class="fab fa-vuejs tailleIcon"></i>
              <i class="fab fa-php tailleIcon"></i>
              <i class="text-secondary fas fa-database tailleIcon"></i>
            </div>
            <div class="d-flex justify-content-around mt-3">
              <i class="text-warning fab fa-js-square tailleIcon"></i>
              <i class="text-primary fab fa-html5 tailleIcon"></i>
              <i class="text-danger fab fa-css3-alt tailleIcon"></i>
            </div>
          </div>
        </div>

        <div class="h-100 w-100 d-flex justify-content-center" v-if="displayContenu === 3">
          <a class="d-flex align-items-center" target="_blank" href="https://www.linkedin.com/in/quentin-a-52b33b182/"><i class="pr-3 text-primary fab fa-linkedin tailleIcon"></i> Quentin Andrieu</a>
        </div>
      </div>
    </div>

    <piedDePage/>
  </div>
</template>

<script>
import piedDePage from '../components/template/PiedDePage'

export default {
  components: {
    piedDePage
  },
  data () {
    return {
      listeButtons: [
        {
          title: 'Présentation',
          id: 1
        },
        {
          title: 'Compétences',
          id: 2
        },
        {
          title: 'Me contacter',
          id: 3
        }
      ],
      displayContenu: 1
    }
  },
  methods: {
    changerContenu (element) {
      this.displayContenu = element
    }
  }
}
</script>

<style scoped>
  .btnTitle:hover{
    background-color: #27ae60;
    color: #fff;
  }

  .btnTitleActive{
    background-color: #27ae60;
    color: #fff;
  }

  .textDescription{
    font-size: 1.5rem;
  }

  .tailleIcon{
    font-size: 4rem;
  }

  .fa-vuejs{
    color: rgb(63, 185, 132);
  }

  .fa-php{
    color: #5a5e9a;
  }

  a{
    font-size: 1.5rem;
    color: #000;
    text-decoration: none;
  }
</style>
