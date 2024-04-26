<template>
  <q-header elevated class="bg-dark text-white" height-hint="98">
    <q-toolbar>

      <q-btn v-if="leftDrawerOpen == false" dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen">
        <q-tooltip>
          {{ $t("adminHeader.menuClose") }}
        </q-tooltip>
      </q-btn>

      <span v-else>

        <q-btn v-if="miniState == false" dense flat round icon="menu" @click="miniState = true">
          <q-tooltip>
            {{ $t("adminHeader.menuClose") }}
          </q-tooltip>
        </q-btn>

        <q-btn v-else-if="miniState == true" dense flat round icon="fa-solid fa-arrow-right" @click="miniState = false">
          <q-tooltip>
            {{ $t("adminHeader.menuOpen") }}
          </q-tooltip>
        </q-btn>

      </span>

      <q-btn round icon="fa-solid fa-globe" style="margin-right: 10px;">
        <q-menu auto-close class="toolbar-menu">
          <q-list>

            <q-item class="text-dark" clickable v-ripple @click="changeLocale('tr')">
              <q-item-section>Tr</q-item-section>
            </q-item>

            <q-item class="text-dark" clickable v-ripple @click="changeLocale('en')">
              <q-item-section>En</q-item-section>
            </q-item>

          </q-list>
        </q-menu>

        <q-tooltip>
          {{ $t("adminHeader.language") }}
        </q-tooltip>
      </q-btn>


      <q-btn round class="searchicon" icon="fa-solid fa-right-from-bracket" @click="performLogout()">

        <q-tooltip>
          {{ $t("adminHeader.logout") }}
        </q-tooltip>
      </q-btn>
    </q-toolbar>


    <q-input v-if="requireSearch && searhBarVisible" dark dense standout bg-color="white" v-model="searchKeyword"
      input-class="text-left" label="Sistemde Ara" class="search">

    </q-input>
  </q-header>


  <q-drawer v-model="leftDrawerOpen" show-if-above :mini="!leftDrawerOpen || miniState" side="left" bordered
    @click.capture="drawerClick" class="bg-dark text-white">
    <q-card class="my-card text-white bg-dark">

      <q-card-section v-if="miniState == false">



        <div class="column justify-center items-center">
          <div>
            <q-item class="text-dark" to="/profile" clickable v-ripple>
              <q-avatar size="80px" style="background-color: white;">
                <q-img fit="contain" :src="userDetail.imageUrl" />
              </q-avatar>
            </q-item>
          </div>

          <div class="text-weight-bold" style="font-size: x-large;">
            {{ userDetail.name }}
            <span v-if="userDetail.middleName">{{ userDetail.middleName }}</span>

          </div>
          <div class="text-weight-bold" style="font-size: x-large;">
            {{ userDetail.surname }}
          </div>

          <div class="text-subtitle2" style="color : #ccc">
            {{ project.version }}
          </div>

        </div>




      </q-card-section>

    </q-card>



    <SideBarMenu></SideBarMenu>

    <div class="fupico">

      <a style="text-decoration: none; color: gray;" target="_blank" href="https://avatars.githubusercontent.com/u/168179983?s=200&v=4">
        <b> {{ project.projectBy }}</b>
      </a>
    </div>
  </q-drawer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { App } from 'src/App';
import Footer from './Footer.vue';
import SideBarMenu from './SideBarMenu.vue';
import Header from './Header.vue';

var project = App().project;

//const { logout } = useAuthApi();
//const { changeTheme } = useTheme();

const leftDrawerOpen = ref(false)

const rightDrawerOpen = ref(false)


var miniState = ref(true)


var drawer = ref(false)


function drawerClick(e) {
  // if in "mini" state and user
  // click on drawer, we switch it to "normal" mode
  if (miniState.value) {
    miniState.value = false

    // notice we have registered an event with capture flag;
    // we need to stop further propagation as this click is
    // intended for switching drawer to "normal" mode only
    e.stopPropagation()
  }
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
const searhBarVisible = ref(false);


const router = useRouter()

const { locale: i18n } = useI18n({ useScope: 'global' })
function changeLocale(loc) {
  i18n.value = loc
}
function getLocale() {
  return i18n.value
}
function performLogout() {
  //logout();
}

var userDetail = ref({
  'name': null,
  'middleName': null,
  'surname': null,
  'imageUrl': null,
  'title': null,
  'userID': null,
});

const fetchDataFromLocalStorage = () => {
  //const workplaceData = JSON.parse(localStorage.getItem('workplaceDetail'));
  const userData = JSON.parse(localStorage.getItem('userDetail'));
  //workplaceDetail.value = workplaceData;
  userDetail.value = userData;


};


onMounted(() => {
  // Sayfa yüklendiğinde Local Storage'dan veriyi çek

  //fetchDataFromLocalStorage();

});






</script>
<style lang="scss" scoped>
html {
  height: 100%
}

body {
  //background-image: radial-gradient(#444cf7 0.5px, #fff 0.5px);
  //background-size: 10px 10px;
  background: none;
  background-color: #fff;
  height: 100%;
}

.searchicon {
  margin-right: 10px;

  @media(min-width: $breakpoint-xs) {}
}

.search {
  width: 80%;
  right: 3px;
  top: $toolbar-min-height;
  position: absolute;

  @media(min-width: $breakpoint-xs) {
    max-width: 500px;
  }
}

.toolbar-menu {
  width: 100%;
  padding: 0px;

  .q-item {
    font-size: small;
    padding: 10px;
  }

  @media (min-width: $breakpoint-xs) {
    width: 300px;
  }
}

.fupico {
  color: #808080;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: underline;
  font-size: 15px;
}
</style>
