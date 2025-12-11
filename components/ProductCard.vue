<template>
  <div class="d-flex flex-column prod-card" style="height: 400px;">

    <!-- Image Section -->
    <div
      class="text-center img-back thumb"
      :style="{
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: shadow ? '2px 2px 8px rgba(0,0,0,0.25)' : 'none',
        borderRadius: '0px',
        border: 'none'
      }"
    >
    </div>

    <!-- Product Info -->
    <div
      class="d-flex flex-column align-items-center justify-content-start mt-2 product-desc"
      
    >
      <span class="text-dark-500 no-underline">
        {{ product.title.slice(0, 30) }}...
      </span>
      <span class="text-dark fw-bold ">
        AED {{ product.price }}
      </span>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
})

const props = defineProps({
  product: Object,
  shadow: { type: Boolean, default: false }
})

const { product, shadow } = props
</script>

<style scoped>
.prod-card {
  display: flex;
  flex-direction: column;
}

.thumb {
  height: 85%;
  width: 100%;
}
.no-underline {
  text-decoration: none !important;
  color: inherit; 
}

.no-underline:hover {
  text-decoration: none !important; 
}
.product-desc{
  height: 15%; width: 100%;
}
</style>
