<template>
  <div class="q-pa-md">
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="/assets/banner.jpg" />
        </template>

        <h4 class="text-white text-bold">Görev Takip Sistemi</h4>
      </q-parallax>
    </div>

    <div class="q-ma-md">
      <q-breadcrumbs
        separator="---"
        class="text-orange"
        active-color="secondary"
      >
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Projeler" to="/" icon="widgets" />
        <q-breadcrumbs-el label="Proje Detay" icon="navigation" />
      </q-breadcrumbs>
    </div>

    <div class="row">
      <div class="col-12 col-md-8">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="/assets/task.jpg" />

            <q-card-section>
              <div class="text-h6 text-center">GTS - GÖREV TAKİP SİSTEMİ</div>
              <div class="text-subtitle2 text-center">FUPİCO</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              reprehenderit nihil aliquid earum quia fugiat accusantium labore
              aut minus, magni veniam. Rerum saepe quae reprehenderit officia.
              Magni dolor molestiae dolorem tempora illum nemo laborum
              temporibus necessitatibus asperiores? Neque hic odit ex optio
              repudiandae velit excepturi culpa, eos ullam nostrum beatae?
            </q-card-section>
            <q-card-actions class="q-mb-xl" align="around">
              <q-btn to="/backend" label="Backend" push color="purple" />
              <q-btn to="/frontend" label="Frontend" push color="indigo" />
              
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md q-gutter-md">
          <q-list bordered class="rounded-borders">
            <q-item-label header>KATKIDA BULUNANLAR</q-item-label>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-list>

          <q-list bordered class="rounded-borders">
            <q-item-label header>SON TOPLANTILAR</q-item-label>

            <q-item class="q-mb-md">
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium">28/06/2024</span>
                </q-item-label>

                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer text-bold">Tanışma</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item class="q-mb-md">
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium">02/07/2024</span>
                </q-item-label>

                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer text-bold">SERVİS PAYLAŞIMI</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="q-pa-md" flat bordered>
            Konu Etiketleri:
            <q-chip outline color="teal" text-color="white" label="C#" />
            <q-chip outline color="teal" text-color="white" label=".Net Core" />
            <q-chip outline color="teal" text-color="white" label="React" />
            <q-chip
              outline
              color="teal"
              text-color="white"
              label="Microservice"
            />
            <!-- <q-btn dense flat style="color: goldenrod;" label="Microservice" />
      <q-btn dense flat style="color: goldenrod;" label="C#" />
      <q-btn dense flat style="color: goldenrod;" label=".Net Core" />
      <q-btn dense flat style="color: goldenrod;" label="React" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
