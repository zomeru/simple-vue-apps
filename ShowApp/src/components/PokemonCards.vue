<script setup>
  import { ref, watch } from 'vue';
  import { NButton } from 'naive-ui';
  import Card from './Card.vue';

  const pokemons = ref([]);
  const loading = ref(false);
  const limit = ref(8);
  const page = ref(0);

  const fetchPokemons = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${
      limit.value
    }&offset=${page.value * limit.value}`;

    try {
      loading.value = true;

      const response = await fetch(URL);
      const data = await response.json();

      const urls = data.results.map(pokemon => pokemon.url);

      const responses = await Promise.all(urls.map(url => fetch(url)));

      return await Promise.all(responses.map(response => response.json()));
    } catch (error) {
      console.log({ error });
      return [];
    } finally {
      loading.value = false;
    }
  };

  fetchPokemons().then(data => {
    console.log({ data });
    pokemons.value = data;
  });

  watch(page, async () => {
    fetchPokemons().then(data => {
      console.log({ data });
      pokemons.value = data;
    });
  });

  const onPrev = () => {
    if (page.value > 0) page.value--;
    else alert('You are on the first page');
  };

  const onNext = () => {
    page.value++;
  };
</script>

<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else class="container">
    <div class="cards">
      <Card
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :image="pokemon.sprites.front_default"
        :name="pokemon.name"
        :abilities="pokemon.abilities"
      />
    </div>
    <div class="button-container">
      <n-button type="primary" @click="onPrev" :disabled="loading">{{
        `<`
      }}</n-button>
      <p style="color: white">Page {{ page + 1 }}</p>
      <n-button type="primary" @click="onNext" :disabled="loading">{{
        `>`
      }}</n-button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
  }
  .cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: auto;
  }
  .cards h3 {
    font-weight: bold;
  }
  .cards p {
    font-size: 10px;
  }
  .jobs {
    display: flex;
    flex-wrap: wrap;
  }
  .button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  .button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
