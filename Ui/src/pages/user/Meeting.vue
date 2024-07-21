<template>
  <div class="q-ma-sm">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="/assets/banner.jpg" />
      </template>

      <h4 class="text-white text-bold">TOPLANTILAR</h4>
    </q-parallax>

    <div class="q-my-sm">
      <q-markup-table flat bordered>
        <thead class="bg-blue-8 text-white">
          <tr>
            <th class="text-center">#</th>
            <th class="text-center">#</th>
            <th class="text-center">Konusu</th>
            <th class="text-center">Toplantı Tarihi</th>
          </tr>
        </thead>
        <tbody :class="$q.dark.isActive ? 'bg-purple-9' : 'bg-white-2'">
          <tr v-for="item in meetingList" :key="item.id">
            <td class="text-center">
              <q-btn
                flat
                icon="visibility"
                @click="openDetailModal(item)"
                rounded
              />
              
            </td>
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.subject }}</td>
            <td class="text-center">{{ item.date }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>

    <meeting-detail
      :openModalStatus="openModalStatus"
      @closeDetailModal="closeDetailModal"
      :data="dataMeeting"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MeetingDetail from "src/components/MeetingDetailModal.vue";
const meetingList = ref([
  {
    id: 1,
    name: "Genel Toplantı",
    subject: "SERVİS DAĞILIMI VE FRONTEND",
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
    subject: "PROJE TAKİBİ",
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
]);

const openModalStatus = ref(false);
const dataMeeting = ref({});
const openDetailModal = (item) => {
  dataMeeting.value = item;
  openModalStatus.value = true;
};
const closeDetailModal = (event) => {
  openModalStatus.value = event;
};
</script>
