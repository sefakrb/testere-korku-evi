<template>
  <div class="reservation-page">
    <v-container fluid class="pa-0">
      <v-row no-gutters class="split-screen">
        <!-- Contact Info Section -->
        <v-col cols="12" md="6" class="info-section">
          <div class="info-content">
            <div class="info-card glass-card">
              <div class="section-header">
                <v-icon class="header-icon" size="40" color="red"
                  >mdi-map-marker</v-icon
                >
                <h2 class="section-title">ADRES</h2>
              </div>
              <p class="address-text">
                Meşrutiyet Mahallesi Konur 2 Sokak 27/7 Kızılay/Ankara
              </p>
              <p class="address-detail">
                Tam Adres Tarifi: Meşrutiyet Caddesinde bulunan MADO
                pastanesinin yanından girince soldan 2. Bina (Benzin Cafe)
                karşısında Dostlar Apartmanı 3. Kat
              </p>

              <div class="divider-line"></div>

              <div class="section-header mt-8">
                <v-icon class="header-icon" size="40" color="red"
                  >mdi-phone-message</v-icon
                >
                <h2 class="section-title">İLETİŞİM</h2>
              </div>

              <div class="contact-items">
                <a href="tel:05308258256" class="contact-item">
                  <div class="contact-icon-wrapper">
                    <v-icon color="green" size="28">mdi-phone</v-icon>
                  </div>
                  <span class="contact-text">0530 825 82 56</span>
                </a>

                <a
                  href="https://instagram.com/ankarakorkuevi"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-item"
                >
                  <div class="contact-icon-wrapper">
                    <v-icon color="pink" size="28">mdi-instagram</v-icon>
                  </div>
                  <span class="contact-text">@ankarakorkuevi</span>
                </a>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Map Section -->
        <v-col cols="12" md="6" class="map-section">
          <div class="map-wrapper">
            <iframe
              title="Testere Korku Evi konumu - Meşrutiyet Mahallesi, Kızılay, Ankara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.76213076107797!2d32.85647174960759!3d39.91744352315268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ed4d27f0d62d13d!2sTestere%20Ankara%20Korku%20Evi!5e0!3m2!1str!2str!4v1660498624377!5m2!1str!2str"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              aria-label="Testere Korku Evi lokasyonu haritası"
              class="google-map"
            ></iframe>
            <div class="map-overlay"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ReservationPage',
  head() {
    return {
      title: 'Rezervasyon',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Testere Korku Evi rezervasyon ve iletişim bilgileri. Adres: Meşrutiyet Mahallesi, Kızılay/Ankara. Telefon: 0530 825 82 56. Instagram: @ankarakorkuevi',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Rezervasyon ve İletişim - Testere Korku Evi',
        },
        {
          name: 'keywords',
          content:
            'testere rezervasyon, korku evi iletişim, ankara kaçış odası adres, kızılay korku evi telefon',
        },
      ],
    }
  },
}
</script>

<style scoped>
.reservation-page {
  min-height: 100vh;
  background: #000000;
}

.split-screen {
  min-height: 100vh;
}

/* Info Section */
.info-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #000000 0%, #1a0000 100%);
  min-height: 100vh;
}

.info-content {
  width: 100%;
  max-width: 600px;
  animation: slideInLeft 0.8s ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.glass-card {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(255, 0, 0, 0.3);
  border-color: rgba(255, 0, 0, 0.3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
}

.header-icon {
  filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.6));
}

.section-title {
  font-family: 'Nosifer', cursive;
  font-size: 2rem;
  color: #ff0000;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  letter-spacing: 2px;
  margin: 0;
}

.address-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
  line-height: 1.6;
}

.address-detail {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  line-height: 1.8;
  letter-spacing: 0.3px;
}

.divider-line {
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
  margin: 32px auto;
  border-radius: 1px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-item:hover {
  background: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.4);
  transform: translateX(8px);
  box-shadow: 0 4px 20px rgba(255, 0, 0, 0.2);
}

.contact-icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon-wrapper {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.5);
}

.contact-text {
  font-size: 1.15rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
}

/* Map Section */
.map-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.google-map {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(20%) contrast(1.2);
  transition: filter 0.3s ease;
}

.map-wrapper:hover .google-map {
  filter: grayscale(0%) contrast(1);
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 960px) {
  .info-section {
    padding: 40px 24px;
    min-height: auto;
  }

  .glass-card {
    padding: 32px 24px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .address-text {
    font-size: 1.1rem;
  }

  .address-detail {
    font-size: 0.95rem;
  }

  .map-section {
    height: 60vh;
    min-height: 400px;
  }

  .contact-text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .info-section {
    padding: 32px 16px;
  }

  .glass-card {
    padding: 24px 16px;
  }

  .section-header {
    flex-direction: column;
    gap: 8px;
  }

  .section-title {
    font-size: 1.25rem;
  }

  .address-text {
    font-size: 1rem;
  }

  .address-detail {
    font-size: 0.875rem;
  }

  .contact-item {
    padding: 16px;
  }

  .contact-icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .contact-text {
    font-size: 0.95rem;
  }

  .map-section {
    height: 50vh;
    min-height: 300px;
  }
}
</style>
