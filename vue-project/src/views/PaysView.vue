<script setup>

// import Pays from '@/view/PaysView.vue';

const title = 'Welcome to the Pays view'
const description = 'This is a basic Vue.js view template'

const pays = Array.from({ length: 10 }, (_, index) => ({
  nom: `Pays ${index + 1}`,
  id: index + 1
}))
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>

  <div>
    <h1>Les pays sont:</h1>
    <ul>
      <li v-for="pays in pays" :key="pays.id">
        <router-link :to="`/fiche-pays/${pays.id}`">{{ pays.nom }}</router-link>
      </li>
    </ul>
  </div>

</template>

<style scoped>
h1 {
  color: #333;
}

p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
