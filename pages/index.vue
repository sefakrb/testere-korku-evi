<template>
  <v-row class="ma-0 pa-0">
    <video
      :src="require('../assets/pexels-cottonbro-5435725.mp4')"
      class="myVideo"
      width="100vw"
      autoplay
      loop
      muted
    ></video>
    <v-col
      cols="12"
      style="height: 80vh"
      class="d-flex align-center justify-center"
    >
      <v-img :src="require('../assets/0003_KORKULARINLA-Y-ZLE-MEYE.png')"
        ><v-img :src="require('../assets/0004_HAZIRMISIN_.png')">
          <v-img :src="require('../assets/0001_Layer-10.png')">
            <v-img :src="require('../assets/0002_Layer-3-copy.png')"></v-img>
          </v-img> </v-img
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
