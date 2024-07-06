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
          Future Pioneers Community
        </h4>
        <div class="text-caption text-center text-white">
          Geleceğin Öncüleri Topluluğu
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
          <div class="text-overline text-indigo-9">FUPICO</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Future Pioneers Community</div>
          <div class="text-caption q-mt-sm text-indigo-9">
            Geleceğin Öncüleri Topluluğu
          </div>
          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
            🚀 Geleceğin Öncüleri Topluluğu olarak, Görev Takip Sistemi
            projemize
            <q-chip outline color="primary" text-color="white" icon="event">
              1 Temmuz 2024
            </q-chip>
            tarihinde büyük bir heyecanla başladık. Bu projede, en güncel
            teknolojileri öğrenip entegre ederek süreçleri iyileştiren ve proje
            takibini kolaylaştıran yenilikçi bir ürün ortaya koymayı
            hedefliyoruz. Arka yüzümüzde
            <q-chip
              outline
              square
              color="deep-orange"
              label=".Net Core 8.0"
              text-color="white"
            />, ön yüzümüzde ise
            <q-chip
              outline
              square
              color="deep-purple"
              label="React"
              text-color="white"
            />
            kullanarak modern ve güçlü bir altyapı oluşturmayı planlıyoruz. Bu seçimle, projemizin performansını
            artırırken kullanıcı dostu bir arayüz sunmayı hedefliyoruz.
          </div>
          <div
            class="q-mt-sm text-grey-10 text-justify"
            style="font-size: 20px"
          >
          🔧 Projemizde, <strong class="text-teal">Microservice Mimarisi</strong> - <strong class="text-deep-orange">RabbitMQ</strong> -
            <strong class="text-purple">JWT</strong> - <strong class="text-blue">Docker</strong> gibi modern
            teknolojileri kullanarak ölçeklenebilir ve esnek bir yapı
            oluşturmayı amaçlıyoruz. <strong>Backend tarafında:</strong>  farklı veritabanları <strong>(MSSQL, MongoDB gibi)</strong>
            ve <strong>SignalR</strong> gibi teknolojileri entegre ederek
            kullanıcı deneyimini optimize etmeyi planlıyoruz
              
            
             <!-- mssql, mongodb,
            signalr ve identity gibi en yeni teknolojileri kullanarak etkili bir
            backend; TypeScript ve Ant Design ile modern bir frontend
            oluşturacağız. Bu süreçte, sektörün taleplerine uygun teknolojileri
            öğrenip projemize entegre etmekten büyük bir heyecan duyuyoruz. -->
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
          </div>
        </div>
        <div class="col-2 col-md-2"></div>
        <div class="col-0 col-md-0"></div>
      </div>
    </div>

    <div class="q-my-lg" align="center">
      <!-- <div class="row items-center">
        <div class="col">
          <div class="text-justify q-mt-sm q-mb-xs" style="font-size: 20px">
            📌 <strong>Görev Takip Sistemi</strong> projesindeki temel
            hedefimiz, ekip olarak iş birliği içinde en güncel teknolojileri
            öğrenip projelerimize entegre ederek süreçleri iyileştiren ve proje
            takibini kolaylaştıran bir ürün geliştirmektir.
          </div>
        </div>
        <div class="col">
          <div class="text-justify q-mt-sm q-mb-xs" style="font-size: 20px">
            📌 <strong>Görev Takip Sistemi</strong> projesindeki temel
            hedefimiz, ekip olarak iş birliği içinde en güncel teknolojileri
            öğrenip projelerimize entegre ederek süreçleri iyileştiren ve proje
            takibini kolaylaştıran bir ürün geliştirmektir.
          </div>
        </div>
        <div class="col">
          <div class="text-justify q-mt-sm q-mb-xs" style="font-size: 20px">
            📌 <strong>Görev Takip Sistemi</strong> projesindeki temel
            hedefimiz, ekip olarak iş birliği içinde en güncel teknolojileri
            öğrenip projelerimize entegre ederek süreçleri iyileştiren ve proje
            takibini kolaylaştıran bir ürün geliştirmektir.
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup></script>
