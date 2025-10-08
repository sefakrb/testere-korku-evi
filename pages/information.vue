<template>
  <div class="information-page">
    <!-- Hero Section -->
    <v-container fluid class="pa-0 hero-section">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="image-section">
          <div class="hero-image-wrapper">
            <v-img
              :src="
                require('../assets/jose-francisco-morales-ibYF02aYEbE-unsplash.jpg')
              "
              alt="Korku evi atmosfer görüntüsü"
              cover
              class="hero-image"
            >
              <div class="hero-overlay"></div>
            </v-img>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="content-section">
          <div class="hero-content">
            <h1 class="main-title">TESTERE KORKU EVİ</h1>
            <div class="title-divider"></div>
            <p class="hero-description">
              Her an bir süprizle karşılaşabileceğiniz bu evden kaçış oyunu
              içerisinde başrol sizsiniz. Ekibinizi toplayın, doğru strateji ve
              taktikleri geliştirerek evden kaçın ve Jigsaw'ın elinden kurtulun.
              Oyun içerisinde, senaryoya siz yön verecek, seçimleri siz yapacak
              ve alternatif sonu siz belirleyeceksiniz. Korkarken eğlenecek,
              eğlenirken kaçacaksınız. Yaşa yada öl. Seçimini yap!
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Features Grid -->
    <v-container class="features-section py-12">
      <h2 class="section-title text-center mb-12">NELERİ KAŞFEDECEKSİNİZ</h2>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="item.src"
          cols="12"
          sm="6"
          lg="3"
          class="feature-col"
        >
          <InfoCard
            :image-src="require('../assets/' + item.src)"
            :title="item.title"
            :text="item.text"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InformationPage',
  head() {
    return {
      title: 'Hakkımızda',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Testere Korku Evi hakkında bilgi edinin. Ankara Kızılay'da korku seansları geçirecek, bulmacaları çözecek ve kaçış için mücadele edeceksiniz.",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hakkımızda - Testere Korku Evi Ankara',
        },
        {
          name: 'keywords',
          content:
            'testere korku evi hakkında, ankara kaçış odası bilgi, korku evi deneyimi, escape room ankara',
        },
      ],
    }
  },
  data() {
    return {
      items: [
        {
          src: 'kutu1.png',
          title: 'Korku Seansları Geçireceksin',
          text: 'Testere Korku Evi Ankara Kızılay’da etkinlik gösteren bir kaçış evidir. Oyunumuzda, yaşanmış gerçek bir hikâyeden yola çıkan ‘’Korku Seansı’’ filminden esinlenilmiştir.',
        },
        {
          src: 'kutu2.png',
          title: 'Sana Çok Yakınız',
          text: 'Ankara Kızılay’da korku evi arayanlar için yakın olması nedeni ile tercih edilmektedir. Sizi kimi vakit korkutur, kimi vakit endişelendiririz, kimi vakit gerilmenize sebep olurken kimi vakit da gülme krizlerine girmenize sebep olabiliriz.',
        },
        {
          src: 'kutu3.png',
          title: 'Arkadaşını Doğru Seç',
          text: 'Bu eve girdiğiniz andan itibaren 1 (bir) saatlik süreniz başlıyor, zira oyun bir saat sürüyor. Kapıda yazdığı gibi “Arkadaşını İyi Seç” iyi seç ki sekiz şahıs girip üç ya da dört arkadaş kalmayın.',
        },
        {
          src: 'kutu4.png',
          title: 'Korkunun Doruk Noktası',
          text: 'Testere Korku Evi eğlencede doruğu yaşayacağınız bir mekân, burada şifrelerle uğraşırken beyin jimnastiği yapıyor, karanlık ortamda ipucu arıyor, şifreyi bulunca korkularından arınıp havalara uçuyorsun.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.information-page {
  background: linear-gradient(180deg, #000000 0%, #0a0000 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
}

.image-section {
  position: relative;
}

.hero-image-wrapper {
  height: 80vh;
  overflow: hidden;
  position: relative;
}

.hero-image {
  height: 100%;
  width: 100%;
  transition: transform 0.8s ease;
}

.image-section:hover .hero-image {
  transform: scale(1.1);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.content-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
}

.hero-content {
  max-width: 600px;
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-title {
  font-family: 'Nosifer', cursive;
  font-size: 3.5rem;
  color: #ff0000;
  text-align: center;
  margin-bottom: 24px;
  text-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
  letter-spacing: 4px;
  line-height: 1.2;
}

.title-divider {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
  margin: 0 auto 32px;
  border-radius: 2px;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  letter-spacing: 0.3px;
}

/* Features Section */
.features-section {
  padding: 80px 20px;
  background: linear-gradient(180deg, #0a0000 0%, #000000 100%);
}

.section-title {
  font-family: 'Nosifer', cursive;
  font-size: 2.5rem;
  color: #ff0000;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  letter-spacing: 3px;
  margin-bottom: 60px;
}

.feature-col {
  padding: 16px;
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-image-wrapper {
    height: 50vh;
    min-height: 400px;
  }

  .content-section {
    padding: 40px 24px;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-image-wrapper {
    height: 40vh;
    min-height: 300px;
  }

  .content-section {
    padding: 32px 16px;
  }

  .main-title {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>
