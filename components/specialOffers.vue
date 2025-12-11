<template>
  <div class="title-section">
    <h2 class="custom-font font-dark pt-12 pl-12">SPECIAL OFFERS</h2>
  </div>

  <section class="mt-2" style="height: 75vh; min-height: 384px">
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
      <div class="carousel-inner" style="height: 100%;">
        <div
          v-for="(group, index) in productGroups"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
          style="height: 100%;"
          data-bs-interval="10000"
        >
          <div class="row" style="height: 80%;">
            <div class="col-lg-3 col-sm-3" v-for="product in group" :key="product.id">
              <ProductCard :product="product" :shadow="true" :arrow="true"/>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev coursol-btn-left" type="button"
        data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>

      <button class="carousel-control-next coursol-btn-right" type="button"
        data-bs-target="#carouselExampleDark2" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'

// Static product list
const products = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image: "/assets/Images/1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 39.99,
    image: "/assets/Images/2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: 19.99,
    image: "/assets/Images/3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    price: 49.99,
    image: "/assets/Images/4.jpg",
  },
  {
    id: 5,
    title: "Product D",
    price: 34.99,
    image: "/assets/Images/D.PNG",
  },
  {
    id: 6,
    title: "Product F",
    price: 44.99,
    image: "/assets/Images/F.PNG",
  },
  {
    id: 7,
    title: "Product G",
    price: 24.99,
    image: "/assets/Images/G.PNG",
  },
  {
    id: 8,
    title: "Product H",
    price: 54.99,
    image: "/assets/Images/H.PNG",
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
</style>
