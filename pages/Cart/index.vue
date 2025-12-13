<template>
  <div class="container my-10">
    <h1 class="text-3xl font-bold mb-6">Your Cart</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-center text-xl">Loading cart...</div>
    <div v-if="error" class="text-red-600">{{ error }}</div>

    <!-- Cart List -->
    <div v-if="cartProducts.length" class="grid gap-6">
      <div
        v-for="item in cartProducts"
        :key="item.product.id"
        class="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4"
      >
        <!-- Product Image -->
        <div class="w-full md:w-1/4 flex justify-center">
          <img :src="item.product.image" class="h-32 object-contain" />
        </div>

        <!-- Info -->
        <div class="flex-1 md:ml-6 mt-4 md:mt-0">
          <h2 class="text-xl font-bold">{{ item.product.title }}</h2>
          <p class="text-gray-600 mt-1">Price: ${{ item.product.price }}</p>

          <!-- Quantity Controls -->
          <div class="flex items-center gap-3 mt-3">
            <button
              @click="decreaseQty(item)"
              class="bg-gray-300 px-3 py-1 rounded text-black"
              :disabled="item.quantity === 1"
            >
              -
            </button>

            <span class="text-lg font-semibold">{{ item.quantity }}</span>

            <button
              @click="increaseQty(item)"
              class="bg-gray-300 px-3 py-1 rounded text-black"
            >
              +
            </button>
          </div>

          <!-- Total -->
          <p class="text-gray-800 font-semibold mt-2">
            Total: AED{{ (item.product.price * item.quantity).toFixed(2) }}
          </p>
        </div>

        <!-- Remove -->
        <div class="mt-4 md:mt-0 md:ml-6">
          <button
            @click="removeItem(item.product.id)"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Cart Total -->
      <div class="flex justify-end mt-6 text-xl font-bold">
        Cart Total: AED{{ cartTotal.toFixed(2) }}
      </div>
    </div>

    <div v-else class="text-center text-gray-600 text-xl">
      Your cart is empty.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

const loading = ref(false)
const error = ref(null)
const cartProducts = ref([])

const fetchCart = async () => {
  loading.value = true

  try {
    const carts = await $fetch("https://fakestoreapi.com/carts")
    const userCarts = carts.filter(c => c.userId === 1)

    const products = await $fetch("https://fakestoreapi.com/products")
    const combined = []

    userCarts.forEach(cart => {
      cart.products.forEach(item => {
        const exists = combined.find(p => p.productId === item.productId)
        if (exists) exists.quantity += item.quantity
        else combined.push({ productId: item.productId, quantity: item.quantity })
      })
    })

    cartProducts.value = combined.map(item => ({
      product: products.find(p => p.id === item.productId),
      quantity: item.quantity
    }))
  } catch (err) {
    error.value = "Failed to load cart."
  } finally {
    loading.value = false
  }
}

// Increase quantity
const increaseQty = (item) => {
  item.quantity++
}

// Decrease quantity
const decreaseQty = (item) => {
  if (item.quantity > 1) item.quantity--
}

// Remove item
const removeItem = (id) => {
  cartProducts.value = cartProducts.value.filter(p => p.product.id !== id)
}

// Total price
const cartTotal = computed(() =>
  cartProducts.value.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
)

onMounted(fetchCart)
</script>

<style scoped>
.container {
  max-width: 900px;
}
</style>
