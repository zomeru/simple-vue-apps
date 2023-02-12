<script setup>
  import { RouterLink } from 'vue-router';
  import cars from '../data/cars.json';
</script>

<template>
  <div>
    <h1>Home view</h1>
    <div class="cars">
      <RouterLink :to="`/cars/${car.id}`" v-for="car in cars">
        {{ car.name }}
      </RouterLink>
    </div>
  </div>
</template>
