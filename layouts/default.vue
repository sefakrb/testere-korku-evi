<template>
  <v-app dark>
    <v-app-bar :height="appBarHeight" v-resize="onResize" app>
      <v-row style="height: 100%; width: 100%" class="ma-0 pa-0">
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
          md="7"
          cols="12"
          class="ma-0 pa-0 d-flex justify-center align-center"
        >
          <v-row>
            <template v-for="button in buttons">
              <v-col md="2" cols="4">
                <v-btn width="8vw" color="red" text :to="button.route">{{
                  button.title
                }}</v-btn>
              </v-col>
            </template>
          </v-row>

          <!-- <v-btn class="mr-5" color="red" text to="/">ANA SAYFA</v-btn>
          <v-btn class="mr-5" color="red" text to="information"
            >HAKKIMIZDA</v-btn
          >
          <v-btn class="mr-5" color="red" text to="rules">KURALLAR</v-btn>
          <v-btn class="mr-5" color="red" text to="story">HİKAYE</v-btn>
          <v-btn color="red" text to="reservation">REZERVASYON</v-btn> -->
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
    return {
      buttons: [
        { route: '/', title: 'ANA SAYFA' },
        { route: 'information', title: 'HAKKIMIZDA' },
        { route: 'rules', title: 'KURALLAR' },
        { route: 'story', title: 'HİKAYE' },
        { route: 'reservation', title: 'REZERVASYON' },
      ],
      appBarHeight: 0,
    }
  },
  mounted() {},
  methods: {
    onResize() {
      console.log(window.innerWidth)
      if (window.innerWidth < 1000) {
        this.appBarHeight = 300
      } else {
        this.appBarHeight = 64
      }
      console.log(this.appBarHeight)
    },
  },
}
</script>
<style>
html {
  overflow: auto;
  overflow-x: hidden;
}
</style>
