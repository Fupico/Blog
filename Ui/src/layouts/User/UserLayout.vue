<template>
  <q-layout view="hHh lpR lfr">
    
      <Navbar></Navbar>
  
    

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer></Footer>
 

  </q-layout>

  <!-- <q-layout view="hHh lpR lfr">

<q-header class="bg-primary text-white">
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      Title
    </q-toolbar-title>
  </q-toolbar>
</q-header>

<q-page-container>
  <router-view />
</q-page-container>

<q-footer class="bg-grey-8 text-white">
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
      </q-avatar>
      <div>Title</div>
    </q-toolbar-title>
  </q-toolbar>
</q-footer>

</q-layout> -->
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style lang="scss" scoped></style>
