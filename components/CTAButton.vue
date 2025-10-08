<template>
  <v-btn
    :x-large="xLarge"
    :large="large"
    :color="color"
    :outlined="outlined"
    :elevation="elevation"
    :class="buttonClass"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
  >
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    <slot>{{ text }}</slot>
  </v-btn>
</template>

<script>
export default {
  name: 'CTAButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    rel: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'red darken-2',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
    elevation: {
      type: [String, Number],
      default: '8',
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'outline'].includes(value),
    },
  },
  computed: {
    buttonClass() {
      return this.variant === 'outline' ? 'cta-button-outline' : 'cta-button'
    },
  },
}
</script>

<style scoped>
.cta-button {
  font-weight: 700;
  letter-spacing: 1px;
  padding: 28px 40px !important;
  border-radius: 12px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #c20000 0%, #ff0000 100%) !important;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(255, 0, 0, 0.5) !important;
}

.cta-button-outline {
  font-weight: 700;
  letter-spacing: 1px;
  padding: 28px 40px !important;
  border-radius: 12px;
  text-transform: uppercase;
  border: 2px solid white !important;
  transition: all 0.3s ease;
  color: white !important;
}

.cta-button-outline:hover {
  transform: translateY(-4px);
  background-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.2);
}

@media (max-width: 960px) {
  .cta-button,
  .cta-button-outline {
    padding: 20px 30px !important;
    font-size: 0.875rem;
  }
}

@media (max-width: 600px) {
  .cta-button,
  .cta-button-outline {
    width: 100%;
    max-width: 300px;
  }
}
</style>
