<template>
  <div class="fullscreen bg-red text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        {{ $t('errorNotFound.errorTitle') }}
      </div>

      <div style="font-size: 10vh">
        {{ $t('errorNotFound.title') }}
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('errorNotFound.desc') }}
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" icon="fa-solid fa-right-to-bracket" unelevated to="/login"
        :label="$t('errorNotFound.login')" no-caps />

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
