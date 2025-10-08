<template>
  <div class="home-page">
    <HeroVideo
      :video-src="require('../assets/pexels-cottonbro-5435725.mp4')"
      aria-label="Video arka plan korku evi"
    />

    <div class="hero-content">
      <v-container class="fill-height">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="10" lg="8">
            <div class="hero-images-container" data-aos="fade-up">
              <div class="hero-images">
                <v-img
                  :src="require('../assets/0003_KORKULARINLA-Y-ZLE-MEYE.png')"
                  alt="Korkullarınla Yüzleşmeye Hazır Mısın"
                  contain
                  class="hero-img hero-text-1"
                ></v-img>
                <v-img
                  :src="require('../assets/0004_HAZIRMISIN_.png')"
                  alt="Hazır Mısın"
                  contain
                  class="hero-img hero-text-2"
                ></v-img>
                <v-img
                  :src="require('../assets/0001_Layer-10.png')"
                  alt="Testere Korku Evi Logo Katman 1"
                  contain
                  class="hero-img hero-logo-1"
                ></v-img>
                <v-img
                  :src="require('../assets/0002_Layer-3-copy.png')"
                  alt="Testere Korku Evi Logo Katman 2"
                  contain
                  class="hero-img hero-logo-2"
                ></v-img>
              </div>
            </div>

            <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
              <CTAButton
                text="REZERVASYON YAP"
                icon="mdi-calendar-check"
                to="/reservation"
                class="mx-2 my-2"
              />
              <CTAButton
                text="HİKAYEYİ KEŞFET"
                icon="mdi-book-open-variant"
                to="/story"
                variant="outline"
                :outlined="true"
                color="white"
                class="mx-2 my-2"
              />
            </div>

            <div class="scroll-indicator" data-aos="fade" data-aos-delay="800">
              <v-icon color="white" size="32">mdi-chevron-down</v-icon>
              <p class="mt-2">Aşağı Kaydır</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Ana Sayfa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Testere Korku Evi - Ankara Kızılay'da korku dolu kaçış odası deneyimi. Ekibinizi toplayın, bulmacaları çözün ve kaçın!",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Testere Korku Evi Ankara - Ana Sayfa',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Ankara Kızılay'da korku temalı kaçış odası deneyimi. Korkarken eğlenin, eğlenirken kaçın!",
        },
        {
          name: 'keywords',
          content:
            'testere korku evi, ankara korku evi, kaçış odası ankara, escape room, korku temalı oyun, kızılay eğlence',
        },
      ],
    }
  },
}
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-images-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-images {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.hero-img {
  height: auto;
  margin: -15px auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.8));
  transition: transform 0.3s ease;
  position: relative;
}

.hero-text-1 {
  max-width: 800px;
  width: 100%;
  z-index: 4;
}

.hero-text-2 {
  max-width: 750px;
  width: 100%;
  z-index: 3;
  margin-top: -70px !important;
}

.hero-logo-1 {
  max-width: 680px;
  width: 100%;
  z-index: 2;
  margin-top: -65px !important;
}

.hero-logo-2 {
  max-width: 680px;
  width: 100%;
  z-index: 1;
  margin-top: -70px !important;
}

.hero-cta {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  opacity: 0.8;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 960px) {
  .hero-images-container {
    max-width: 90%;
  }

  .hero-img {
    margin: -10px auto;
  }

  .hero-text-1 {
    max-width: 600px;
  }

  .hero-text-2 {
    max-width: 550px;
    margin-top: -50px !important;
  }

  .hero-logo-1 {
    max-width: 500px;
    margin-top: -45px !important;
  }

  .hero-logo-2 {
    max-width: 500px;
    margin-top: -55px !important;
  }

  .hero-cta {
    margin-top: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-images-container {
    max-width: 95%;
  }

  .hero-img {
    margin: -8px auto;
  }

  .hero-text-1 {
    max-width: 420px;
  }

  .hero-text-2 {
    max-width: 390px;
    margin-top: -35px !important;
  }

  .hero-logo-1 {
    max-width: 340px;
    margin-top: -30px !important;
  }

  .hero-logo-2 {
    max-width: 340px;
    margin-top: -40px !important;
  }
}
</style>
