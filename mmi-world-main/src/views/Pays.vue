<template>
    <h1>Pays</h1>

    <div v-for="pays in data">
       <CardPays :pays="pays"></CardPays>
    </div>

    <!-- <ul>
        <li v-for="id in 10">
            <router-link :to="{name : 'fiche_pays', params:{id:id}}"> Pays{{ id }}</router-link>
        </li>
    </ul> -->

</template>

<script setup>

import CardPays from '../components/CardPays.vue';
import { ref, onMounted } from 'vue'

const data = ref('')

onMounted(async () => {
  data.value = await fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
      return data
  })
  
})

</script>