<template>

  <!-- *#* card start -->
  <div >


    <div class="blog-content">

      <q-card class="blog-card" flat bordered>
        <q-img
          :src="$props.imgUrl"
          style=" height: 250px; background-color:#ccc;"
          fit="scale-down"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">{{ $props.date }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            <span v-if="$props.title.length<25">
              {{ $props.title }}
            </span>

            <span v-else>
              {{ $props.title.substring(0,25) }}
              <span>...</span>
            </span>

          </div>
          <div class="text-caption text-grey" style="height: 50px;">

            <span v-if="$props.description.length<100">
              {{ $props.description }}
            </span>

            <span v-else>
              {{ $props.description.substring(0,100) }}
              <span>...</span>
            </span>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="teal" label="Detail" :to="'/'+$props.detailUrl" />

          <q-space />


        </q-card-actions>


      </q-card>

    </div>





    </div>


  </template>

  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({

    imgUrl: {
      type: String,
      default: ""
    },
    detailUrl: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  })
  </script>


  <style scoped>

  .blog-card{
    width: 100%;


  }

  .blog-content{
    box-shadow: 2px 2px 10px 4px #ddd;

  }
  </style>
