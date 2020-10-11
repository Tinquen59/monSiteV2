<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <!-- <piedDePage/> -->
    <!--<pied-de-page></pied-de-page>-->
  </div>
</template>

<script>
import navbar from './components/template/Navbar'
import piedDePage from './components/template/PiedDePage'

export default {
  components: {
    navbar,
    // eslint-disable-next-line vue/no-unused-components
    piedDePage
  }
}
</script>

<style>
  textarea {
    resize: none;
  }

  .marginWithFooter {
    margin-bottom: 60px;
  }

  .cardInfo{
    margin-top: 9%;
  }

  .bgCard{
    background-color: #fff;
  }

  .iconBack{
    color: #000;
    font-size: 2rem;
  }
  .iconBack:hover{
    color: #000;
  }

  .btnLeave{
    text-decoration: none;
    color: #fff;
  }
  .btnLeave:hover{
    color: #fff;
    text-decoration: none;
  }
</style>
