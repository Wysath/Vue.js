<!-- <script setup>
import { onMounted, ref } from 'vue'

let data = ref('')

onMounted(async () => {
  data.value = await fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
      return data
  })
  
   //cette URL est une démonstration, vous devez adapter l'URL à votre besoin. La récupération se fait ici en GET, mais il est possible de faire des requêtes POST, PUT, DELETE, ...
})
</script> -->
<!-- 
<template>
  <div v-if="data"> -->
    <!-- <p>{{ data }}</p>  -->

    <!-- <ul>
      <li v-for="pays in data">
        {{ pays.name.common }}, {{ pays.name.official }}, {{ pays.name.nativeName }}
      </li>
    </ul>

  </div>

  <div v-else>
    <p>Chargement...</p>
  </div>
</template> -->