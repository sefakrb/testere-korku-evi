<template>
  <div
    class="video-container"
    :style="posterSrc ? { backgroundImage: `url(${posterSrc})` } : null"
  >
    <video
      v-if="shouldLoadVideo"
      class="hero-video"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      :poster="posterSrc"
      :aria-label="ariaLabel"
      @loadeddata="videoLoaded = true"
    >
      <source v-if="webmSrc" :src="webmSrc" type="video/webm" />
      <source :src="videoSrc" type="video/mp4" />
      <track label="Turkish" kind="captions" srclang="tr" default />
    </video>
    <div class="video-overlay" :class="{ 'video-loading': !videoLoaded }"></div>
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
    webmSrc: {
      type: String,
      default: '',
    },
    posterSrc: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: 'Video arka plan',
    },
  },
  data() {
    return {
      shouldLoadVideo: false,
      videoLoaded: false,
    }
  },
  mounted() {
    // Load video immediately on homepage for better UX
    this.shouldLoadVideo = true
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
  background-size: cover;
  background-position: center;
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
  transition: background 0.3s ease;
}

.video-overlay.video-loading {
  background: rgba(0, 0, 0, 0.9);
}
</style>
