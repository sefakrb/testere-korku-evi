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
              <a
                v-for="button in buttons"
                :key="button.id"
                :href="`/#${button.id}`"
                class="nav-link"
                :class="{ 'nav-active': activeSection === button.id }"
                :aria-label="`${button.title} bölümüne git`"
                @click.prevent="goTo(button.id)"
              >
                <v-btn text class="nav-btn mx-1">
                  {{ button.title }}
                </v-btn>
              </a>
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
        <a
          v-for="button in buttons"
          :key="button.id"
          :href="`/#${button.id}`"
          class="mobile-nav-link"
          :class="{ 'nav-active': activeSection === button.id }"
          @click.prevent="goTo(button.id)"
        >
          <v-list-item link class="mobile-nav-item">
            <v-list-item-content>
              <v-list-item-title class="text-center font-weight-bold">
                {{ button.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>

    <v-main role="main" class="main-content">
      <transition name="page" mode="out-in">
        <Nuxt />
      </transition>
    </v-main>

    <v-footer dark class="glass-footer pa-4">
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
        { id: 'ana-sayfa', title: 'ANA SAYFA' },
        { id: 'hakkimizda', title: 'HAKKIMIZDA' },
        { id: 'kurallar', title: 'KURALLAR' },
        { id: 'hikaye', title: 'HİKAYE' },
        { id: 'rezervasyon', title: 'REZERVASYON' },
      ],
      appBarHeight: 64,
      drawer: false,
      scrolled: false,
      activeSection: 'ana-sayfa',
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
    this.handleScroll()
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
      if (this.$route.path !== '/') {
        return
      }
      // Ekranın üst kısmını geçen son bölüm aktif sayılır
      let current = this.buttons[0].id
      for (const { id } of this.buttons) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id
        }
      }
      this.activeSection = current
    },
    goTo(id) {
      this.drawer = false
      if (this.$route.path === '/') {
        this.$smoothScrollTo(id)
        window.history.replaceState(null, '', `/#${id}`)
      } else {
        this.$router.push({ path: '/', hash: `#${id}` })
      }
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

.nav-link.nav-active .nav-btn {
  color: #ff0000 !important;
}

.nav-link.nav-active .nav-btn::before {
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

.mobile-nav-link.nav-active .mobile-nav-item {
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

/* Tek sayfadaki bölümler: sabit videonun üstünde, sabit navbar altında kalmasın */
.page-section {
  position: relative;
  z-index: 2;
  scroll-margin-top: 64px;
}

/* Scroll ile görünür olma animasyonları (v-reveal) */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.reveal.reveal-left {
  transform: translateX(-48px);
}

.reveal.reveal-right {
  transform: translateX(48px);
}

.reveal.is-revealed {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* Main Content */
.main-content {
  min-height: 100vh;
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
