<template>
  <v-row class="ma-0 pa-0" style="height: 100%">
    <v-col class="ma-0 pa-0" md="6" cols="12">
      <v-card class="centerContent" height="90vh" color="transparent">
        <v-img
          height="100%"
          :src="
            require('../assets/jose-francisco-morales-ibYF02aYEbE-unsplash.jpg')
          "
        ></v-img>
      </v-card>
    </v-col>
    <v-col class="centerContent" md="6" cols="12">
      <v-card class="centerContent flex-column" flat color="transparent">
        <v-card-title
          color="red"
          style="font-family: 'Nosifer', cursive; font-size: 3rem"
          class="d-flex justify-center"
        >
          TESTERE KORKU EVİ
        </v-card-title>
        <v-card-text class="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum
        </v-card-text>
      </v-card></v-col
    >
    <v-card
      class="d-flex justify-center align-center flex-column"
      v-for="item in items"
      :key="item.src"
      width="24vw"
      height="60vh"
      color="transparent"
    >
      <v-img
        min-height="150"
        min-width="150"
        max-height="150"
        max-width="150"
        :src="require('../assets/' + item.src)"
      ></v-img>
      <v-card-title
        style="font-family: 'Nosifer', cursive; font-size: 0.88rem"
        class="justify-center"
        >{{ item.title }}</v-card-title
      >
      <v-card-text>{{ item.text }}</v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
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
.centerContent {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
