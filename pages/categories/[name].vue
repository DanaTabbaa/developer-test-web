<template>
  <div class="container pt-5">
    <ul v-if="categories.length" class="row">
      <li class="col-4 mb-5" v-for="product in categories" :key="product.id">  
          <productByCatg :product="product" :shadow="true" />
      </li>
    </ul>

    <div v-if="pending">Loading...</div>
    <div v-if="error">Error: {{ error.message || error }}</div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const categories = ref([])
const pending = ref(false)
const error = ref(null)

watchEffect(async () => {
  const categoryName = route.params.name
  if (!categoryName) {
    categories.value = []
    return
  }

  pending.value = true
  error.value = null

  try {
    const products = await $fetch('https://fakestoreapi.com/products')
    categories.value = products.filter(p => p.category === categoryName)
  } catch (err) {
    error.value = err
    categories.value = []
  } finally {
    pending.value = false
  }
})
</script>
