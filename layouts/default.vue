<template>
  <v-app dark>
    <v-app-bar
      :height="appBarHeight"
      v-resize="onResize"
      app
      flat
      color="transparent"
      role="banner"
      aria-label="Ana navigasyon"
      class="glass-navbar"
      :class="{ 'navbar-scrolled': scrolled }"
    >
      <v-container fluid class="pa-0">
        <v-row align="center" justify="space-between" class="ma-0">
          <v-col cols="auto" class="pa-2">
            <nuxt-link to="/" class="logo-link">
              <v-img
                :max-height="isMobile ? 40 : 50"
                :max-width="isMobile ? 120 : 150"
                :src="require('../assets/testere_korkuevi_logo.png')"
                alt="Testere Korku Evi Logo"
                class="logo-image"
              ></v-img>
            </nuxt-link>
          </v-col>

          <v-col v-if="!isMobile" cols="auto" class="pa-0">
            <div class="nav-buttons">
              <nuxt-link
                v-for="button in buttons"
                :key="button.route"
                :to="button.route"
                class="nav-link"
                :aria-label="`${button.title} sayfasına git`"
                prefetch
              >
                <v-btn text class="nav-btn mx-1">
                  {{ button.title }}
                </v-btn>
              </nuxt-link>
            </div>
          </v-col>

          <v-col v-if="isMobile" cols="auto" class="pa-2">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
      class="glass-drawer"
    >
      <v-list nav dense class="py-4">
        <nuxt-link
          v-for="button in buttons"
          :key="button.route"
          :to="button.route"
          class="mobile-nav-link"
          prefetch
        >
          <v-list-item link class="mobile-nav-item">
            <v-list-item-content>
              <v-list-item-title class="text-center font-weight-bold">
                {{ button.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-main role="main" class="main-content">
      <transition name="page" mode="out-in">
        <Nuxt />
      </transition>
    </v-main>

    <v-footer app dark class="glass-footer pa-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <p class="mb-2 font-weight-medium">
              &copy; {{ new Date().getFullYear() }} Testere Korku Evi. Tüm
              hakları saklıdır.
            </p>
            <div class="social-links">
              <v-icon small class="mx-2">mdi-instagram</v-icon>
              <span>@ankarakorkuevi</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
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
      appBarHeight: 64,
      drawer: false,
      scrolled: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    onResize() {
      if (window.innerWidth < 960) {
        this.appBarHeight = 64
      } else {
        this.appBarHeight = 70
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50
    },
    prefetchRoute() {
      // Nuxt automatically handles prefetching via nuxt-link
      // This method is kept for event binding compatibility
    },
  },
}
</script>

<style>
html {
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Glassmorphism Navbar */
.glass-navbar {
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.3) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.8) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.logo-link {
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease;
}

.logo-link:hover .logo-image {
  transform: scale(1.05);
}

.logo-image {
  transition: transform 0.3s ease;
}

/* Modern Navigation Buttons */
.nav-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  text-decoration: none;
  display: inline-block;
}

.mobile-nav-link {
  text-decoration: none;
  display: block;
}

.nav-btn {
  position: relative;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9) !important;
  transition: all 0.3s ease;
  padding: 0 16px !important;
}

.nav-btn::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ff0000;
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover .nav-btn {
  color: #ff0000 !important;
  background-color: rgba(255, 0, 0, 0.1) !important;
}

.nav-link:hover .nav-btn::before {
  width: 80%;
}

.nav-link.nuxt-link-active .nav-btn {
  color: #ff0000 !important;
}

.nav-link.nuxt-link-active .nav-btn::before {
  width: 80%;
}

.nav-link.nuxt-link-exact-active .nav-btn {
  color: #ff0000 !important;
}

.nav-link.nuxt-link-exact-active .nav-btn::before {
  width: 80%;
}

/* Glass Drawer */
.glass-drawer {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.9) !important;
}

.mobile-nav-item {
  margin: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover .mobile-nav-item {
  background-color: rgba(255, 0, 0, 0.1) !important;
}

.mobile-nav-link.nuxt-link-active .mobile-nav-item,
.mobile-nav-link.nuxt-link-exact-active .mobile-nav-item {
  background-color: rgba(255, 0, 0, 0.2) !important;
  color: #ff0000 !important;
}

/* Glass Footer */
.glass-footer {
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.5) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Main Content */
.main-content {
  min-height: calc(100vh - 134px);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.page-enter {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Smooth Animations */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
