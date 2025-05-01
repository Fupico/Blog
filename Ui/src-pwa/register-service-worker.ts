// 📦 Bu dosya PWA modunun çalışması için gereklidir
import { register } from "register-service-worker";

if (process.env.MODE === "pwa") {
  register("service-worker.js", {
    ready() {
      console.log("📦 Service worker aktif ve PWA çalışıyor.");
    },
    registered() {
      console.log("📦 Service worker kayıt edildi.");
    },
    cached() {
      console.log("📦 İçerikler cache’e alındı.");
    },
    updatefound() {
      console.log("📦 Yeni içerik indiriliyor...");
    },
    updated() {
      console.log("📦 Yeni içerik indirildi. Sayfayı yenileyin.");
    },
    offline() {
      console.log("📦 Bağlantı yok, offline moda geçildi.");
    },
    error(err) {
      console.error("📦 Service worker hatası:", err);
    },
  });
}
