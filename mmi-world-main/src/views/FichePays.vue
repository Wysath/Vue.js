<template>
    <pre>{{ data }}</pre>
    <div>
        <h1>Fiche Pays {{ id }}</h1>
        <h1>Une fiche pays {{ $route.params.id }}</h1>
        <p>Ma fiche Pays</p>
    </div>
</template>


<script setup>

import {useRoute} from 'vue-router'
import {ref, onMounted} from 'vue'
const route = useRoute()

const id = ref(route.params.id)
const data = ref('')

onMounted(async () => {
    data.value = await fetch('https://restcountries.com/v3.1/alpha/' + id.value)
    .then(response => response.json())
    .then(data => {
        return data
    })
    
})
</script>

