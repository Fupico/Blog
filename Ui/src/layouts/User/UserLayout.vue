<template>
  <q-layout view="LHh LpR LFf">

    <Navbar></Navbar>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

    <Footer></Footer>

  </q-layout>
</template>

<script setup>

import { App } from 'src/App';
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';


</script>


<style lang="scss" scoped></style>
