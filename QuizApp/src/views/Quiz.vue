<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { ref, computed } from 'vue';

  import quizzes from '../data/quizzes.json';

  import QuizHeader from '../components/QuizHeader.vue';
  import Question from '../components/Question.vue';
  import Result from '../components/Result.vue';

  const route = useRoute();
  const router = useRouter();
  const quizId = Number(route.params.id);

  const currentQuestionIndex = ref(0);
  const quiz = quizzes.find(quiz => quiz.id === quizId);

  const numOfCorrectAnswers = ref(0);

  // const questionStatus = ref(
  //   `${currentQuestionIndex.value + 1}/${quiz.questions.length}`
  // );

  // watch(
  //   () => currentQuestionIndex.value,
  //   () => {
  //     questionStatus.value = `${currentQuestionIndex.value + 1}/${
  //       quiz.questions.length
  //     }`;
  //   }
  // );

  const questionStatus = computed(
    () => `${currentQuestionIndex.value}/${quiz.questions.length}`
  );
  const barPercentage = computed(
    () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
  );

  const onOptionSelected = isCorrect => {
    if (isCorrect) numOfCorrectAnswers.value++;

    currentQuestionIndex.value++;
  };
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        v-if="barPercentage !== '100%'"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :result="`${numOfCorrectAnswers}/${quiz.questions.length}`"
      />
    </div>
    <button v-if="barPercentage !== '100%'" @click="router.push('/')">
      Go back to home page
    </button>
  </div>
</template>
