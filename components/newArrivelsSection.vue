<template>
  <div class="title-section">
    <h2 class="custom-font font-dark pt-12 pl-12">NEW ARRIVALS</h2>
  </div>

  <section class="mt-2 arr-section">
    <div id="carouselExampleDark2"
      class="container-fluid container-lg carousel carousel-dark slide h-100"
      data-bs-ride="carousel">

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(group, index) in productGroups"
          :key="index"
          type="button"
          :data-bs-target="'#carouselExampleDark2'"
          :data-bs-slide-to="index"
          class="btn-swiper"
          :class="{ active: index === 0 }"
          :aria-current="index === 0 ? 'true' : undefined"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner h-100" >
        <div
          v-for="(group, index) in productGroups"
          :key="index"
          class="carousel-item h-100"
          :class="{ active: index === 0 }"
          
          data-bs-interval="10000"
        >
          <div class="row h-80">
            <div class="col-lg-3 col-sm-3" v-for="product in group" :key="product.id">
              <ProductCard :product="product" :shadow="false" :arrow="false"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'

const products = [
      {
    id: 1,
    title: "Product D",
    price: 34.99,
    image: "/assets/Images/D.PNG",
  },
  {
    id: 2,
    title: "Product F",
    price: 44.99,
    image: "/assets/Images/F.PNG",
  },
  {
    id: 3,
    title: "Product G",
    price: 24.99,
    image: "/assets/Images/G.PNG",
  },
  {
    id: 4,
    title: "Product H",
    price: 54.99,
    image: "/assets/Images/H.PNG",
  },
  {
    id: 5,
    title: "Product 1",
    price: 29.99,
    image: "/assets/Images/1.jpg",
  },
  {
    id: 6,
    title: "Product 2",
    price: 39.99,
    image: "/assets/Images/2.jpg",
  },
  {
    id: 7,
    title: "Product 3",
    price: 19.99,
    image: "/assets/Images/3.jpg",
  },
  {
    id: 8,
    title: "Product 4",
    price: 49.99,
    image: "/assets/Images/4.jpg",
  },

]

// Group products in arrays of 4 per slide
const productGroups = []
for (let i = 0; i < products.length; i += 4) {
  productGroups.push(products.slice(i, i + 4))
}
</script>


<style scoped>
.title-section .custom-font {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #000000;
}

.coursol-btn-left {
  left: 0%;
  border: 1px solid;
  height: 40px;
  width: 40px;
  top: 40%;
  opacity: 1;
  background: #000000;
}

.coursol-btn-right {
  right: 0%;
  border: 1px solid;
  height: 40px;
  width: 40px;
  top: 40%;
  opacity: 1;
  background: #000000;
}
.arr-section{
  height: 75vh; 
  min-height: 384px
}
.h-80 {
  height: 80% !important;
}
</style>
