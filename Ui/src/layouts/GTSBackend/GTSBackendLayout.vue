<template>
  <q-layout view="hHh lpr lff">
    <q-header  class="bg-blue-10 text-white">
      <q-toolbar class="glossy ">
        <q-btn  dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title clickable @click="router.push('/')">
          <q-avatar>
            <img src="icons/favicon-32x32.png" />
          </q-avatar>
          FUPİCO
        </q-toolbar-title>

        <q-btn v-if="$q.screen.gt.sm" flat to="/" label="Anasayfa"></q-btn>

        <q-btn
          v-if="$q.screen.gt.sm"
          flat
          to="/community"
          label="Topluluk"
        ></q-btn>
        <q-btn
          v-if="$q.screen.gt.sm"
          flat
          to="/blog-detail"
          label="Kurallar"
        ></q-btn>
        <q-space v-if="$q.screen.gt.sm" />

        <!-- <q-btn v-if="$q.screen.lt.md" flat to="/blog-detail" icon="list"></q-btn> -->

        <q-btn flat v-if="$q.screen.lt.md" icon="list">
          <q-menu fit>
            <q-list style="min-width: 100px">
              <q-item to="/" clickable>
                <q-item-section>Anasayfa</q-item-section>
              </q-item>
              <q-item to="/community" clickable>
                <q-item-section>Topluluk</q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/blog-detail" clickable>
                <q-item-section>Kurallar</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-white text-indigo-10"
    >
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">
         
            <q-item
              :to="menuItem.url"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
         
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-transparent flat no-shadow">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <a  style="text-decoration: none;" href="https://github.com/Fupico"> <center> <div><b>Fupico</b></div> </center> </a> -->
          <p align="center" class="text-primary text-caption">
            <b> ©2024 Fupico - Tüm Hakları Saklıdır</b>
          </p>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
   
  </q-layout>
</template>

<script setup>
// import Navbar from "./Navbar.vue";
// import Footer from "./Footer.vue";
// import Sidebar from "./Sidebar.vue";

import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
const $q= useQuasar();

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

onMounted(()=>{
  if($q.screen.lt.md){
    leftDrawerOpen.value=false;
  }
  else{
    leftDrawerOpen.value=true;

  }
})
// watch(
//   () => leftDrawerOpen.value,
//   (newValue) => {
//     leftDrawerOpen.value= false;
//   }
// );
const menuList = [
  {
    icon: "inbox",
    label: "GTS Proje",
    url:"/project-detail",
    separator: true,
  },
  {
    icon: "start",
    label: "Başlarken",
    url:"/backend",
    separator: false,
  },
  {
    icon: "send",
    label: "IdentityService",
    url:"",
    separator: false,
  },
  {
    icon: "delete",
    label: "LogService",
    url:"",
    separator: false,
  },
  {
    icon: "error",
    label: "NotificationService",
    url:"",
    separator: true,
  },
  {
    icon: "settings",
    label: "FileService",
    url:"",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    url:"",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    url:"",
    separator: false,
  },
];
</script>

<style lang="scss" scoped></style>
