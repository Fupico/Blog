<template>

  <div class="q-pa-md">
    <div class="q-gutter-md">

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
        class=" text-white shadow-1 rounded-borders"

    >
      <q-carousel-slide name="first" img-src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Blog - 1</div>
          <div class="text-subtitle1">Açıklama ....</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://www.hostinger.web.tr/rehberler/wp-content/uploads/sites/6/2017/12/Blog-Nasil-Acilir-1.png">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Blog - 2</div>
          <div class="text-subtitle1">Açıklama ....</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Blog - 3</div>
          <div class="text-subtitle1">Açıklama ....</div>
        </div>
      </q-carousel-slide>
    </q-carousel>


    </div>
  </div>

  <!-- *#* Blog Card Start -->
  <div class=" row">

    <div class="col-12 col-md-6 col-lg-4 col-xl-3 q-pa-md " v-for="(i,index) in 10" :v-key="index++">

      <BlogCard :title="'Blog - '+index++"
      description="Açıklama... dlfkld dfdfd d fdf fdfdfd"
      date="12/05/2024"

      img-url="https://bilgiyazan.com.tr/wp-content/uploads/2018/01/BigliYazan-AspNetCore-E%C4%9Fitimi1.jpg"></BlogCard>


    </div>

  </div>
    <!-- *#* Blog Card Start -->

</template>

<script setup>
import { ref } from "vue";
import BlogCard from "components/BlogCard.vue"


var slide = ref('style')
var lorem= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
var slide= ref('first')


</script>

<style scoped>

.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>
