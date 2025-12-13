<template>
  <div class="product-details card p-6 md:p-10 mx-auto max-w-6xl bg-white rounded-lg shadow-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      
      <!-- Product Image -->
      <div class="flex justify-center items-center p-4 bg-gray-50 rounded-lg shadow-inner">
        <img :src="product.image" alt="Product Image" class="max-w-full max-h-[400px] object-contain" />
      </div>

      <!-- Product Info -->
      <div class="p-4 flex flex-col">
        <h1 class="text-4xl font-bold mb-4">{{ product.title }}</h1>
        <p class="text-2xl text-gray-800 font-semibold mb-4">Price: AED{{ product.price }}</p>

        <h3 class="text-lg font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
        <p class="text-gray-700 mb-6">{{ product.description }}</p>

        <!-- Quantity Selector -->
        <div class="d-flex align-items-center mb-3">
          <button @click="decreaseQuantity" class="btn btn-secondary px-3">-</button>
          <span class="mx-3 h5 mb-0">{{ quantity }}</span>
          <button @click="increaseQuantity" class="btn btn-secondary px-3">+</button>
        </div>

        <!-- Add to Cart Button -->
        <button @click="addToCart" class="btn btn-primary mb-3">
          Add {{ quantity }} to Cart
        </button>

        <!-- Bootstrap Alert for notifications -->
        <div v-if="notification.show" :class="`alert alert-${notification.type} alert-dismissible fade show`" role="alert">
          {{ notification.message }}
          <button type="button" class="btn-close" aria-label="Close" @click="notification.show = false"></button>
        </div>

        <!-- Live Cart Counter -->
        <p class="text-gray-700 font-semibold mt-3">
          Items in Cart: <span class="text-primary">{{ cartCount }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { product } = defineProps(['product'])
definePageMeta({ layout: 'default' })

const quantity = ref(1)
const cartCount = ref(0)

// Notification state
const notification = ref({
  show: false,
  message: '',
  type: 'success', // 'success' or 'danger'
})

// Quantity methods
const increaseQuantity = () => quantity.value++
const decreaseQuantity = () => { if(quantity.value > 1) quantity.value-- }

// Add to Cart
const addToCart = async () => {
  const payload = {
    id: 0,
    userId: 1,
    products: Array.from({ length: quantity.value }, () => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image
    }))
  }

  try {
    await $fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      body: payload
    })

    cartCount.value += quantity.value

    notification.value = {
      show: true,
      message: `${quantity.value} item(s) added to cart!`,
      type: 'success'
    }
  } catch (err) {
    console.error(err)
    notification.value = {
      show: true,
      message: 'Failed to add to cart.',
      type: 'danger'
    }
  }
}
</script>

<style scoped>
.product-details {
  min-height: 80vh;
}

/* Responsive Grid */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
