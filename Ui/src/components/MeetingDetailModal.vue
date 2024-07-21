<template>
     <q-dialog v-model="props.openModalStatus">
      <q-card >
        <q-card-section>
          <div class="text-h6">{{props.data.name}} - {{props.data.date}}</div>
          
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">Konu : {{props.data.subject}} </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">Katılımcılar : <q-btn class="q-ml-xl" flat icon="people" @click="openModalParticipants(props.data.participants)" color="primary" /></div>
          <!-- <div class="text-h6">Katılımcılar : </div> -->
        </q-card-section>

        <q-separator />

        <q-card-section  >
            <p class="text-bold text-body1">Gündem: </p>
          <p class="text-body1" v-for="item in props.data.agendas" :key="item.id"> - {{ item }} </p>
        </q-card-section>

        <q-separator />

        <q-card-section  >
            <p class="text-bold text-body1">Notlar: </p>
          <p class="text-body1" v-for="item in props.data.notes" :key="item.id"> - {{ item }} </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Kapat" @click="closeModal" color="primary" />
        </q-card-actions>
      </q-card>
      <participants-modal :data="dataParticipants" :openParticipantsModalStatus="openParticipantsModalStatus" @closeParticipantsModal="closeParticipantsModal"/>

    </q-dialog>


</template>

<script setup>
import {ref} from "vue"
import ParticipantsModal from "src/components/ParticipantsModal.vue"
const props = defineProps({
    openModalStatus:{
        type:Boolean,
        default:false
    },
    data:{
        type:Object,

    }
});

const emits = defineEmits(['closeDetailModal'])

const closeModal=()=>{
 emits('closeDetailModal', false);
}
const dataParticipants=ref([]);
const openParticipantsModalStatus=ref(false);
const openModalParticipants=(item)=>{

    dataParticipants.value=item;
    openParticipantsModalStatus.value=true;

}
const closeParticipantsModal=(event)=>{
    openParticipantsModalStatus.value=event;
}
</script>