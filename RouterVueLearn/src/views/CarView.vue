<script setup>
  import { RouterView, useRoute, useRouter } from 'vue-router';
  import cars from '../data/cars.json';

  const route = useRoute();
  const router = useRouter();

  const car = cars.find(car => car.id === Number(route.params.id));

  console.log('route', route);
  console.log('fp', route.fullPath);
  console.log('p', route.path);
</script>

<template>
  <div v-if="car">
    <div>{{ car.name }}</div>
    <div>{{ car.price }}</div>
    <div>{{ car.year }}</div>
    <RouterLink :to="`/cars/${car.id}/contact`">Contact</RouterLink>
    <button @click="router.push(`/cars/${car.id}/contact`)">Contact btn</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Car not found</h1>
  </div>
</template>
