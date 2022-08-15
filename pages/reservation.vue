<template>
  <v-row class="ma-0 pa-0" style="height: 100%">
    <v-col class="ma-0 pa-0 d-flex" cols="6">
      <v-card class="d-flex flex-column justify-center">
        <v-card-title class="justify-center" style="font-size: 1.4rem"
          >ADRES</v-card-title
        >
        <v-card-text style="font-size: 1rem"
          >Meşrutiyet Mahallesi Konur 2 Sokak 27/7 Kızılay/Ankara Tam Adres
          Tarifi: Meşrutiyet Caddesinde bulunan MADO pastanesinin yanından
          girince soldan 2. Bina (Benzin Cafe) karşısında Dostlar Apartmanı 3.
          Kat</v-card-text
        >
        <v-divider></v-divider>

        <v-card-title class="justify-center">İLETİŞİM</v-card-title>
        <v-card-text class="d-flex flex-column justify-center align-center">
          <div>
            <v-icon class="mb-2" color="green">mdi-phone</v-icon>
            <span class="font-weight-bold" style="font-size: 1.1rem"
              >0530 825 82 56</span
            >
          </div>

          <div>
            <v-icon color="pink">mdi-instagram</v-icon
            ><span class="font-weight-bold" style="font-size: 1.1rem">
              @ankarakorkuevi</span
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="ma-0 pa-0" cols="6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.76213076107797!2d32.85647174960759!3d39.91744352315268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ed4d27f0d62d13d!2sTestere%20Ankara%20Korku%20Evi!5e0!3m2!1str!2str!4v1660498624377!5m2!1str!2str"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe
    ></v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: '15.9819',
        },
        {
          lat: '45.12',
          lng: '16.21',
        },
      ],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
}
</script>

<style></style>
