<template>
  <div class="glass-card" :class="customClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlassCard',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.glass-card {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(255, 0, 0, 0.2);
  border-color: rgba(255, 0, 0, 0.3);
}

@media (max-width: 960px) {
  .glass-card {
    padding: 32px 24px;
  }
}

@media (max-width: 600px) {
  .glass-card {
    padding: 24px 16px;
  }
}
</style>
