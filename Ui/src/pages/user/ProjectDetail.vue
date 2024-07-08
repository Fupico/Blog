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

    <!-- <div class="q-ma-md">
      <q-breadcrumbs
        separator="---"
        class="text-orange"
        active-color="secondary"
      >
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Projeler" to="/" icon="widgets" />
        <q-breadcrumbs-el label="Proje Detay" icon="navigation" />
      </q-breadcrumbs>
    </div> -->

    <div class="row q-ma-md">
      <div class="col-12 col-md-8">
        <div>
          <div
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
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
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
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
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
              class="q-mt-xl text-grey-10 text-center text-body2 text-weight-medium"
            >
              👨‍💻 Projemiz altı stratejik katmandan oluşuyor ve her bir katman
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
            <div align="center">
              <div class="q-pa-md">
                <q-list bordered class="rounded-borders">
                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🛠️ Teknik Altyapı ve Teknolojiler 🛠️"
                    header-class="bg-grey-9 text-grey-2"
                    :active-class="'bg-grey-10'"
                  >
                    <q-card>
                      <q-card-section>
                        <p class="q-mt-xs">
                          Projemizin arka yüzünde .Net Core 8.0 ile güçlü ve
                          performans odaklı bir temel oluşturuyoruz. Veritabanı
                          yönetimi için hem MSSQL gibi ilişkisel
                          veritabanlarından hem de MongoDB gibi NoSQL
                          çözümlerinden faydalanmayı planlıyoruz.
                        </p>

                        <p class="q-mt-xs">
                          Ön yüz geliştirme tarafında ise React kütüphanesini
                          tercih ediyoruz. Ant Design gibi modern ve kullanıcı
                          dostu UI kütüphaneleriyle estetik ve kullanıcı
                          deneyimine odaklanmış bir arayüz tasarımı
                          sağlayacağız. Microservice mimarisini benimseyerek her
                          servisimizi bağımsız olarak ölçekleyebilir hale
                          getireceğiz.
                        </p>
                        <p class="q-mt-xs">
                          RabbitMQ gibi mesaj kuyruğu sistemleriyle servisler
                          arası iletişimi güçlendirip, JWT ile güvenli kimlik
                          doğrulama sağlayacağız. Docker ile uygulamamızı
                          konteynerize ederek geliştirme ve dağıtım süreçlerini
                          kolaylaştıracağız.
                        </p>
                        <p class="q-mt-xs">
                          Geleceğin Öncüleri Topluluğu olarak, Görev Takip
                          Sistemi projemiz altı kritik katmandan oluşuyor: File
                          Servisi, Identity Servisi, Log Servisi, Notification
                          Servisi, Task Servisi ve User Servisi.
                        </p>
                        <p class="q-mt-xs">
                          Her biri için belirlenen yetkililer, kendi
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
                    header-class="bg-grey-9 text-grey-2"
                  >
                    <q-card>
                      <q-card-section>
                        Görev Takip Sistemi, iş akış süreçlerini detaylı bir
                        şekilde yönetebilen, durumları ve logları tutabilen bir
                        yapıda olacak. Kullanıcılarımız, talep oluştururken
                        talep tipi, ilgili departman, proje adı, talep nedeni,
                        talep başlığı, içerik ve varsa dosya yüklemesi gibi
                        bilgileri girebilecekler. Bu talepler, atanan kişiye
                        otomatik olarak iletilip, süreçlerin takibini ve
                        yönetimini kolaylaştıracak. Kullanıcılarımız, taleplerin
                        durumunu sürekli olarak güncelleyebilecek ve
                        gerektiğinde yorum yapabilecekler. Ayrıca, taleplerin
                        tamamlanması ve sonuçlandırılması sürecinde geri
                        bildirim sağlama imkanı da sunulacak.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🌐 Topluluk Katılımı ve Açık Kaynak Sevdası 🌐"
                    header-class="bg-grey-9 text-grey-2"
                  >
                    <q-card>
                      <q-card-section>
                        Projemiz açık kaynak olup, topluluk desteğine açıktır.
                        Herkesin katkıda bulunabileceği bir yapıya sahiptir. Bu
                        sayede, farklı bakış açıları ve deneyimlerle projemizi
                        sürekli olarak geliştirme imkanına sahibiz.
                        Topluluğumuzun katılımı ve geri bildirimleri, projemizin
                        kalitesini arttırmak için önemli bir kaynaktır.
                        Fikirlerinizi, önerilerinizi ve katkılarınızı
                        bekliyoruz! Birlikte daha güçlüyüz!
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>

                  <q-expansion-item
                    expand-separator
                    icon="add"
                    label="🤝 Ekip ve Yetki Dağılımı 🤝"
                    header-class="bg-grey-9 text-grey-2"
                  >
                    <q-card>
                      <q-card-section>
                        Şu anda 13 kişilik bir ekip olarak çalışıyoruz ve bu
                        sayıyı artırmayı planlıyoruz. Projemize, .NET ve React
                        teknolojilerine ilgi duyanların yanı sıra, sosyal medya
                        yazıları yazabilen, README dosyalarını düzenleyebilen,
                        toplantı notları alabilen ve eğitim süreçlerinde
                        rehberlik edebilecek kişileri de dahil etmeye açığız.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>
              </div>
            </div>

            <!-- <div
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
            >
              👥 Dinamik ve yetenekli 13 kişilik bir ekip olarak, her bir
              servisin yöneticisi, kendi alanında teknik kararlar alıyor. Bu
              teknik kararlar alındıktan sonra, her bir yönetici, kendi
              servisinin teknik detaylarını ve bu detayların nasıl ve neden
              kullanıldığını içeren eğitici içerikler oluşturuyor. Bu içerikler,
              ekip üyelerinin projeye katkılarını daha iyi anlamalarını ve
              gerektiğinde teknolojilerle ilgili derinlemesine bilgi sahibi
              olmalarını sağlıyor. Bu süreç, projenin her bir bileşeninin sağlam
              bir temel üzerine inşa edilmesini ve ekip içi bilgi paylaşımını
              güçlendiriyor. Bu şekilde, her bir servis yöneticisi sadece teknik
              kararlar almıyor, aynı zamanda ekip içinde bilgi akışını ve
              sürekli öğrenmeyi teşvik ediyor.
            </div>

            <div
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
            >
              📚 Bizim için eğitim sadece bir süreç değil, aynı zamanda bir
              yaşam tarzı ve kültürdür! Projemize yeni teknolojileri entegre
              etmeden önce, ekip üyelerimiz her bir teknoloji alanında
              derinlemesine eğitim alır. Örneğin, bir mikro hizmet mimarisini
              benimsemek istediğimizde, ekip üyelerimiz mikro hizmetlerin
              avantajlarını ve zorluklarını anlamak için ilgili eğitimleri
              tamamlar. Bu süreçte, hem teknik hem de işlevsel yönlerini
              kapsayan geniş bir eğitim programı yürütülür. Bu yaklaşım,
              projemizin her aşamasında kaliteli ve yenilikçi çözümler
              üretmemize yardımcı olurken, aynı zamanda ekip içi işbirliğini ve
              motivasyonu da artırır. Eğitim kültürümüz, projemizin temel
              taşlarından biri olarak, geleceğe yönelik başarılı adımlar
              atmamızı sağlar.
            </div>
            <div
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
            >
              🌐 Haftalık olarak LinkedIn, Medium ve fupico.com gibi
              platformlarda projemizle ilgili güncellemeleri ve başarı
              hikayelerimizi paylaşıyoruz. Bu platformlar, bizim için sadece
              birer sosyal medya aracı değil, aynı zamanda sektöre ve geniş bir
              kitleye projemiz hakkında bilgi verme ve değer katma fırsatları
              sunar.
            </div>

            <div
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
            >
              📅 Her hafta düzenlediğimiz toplantılarda, tüm ekip olarak
              projemizin ilerleyişini detaylı bir şekilde değerlendiriyoruz. Bu
              toplantılar, geçmiş haftanın başarılarını kutlamak, karşılaşılan
              zorlukları ele almak ve gelecek adımlarımızı planlamak için kritik
              öneme sahiptir. Bu düzenli toplantılar, projemizin başarısını
              destekleyen ve sürekli olarak iyileşmemizi sağlayan bir yapı taşı
              olarak önemli bir rol oynar.
            </div>

            <div
              class="q-mt-sm text-grey-10 text-justify text-body2 text-weight-medium"
            >
            Bu yolculukta sizinle birlikte olmaktan ve teknoloji dünyasına katkı sağlamaktan büyük gurur duyuyoruz! 🚀💡
            </div> -->

            <!-- <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
          🔧 Projemizde, <strong class="text-teal">Microservice Mimarisi</strong> - <strong class="text-deep-orange">RabbitMQ</strong> -
            <strong class="text-purple">JWT</strong> - <strong class="text-blue">Docker</strong> gibi modern
            teknolojileri kullanarak ölçeklenebilir ve esnek bir yapı
            oluşturmayı amaçlıyoruz. <strong>Backend tarafında:</strong>  farklı veritabanları <strong>(MSSQL, MongoDB gibi)</strong>
            ve <strong>SignalR</strong> gibi teknolojileri entegre ederek
            kullanıcı deneyimini optimize etmeyi planlıyoruz
              
            
            
          </div>
          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            📈 Görev Takip Sistemi, iş akış süreçlerini, durumlarını ve
            loglarını tutan yenilikçi bir yapıda olacak. Bir iş akışı
            oluşturulurken gerekli tüm bilgilerin girilmesi ve atanacak kişinin
            seçilmesiyle süreç başlayacak. Talep atanan kişiye mail gönderilecek
            ve kişi, talebi açtığında iş durumuna göre bekleme, sürüyor veya
            tamamlandı gibi durumları seçebilecek. Tüm işlemler tamamlandığında,
            talebi açan kişiye bir değerlendirme formu gönderilerek yıldız verip
            yorum yapması sağlanacak.
          </div>
          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            🌐 Projemiz açık kaynak olacağı için topluluk desteğine açık ve
            herkesin katkıda bulunabileceği bir yapıdadır. Bu projeye olan
            ilginiz ve desteğiniz bizim için çok değerli. 💡 Fikirlerinizi,
            önerilerinizi ve katkılarınızı dört gözle bekliyoruz!
          </div>

          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            🔒 Ayrıca, bazı kullanıcılar için tüm talepleri görebilme, yorum
            yapabilme, talepleri atayabilme ve daha birçok yetki tanımlanacak.
            Tüm hareketlerin, e-postaların ve durum değişikliklerinin loglanması
            sağlanarak süreçler şeffaf ve izlenebilir olacak.
          </div>

          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            👥 Topluluğumuzda, her servis katmanının kendi yetkilisi ve ekibi,
            belirledikleri teknolojilerle hareket edecek. Yetkililer, kendi
            katmanlarının teknolojileri, design patternları ve kullanılacak
            yapıların neden ve nasıl yapıldığını açıklamakla ve ilgili
            dokümantasyonları oluşturmakla sorumlu olacaklar.
          </div>
          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            ✨ Geleceğin Öncüleri Topluluğu olarak, kurallarımıza uyan, saygılı,
            bilgili, tecrübeli ve yeni başlayanları yönlendirme konusunda
            istekli bireylerle birlikte çalışmayı hedefliyoruz. Bu heyecan
            verici yolculukta bizimle birlikte olun!
          </div> -->
          </div>
        </div>

        <!-- <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="/assets/task.jpg" />

            <q-card-section>
              <div class="text-h6 text-center">GTS - GÖREV TAKİP SİSTEMİ</div>
              <div class="text-subtitle2 text-center">FUPİCO</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              reprehenderit nihil aliquid earum quia fugiat accusantium labore
              aut minus, magni veniam. Rerum saepe quae reprehenderit officia.
              Magni dolor molestiae dolorem tempora illum nemo laborum
              temporibus necessitatibus asperiores? Neque hic odit ex optio
              repudiandae velit excepturi culpa, eos ullam nostrum beatae?
            </q-card-section>
            <q-card-actions class="q-mb-xl" align="around">
              <q-btn to="/backend" label="Backend" push color="purple" />
              <q-btn to="/frontend" label="Frontend" push color="indigo" />
              
            </q-card-actions>
          </q-card>
        </div> -->
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md q-gutter-md">
          <!-- <q-list bordered class="rounded-borders">
            <q-item-label header>KATKIDA BULUNANLAR</q-item-label>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-list> -->

          <q-list bordered class="rounded-borders">
            <q-item-label header>SON TOPLANTILAR</q-item-label>

            <q-item class="q-mb-md">
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium">28/06/2024</span>
                </q-item-label>

                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer text-bold">Tanışma</span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item class="q-mb-md">
              <q-item-section avatar top>
                <q-icon name="account_tree" color="black" size="34px" />
              </q-item-section>

              <q-item-section top>
                <q-item-label lines="1">
                  <span class="text-weight-medium">02/07/2024</span>
                </q-item-label>

                <q-item-label
                  lines="1"
                  class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                >
                  <span class="cursor-pointer text-bold">SERVİS PAYLAŞIMI</span>
                </q-item-label>
              </q-item-section>
            </q-item>
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
            <!-- <q-btn dense flat style="color: goldenrod;" label="Microservice" />
      <q-btn dense flat style="color: goldenrod;" label="C#" />
      <q-btn dense flat style="color: goldenrod;" label=".Net Core" />
      <q-btn dense flat style="color: goldenrod;" label="React" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
    service: "Identity Servisi",
    color: "bg-teal-8",
  },
  {
    id: 3,
    leader: "Ümit Şahin",
    service: "Log Servisi",
    color: "bg-orange-8",
  },
  {
    id: 4,
    leader: "Merve Özalp",
    service: "Notification Servisi",
    color: "bg-purple-8",
  },
  {
    id: 5,
    leader: "Efrun Evdi",
    service: "Task Servisi",
    color: "bg-grey-8",
  },
  {
    id: 6,
    leader: "Ömer Çakmak",
    service: "User Servisi",
    color: "bg-green-8",
  },
  {
    id: 7,
    leader: "İbrahim Hakkı Doğan",
    service: "Frontend",
    color: "bg-pink-8",
  },
]);
</script>
