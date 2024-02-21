<script>
export default {
    name: 'FichePaysView',
    props: {
        parameterValue: {
            type: String,
            required: true
        }
    },
}
</script>

<template>
    <div>
        <h1 v-if="pays.id === 1">France</h1>    
    </div>
    <div>
        <h1 v-if="pays.id === 2">Espagne</h1>
    </div>
</template>

<style scoped>
/* Your component styles here */
</style>
