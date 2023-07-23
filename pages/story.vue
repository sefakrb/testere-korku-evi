<template>
  <v-row class="ma-0 pa-0" style="height: 100%">
    <v-col class="ma-0 pa-0" md="6" cols="12">
      <v-card class="centerContent" height="86vh" color="transparent">
        <v-img
          height="100%"
          :src="require('../assets/jan-jakub-nanista-z9hvkSDWMIM-unsplash.jpg')"
        ></v-img>
      </v-card>
    </v-col>
    <v-col class="ma-0 pa-0" md="6" cols="12">
      <v-card
        class="d-flex justify-center flex-column ma-0 pa-0"
        flat
        height="100%"
        color="transparent"
      >
        <v-card-title
          color="red"
          style="font-family: 'Nosifer', cursive; font-size: 3rem"
          class="d-flex justify-center"
        >
          HİKAYE
        </v-card-title>
        <v-card-text class="mt-5">
          Ayak bileklerinden zincirlenen oyuncular karanlık ve kullanılmayan bir
          banyo da gözlerini açar. Acımasızca düzenlenmiş bir oyun burada
          başlamaktadır. Onun eline düşen insanlar kapanlardan ve tuzaklardan
          kurtulmak için zeka ve becerilerini kullanmak zorunda kalacaklar.
          Kendilerini sonunda ne olacağı belli olmayan bir serüvenin içinde
          bulacaklar, belki de kaderlerini çizeceklerdir. Testere'nin mükemmel
          şekilde tasarlanmış mekanizmaları, bulmacaları ve gizli geçitleri
          içinde kendinizi bir filmin kahramanı gibi hisseceğiniz gerçek zamanlı
          ve korku temalı evden kaçış oyunu.
        </v-card-text>
      </v-card></v-col
    >
  </v-row>
</template>

<script>
export default {}
</script>

<style>
.centerContent {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
