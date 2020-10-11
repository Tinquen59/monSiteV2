<template>
    <div>
      <footer class="d-flex justify-content-center">
        <p class="py-1 text-mention" @click="openMentionsLegales">Mentions légales</p>
      </footer>

      <div class="modalMentionsLegales" v-if="isOpen">
        <div class="container col-7 rounded cardInfo bgCard modalCard">
          <div class="pt-3 d-flex justify-content-between modalHeader">
            <h3>Mentions légales</h3>
            <div>
            <i class="fas fa-times" @click="closeMentionsLegales"></i>
            </div>
          </div>
          <hr>

          <div>
            <div>
              <h5 class="font-weight-bold">Créateur du site :</h5>
              <div class="d-flex flex-row">
                <p>Andrieu - Quentin</p>
                <p>8930</p>
              </div>
            </div>

            <div class="pb-3">
              <h5 class="font-weight-bold">Hébergeur du site :</h5>
              <div class="d-flex flex-column flex-md-row">
                <div class="d-flex flex-column mr-md-5">
                  <p>PLANETHOSTER</p>
                  <p class="mb-0">
                    FR (Nº Vert): 0 805 080 426 <br>
                    FR: +33 1 76 60 41 43
                  </p>
                </div>

                <div class="d-flex flex-column mt-3 mt-md-0">
                  <p><a href="https://www.planethoster.com" target="_blank">https://www.planethoster.com</a></p>
                  <p>4416 Louis B. Mayer, Laval (Québec)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    openMentionsLegales () {
      this.isOpen = true
    },
    closeMentionsLegales () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
  footer {
    background-color: #27ae60;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .text-mention {
    color: #fff;
  }

  .text-mention:hover {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }

  .modalMentionsLegales {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: #000;
    background-color: rgb(0, 0, 0, 0.5);
  }

  .fa-times {
    font-size: 2rem;
    color: red;
    transition: 1s;
  }

  .fa-times:hover {
    rotate: 180deg;
    cursor: pointer;
  }
</style>
