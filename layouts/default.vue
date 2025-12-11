<template>
  <div >
    <header class="px-md-8 px-8 shadow-sm bg-white">
       <headerComponent />
    </header>
    <div >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>