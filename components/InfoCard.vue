<template>
  <div class="modern-info-card">
    <div class="card-image-wrapper">
      <v-img
        :src="imageSrc"
        :alt="title"
        contain
        class="card-image"
        height="150"
      ></v-img>
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    imageSrc: {
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
.modern-info-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  height: 100%;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.modern-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0) 0%,
    rgba(255, 0, 0, 0.1) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.modern-info-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(255, 0, 0, 0.3);
  border-color: rgba(255, 0, 0, 0.5);
}

.modern-info-card:hover::before {
  opacity: 1;
}

.card-image-wrapper {
  margin-bottom: 24px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.modern-info-card:hover .card-image-wrapper {
  transform: scale(1.1);
}

.card-image {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
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
