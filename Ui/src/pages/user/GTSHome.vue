<template>
    <div class="q-pa-md">
  
      <div class=" q-my-xl">
        <div class="row">
          <div class="col-0 col-md-2"></div>
          <div class="col-12 col-md-8">
  
            <q-card
              class="my-card"
              style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              flat
  
            >
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs q-mx-sm">
                  <div class="text-overline text-center text-bold">
                    👋 FUPİCO - GTS PROJESİ
                  </div>
  
                  <q-card-section class="q-pt-xs">
                    <q-img
                      class="rounded-borders"
                      src="assets/task.jpg"
                      height="150px"
                    />
                  </q-card-section>
  
                  <q-card-section class="q-pt-xs">
                    <div class="text-h5 text-bold text-center q-mt-sm q-mb-xs">
                      GTS - Görev Takip Sistemi 🚀
                    </div>
  
                    <div
                      class="text-justify q-mt-sm q-mb-xs"
                      style="font-size: 20px"
                    >
                      📌 <strong>Görev Takip Sistemi</strong> projesindeki temel
                      hedefimiz, ekip olarak iş birliği içinde en güncel
                      teknolojileri öğrenip projelerimize entegre ederek süreçleri
                      iyileştiren ve proje takibini kolaylaştıran bir ürün
                      geliştirmektir.
                    </div>
                    <div
                      class="text-grey-10 q-mt-sm text-justify"
                      style="font-size: 20px"
                    >
                      😇 Projemiz <b>açık kaynak</b>
                      olacak ve topluluk desteğine açık olduğundan, herkesin
                      katkıda bulunabileceği bir yapıdadır.
                    </div>
  
  
                    <div
                      class="text-grey-10 q-mt-sm text-justify"
                      style="font-size: 20px"
                    >
                      💡 Bu projeye olan ilginiz ve desteğiniz bizim için çok
                      önemli.
                    </div>
                    <div
                      class="text-grey-10 q-mt-sm text-justify"
                      style="font-size: 20px"
                    >
                      🤓 Fikirlerinizi, önerilerinizi ve katkılarınızı dört gözle
                      bekliyoruz!
                    </div>
                    <div
                      class="text-grey-10 q-mt-sm text-justify"
                      style="font-size: 20px"
                    >
                      👇 Detaylar ve gelişmeler için bizi takip etmeyi unutmayın!
                    </div>
                  </q-card-section>
                </q-card-section>
              </q-card-section>
  
              <q-separator />
  
              <q-card-actions align="center">
                <!-- <q-btn flat round icon="code" />
                <q-btn flat> 04/07/2024 </q-btn> -->
                <q-btn
                  align="between"
                  push
                  class="btn-fixed-width text-bold bg-indigo-10"
                  to="/project-detail"
                  color="accent"
                  label="PROJEYE GİT"
                  icon-right="flight_takeoff"
                />
  
                <!-- <q-btn glossy class="text-bold bg-indigo-10" flat color="white" to="/project-detail" icon-right="send"> PROJEYE GİT   </q-btn> -->
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-0 col-md-2"></div>
        </div>
  
  
      </div>
  
  
    </div>
  
  
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BlogCard from "components/BlogCard.vue";
  
  var slide = ref("style");
  var lorem =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.";
  var slide = ref("first");
  </script>
  
  <style scoped>
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  </style>
  