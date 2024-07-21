<template>
     <q-dialog v-model="props.openParticipantsModalStatus">
      <q-card :style="$q.screen.lt.md ? 'width:350px;':'width:500px;'">
        <q-card-section>
          <div class="text-h6">Katılımcılar</div>
          
        </q-card-section>

        <q-separator />



        <q-separator />

        <q-card-section >
           
          <p class="text-body1" v-for="item in props.data" :key="item.id"> - {{ item }} </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Kapat" @click="closeModal" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>
<script setup>
import {ref} from "vue"

const props = defineProps({
    openParticipantsModalStatus:{
        type:Boolean,
        default:false
    },
    data:{
        type:Array,

    }
});

const emits = defineEmits(['closeParticipantsModal'])

const closeModal=()=>{
 emits('closeParticipantsModal', false);
}

</script>