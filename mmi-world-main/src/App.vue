<script setup></script>

<template>
    <nav>
        <router-link :to="{name : 'home'}">Home</router-link> |
        <router-link :to="{name : 'about'}">About</router-link> |
        <router-link :to="{name : 'pays'}">Pays</router-link>
    </nav>
    <router-view />
</template>

<style scoped></style>
