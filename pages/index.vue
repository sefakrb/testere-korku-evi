<template>
  <div class="home-page">
    <HeroVideo
      :video-src="require('../assets/pexels-cottonbro-5435725.mp4')"
      aria-label="Video arka plan korku evi"
    />

    <div class="hero-content" id="hero">
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

            <a
              href="#about"
              class="scroll-indicator"
              aria-label="Aşağı kaydır"
              @click.prevent="scrollToAbout"
            >
              <v-icon color="white" size="32">mdi-chevron-down</v-icon>
              <p class="mt-2">Aşağı Kaydır</p>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="home-sections">
      <section id="about" class="home-section">
        <v-container>
          <h2 class="section-title text-center">TESTERE KORKU EVİ</h2>
          <div class="title-divider"></div>
          <p class="section-lead text-center">
            Her an bir sürprizle karşılaşabileceğiniz bu evden kaçış oyunu
            içerisinde başrol sizsiniz. Ekibinizi toplayın, doğru strateji ve
            taktikleri geliştirerek evden kaçın ve Jigsaw'ın elinden kurtulun.
            Korkarken eğlenecek, eğlenirken kaçacaksınız. Yaşa ya da öl,
            seçimini yap!
          </p>
          <v-row class="mt-8">
            <v-col
              v-for="item in features"
              :key="item.src"
              cols="12"
              sm="6"
              lg="3"
            >
              <InfoCard
                :image-src="require('../assets/' + item.src)"
                :title="item.title"
                :text="item.text"
              />
            </v-col>
          </v-row>
          <div class="text-center mt-6">
            <v-btn text color="red" to="/information">
              DAHA FAZLA BİLGİ
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </section>

      <section class="home-section">
        <v-container>
          <h2 class="section-title text-center">HİKAYE</h2>
          <div class="title-divider"></div>
          <p class="section-lead text-center">
            Ayak bileklerinden zincirlenen oyuncular karanlık ve kullanılmayan
            bir banyoda gözlerini açar. Acımasızca düzenlenmiş bir oyun burada
            başlamaktadır. Onun eline düşen insanlar kapanlardan ve tuzaklardan
            kurtulmak için zeka ve becerilerini kullanmak zorunda kalacak.
          </p>
          <div class="text-center mt-6">
            <v-btn outlined color="white" to="/story">
              HİKAYENİN DEVAMI
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </section>

      <section class="home-section">
        <v-container>
          <h2 class="section-title text-center">BİLMENİZ GEREKENLER</h2>
          <div class="title-divider"></div>
          <v-row class="mt-6">
            <v-col
              v-for="rule in rules"
              :key="rule.icon"
              cols="12"
              sm="6"
              md="4"
            >
              <RuleCard
                :icon="rule.icon"
                :title="rule.title"
                :text="rule.text"
              />
            </v-col>
          </v-row>
          <div class="text-center mt-6">
            <v-btn text color="red" to="/rules">
              TÜM KURALLAR
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </section>

      <section class="home-section final-cta">
        <v-container class="text-center">
          <h2 class="section-title">CESARETİN VAR MI?</h2>
          <div class="title-divider"></div>
          <p class="section-lead">
            Ankara Kızılay'da seni bekliyoruz. Yerini şimdi ayırtın.
          </p>
          <CTAButton
            text="REZERVASYON YAP"
            icon="mdi-calendar-check"
            to="/reservation"
            class="mt-4"
          />
        </v-container>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      features: [
        {
          src: 'kutu1.png',
          title: 'Korku Seansları Geçireceksin',
          text: 'Yaşanmış gerçek bir hikâyeden yola çıkan "Korku Seansı" filminden esinlenen, Ankara Kızılay\'daki kaçış evi.',
        },
        {
          src: 'kutu2.png',
          title: 'Sana Çok Yakınız',
          text: 'Sizi kimi zaman korkutur, kimi zaman gerer, kimi zaman da gülme krizlerine sokarız.',
        },
        {
          src: 'kutu3.png',
          title: 'Arkadaşını Doğru Seç',
          text: 'Oyun bir saat sürer. "Arkadaşını İyi Seç": sekiz kişi girip üç dört kişi kalmayın.',
        },
        {
          src: 'kutu4.png',
          title: 'Korkunun Doruk Noktası',
          text: 'Şifrelerle uğraşıp karanlıkta ipucu ararken eğlencenin doruğunu yaşayacaksınız.',
        },
      ],
      rules: [
        {
          icon: 'mdi-account-group',
          title: 'Ekip Kaç Kişi Olmalı',
          text: 'Ekibiniz en az 2, en çok 8 kişi olmalıdır.',
        },
        {
          icon: 'mdi-dice-d12-outline',
          title: 'Yaş Aralığı',
          text: '12 yaşından küçüklerin oyuna ebeveynleri eşliğinde gelmesi gerekir.',
        },
        {
          icon: 'mdi-note-edit-outline',
          title: 'Rezervasyon',
          text: 'İletişim bilgisi olmayan rezervasyonlar geçersiz sayılır; iptali 1 gün önceden bildirin.',
        },
      ],
    }
  },
  methods: {
    scrollToAbout() {
      const el = document.getElementById('about')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    },
  },
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

.home-sections {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.85) 0%,
    #000000 40%,
    #0a0000 100%
  );
}

.home-section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
}

.title-divider {
  width: 80px;
  height: 3px;
  background: #ff0000;
  margin: 16px auto 24px;
}

.section-lead {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

.scroll-indicator {
  text-decoration: none;
  cursor: pointer;
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
