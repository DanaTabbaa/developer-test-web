<template>
  <div class="d-flex flex-column prod-card">

    <!--Image -->
    <NuxtLink :to="`/products/${product.id}`" class="img-link">
      <img
        :src="product.image"
        alt="Product Image"
        class="img-fluid thumb"
        :style="{
          objectFit: 'contain',
          borderRadius: '0.5rem',
          boxShadow: shadow ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }"
      />
    </NuxtLink>

    <!-- Product Info -->
    <div class="d-flex flex-column align-items-center justify-content-start mt-3 product-desc">
      <NuxtLink :to="`/products/${product.id}`" class="title-link">
        <span class="text-dark-500 product-title">
          {{ product.title.slice(0, 50) }}{{ product.title.length > 50 ? '...' : '' }}
        </span>
      </NuxtLink>
      <span class="text-dark fw-bold product-price">
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
  shadow: { type: Boolean, default: true }
})

const { product, shadow } = props
</script>

<style scoped>
.prod-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.prod-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.thumb {
  height: 250px; 
  width: 100%;
  object-fit: contain;
  background-color: #f8f8f8; 
}

.img-link {
  display: block;
  cursor: pointer;
}

.product-desc {
  padding: 0.8rem 0.5rem;
  text-align: center;
}

.product-title {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: block;
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.product-title:hover {
  color: #007bff; 
}

.product-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;
}
.title-link{
  text-decoration: none;
}
</style>
