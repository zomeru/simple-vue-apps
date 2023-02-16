<script setup>
  import { NCard } from 'naive-ui';

  const { image, name, abilities } = defineProps([
    'image',
    'name',
    'abilities',
  ]);
</script>

<template>
  <n-card :title="name">
    <template #cover>
      <img :src="image" />
    </template>
    <div v-for="(ability, i) in abilities" :key="ability.slot">
      <p>Ability {{ i + 1 }}: {{ ability.ability.name }}</p>
    </div>
  </n-card>
</template>

<style scoped>
  .n-card {
    width: 200px;
    margin: 10px 20px;
  }
  .n-card img {
    height: 250px;
  }

  p {
    font-size: 10px;
  }

  .jobs {
    display: flex;
    flex-wrap: wrap;
  }
</style>
