<template>
  <div class="story-page">
    <v-container fluid class="pa-0">
      <v-row no-gutters class="story-row">
        <v-col cols="12" md="6" class="image-col">
          <div class="image-container">
            <v-img
              :src="
                require('../assets/jan-jakub-nanista-z9hvkSDWMIM-unsplash.jpg')
              "
              alt="Karanlık korku evi hikaye görüntüsü"
              cover
              class="story-image"
            >
              <div class="image-overlay"></div>
            </v-img>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="content-col">
          <div class="story-content">
            <div class="story-card glass-card">
              <h1 class="story-title">HİKAYE</h1>
              <div class="divider-animated"></div>
              <p class="story-text">
                Ayak bileklerinden zincirlenen oyuncular karanlık ve
                kullanılmayan bir banyo da gözlerini açar. Acımasızca
                düzenlenmiş bir oyun burada başlamaktadır. Onun eline düşen
                insanlar kapanlardan ve tuzaklardan kurtulmak için zeka ve
                becerilerini kullanmak zorunda kalacaklar.
              </p>
              <p class="story-text">
                Kendilerini sonunda ne olacağı belli olmayan bir serüvenin
                içinde bulacaklar, belki de kaderlerini çizeceklerdir.
                Testere'nin mükemmel şekilde tasarlanmış mekanizmaları,
                bulmacaları ve gizli geçitleri içinde kendinizi bir filmin
                kahramanı gibi hisseceğiniz gerçek zamanlı ve korku temalı evden
                kaçış oyunu.
              </p>
              <v-btn
                large
                color="red darken-2"
                class="mt-6 explore-btn"
                to="/reservation"
              >
                <v-icon left>mdi-calendar-check</v-icon>
                HEMEN REZERVASYON YAP
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'StoryPage',
  head() {
    return {
      title: 'Hikaye',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Testere Korku Evi hikayesi. Karanlık bir banyoda zincirlenen oyuncular, tuzaklar, bulmacalar ve gizli geçitlerle dolu korku temalı kaçış oyunu.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hikaye - Testere Korku Evi',
        },
        {
          name: 'keywords',
          content: 'testere hikayesi, korku evi senaryosu, kaçış odası hikaye',
        },
      ],
    }
  },
}
</script>

<style scoped>
.story-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #1a0000 100%);
}

.story-row {
  min-height: 100vh;
}

.image-col {
  position: relative;
  height: 100%;
  min-height: 100vh;
}

.image-container {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.story-image {
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease;
}

.image-col:hover .story-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.content-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  min-height: 100vh;
}

.story-content {
  width: 100%;
  max-width: 600px;
}

.glass-card {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
  animation: fadeInUp 0.8s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(255, 0, 0, 0.2);
  border-color: rgba(255, 0, 0, 0.3);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.story-title {
  font-family: 'Nosifer', cursive;
  font-size: 3rem;
  color: #ff0000;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  letter-spacing: 3px;
}

.divider-animated {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
  margin: 0 auto 32px;
  border-radius: 2px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.5;
    transform: scaleX(1.2);
  }
}

.story-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  text-align: justify;
  letter-spacing: 0.3px;
}

.explore-btn {
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 12px;
  padding: 24px 32px !important;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #c20000 0%, #ff0000 100%) !important;
}

.explore-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 0, 0, 0.5);
}

@media (max-width: 960px) {
  .image-container {
    position: relative;
    height: 50vh;
    min-height: 400px;
  }

  .image-col {
    min-height: 50vh;
  }

  .content-col {
    padding: 40px 20px;
    min-height: auto;
  }

  .glass-card {
    padding: 32px 24px;
  }

  .story-title {
    font-size: 2rem;
  }

  .story-text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .story-title {
    font-size: 1.75rem;
  }

  .glass-card {
    padding: 24px 16px;
  }

  .explore-btn {
    width: 100%;
  }
}
</style>
