<template>
  <div class="q-pt-md">
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="/assets/banner.jpg" />
        </template>

        <!-- <h4 class="text-white text-bold">Future Pioneers Community</h4>
            <p class="text-white caption">Topluluk Hakkında</p> -->
        <h4 class="text-white text-h5 q-mt-sm q-mb-xs text-center text-bold">
          SIKÇA SORULAN SORULAR
        </h4>
        <div class="text-caption text-center text-white">
          FUPICO - Geleceğin Öncüleri Topluluğu
        </div>
      </q-parallax>
    </div>

    <div class="q-my-lg" align="center">
      <div
        class="row"
        style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      >
        <div class="col-0 col-md-0"></div>
        <div class="col-0 col-md-2"></div>
        <div class="col-12 col-md-8">
          <div class="text-overline text-indigo-9">FUPICO</div>
          <div class="text-h5 q-mt-sm q-mb-xs">SIKÇA SORULAN SORULAR</div>
          <!-- <div class="text-caption q-mt-sm text-indigo-9">
              Geleceğin Öncüleri Topluluğu
            </div> -->
          <div align="left">
            <div class="q-pt-md">
              <q-list bordered class="rounded-borders">
                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="Topluluğun Amacı Nedir?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <p class="q-my-sm">
                        🔵 Geleceğin Öncüleri Topluluğu olarak, teknoloji ve
                        yenilik alanında en iyi çözümleri üretmek için
                        çalışıyoruz.
                      </p>
                      <p class="q-my-sm">
                        🔵 Amacımız, üyelerimizin sürekli öğrenme ve gelişme
                        fırsatlarını desteklemek, bilgi paylaşımını ve
                        işbirliğini teşvik etmektir.
                      </p>
                      <p class="q-my-sm">
                        🔵 Eğitim ve uygulama süreçlerimizle, teknoloji
                        dünyasına katkı sağlamayı hedefliyoruz.
                      </p>
                      <p class="q-my-sm">
                        🔵 Teknoloji alanında yenilikçi projelerle geleceğe
                        katkı sağlamaktır.
                      </p>
                      <p class="q-my-sm">
                        🔵 Topluluğumuzdaki herkesin teknoloji ve yeniliklere
                        ilgi duymasını ve bu alanlarda kendini geliştirmesini
                        istiyoruz.
                      </p>

                      <p class="q-my-sm">
                        🔵 Bilgi paylaşımı ve sürekli öğrenme kültürüyle,
                        birlikte büyüyen ve gelişen bir topluluk oluşturmayı
                        amaçlıyoruz.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="Topluluğun Kuralları Nelerdir?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <div v-for="(rule, index) in rulesList" :key="index">
                        <div class="q-mt-sm text-grey-10 text-justify">
                          {{ rule.rule }}
                        </div>
                      </div>

                      <div class="q-mt-sm text-grey-10 text-justify">
                        Bu kurallar, topluluğumuzun sağlıklı ve güvenli bir
                        ortamda birlikte çalışmasını sağlamak için
                        oluşturulmuştur. Her üyenin bu kurallara uyması
                        önemlidir. Teşekkürler!
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="Nasıl Katılabilirim?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <p class="q-my-sm">
                        1- Ekibimize katılmak için lütfen hakkımızda sayfasında
                        listelenen servis yöneticilerinden herhangi birinin
                        LinkedIn hesabına kendinizi tanıtan bir mesaj gönderin.
                      </p>
                      <p class="q-my-sm">
                        2- Bu mesajda, yetenekleriniz, deneyimleriniz ve
                        ekibimize nasıl katkıda bulunabileceğinizi açıklayın. Bu
                        süreç, size uygun bir rol belirlememize yardımcı
                        olacaktır.
                      </p>
                      <p class="q-my-sm">
                        3- Başvurunuz incelendikten sonra, katılım süreciyle
                        ilgili size gerekli yönlendirmeler yapılacaktır.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="GTS Projesi Nedir?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <p class="q-my-sm">
                        🔵 Görev Takip Sistemi (GTS), iş akış süreçlerini
                        ayrıntılı bir şekilde yönetebilen ve durumlar ile
                        logları kaydedebilen bir platformdur.
                      </p>
                      <p class="q-my-sm">
                        🔵 Kullanıcılarımız, talep oluştururken talep tipi,
                        ilgili departman, proje adı, talep nedeni, talep
                        başlığı, içerik ve dosya yüklemesi gibi bilgileri
                        girebilirler.
                      </p>
                      <p class="q-my-sm">
                        🔵 Bu talepler, ilgili kişiye otomatik olarak iletilir
                        ve süreçlerin takibi ve yönetimini kolaylaştırır.
                      </p>
                      <p class="q-my-sm">
                        🔵 Kullanıcılar, taleplerin durumunu güncelleyebilir,
                        yorum yapabilir ve taleplerin tamamlanması sürecinde
                        geri bildirim sağlayabilirler.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="Kendimi Geliştirmemde Topluluğun Katkısı Olur Mu?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <p class="q-my-sm">
                        🔵 Geleceğin Öncüleri Topluluğu, üyelerinin kendilerini
                        geliştirmeleri için çeşitli fırsatlar sunar.
                      </p>
                      <p class="q-my-sm">
                        🔵 Her yeni teknoloji için çeşitli platformlardan
                        kişinin kendi tercihine veya tavsiyeye göre alınacak
                        eğitimlerin devamında, projeye bu bilgileri eklemek
                        kişisel gelişime büyük katkı sağlayacaktır.
                      </p>
                      <p class="q-my-sm">
                        🔵 Topluluğumuz, sürekli öğrenme ve bilgi paylaşımını
                        teşvik eden bir ortam sağlar.
                      </p>
                      <p class="q-my-sm">
                        🔵 Ayrıca, projelerimizde aktif rol alarak, gerçek dünya
                        deneyimi kazanma ve profesyonel ağlarını genişletme
                        imkanı bulurlar.
                      </p>
                      <p class="q-my-sm">
                        🔵Bu şekilde, topluluğumuz, üyelerinin kariyer
                        gelişimlerine önemli katkılarda bulunur.
                      </p>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  icon="add"
                  label="Açık Kaynak Nedir, Neden Tercih Ettiniz?"
                  header-class="bg-white text-grey-10 text-body1 text-weight-medium"
                >
                  <q-card class="text-body1">
                    <q-card-section>
                      <div
                        class="q-mt-xl text-grey-10 text-center text-weight-medium"
                      >
                        👨‍💻 Açık kaynak, yazılımın kaynak kodunun herkes
                        tarafından erişilebilir, kullanılabilir,
                        değiştirilebilir ve dağıtılabilir olduğu bir yazılım
                        geliştirme modelidir. Biz bu modeli tercih etmemizin
                        temel nedenleri şunlardır:
                      </div>
                      <div class="q-ma-md">
                        <div
                          class="q-mt-xl text-grey-10 text-justify text-weight-medium"
                        >
                          <q-chip color="red" text-color="white">
                            1- Şeffaflık ve Esneklik:
                          </q-chip>
                          Açık kaynaklı yazılımlar, kullanıcıların ve
                          geliştiricilerin kodun iç yapısını incelemesine ve
                          ihtiyaçlarına göre özelleştirmesine olanak tanır. Bu
                          sayede, yazılımın nasıl çalıştığını anlamak ve
                          gerektiğinde değişiklikler yapmak mümkündür.
                        </div>
                        <div
                          class="q-mt-xl text-grey-10 text-justify text-weight-medium"
                        >
                        <q-chip color="primary" text-color="white">
                          2- Topluluk Katılımı ve İşbirliği:
                          </q-chip> Açık kaynak
                          projeleri geniş bir geliştirici topluluğunun
                          katılımını teşvik eder. Farklı yeteneklere sahip
                          insanlar, projeye katkıda bulunabilir ve birlikte daha
                          güçlü çözümler üretebilirler.
                        </div>
                        <div
                          class="q-mt-xl text-grey-10 text-justify text-weight-medium"
                        >
                        <q-chip color="orange" text-color="white">
                          3- Maliyet ve Sürdürülebilirlik:
                          </q-chip>
                           Açık kaynak
                          yazılımlar genellikle ücretsiz olarak sunulur ve
                          maliyeti düşürür. Ayrıca, projenin sürdürülebilirliği,
                          topluluk katılımıyla desteklenerek artırılabilir.
                        </div>
                        <div
                          class="q-mt-xl text-grey-10 text-justify text-weight-medium"
                        >
                        <q-chip color="teal" text-color="white">
                          4- İnovasyon ve Hızlı Gelişim:
                          </q-chip>
                           Açık kaynaklı projeler,
                          yenilikçi fikirlerin hızla test edilip uygulanmasına
                          olanak tanır. Topluluk geri bildirimleri ve katkıları
                          sayesinde, yazılım sürekli olarak geliştirilebilir ve
                          güncellenebilir.
                        </div>
                        <div
                          class="q-mt-xl text-grey-10 text-justify text-weight-medium"
                        >
                          Bu nedenlerle, açık kaynak modelini benimseyerek, hem
                          teknik olarak esnek hem de topluluk odaklı bir yazılım
                          geliştirme süreci yürütmeyi tercih ediyoruz.
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
          <!-- <div v-for="(rule, index) in rulesList" :key="index">
              <div
                class="q-mt-sm text-grey-10 text-justify"
                style="font-size: 20px"
              >
                {{ rule.rule }}
              </div>
            </div> -->
        </div>
        <div class="col-2 col-md-2"></div>
        <div class="col-0 col-md-0"></div>
      </div>
    </div>

    <!-- <div class="q-my-lg" align="center">
          
        </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const rulesList = ref([
  {
    id: 1,
    rule: "🌟Herkes birbirine saygı göstermelidir. Hakaret, aşağılama veya tehdit içeren davranışlar kesinlikle yasaktır.",
  },
  {
    id: 2,
    rule: "🌍 Irk, cinsiyet, cinsel yönelim, din veya milliyet ayrımı yapmadan herkese eşit davranılmalıdır.",
  },
  {
    id: 3,
    rule: "🚫 Spam ve ticari reklamlar yapmak kesinlikle yasaktır.",
  },
  {
    id: 4,
    rule: "❌ Şiddet, nefret söylemi veya yetişkin içerik gibi uygunsuz materyaller paylaşmak yasaktır.",
  },
  {
    id: 5,
    rule: "🔒 Başkalarının özel bilgilerini izinsiz paylaşmak kesinlikle yasaktır.",
  },
  {
    id: 6,
    rule: "🚨 Kurallara uymayanlar öncelikle uyarılacak ve gerekli durumlarda cezalandırılacaktır.",
  },
]);
</script>
