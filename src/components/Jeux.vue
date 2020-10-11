<template>
    <div class="container mb-0 pb-0 d-flex flex-column text-center cardInfo">
      <div>
        <router-link :to="{name: 'PileOuFace'}" class="col-5 col-md-3 my-2 btnStyle" href="#">Pile ou face</router-link>
      </div>

      <div>
        <router-link :to="{name: 'Shifumi'}" class="col-5 col-md-3 my-2 btnStyle">Shifumi</router-link>
      </div>

      <div class="marginWithFooter">
        <router-link :to="{name: 'DevineNombre'}" class="col-5 col-md-3 my-2 btnStyle" href="#">Devine nombre</router-link>
      </div>
      <!-- <div><a class="col-3 mt-2 btnStyle" href="#">Pong</a></div> -->

      <piedDePage/>
    </div>
</template>

<script>
import piedDePage from '../components/template/PiedDePage'

export default {
  components: {
    piedDePage
  }
}
</script>

<style scoped>
  .btnStyle{
    color: #119DA4 !important;
    text-transform: uppercase;
    background: #0A1826;
    padding: 20px;
    border: 4px solid #119DA4 !important;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  .btnStyle:hover{
    color: #494949 !important;
    background-color: #000;
    border-radius: 50px;
    border-color: #494949 !important;
    transition: all 0.3s ease 0s;
  }
</style>
