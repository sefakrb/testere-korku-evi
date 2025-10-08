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
            <div class="hero-cta" data-aos="fade-up">
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

.hero-cta {
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

</style>
