<template>
  <div class="video-container">
    <video
      :src="videoSrc"
      class="hero-video"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      :aria-label="ariaLabel"
    >
      <track label="Turkish" kind="captions" srclang="tr" default />
    </video>
    <div class="video-overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroVideo',
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      default: 'Video arka plan',
    },
  },
}
</script>

<style scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
}
</style>
