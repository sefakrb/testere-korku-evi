<template>
  <div class="scroll-indicator">
    <v-icon :color="iconColor" :size="iconSize">{{ icon }}</v-icon>
    <p class="mt-2">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'ScrollIndicator',
  props: {
    text: {
      type: String,
      default: 'Aşağı Kaydır',
    },
    icon: {
      type: String,
      default: 'mdi-chevron-down',
    },
    iconColor: {
      type: String,
      default: 'white',
    },
    iconSize: {
      type: [String, Number],
      default: 32,
    },
  },
}
</script>

<style scoped>
.scroll-indicator {
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
