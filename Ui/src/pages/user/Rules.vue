<template>
  <div class="q-pa-md">
    <div>
      <q-parallax :height="200" :speed="0.5">
        <template v-slot:media>
          <img src="/assets/banner.jpg" />
        </template>

        <!-- <h4 class="text-white text-bold">Future Pioneers Community</h4>
          <p class="text-white caption">Topluluk Hakkında</p> -->
        <h4 class="text-white text-h5 q-mt-sm q-mb-xs text-center text-bold">
          TOPLULUK KURALLARI
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
        <div class="col-2 col-md-2"></div>
        <div class="col-8 col-md-8">
          <!-- <div class="text-overline text-indigo-9">FUPICO</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Future Pioneers Community</div>
          <div class="text-caption q-mt-sm text-indigo-9">
            Geleceğin Öncüleri Topluluğu
          </div> -->

          <div v-for="(rule, index) in rulesList" :key="index">
            <div
              class="q-mt-sm text-grey-10 text-justify"
              style="font-size: 20px"
            >
              {{ rule.rule }}
            </div>
          </div>

          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            Bu kurallar, topluluğumuzun sağlıklı ve güvenli bir ortamda birlikte
            çalışmasını sağlamak için oluşturulmuştur. Her üyenin bu kurallara
            uyması önemlidir. Teşekkürler!
          </div>
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
