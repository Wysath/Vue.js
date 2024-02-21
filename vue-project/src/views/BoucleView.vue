<script setup>
import { ref } from 'vue'

const awesome = ref(true)


const notes = [
  { matiere: 'js', note: 8 },
  { matiere: 'html', note: 10 },
  { matiere: 'css', note: 12 },
  { matiere: 'vue', note: 9 },
  { matiere: 'react', note: 11 },
  { matiere : 'angular', note: 7 },
  { matiere: 'c++', note: 15 },
  { matiere: 'c#', note: 14 },
  { matiere: 'java', note: 16 },
  { matiere: 'python', note: 20}

]
</script>

<template>
  <main>
    <button @click="awesome = !awesome">Basculer</button>
    <h1 v-if="awesome">Vue est magnifique !</h1>
    <h1 v-else>Oh non 😢</h1>

    <h2 :class="awesome ? 'green' : 'red'">Couleur !</h2>
  </main>

  <main>
    <div v-for="note in notes" :key="note.matiere">
      <h1>{{ note.matiere }} : {{ note.note }}/20 </h1>
      <h2  id="bad" v-if="note.note < 10">La note est inférieure à 10</h2>
      <h2 id="neutral" v-else-if="note.note === 10">La note est égale à 10</h2>
      <h2 id="good" v-else>La note est supérieure à 10</h2>
      
    </div>
  </main>

  <main>
    <div v-for="note in notes" :key="note.matiere">
      <h2 v-if="note.note > 8 && note.note < 10">
        Cette note est entre 8 et 10 : 
        <ul>
          <li>
            {{ note.matiere }} : {{ note.note }}/20
          </li>
        </ul>
      </h2>
    </div>
     
  </main>

  <main>
    <div>
      <h1>Les notes sont:</h1>
      <ul>
        <li v-for="note in notes" :key="note.matiere">
          <h1 :class="{green: note.note > 10, red: note.note < 10}">{{ note.matiere }} : {{ note.note }}/20</h1>
        </li>
      </ul>
    </div>
  </main>



</template>

<style scoped>
.green{
  color: green;
}

.red{
  color: red;
}

#bad{
  color: red;
}

#neutral{
  color: orange;
}

#good{
  color: rgb(42, 225, 42);
}

</style>