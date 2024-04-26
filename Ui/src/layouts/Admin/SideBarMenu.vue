<template>
  <!-- *#* Menu Start -->
  <q-list bordered>

    <!-- *#* Çıkış Yap Start-->
    <div>

      <q-item clickable v-ripple @click="performLogout()">
        <q-item-section avatar>
          <q-icon color="white" name="fa-solid fa-sign-out-alt" />
        </q-item-section>
        <q-item-section color="white">{{ $t('adminSideBarMenu.logout') }}</q-item-section>

        <q-tooltip>
          {{ $t("adminSideBarMenu.logout") }}
        </q-tooltip>
      </q-item>

    </div>
    <!-- *#* Çıkış Yap End-->


  </q-list>
  <!-- *#* Menu End -->
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()


function performLogout() {
  //logout();
}


var userDetail = JSON.parse(localStorage.getItem("userDetail"))



</script>


<style scoped></style>
