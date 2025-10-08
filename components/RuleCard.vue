<template>
  <div class="modern-rule-card-component">
    <div class="icon-circle">
      <v-icon color="red" size="40">{{ icon }}</v-icon>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'RuleCard',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.modern-rule-card-component {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 24px;
  margin: 16px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.modern-rule-card-component::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(255, 0, 0, 0.1) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.modern-rule-card-component:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 50px rgba(255, 0, 0, 0.3);
  border-color: rgba(255, 0, 0, 0.5);
  background-color: rgba(10, 0, 0, 0.6);
}

.modern-rule-card-component:hover::before {
  opacity: 1;
}

.icon-circle {
  width: 100px;
  height: 100px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid rgba(255, 0, 0, 0.3);
  border-radius: 50%;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}

.modern-rule-card-component:hover .icon-circle {
  transform: rotateY(360deg) scale(1.1);
  background: rgba(255, 0, 0, 0.2);
  border-color: rgba(255, 0, 0, 0.6);
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
}

.card-title {
  font-family: 'Nosifer', cursive;
  font-size: 1.1rem;
  color: #ff0000;
  margin-bottom: 16px;
  letter-spacing: 1px;
  line-height: 1.4;
  position: relative;
  z-index: 1;
}

.card-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.3px;
  position: relative;
  z-index: 1;
}
</style>
