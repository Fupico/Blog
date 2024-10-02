<template>
  <div class="q-ma-sm">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="/assets/banner.jpg" />
      </template>

      <h4 class="text-white text-bold">{{ dataMeeting.subject }}</h4>
    </q-parallax>
    <!-- <div align="right">
      <q-btn
        label="Projeye DÖN"
        flat
        icon="end"
        @click="openModalParticipants(dataMeeting.participants)"
        color="primary"
      />
    </div> -->
    <div class="q-my-sm">
      <div class="row text-justify">
        <div class="col-0 col-md-4"></div>
        <div class="col-12 col-md-4">
          <q-card class="no-shadow">
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-btn
                    label="Katılımcılar"
                    flat
                    icon="people"
                    @click="openModalParticipants(dataMeeting.participants)"
                    color="primary"
                  />
                </div>
                <div align="right" class="col-6">
                  <q-btn
                    label="Projeye DÖN"
                    flat
                    icon="keyboard_return"
                    :to="'/project-detail'"
                    color="deep-orange"
                  />
                </div>
              </div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <p class="text-bold text-body1">Gündem:</p>
              <p
                class="text-body1"
                v-for="item in dataMeeting.agendas"
                :key="item.id"
              >
                - {{ item }}
              </p>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <p class="text-bold text-body1">Notlar:</p>
              <p
                class="text-body1"
                v-for="item in dataMeeting.notes"
                :key="item.id"
              >
                - {{ item }}
              </p>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-0 col-md-4"></div>
      </div>

      <participants-modal
        :data="dataParticipants"
        :openParticipantsModalStatus="openParticipantsModalStatus"
        @closeParticipantsModal="closeParticipantsModal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const item = ref(parseInt(route.params.id, 10));

const dataMeeting = ref({});
const meetingList = ref([
  {
    id: 1,
    name: "Genel Toplantı",
    subject: "Servis Dağılımı ve Frontend",
    agendas: [
      "Tanışma",
      "Servisler Neler Olmalı?",
      "Servis Dağılımı",
      "Frontend Kullanılacak Kütüphaneler",
    ],
    notes: [
      "Backend: User Service, Identity Service, Task Service, Log Service, Notification Service, File Service olarak 6 servis belirlendi.",
      "Frontend: React, Ant Design UI kütüphaneleri kullanılacak, model yapılarında Typescript tercih edildi.",
      "User Service: Ömer Çakmak, Abdullah Hamzaçebi ",
      "Identity Service: Devrim Mehmet Pattabanoğlu, Ümit Şahin, Mustafa Emre İlhan",
      "Task Service: Efrun Evdi, Mert Dedeoğlu",
      "Log Service: İbrahim Hakkı Doğan",
      "Notification Service: Merve Özalp, Utku Özen",
      "File Service: Şule Celep, Furkan Daloğlu",
      "Frontend React: İbrahim Hakkı Doğan, Ömer Çakmak, Şule Celep",
    ],
    participants: [
      "Abdullah Hamzaçebi",
      "Devrim Mehmet Pattabanoğlu",
      "Efrun Evdi",
      "Furkan Daloğlu",
      "İbrahim Hakkı Doğan",
      "Mert Dedeoğlu",
      "Merve Özalp",
      "Mustafa Emre İlhan",
      "Ömer Çakmak",
      "Şule Celep",
      "Utku Özen",
      "Ümit Şahin",
    ],
    date: "01/07/2024",
  },
  {
    id: 2,
    name: "Genel Toplantı",
    subject: "Proje Takibi",
    agendas: [
      "Tanışma",
      "Proje Sunum",
      "Eğitimlerde Neler Yapıldı?",
      "Servislerde Neler Yapıldı?",
    ],
    notes: [
      "Loglama için ayrı bir servis açılması yerine her bir servis için ayrı loglama yapılması üzerine araştırma yapılacak.",
      "User Servis ile Identity Servis ayrı ayrı yapılmak yerine, UserManagementSystem adı altında birleştirilecek.",
      "Projedeki görev takip için program araştırılacak.",
    ],
    participants: [
      "Abdullah Hamzaçebi",
      "Devrim Mehmet Pattabanoğlu",
      "Efrun Evdi",
      "Furkan Daloğlu",
      "İbrahim Hakkı Doğan",
      "Mert Dedeoğlu",
      "Merve Özalp",
      "Mustafa Emre İlhan",
      "Ömer Çakmak",
      "Şule Celep",
      "Utku Özen",
      "Ümit Şahin",
    ],
    date: "08/07/2024",
  },
  {
    id: 3,
    name: "Genel Toplantı",
    subject: "PROJEYE GENEL BAKIŞ VE YENİ KATILIMCILAR",
    agendas: [
      "Yeni Katılanlar ile Tanışma ",
      "Proje Sunum",
      "Servislerde Neler Yapıldı?",
    ],
    notes: [
      "Proje genel hatlarıyla anlatıldı ve yeni gelen katılımcılarla tanışıldı.",
      " Log servisinin projeden çıkarılacağı bilgisi verildi.",
      "Eksik olan servislere göre yeni gelen ekip üyeleri uygun gruplara dağıtıldı.",
      "Servislerle ilgili araştırma yapılması ve öğretici metinlerin oluşturularak ekip ile paylaşılması gerektiği vurgulandı.",
    ],
    participants: [
      "Abdullah Hamzaçebi",
      "Devrim Mehmet Pattabanoğlu",
      "Efrun Evdi",
      "Furkan Daloğlu",
      "İbrahim Hakkı Doğan",
      "Mert Dedeoğlu",
      "Merve Özalp",
      "Mustafa Emre İlhan",
      "Ömer Çakmak",
      "Şule Celep",
      "Utku Özen",
      "Ümit Şahin",
      "Bahadır ve İlker (Yeni katılan ekip üyeleri)"

    ],
    date: "23/09/2024",
  },
]);
onMounted(() => {
  console.log("item", item.value);
  dataMeeting.value = meetingList.value.find((x) => x.id === item.value);
  console.log("dataMeeting", dataMeeting);
});
import ParticipantsModal from "src/components/ParticipantsModal.vue";

const emits = defineEmits(["closeDetailModal"]);

const closeModal = () => {
  emits("closeDetailModal", false);
};
const dataParticipants = ref([]);
const openParticipantsModalStatus = ref(false);
const openModalParticipants = (item) => {
  dataParticipants.value = item;
  openParticipantsModalStatus.value = true;
};
const closeParticipantsModal = (event) => {
  openParticipantsModalStatus.value = event;
};

watch(
  () => item.value,
  (newItem) => {
    console.log("newItem", newItem);
  }
);
</script>
