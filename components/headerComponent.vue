<template>
  <!-- Top Header -->
<div class="bg-light text-white d-flex header-style">
    <ul class="list-unstyled d-flex mb-0 w-100 justify-content-end align-items-center gap-2">
      <li>
        <NuxtLink class="text-dark text-decoration-none" to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-dark text-decoration-none" to="/about-us">About Us</NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-dark text-decoration-none" to="/media-center">Media Center</NuxtLink>
      </li>
      <li>
        <NuxtLink class="text-dark text-decoration-none" to="/contact-us">Contact Us</NuxtLink>
      </li>

    </ul>

  </div>

  <!-- Main Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
    <div class="container-fluid header-style mb-sm-32">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~/assets/Icons/logo.png" alt="Developer Test Logo" height="100" width="100">
      </NuxtLink>
      <button @click="menuOpen = !menuOpen" class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="menuOpen ? 'navbar-collapse show' : 'navbar-collapse'" class="collapse navbar-collapse over-content"
        id="navbarContent">
        <!-- Routes -->
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">


          <li v-for="(item, i) in categories" :key="i" class="nav-item">
            <NuxtLink :href="`/categories/${item}`" class="nav-link text-dark fw-medium">
              {{ item.toUpperCase() }}
            </NuxtLink>

          </li>
        </ul>


        <!-- Search Box -->
        <form class="d-flex me-3">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>

        <!-- Social Media Icons (Right side in navbar) -->
        <div class="d-flex justify-content-around align-items-center">
          <NuxtLink to="#" class="me-2 mar-icon">
            <img src="~/assets/Icons/Login.png" alt="login" height="20" width="20" />
          </NuxtLink>
          <NuxtLink to="#" class="me-2 mar-icon">
            <img src="~/assets/Icons/heart.png" alt="heart" height="20" width="20" />
          </NuxtLink>
          <NuxtLink to="/Cart">
            <img src="~/assets/Icons/Cart.png" alt="cart" height="20" width="20" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
// const navLink = [
//   { href: "/products/categories/electronics", name: "Electronics" },
//   { href: "/products/categories/jewelery", name: "Jewelery" },
//   { href: "/products/categories/men's clothing", name: "Men Clothing" },
//   { href: "/products/categories/women's clothing", name: "Women Clothing" },
// ];
const categories = useState('categories')

if (!categories.value) {
  const { data } = await useFetch('https://fakestoreapi.com/products/categories')
  categories.value = data.value
}


</script>
