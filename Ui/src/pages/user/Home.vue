<template>
  <div class=" row">

    <div class="col-3 q-pa-md " v-for="(i,index) in 10" :v-key="index++">

      <BlogCard :title="'Blog - '+index++"
      description="Açıklama... dlfkld dfdfd d fdf fdfdfd"
      date="12/05/2024"

      img-url="https://bilgiyazan.com.tr/wp-content/uploads/2018/01/BigliYazan-AspNetCore-E%C4%9Fitimi1.jpg"></BlogCard>


    </div>




  </div>
</template>

<script setup>
import BlogCard from "components/BlogCard.vue"

</script>

<style scoped></style>
