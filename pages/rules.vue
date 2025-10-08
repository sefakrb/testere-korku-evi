<template>
  <div class="rules-page">
    <v-container class="py-12">
      <div class="page-header">
        <h1 class="page-title">KURALLAR</h1>
        <div class="title-underline"></div>
        <p class="page-subtitle">
          Güvenli ve keyifli bir deneyim için lütfen kurallarımızı okuyun
        </p>
      </div>

      <v-row class="rules-grid">
        <v-col
          v-for="(rule, index) in rules"
          :key="rule.icon"
          cols="12"
          sm="6"
          md="4"
          class="rule-col"
        >
          <RuleCard
            :icon="rule.icon"
            :title="rule.title"
            :text="rule.rule"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 80"
          />
        </v-col>
      </v-row>

      <div class="cta-section">
        <CTAButton
          text="REZERVASYON YAP"
          icon="mdi-calendar-check"
          to="/reservation"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RulesPage',
  head() {
    return {
      title: 'Kurallar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Testere Korku Evi kuralları. Oyun hakkında bilmeniz gereken her şey: ekip sayısı, yaş aralığı, güvenlik kuralları ve rezervasyon bilgileri.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Kurallar - Testere Korku Evi',
        },
        {
          name: 'keywords',
          content:
            'korku evi kuralları, kaçış odası kurallar, testere oyun kuralları, rezervasyon bilgileri',
        },
      ],
    }
  },
  data() {
    return {
      rules: [
        {
          icon: 'mdi-account-group',
          title: 'Ekip Kaç Kişi Olmali',
          rule: 'Ekibiniz en az 2 en çok 8 kişi olmalıdır. Kişi sayısı oyundan alınacak eğlence için önemli faktörlerin başında gelmektedir. Bu nedenle oyuncu sayısı 8 kişiyi geçmemelidir',
        },
        {
          icon: 'mdi-alert',
          title: 'Kimler Oynayamaz',
          rule: 'Testere Odaları korku teması içerdiği için astım, panik atak, kalp rahatsızlığı olanlar ve hamileler için uygun değildir.',
        },
        {
          icon: 'mdi-alarm',
          title: 'Oyun Ne Zaman Başlar',
          rule: 'Grup olarak kapıdan girdiğiniz an oyun başlar. Fakat rezervasyon saatinizden erken geldiğinizde sizden önceki grup çıkmadıysa kapıda beklemek durumunda kalabilirsiniz.',
        },
        {
          icon: 'mdi-dice-d12-outline',
          title: 'Yaş Aralığı',
          rule: 'Oyuncuların herhangi bir şekilde zarar görme ihtimali bulunmadığı için ilgili herkes için uygundur. Ancak 12 yaşından küçüklerin oyuna evebeynleri eşliğinde gelmesi gerekir.',
        },
        {
          icon: 'mdi-thumb-up-outline',
          title: 'Sakin Olun',
          rule: 'Oyun süresinde şiddet,zorlama yada güç gerektirecek aktivite bulunmamaktadır.Bu nedenle çevreye zarar vermemenizi rica ederiz. Aksi taktirde doğacak zarar ve hasardan oyuncular sorumlu olacaktır.',
        },
        {
          icon: 'mdi-camera',
          title: 'Kamera Kullanmayın',
          rule: 'Mekan içerisinde video kaydı almak ve fotoğraf çekmek yasaktır.(Oyunu deşifre edecek görüntü ve bilgi)',
        },
        {
          icon: 'mdi-note-edit-outline',
          title: 'Rezervasyon',
          rule: 'Rezervasyon yaparken iletişim bilgilerinizi yazmamanız durumunda rezervasyonunuz geçersiz sayılacaktır. Rezervasyon iptallerinizde 1 gün önceden bilgi vermenizi rica ederiz.',
        },
        {
          icon: 'mdi-video',
          title: 'Her Şey Sizin İçin',
          rule: 'Sizleri kameralar ile izliyor ve dinliyor olacağız; isteğiniz halinde oyunu durdurabilirsiniz. Ama oyuna tekrar devam edemeyeceğinizi hatırlatırız.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.rules-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #000000 0%, #0a0000 50%, #000000 100%);
  padding: 40px 0;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInDown 0.8s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-title {
  font-family: 'Nosifer', cursive;
  font-size: 3.5rem;
  color: #ff0000;
  text-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
  letter-spacing: 5px;
  margin-bottom: 16px;
}

.title-underline {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
  margin: 0 auto 24px;
  border-radius: 2px;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
  }
}

.page-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1px;
}

/* Rules Grid */
.rules-grid {
  margin-bottom: 60px;
}

.rule-col {
  padding: 16px;
}

/* CTA Section */
.cta-section {
  text-align: center;
  margin-top: 60px;
  animation: fadeIn 1s ease 0.5s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .page-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .page-title {
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .page-subtitle {
    font-size: 0.95rem;
  }
}
</style>
