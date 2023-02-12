<script setup>
  import { useRoute } from 'vue-router';
  import cars from '../data/cars.json';

  const route = useRoute();

  const car = cars.find(car => car.id === Number(route.params.id));

  console.log('route', route.params);
</script>

<template>
  <div>
    <h1>Contact view</h1>
    <div>{{ car.contact.name }}</div>
    <div>{{ car.contact.phone }}</div>
  </div>
</template>
