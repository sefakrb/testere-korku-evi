// Hash (#bolum) linklerinde ilgili bölüme kaydır; sayfa geçişi animasyonu bitince çalışsın
export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const el = document.querySelector(to.hash)
        resolve(
          el ? { selector: to.hash, offset: { x: 0, y: 0 } } : { x: 0, y: 0 }
        )
      }, 400)
    })
  }
  return { x: 0, y: 0 }
}
