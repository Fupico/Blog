<template>
  <div class="q-pa-md">
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="/assets/banner.jpg" />
        </template>

        <h4 class="text-white text-bold">Dergi/Blog Projesi</h4>
      </q-parallax>
    </div>

    <div class="row q-ma-md">
      <div class="col-12 col-md-8">
        <div>
          <div
            class="text-body1"
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            align="center"
          >
            <div class="text-h5 q-mt-sm q-mb-xs">Dergi/Blog Projesi</div>
            <div class="text-caption q-mt-sm text-indigo-9">
              PoliPersJournal
            </div>
            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              📰 PoliPersJournal, toplumsal konulara, felsefeye, siyasete ve
              daha pek çok alana değinen çok dilli bir içerik platformudur. Bu
              proje, özgür yazılım ve açık kaynak felsefesiyle geliştirilmiştir.
            </div>
            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              📌 Projedeki temel amacımız, katılımcı bir içerik üretim modeliyle
              kullanıcıların farklı dillerde makaleler paylaşabilmesini,
              yorumlayabilmesini ve topluluk oluşturabilmesini desteklemektir.
            </div>

            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              🌍 Sistem, yazar profilleri, kategori bazlı içerik filtreleme, PDF
              destekli makale sunumu ve çoklu dilde SEO uyumlu içerik yönetimi
              gibi özellikleriyle içerik üreticileri ve okuyucular arasında
              köprü kurmayı hedeflemektedir.
            </div>
            <div
              class="q-mt-sm text-grey-10 text-justify text-body1 text-weight-medium"
            >
              🚀 Projemizin temelini
              <q-chip
                outline
                square
                color="deep-orange"
                label=".NET CORE 9.0"
                text-color="white"
              />
              ile güçlendirerek sağlam bir backend oluşturuyor, aynı zamanda
              kullanıcı deneyimini öncelikli kılmak için
              <q-chip
                outline
                square
                color="deep-purple"
                label="VUE JS - Quasar Framework"
                text-color="white"
              />
              ile etkileyici bir frontend sunuyoruz.
            </div>

            <div
              class="q-mt-xl text-grey-10 text-center text-body1 text-weight-medium"
            >
              👨‍💻 Proje Geliştirme Ekibi:

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
                        <q-item-label class="text-white">{{
                          item.leader
                        }}</q-item-label>
                        <q-item-label class="text-yellow-7" overline>{{
                          item.service
                        }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
            <div>
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
                          🔵 Projemizin arka yüzünde .Net Core 9.0 ile güçlü ve
                          performans odaklı bir temel oluşturuyoruz. Veritabanı
                          yönetimi için MSSQL ilişkisel veritabanı kullanmayı
                          planlıyoruz.
                        </p>

                        <p class="q-mt-xs">
                          🔵 Ön yüz geliştirme tarafında ise Vue JS
                          kütüphanesini tercih ediyoruz. Quasar Framework gibi
                          modern ve kullanıcı dostu, pwa destekli
                          (mobil-web-masaüstü), estetik ve kullanıcı deneyimine
                          odaklanmış bir arayüz tasarımı sağlayacağız.
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
                          🔵 Şu anda geliştirme aşamasında olduğu için bu kısım
                          sonradan düzenlenecektir.
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
                          🔵 Projemiz açık kaynak olup, topluluk desteğine
                          açıktır. Herkesin katkıda bulunabileceği bir yapıya
                          sahiptir.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Bu sayede, farklı bakış açıları ve deneyimlerle
                          projemizi sürekli olarak geliştirme imkanına sahibiz.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Topluluğumuzun katılımı ve geri bildirimleri,
                          projemizin kalitesini arttırmak için önemli bir
                          kaynaktır.
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
                          🔵 Şu anda bu projede 2 kişilik bir ekip olarak
                          çalışıyoruz ve bu sayıyı artırmayı planlıyoruz.
                        </p>
                        <p class="q-mt-sm">
                          🔵 Projemize, .NET ve Vue JS teknolojilerine ilgi
                          duyanların yanı sıra, sosyal medya yazıları yazabilen,
                          README dosyalarını düzenleyebilen, toplantı notları
                          alabilen ve eğitim süreçlerinde rehberlik edebilecek
                          kişileri de dahil etmeye açığız.
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
            <q-chip outline color="teal" text-color="white" label="Dergi" />
            <q-chip outline color="teal" text-color="white" label="Blog" />
            <q-chip outline color="teal" text-color="white" label="Makale" />
            <q-chip outline color="teal" text-color="white" label="Akademi" />
            <q-chip outline color="teal" text-color="white" label="C#" />
            <q-chip outline color="teal" text-color="white" label=".Net Core" />
            <q-chip outline color="teal" text-color="white" label="Vue JS" />
            <q-chip
              outline
              color="teal"
              text-color="white"
              label="Quasar Framework"
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
    leader: "Devrim Mehmet Pattabanoğlu",
    service: "Yazılım Geliştirici",
    color: "bg-teal-8",
  },
  {
    id: 2,
    leader: "Şule Celep",
    service: "Yazılım Geliştirici",
    color: "bg-indigo-8",
  },
  {
    id: 3,
    leader: "Zeynep Danış",
    service: "Yazılım Geliştirici",
    color: "bg-purple-8",
  },
  {
    id: 4,
    leader: "Dilara Melis Dümdüz",
    service: "İçerik Yazarı",
    color: "bg-brown-8",
  },
  {
    id: 5,
    leader: "Eylem Bozdak",
    service: "Katkı Sağlayan",
    color: "bg-blue-8",
  },
  {
    id: 6,
    leader: "Ahmet Meriç Kınalı",
    service: "Katkı Sağlayan",
    color: "bg-cyan-8",
  },
]);

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
    subject: "Projeye Katkı Sürecİ",
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
const reversedMeetingList = computed(() => {
  return [...meetingList.value].reverse();
});
const goToDetail = (item) => {
  router.push({ name: "PolipersMeetingDetail", params: { id: item.id } });
};
</script>
