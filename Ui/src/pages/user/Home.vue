<template>
  <div class="q-pa-md">
    <div>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="assets/task.jpg"
          class="animated-zoom"
        >
          <div class="overlay-container">
            <div class="text-overlay">
              <p class="text-bold text-h6">GTS Görev Takip Sistemi</p>
              <p class="text-body1">
                Projeleri planlamak, görevleri yönetmek ve ekip koordinasyonunu
                sağlamak için modern bir sistem üzerinde çalışıyoruz.
              </p>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="/images/baristatime2.png"
          class="animated-zoom"
        >
          <div class="overlay-container">
            <div class="text-overlay">
              <p class="text-bold text-h6">Dijital menülerle tanışın.</p>
              <p class="text-body1">
                Restoran ve kafeler için hızlı, temassız ve şık QR kodlu menü
                çözümü.
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          :name="3"
          img-src="/images/polipersjournal.png"
          class="animated-zoom"
        >
          <div class="overlay-container">
            <div class="text-overlay">
              <p class="text-bold text-h6">
                Bilgiyi paylaşmanın en güzel yolu.
              </p>
              <p class="text-body1">
                Kullanıcıların tecrübelerini ve projelerini paylaştığı modern
                blog altyapısı.
              </p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="q-ma-sm q-mt-xl" align="center">
      <div class="text-h4 text-primary text-center q-ma-md">Projelerimiz</div>
      <q-separator class="q-ma-none" color="grey-4" />
    </div>
    <div class="q-my-md">
      <div class="row">
        <div class="col-12 col-md-4">
          <q-card
            class="my-card q-ma-sm"
            style="
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
            "
            flat
          >
            <q-card-section horizontal>
              <q-card-section class="q-ma-none q-pa-none">
                <div class="text-overline text-center text-bold">
                  👋 GTS PROJESİ
                </div>

                <q-card-section>
                  <q-img
                    class="rounded-borders"
                    src="assets/task.jpg"
                    height="150px"
                  />
                </q-card-section>

                <q-card-section style="height: 200px">
                  <div class="text-h6 text-bold text-center q-mt-sm q-mb-xs">
                    GTS - Görev Takip Sistemi 🚀
                  </div>

                  <div
                    class="text-justify q-mt-sm q-mb-xs"
                    style="font-size: 14px"
                  >
                    📌 <strong>Görev Takip Sistemi</strong> projesindeki temel
                    hedefimiz, ekip olarak iş birliği içinde en güncel
                    teknolojileri öğrenip projelerimize entegre ederek süreçleri
                    iyileştiren ve proje takibini kolaylaştıran bir ürün
                    geliştirmektir.
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card-section>

            <q-card-actions class="q-ma-none" align="center">
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
        <div class="col-12 col-md-4">
          <q-card
            class="my-card q-ma-sm"
            style="
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
            "
            flat
          >
            <q-card-section horizontal>
              <q-card-section class="q-ma-none q-pa-none">
                <div class="text-overline text-center text-bold">
                  👋 QR MENU PROJESİ
                </div>

                <q-card-section>
                  <q-img
                    class="rounded-borders"
                    src="/images/baristatime.png"
                    height="150px"
                  />
                </q-card-section>

                <q-card-section style="height: 200px">
                  <div class="text-h6 text-bold text-center q-mt-sm q-mb-xs">
                    QR MENU PROJESİ 🚀
                  </div>

                  <div
                    class="text-justify q-mt-sm q-mb-xs"
                    style="font-size: 14px"
                  >
                    📌<strong>QR MENU PROJESİ'ndeki</strong> temel hedefimiz;
                    işletmelere, kategori bazlı yemek yönetimi, çoklu dil
                    desteği, fiyatlandırma, ürün görseli ekleme ve QR kod
                    üzerinden erişim gibi modern ihtiyaçları karşılayan esnek
                    bir panel sunmaktır.
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card-section>

            <q-card-actions class="q-ma-none" align="center">
              <!-- <q-btn flat round icon="code" />
              <q-btn flat> 04/07/2024 </q-btn> -->

              <q-btn
                align="between"
                push
                class="btn-fixed-width text-bold bg-indigo-10"
                href="https://qrmenu.fupico.com/"
                target="_blank"
                color="accent"
                label="CANLIYA GİT"
                icon-right="flight_takeoff"
              />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card
            class="my-card q-ma-sm"
            style="
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              border: 1px solid #e0e0e0;
              border-radius: 8px;
            "
            flat
          >
            <q-card-section horizontal>
              <q-card-section class="q-ma-none q-pa-none">
                <div class="text-overline text-center text-bold">
                  👋 DERGİ/BLOG PROJESİ
                </div>

                <q-card-section>
                  <q-img
                    class="rounded-borders"
                    src="/images/polipersjournal.png"
                    height="150px"
                  />
                </q-card-section>

                <q-card-section style="height: 200px">
                  <div class="text-h6 text-bold text-center q-mt-sm q-mb-xs">
                    DERGİ/BLOG PROJESİ 🚀
                  </div>

                  <div
                    class="text-justify q-mt-sm q-mb-xs"
                    style="font-size: 14px"
                  >
                    📌 <strong>DERGİ/BLOG PROJESİ</strong>, yazar profilleri,
                    kategori bazlı içerik filtreleme, PDF destekli makale sunumu
                    ve çoklu dilde SEO uyumlu içerik yönetimi gibi
                    özellikleriyle içerik üreticileri ve okuyucular arasında
                    köprü kurmayı hedeflemektedir.
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card-section>

            <q-card-actions class="q-ma-none" align="center">
              <!-- <q-btn flat round icon="code" />
              <q-btn flat> 04/07/2024 </q-btn> -->
              <q-btn
                align="between"
                push
                class="btn-fixed-width text-bold bg-indigo-10"
                to="/journal-detail"
                color="accent"
                label="PROJEYE GİT"
                icon-right="flight_takeoff"
              />

              <!-- <q-btn glossy class="text-bold bg-indigo-10" flat color="white" to="/project-detail" icon-right="send"> PROJEYE GİT   </q-btn> -->
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogCard from "components/BlogCard.vue";
const slide = ref(1);
const autoplay = ref(true);
var lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.";
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

@keyframes zoom-animation {
  0% {
    transform: scale(1); /* Normal boyut */
  }

  100% {
    transform: scale(1.1); /* Eski boyuta dönüş */
  }
}

.animated-zoom {
  position: relative;
  overflow: hidden; /* Görüntü taşmasını engellemek için */
  background-size: cover; /* Arka planı tam kapla */
  background-position: center; /* Ortala */
  animation: zoom-animation 10s infinite; /* Sürekli yakınlaşma animasyonu */
  transform-origin: center; /* Ölçekleme merkezi */
}

.overlay-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 5%;
  width: 40%; /* Sol tarafın genişliği */
  height: 50%;
  background-color: rgba(76, 74, 74, 0.5); /* %70 şeffaf siyah arka plan */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Metni dikey ortala */
  padding: 20px; /* Metin kenar boşluğu */
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .text-overlay {
    width: 100%; /* Tam genişlik */
    height: 40%; /* Alt kısmın yüksekliği */
    top: auto;
    bottom: 10%; /* Alt kısma yerleştir */
    left: 0;
    justify-content: flex-end; /* Metni alt kısma hizala */
  }
}

@media (max-width: 520px) {
  .text-overlay {
    width: 100%; /* Tam genişlik */
    height: 60%; /* Alt kısmın yüksekliği */
    top: auto;
    bottom: 10%; /* Alt kısma yerleştir */
    left: 0;
    justify-content: flex-end; /* Metni alt kısma hizala */
  }
}
</style>
