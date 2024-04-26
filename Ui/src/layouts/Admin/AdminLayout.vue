<template>
  <q-layout view="LHh LpR LFf">

    <Header></Header>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

    <!-- *#*<Footer></Footer>-->
  </q-layout>
</template>

<script setup>

import { App } from 'src/App';
import Footer from './Footer.vue';
import SideBarMenu from './SideBarMenu.vue';
import Header from './Header.vue';


</script>


<style lang="scss" scoped></style>
