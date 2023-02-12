<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const { result } = defineProps(['result']);
</script>

<template>
  <div class="results">
    <p>Your results...</p>
    <h1>{{ result }}</h1>

    <button @click="router.push('/')">Go back to home page</button>
  </div>
</template>

<style scoped>
  .results {
    text-align: center;
    padding: 100px 0;
  }

  .results p {
    font-size: 25px;
  }

  .results h1 {
    font-size: 80px;
  }
</style>
