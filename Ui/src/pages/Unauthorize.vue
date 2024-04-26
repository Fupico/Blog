<template>
  <div class="fullscreen bg-info text-white text-center q-pa-md flex flex-center">
    <div>

      <div style="font-size: 30vh">
        {{ $t('unauthorize.errorTitle') }}
      </div>

      <div style="font-size: 10vh">
        {{ $t('unauthorize.title') }}
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('unauthorize.desc') }}
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="black" icon="fa-solid fa-right-to-bracket" unelevated to="/login"
        :label="$t('unauthorize.login')" no-caps />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped></style>
