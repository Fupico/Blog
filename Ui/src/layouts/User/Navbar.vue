<template>

  <q-header bordered class="bg-blue-10 text-white">
    <q-toolbar class="glossy ">
      <q-toolbar-title clickable @click="router.push('/')">
        
          <q-avatar>
            <img src="icons/favicon-32x32.png" />
          </q-avatar>
          FUPİCO
      </q-toolbar-title>

      <q-btn v-if="$q.screen.gt.sm" flat to="/" label="Anasayfa"></q-btn>

      <!-- <q-btn
        v-if="$q.screen.gt.sm"
        flat
        to="/community"
        label="Topluluk"
      ></q-btn> -->
      
      <q-btn
        v-if="$q.screen.gt.sm"
        flat
        to="/faq"
        label="Sıkça Sorulan Sorular"
      ></q-btn>
      <q-space v-if="$q.screen.gt.sm" />

      <!-- <q-btn v-if="$q.screen.lt.md" flat to="/blog-detail" icon="list"></q-btn> -->

      <q-btn flat v-if="$q.screen.lt.md" icon="list">
        <q-menu fit>
          <q-list style="min-width: 100px">
            <q-item to="/" clickable>
              <q-item-section>Anasayfa</q-item-section>
            </q-item>
            <!-- <q-item to="/community" clickable>
              <q-item-section>Topluluk</q-item-section>
            </q-item> -->
            <q-separator />
            
            <q-item to="/faq" clickable>
              <q-item-section>Sıkça Sorulan Sorular</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <!-- <q-btn v-if="$q.screen.gt.sm" flat to="/blog-detail" icon="person"></q-btn> -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
</script>

<style scoped></style>
