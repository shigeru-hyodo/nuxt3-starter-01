<!-- タイマーを作る -->
<template>
  <div>
    <AppH2>タイマー</AppH2>
    <p>{{ currentTime }}</p>
    <button @click="start">
      スタート
    </button>
    <button @click="stop">
      ストップ
    </button>
  </div>
</template>

<script setup lang="ts">
const time = ref(0);

const start = () => {
  const id = setInterval(() => {
    time.value++;
  }, 1000);
  watch(
    () => time.value,
    () => {
      if (time.value >= 10) {
        clearInterval(id);
      }
    },
  );
};

const stop = () => {
  time.value = 0;
};

// use computed
const currentTime = computed(() => {
  return time.value + '秒経過';
});
</script>
