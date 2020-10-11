<template>
  <div class="container my-5">
    <div class="rounded p-4 bgCalculator">
      <p class="text-center">Ma calculatrice</p>
      <div class="m-2 pb-5 pt-2 rounded resultatCalcul">
        <p class="ml-2 mb-1">{{ affichageResultat }}</p>
      </div>
      <div>
        <div class="mx-2 mt-5 row justify-content-between">
          <div class="col-2 py-4 rounded btnCalculator" @click="emptyCache">AC</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="addMinusAtBeginning">-/+</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="divisionByCent">%</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="division">/</div>
        </div>
        <div class="mx-2 my-4 row justify-content-between">
          <div class="col-2 py-4 rounded btnCalculator" @click="append(7)">7</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(8)">8</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(9)">9</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="multiplication">x</div>
        </div>
        <div class="mx-2 my-4 row justify-content-between">
          <div class="col-2 py-4 rounded btnCalculator" @click="append(4)">4</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(5)">5</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(6)">6</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="substraction">-</div>
        </div>
        <div class="mx-2 my-4 row justify-content-between">
          <div class="col-2 py-4 rounded btnCalculator" @click="append(1)">1</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(2)">2</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append(3)">3</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="addition">+</div>
        </div>
        <div class="mx-2 my-4 row justify-content-between">
          <div class="col-5 py-4 rounded btnCalculator" @click="append(0)">0</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="append('.')">,</div>
          <div class="col-2 py-4 rounded btnCalculator" @click="calculation">=</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      affichageResultat: '',
      saveNumbers: [],
      calculatedNumber: null,
      nothing: false // permet de savoir si il y a une multiplication ou une division dans le calcul ou rien des deux
    }
  },
  methods: {
    pushNumberInArray (operateur) {
      if (this.saveNumbers.length === 1) {
        this.saveNumbers.splice(0, 1) // si il le nombre avant l'opérateur est écris deux fois on le remplace
      }

      if (this.affichageResultat === '' || this.affichageResultat === null) {
        this.saveNumbers.push('0', operateur) // si l'affichage du résultat est null ou n'existe pas, on le met à 0 suivi de l'opérateur
      } else {
        this.saveNumbers.push(this.affichageResultat, operateur) // sinon on met le chiffre saisi suivi de l'opérateur
      }
    },
    append (nombre) {
      this.affichageResultat += nombre + '' // quand on appuie sur un chiffre il s'additionne au précédent
    },
    divisionByCent () {
      if (this.affichageResultat[0] !== '-' && this.affichageResultat.length > 0) {
        this.affichageResultat = String(this.affichageResultat / 100)
      }
    },
    addMinusAtBeginning () {
      if (this.affichageResultat[0] === '-') {
        this.affichageResultat = this.affichageResultat.slice(1)
      } else if (this.affichageResultat[0] !== '-') {
        this.affichageResultat = '-' + this.affichageResultat
      }
    },
    addition () {
      this.pushNumberInArray('+')

      this.affichageResultat = ''
    },
    substraction () {
      this.pushNumberInArray('-')

      this.affichageResultat = ''
    },
    multiplication () {
      this.pushNumberInArray('*')

      this.affichageResultat = ''
    },
    division () {
      this.pushNumberInArray('/')

      this.affichageResultat = ''
    },
    calculation () {
      if (this.affichageResultat === '') {
        this.saveNumbers.push('0')
      } else {
        this.saveNumbers.push(this.affichageResultat)
      }

      for (let i = 0; i < this.saveNumbers.length; i++) {
        // Si il y a une ou des multiplication / division
        // if (this.saveNumbers[i + 1] !== undefined && this.nothing === false) {
        if (this.nothing === false) {
          if (this.saveNumbers[i + 1] === '*' || this.saveNumbers[i + 1] === '/') {
            if (this.saveNumbers[i + 1] === '*') {
              this.calculatedNumber = this.saveNumbers[i] * this.saveNumbers[i + 2]
              this.saveNumbers.splice(i, 3, String(this.calculatedNumber))
            }

            if (this.saveNumbers[i + 1] === '/') {
              this.calculatedNumber = this.saveNumbers[i] / this.saveNumbers[i + 2]
              this.saveNumbers.splice(i, 3, String(this.calculatedNumber))
            }

            i = i - 1
          }

          // si il n'y a plus de multiplication / division alors on passe au addition / soustraction
          if (i === this.saveNumbers.length - 1) {
            i = 0
            this.nothing = true
          }
        }

        // Si il n'y a plus de mulptiplication ou de division
        if (this.saveNumbers[i + 1] !== undefined && this.nothing === true) {
          i = 0

          if (this.saveNumbers[i + 1] === '+') {
            this.calculatedNumber = Number(this.saveNumbers[i]) + Number(this.saveNumbers[i + 2])
          } else if (this.saveNumbers[i + 1] === '-') {
            this.calculatedNumber = Number(this.saveNumbers[i]) - Number(this.saveNumbers[i + 2])
          }

          this.saveNumbers.splice(0, 3, String(this.calculatedNumber))
        }

        if (this.saveNumbers.length === 1) {
          this.nothing = false
        }

        this.affichageResultat = String(this.calculatedNumber)
      }
    },
    // Pour reset la calculatrice
    emptyCache () {
      this.affichageResultat = ''
      this.calculatedNumber = null
      this.saveNumbers = []
    }
  }
}
</script>

<style scoped>
  .bgCalculator{
    background-color: #e4e8e9;
    border: 1px solid #cacecf;
    box-shadow: 1px 1px #e5e8e9;
  }

  .resultatCalcul{
    background-color: #fff;
    overflow: auto;
    height: 40px;
  }

  .btnCalculator{
    background-color: #3bbd81;
    text-align: center;
    border: 2px solid #788f86;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  .btnCalculator:active{
    opacity: 0.7;
  }

  .btnEgale{
    height: 50px;
  }
</style>
