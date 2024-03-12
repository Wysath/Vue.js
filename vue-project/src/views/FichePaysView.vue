<script>
export default {
    name: 'FichePaysView',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        pays() {
            return this.id === 1 ? 'France' : this.id === 2 ? 'Espagne' : 'Pays inconnu';
        }
    }
}
</script>

<template>
    <div>
        <h1>{{ pays }}</h1>    
    </div>
</template>

<style scoped>
/* Your component styles here */
</style>