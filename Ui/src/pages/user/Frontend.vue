<template>
  <div class="q-pa-md">
    <!-- <div class="text-h6 text-center">
      Görev Takip Sistemi için Mikroservis Mimarisi: BACKEND 
    </div>
    <div class="text-subtitle2 text-center">BACKEND</div>

    <div class="q-my-lg" align="center">
        <img src="/assets/schemaProject.png" width="50%"/>
        


    </div> -->
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">FRONTEND</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Görev Takip Sistemi için Kullanıcı Arayüzü: FRONTEND</div>
          <q-card-section v-if="$q.screen.lt.sm" class="flex flex-center">
          <q-img
            class="rounded-borders"
            src="/assets/react2.png"
          />
        </q-card-section>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="local_bar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Task Service</q-item-label>
            <q-item-label caption>Have a drink.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="local_gas_station" />
          </q-item-section>

          <q-item-section>
            <q-item-label>User Service</q-item-label>
            <q-item-label caption>Fill your gas tank.</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Log Service</q-item-label>
            <q-item-label caption>Watch a movie.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section v-if="$q.screen.gt.xs" class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="/assets/react2.png"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="code" />
        <q-btn flat>
          04/07/2024
        </q-btn>
        <q-btn flat color="primary">
          GİTHUB LİNKİ
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script setup></script>
