<template>
  <nav class="navbar navbar-expand-lg navbar-light backgroundNavbar">
    <router-link :to="{name: 'Accueil'}" class="navbar-brand colorLink">Accueil</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link :to="{name: 'Jeux'}" class="nav-item nav-link colorLink" href="#"><i class="fas fa-gamepad"></i> Jeux</router-link>
        <router-link :to="{name: 'Formulaire'}" class="nav-item nav-link colorLink" href="#"><i class="fab fa-wpforms"></i> Formulaire</router-link>
        <router-link :to="{name: 'Calculatrice'}" class="nav-item nav-link colorLink" href="#"><i class="fas fa-calculator"></i> Calculatrice</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
  .backgroundNavbar{
    background-color: #27ae60;
  }

  .colorLink{
    color: #fff !important;
  }
</style>
