<script setup>
  import { ref, watch } from 'vue';
  import gsap from 'gsap';

  import q from '../data/quizzes.json';
  import Card from '../components/Card.vue';

  const quizzes = ref(q);
  const search = ref('');

  // watch(search, () => {
  //   quizzes.value = q.filter(quiz =>
  //     quiz.name.toLowerCase().includes(search.value.toLowerCase())
  //   );
  // });

  const beforeEnter = el => {
    // card-enter-from
    console.log('before enter');
    el.style.opacity = 0;
    el.style.transform = 'translateY(-60px)';
  };

  const enter = el => {
    // card-enter-to
    console.log('enter');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      delay: el.dataset.index * 0.3,
    });
  };

  const afterEnter = el => {
    // card-enter-active
    console.log('after enter');
  };
</script>

<template>
  <header>
    <h1>Quizzes</h1>
    <input v-model.trim="search" type="text" placeholder="Search..." />
  </header>
  <div class="options-container">
    <TransitionGroup
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <Card
        v-for="(quiz, index) in quizzes"
        :key="quiz.id"
        :quiz="quiz"
        :data-index="index"
      />
    </TransitionGroup>
    <!-- <div v-for="quiz in quizzes" class="card">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div> -->
  </div>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  /* .card-enter-from {
    transform: translateY(-30px);
    opacity: 0;
  }

  .card-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .card-enter-active {
    transition: all 0.5s ease;
  } */
</style>
