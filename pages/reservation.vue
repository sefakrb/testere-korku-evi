<template>
  <div></div>
</template>

<script>
// Eski yollar tek sayfadaki ilgili bölüme yönlendirilir
export default {
  middleware({ redirect }) {
    redirect(301, { path: '/', hash: '#rezervasyon' })
  },
}
</script>
