<template>
  <div class="q-pa-md">
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="/assets/banner.jpg" />
        </template>

        <h4 class="text-white text-bold">Görev Takip Sistemi</h4>
      </q-parallax>
    </div>

    <div class="row q-ma-md">
      <div class="col-12 col-md-8">
        <div>
          <div
            class="text-body1"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          >
            <!-- <div class="text-overline text-indigo-9">
              GTS - GÖREV TAKİP SİSTEMİ
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">GÖREV TAKİP SİSTEMİ</div>
            <div class="text-caption q-mt-sm text-indigo-9">
              FUPICO -Geleceğin Öncüleri Topluluğu
            </div> -->
            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              🚀 Geleceğin Öncüleri Topluluğu olarak, Görev Takip Sistemi
              projemize
              <q-chip outline color="primary" text-color="white" icon="event">
                1 Temmuz 2024
              </q-chip>
              başlattığımız bu heyecan verici yolculukta, Görev Takip Sistemi
              projemizle teknoloji ve inovasyonun sınırlarını zorluyoruz!
            </div>
            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              🚀 Projemizin temelini
              <q-chip
                outline
                square
                color="deep-orange"
                label=".Net Core 8.0"
                text-color="white"
              />
              ile güçlendirerek sağlam bir backend oluşturuyor, aynı zamanda
              kullanıcı deneyimini öncelikli kılmak için
              <q-chip
                outline
                square
                color="deep-purple"
                label="React"
                text-color="white"
              />
              ile etkileyici bir frontend sunuyoruz.
            </div>

            <div
              class="q-mt-xl text-grey-10 text-center text-body1 text-weight-medium"
            >
              👨‍💻 Projemiz dört stratejik katmandan oluşuyor ve her bir katman
              için belirlediğimiz liderlerimiz var:

              <div align="center">
                <div class="q-ma-xs flex flex-center" style="max-width: 350px">
                  <q-list
                    v-for="(item, index) in serviceDistributionList"
                    :key="index"
                    align="center"
                    bordered
                    separator
                  >
                    <q-item
                      active
                      :active-class="item.color"
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        <q-item-label class="text-white" overline>{{
                          item.leader
                        }}</q-item-label>
                        <q-item-label class="text-yellow-4">{{
                          item.service
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
            <div >
              <div class="q-pa-md">
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🛠️ Teknik Altyapı ve Teknolojiler 🛠️"
                    header-class="bg-grey-9 text-grey-2 text-center"
                    :active-class="'bg-grey-10'"
                  >
                    <q-card>
                      <q-card-section>
                        <p class="q-mt-xs">
                          🔵 Projemizin arka yüzünde .Net Core 8.0 ile güçlü ve
                          performans odaklı bir temel oluşturuyoruz. Veritabanı
                          yönetimi için hem MSSQL gibi ilişkisel
                          veritabanlarından hem de MongoDB gibi NoSQL
                          çözümlerinden faydalanmayı planlıyoruz.
                        </p>

                        <p class="q-mt-xs">
                          🔵 Ön yüz geliştirme tarafında ise React kütüphanesini
                          tercih ediyoruz. Ant Design gibi modern ve kullanıcı
                          dostu UI kütüphaneleriyle estetik ve kullanıcı
                          deneyimine odaklanmış bir arayüz tasarımı
                          sağlayacağız. Microservice mimarisini benimseyerek her
                          servisimizi bağımsız olarak ölçekleyebilir hale
                          getireceğiz.
                        </p>
                        <p class="q-mt-xs">
                          🔵 RabbitMQ gibi mesaj kuyruğu sistemleriyle servisler
                          arası iletişimi güçlendirip, JWT ile güvenli kimlik
                          doğrulama sağlayacağız. Docker ile uygulamamızı
                          konteynerize ederek geliştirme ve dağıtım süreçlerini
                          kolaylaştıracağız.
                        </p>
                        <p class="q-mt-xs">
                          🔵 Geleceğin Öncüleri Topluluğu olarak, Görev Takip
                          Sistemi projemiz dört kritik katmandan oluşuyor: File
                          Servisi, User Management Servisi, Notification
                          Servisi, Task Servisi.
                        </p>
                        <p class="q-mt-xs">
                          🔵 Her biri için belirlenen yetkililer, kendi
                          servislerinin teknik kararlarını alacak ve
                          sorumluluklarını üstlenecekler. Bu yapı, her bir
                          servisin en etkin şekilde geliştirilmesini ve
                          yönetilmesini sağlamak için özenle tasarladık.
                        </p>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="📋 İşlevsellik ve Kullanıcı Deneyimi 📋"
                    header-class="bg-grey-9 text-grey-2 text-center"
                  >
                    <q-card>
                      <q-card-section>
                        <p class="q-mt-sm">
                          🔵 Görev Takip Sistemi, iş akış süreçlerini detaylı
                          bir şekilde yönetebilen, durumları ve logları
                          tutabilen bir yapıda olacak.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Kullanıcılarımız, talep oluştururken talep tipi,
                          ilgili departman, proje adı, talep nedeni, talep
                          başlığı, içerik ve varsa dosya yüklemesi gibi
                          bilgileri girebilecekler.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Bu talepler, atanan kişiye otomatik olarak
                          iletilip, süreçlerin takibini ve yönetimini
                          kolaylaştıracak.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Kullanıcılarımız, taleplerin durumunu sürekli
                          olarak güncelleyebilecek ve gerektiğinde yorum
                          yapabilecekler.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Ayrıca, taleplerin tamamlanması ve
                          sonuçlandırılması sürecinde geri bildirim sağlama
                          imkanı da sunulacak.
                        </p>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🌐 Topluluk Katılımı ve Açık Kaynak Sevdası 🌐"
                    header-class="bg-grey-9 text-grey-2 text-center"
                  >
                    <q-card>
                      <q-card-section>
                        <p class="q-mt-sm">
                          🔵 Projemiz açık kaynak olup, topluluk desteğine açıktır.
                          Herkesin katkıda bulunabileceği bir yapıya sahiptir.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Bu
                        sayede, farklı bakış açıları ve deneyimlerle projemizi
                        sürekli olarak geliştirme imkanına sahibiz.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Topluluğumuzun katılımı ve geri bildirimleri, projemizin
                          kalitesini arttırmak için önemli bir kaynaktır.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Fikirlerinizi, önerilerinizi ve katkılarınızı
                          bekliyoruz! Birlikte daha güçlüyüz!
                        </p>


                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🤝 Ekip ve Yetki Dağılımı 🤝"
                    header-class="bg-grey-9 text-grey-2 text-center"
                  >
                    <q-card>
                      <q-card-section>
                        <p class="q-mt-sm">
                          🔵 Şu anda 13 kişilik bir ekip olarak çalışıyoruz ve bu
                          sayıyı artırmayı planlıyoruz.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Projemize, .NET ve React
                        teknolojilerine ilgi duyanların yanı sıra, sosyal medya
                        yazıları yazabilen, README dosyalarını düzenleyebilen,
                        toplantı notları alabilen ve eğitim süreçlerinde
                        rehberlik edebilecek kişileri de dahil etmeye açığız.
                        </p>

                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md q-gutter-md">
          <q-list bordered class="rounded-borders">
            <q-item-label header>SON TOPLANTILAR</q-item-label>

            <div
              v-for="item in reversedMeetingList"
              :key="item.id"
              @click="goToDetail(item)"
            >
            <q-separator spaced />
              <q-item class="q-mb-md">
                <q-item-section avatar top>
                  <q-icon name="account_tree" color="black" size="34px" />
                </q-item-section>

                <q-item-section top>
                  <q-item-label lines="1">
                    <span class="text-weight-medium">{{ item.date }}</span>
                  </q-item-label>

                  <q-item-label
                    lines="1"
                    class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                  >
                    <span class="cursor-pointer text-bold">{{
                      item.subject
                    }}</span>
                  </q-item-label>
                </q-item-section>
              </q-item>


            </div>
          </q-list>

          <div class="q-pa-md" flat bordered>
            Konu Etiketleri:
            <q-chip outline color="teal" text-color="white" label="C#" />
            <q-chip outline color="teal" text-color="white" label=".Net Core" />
            <q-chip outline color="teal" text-color="white" label="React" />
            <q-chip
              outline
              color="teal"
              text-color="white"
              label="Microservice"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const serviceDistributionList = ref([
  {
    id: 1,
    leader: "Şule Celep",
    service: "File Servisi",
    color: "bg-indigo-8",
  },
  {
    id: 2,
    leader: "Devrim Mehmet Pattabanoğlu",
    service: "User Management Servisi",
    color: "bg-teal-8",
  },
  {
    id: 3,
    leader: "Merve Özalp",
    service: "Notification Servisi",
    color: "bg-purple-8",
  },
  {
    id: 4,
    leader: "Efrun Çetkin",
    service: "Task Servisi",
    color: "bg-grey-8",
  },
  {
    id: 5,
    leader: "İbrahim Hakkı Doğan",
    service: "Frontend",
    color: "bg-pink-8",
  },
]);

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
      "Task Service: Efrun Çetkin, Mert Dedeoğlu",
      "Log Service: İbrahim Hakkı Doğan",
      "Notification Service: Merve Özalp, Utku Özen",
      "File Service: Şule Celep, Furkan Daloğlu",
      "Frontend React: İbrahim Hakkı Doğan, Ömer Çakmak, Şule Celep",
    ],
    participants: [
      "Abdullah Hamzaçebi",
      "Devrim Mehmet Pattabanoğlu",
      "Efrun Çetkin",
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
      "Efrun Çetkin",
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
      "Efrun Çetkin",
      "Furkan Daloğlu",
      "İbrahim Hakkı Doğan",
      "Mert Dedeoğlu",
      "Merve Özalp",
      "Mustafa Emre İlhan",
      "Ömer Çakmak",
      "Şule Celep",
      "Utku Özen",
      "Ümit Şahin",
      "Bahadırhan Sefa Algur",
       "İlker Yüce"

    ],
    date: "23/09/2024",
  },
]);
const reversedMeetingList = computed(() => {
  return [...meetingList.value].reverse();
});
const goToDetail = (item) => {
  router.push({ name: "MeetingDetail", params: { id: item.id } });
};
</script>
