<template>
  <v-row class="ma-0 pa-0 d-flex justify-center align-center">
    <v-card
      v-for="rule in rules"
      :key="rule"
      class="ma-10"
      width="20vw"
      height="30vh"
      color="transparent"
      ><v-icon color="red" x-large class="d-flex justify-center mt-2">{{
        rule.icon
      }}</v-icon>
      <v-card-title
        class="justify-center"
        style="font-family: 'Nosifer', cursive; font-size: 1rem"
        >{{ rule.title }}</v-card-title
      >
      <v-card-text>{{ rule.rule }}</v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
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
