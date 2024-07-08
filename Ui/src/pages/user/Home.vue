<template>
  <div class="q-pa-md">
    <!-- <div class="q-gutter-md">
      <q-carousel
        arrows
        animated
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        :autoplay="true"
        swipeable
        control-color="white"
        padding
        height="400px"
        class="text-white rounded-borders"
      >
        <q-carousel-slide
          name="first"
          img-src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp"
        >
          
        </q-carousel-slide>
        <q-carousel-slide
          name="second"
          img-src="https://www.hostinger.web.tr/rehberler/wp-content/uploads/sites/6/2017/12/Blog-Nasil-Acilir-1.png"
        >
          
        </q-carousel-slide>
        <q-carousel-slide
          name="third"
          img-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
        >
          
        </q-carousel-slide>
      </q-carousel>
    </div> -->
    <!-- <img src="https://idenfit.com/blog/wp-content/uploads/2020/01/GO%CC%88REV@2x.png"> -->

    <div class=" q-my-xl">
      <div class="row">
        <div class="col-0 col-md-2"></div>
        <div class="col-12 col-md-8">
          <!-- <q-card class="my-card">
            <img src="assets/task.jpg" />
            <q-card-section class="bg-transparent text-indigo-10">
              <div class="text-h6 text-center">Görev Takip Sistemi</div>
            </q-card-section>
            <q-card-section class="bg-transparent text-indigo-10">
              <div class="text-h6 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
            </q-card-section>
           
            <q-card-actions align="right">
              <q-btn class="text-indigo" flat to="/project-detail">DAHA FAZLASI </q-btn>
            </q-card-actions>
          </q-card> -->
          <!-- <img src="https://idenfit.com/blog/wp-content/uploads/2020/01/GO%CC%88REV@2x.png"> -->
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
                    😇Projemiz <b>açık kaynak</b>
                    olacak ve topluluk desteğine açık olduğundan, herkesin
                    katkıda bulunabileceği bir yapıdadır.
                  </div>
                  <!-- <div class="text-grey-10 q-mt-sm text-center">
                  Bu projedeki temel hedefimiz, ekip olarak iş
                  birliği içinde en güncel teknolojileri öğrenip projelerimize
                  entegre ederek süreçleri iyileştiren ve proje takibini
                  kolaylaştıran bir ürün geliştirmektir. Projemiz açık kaynak
                  olacak ve topluluk desteğine açık olduğundan, herkesin katkıda
                  bulunabileceği bir yapıdadır.
                </div> -->

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

      <!-- <div class="row">
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-pa-md"
          
        >
          <BlogCard
            :title="'Backend'"
            description="Açıklama... dlfkld dfdfd d fdf fdfdfd"
            date="12/05/2024"
            :detailUrl="'Backend'"
            img-url="https://fupico.com/assets/gorsel.jpg"
          ></BlogCard>
        </div>
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-pa-md"
          
        >
          <BlogCard
            :title="'Frontend'"
            description="Açıklama... dlfkld dfdfd d fdf fdfdfd"
            date="12/05/2024"
            :detailUrl="'Frontend'"
            img-url="/assets/react2.png"
          ></BlogCard>
        </div>
      </div> -->
    </div>

    <!-- <div class="q-gutter-xl q-ma-xl q-px-xl">
      <q-list bordered class="rounded-borders">
        <q-expansion-item>
          <template v-slot:header>
            <q-item-section align="center"> Biz Kimiz </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section> Neler Yapıyoruz? </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-icon color="purple" name="signal_wifi_off" />
            </q-item-section>

            <q-item-section> Ekip </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div> -->
  </div>

  <!-- *#* Blog Card Start -->
  <!-- <div class="row">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 q-pa-md"
      v-for="(i,index) in 12"
      :key="index++"
    >
      <BlogCard
        :title="'Blog - ' + index++"
        description="Açıklama... dlfkld dfdfd d fdf fdfdfd"
        date="12/05/2024"
        :detailUrl="'BlogDetail'"
        img-url="https://fupico.com/assets/gorsel.jpg"
      ></BlogCard>
    </div>
  </div> -->
  <!-- *#* Blog Card Start -->

  <!-- <div class="q-pa-md">
    <div class="q-gutter-md">
     
    </div>
  </div> -->
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
