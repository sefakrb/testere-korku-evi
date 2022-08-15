<template>
  <v-app dark>
    <v-app-bar app>
      <v-row style="height: 100%">
        <v-col
          md="3"
          cols="12"
          class="ma-0 pa-0 d-flex justify-center align-center"
        >
          <v-img
            max-height="50"
            max-width="150"
            :src="require('../assets/testere_korkuevi_logo.png')"
          >
          </v-img
        ></v-col>
        <v-col
          md="6"
          cols="12"
          class="ma-0 pa-0 d-flex justify-center align-center"
        >
          <v-btn class="mr-5" color="red" text to="/">ANA SAYFA</v-btn>
          <v-btn class="mr-5" color="red" text to="information"
            >HAKKIMIZDA</v-btn
          >
          <v-btn class="mr-5" color="red" text to="rules">KURALLAR</v-btn>
          <v-btn class="mr-5" color="red" text to="story">HİKAYE</v-btn>
          <v-btn color="red" text to="reservation">REZERVASYON</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<style>
html {
  overflow: auto;
}
</style>
