<script setup>
import { computed } from 'vue'

const symfony = 18
const integration = 16
const reseau = 13

// Faire un tableau avec le nom de la matiere et la note
const notes = [
    { matiere: 'Symfony', note: symfony },
    { matiere: 'Integration', note: integration },
    { matiere: 'Reseau', note: reseau }
]

const moyenne = computed(() => {
    const sum = symfony + integration + reseau;
    const average = sum / 3;
    return average.toFixed(1);
})

const mots = ['bonjour', 'salut', 'hello', 'hi']

</script>
<template>
    <div>
        <h1>Ma moyenne est de : {{ moyenne }}</h1>
        <div>
            <p>Mes notes sont:</p>
            <ul>
                <li v-for="note in notes" :key="note.matiere">
                    {{ note.matiere }}: {{ note.note }}
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h1>Mes mots sont:</h1>
        <ul>
            <li v-for="mot in mots" :key="mot">{{ mot }}</li>
        </ul>
    </div>
</template>
