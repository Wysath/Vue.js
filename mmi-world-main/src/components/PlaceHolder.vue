<script setup>
import { onMounted, ref } from 'vue'

let data = ref('')

onMounted(async () => {
  data.value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
      return data
  })
  
   //cette URL est une démonstration, vous devez adapter l'URL à votre besoin. La récupération se fait ici en GET, mais il est possible de faire des requêtes POST, PUT, DELETE, ...
})
</script>

<template>
  <div v-if="data">
    <p>{{ data }}</p>
    <p>{{ data.title }}</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>