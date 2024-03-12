<template>
    <div class="Card">
        <h2>Pays : {{ pays.name.common }}</h2>
        <p>Nom de la capital : <span v-if ="pays.capital">{{ pays.capital[0] }}</span></p>
        <p>Population : {{ pays.population }}</p>
        <p>Monnaie : {{ pays.currencies}}</p>
        <img :src="pays.flags.png" alt="drapeau du pays">
        <RouterLink :to="{name : 'fiche_pays', params:{id:pays.cca3}}">Détails</RouterLink>
    </div>
</template>

<script setup>
defineProps({
    pays: String,
});
</script>

<style scoped>
    .Card {
        display: grid;
        grid-template-columns: 3fr 1fr;
        border: 1px solid black;
        border-radius: 25px;
        padding: 15px;
        background-color: rgb(255, 255, 255);
        margin-bottom: 10px;
    }

    .Card:hover {
        background-color: rgb(201, 227, 225);
    }


</style>