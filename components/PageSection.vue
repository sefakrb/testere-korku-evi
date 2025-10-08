<template>
  <v-row class="ma-0 pa-0" :style="rowStyle">
    <slot />
  </v-row>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    rowStyle: {
      type: String,
      default: '',
    },
  },
}
</script>
