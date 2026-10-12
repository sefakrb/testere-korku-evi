import Vue from 'vue'

// --- Scroll ile görünür olma animasyonu: v-reveal / v-reveal="{ delay: 150 }" ---
let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }
  return observer
}

Vue.directive('reveal', {
  inserted(el, binding) {
    const delay = (binding.value && binding.value.delay) || 0
    el.classList.add('reveal')
    if (binding.value && binding.value.from) {
      el.classList.add(`reveal-${binding.value.from}`)
    }
    if (delay) el.style.transitionDelay = `${delay}ms`
    getObserver().observe(el)
  },
  unbind(el) {
    if (observer) observer.unobserve(el)
  },
})

// --- Menü tıklamalarında yumuşak (ease-in-out) kaydırma ---
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

let rafId = null

export function smoothScrollTo(id, duration = 1000) {
  const el = document.getElementById(id)
  if (!el) return
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  const target = Math.max(
    0,
    Math.min(
      el.getBoundingClientRect().top + window.scrollY - margin,
      document.documentElement.scrollHeight - window.innerHeight
    )
  )
  const start = window.scrollY
  const distance = target - start
  if (rafId) cancelAnimationFrame(rafId)

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || Math.abs(distance) < 2) {
    window.scrollTo({ top: target, behavior: 'instant' })
    return
  }

  // Mesafe uzadıkça süre biraz uzar (en fazla ~1.6 sn)
  const time = Math.min(1600, duration + Math.abs(distance) * 0.12)
  const t0 = performance.now()
  const cancel = () => cancelAnimationFrame(rafId)
  window.addEventListener('wheel', cancel, { once: true, passive: true })
  window.addEventListener('touchstart', cancel, { once: true, passive: true })

  const step = (now) => {
    const p = Math.min(1, (now - t0) / time)
    window.scrollTo({
      top: start + distance * easeInOutCubic(p),
      behavior: 'instant',
    })
    if (p < 1) rafId = requestAnimationFrame(step)
  }
  rafId = requestAnimationFrame(step)
}

export default (context, inject) => {
  inject('smoothScrollTo', smoothScrollTo)
}
