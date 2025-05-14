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
                    :to="'/journal-detail'"
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
    name: "Dergi/Blog Projesi Tanıtımı ve İş Akışı",
    subject: "Proje Başlangıç Toplantısı",
    agendas: [
      "Tanışma",
      "Proje Genel Tanıtımı",
      "Makale Yükleme Süreci",
      "Programın İş Mantığının Açıklanması",
    ],
    notes: [
      "Toplantı tanışma ile başladı.",
      "Proje genel hatlarıyla tanıtıldı.",
      "Proje geliştirme süreci detaylıca anlatıldı.",
      "İş akışı hakkında bilgi verildi.",
    ],
    participants: [
      "Devrim Mehmet Pattabanoğlu",
      "Şule Celep",
      "Dilara Melis Dümdüz",
      "Ahmet Meriç Kınalı",
      "Eylem Bozdak",
    ],
    date: "27/04/2025",
  },
  {
    id: 2,
    name: "Genel Toplantı",
    subject: "Proje Gelİştİrme Sürecİ ve İş Akışı",
    agendas: [
      "Yol Haritası Belirleme",
      "Servisler Neler Olmalı?",
      "Servis Dağılımı",
      "Frontend Kullanılacak Kütüphaneler",
      "Backend: Login ve Register API uçlarının düzenlenmesi",
      "Swagger yapılandırması ve publish işlemleri",
      "Frontend: Login, Register ve AdminLayout geliştirme",
      "About sayfası erişim kontrolü",
      "Register sayfasının dinamik hale getirilmesi",
      "Company yerine Project Setting yapısına geçiş",
      "About CRUD API uçlarının yazılması",
    ],
    notes: [
      "Yol haritası belirlendi.",
      "Kullanılacak teknolojiler hakkında konuşuldu.",
      "Proje reposu oluşturuldu.",
      "Login ve Register API uçları yeniden yazıldı.",
      "Swagger paketleri yüklendi ve publish alındı.",
      "Login, Register ve AdminLayout bileşenleri geliştirildi.",
      "About sayfası admin rolü dışında 404'e yönlendirilecek.",
      "Register sayfası dinamikleştirilecek.",
      "Company alanı kaldırılacak, ayarlar Project Settings üzerinden alınacak.",
      "About için CRUD API'ler yazılacak.",
    ],
    participants: ["Devrim Mehmet Pattabanoğlu", "Şule Celep"],
    date: "01/05/2025",
  },
  {
    id: 3,
    name: "Katkı Sağlama Görüşmesi",
    subject: "Projeye Katkı Süreci",
    agendas: [
      "Proje Hakkında Genel Bilgilendirme",
      "Katkı Sağlama Sürecinin Açıklanması",
      "Frontend Geliştirmelerine Katkı Olanakları",
    ],
    notes: [
      "Proje genel yapısı ve amacı hakkında bilgi verildi.",
      "Frontend tarafına nasıl katkıda bulunabileceği konuşuldu.",
      "Hangi sayfanın geliştirileceği ve ilgili API uçlarının bir sonraki toplantıda belirleneceği belirtildi.",
    ],
    participants: ["Devrim Mehmet Pattabanoğlu", "Şule Celep", "Zeynep Danış"],
    date: "12/05/2025",
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
