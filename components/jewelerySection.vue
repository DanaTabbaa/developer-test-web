<template>
  <div class="w-100 jewelery d-flex justify-content-start align-items-end">
    <div class="dev-btn-jewelery d-flex justify-content-center align-items-center ">
      <span class=" text-black mr-8">SHOP NOW</span>
    </div>
  </div>

</template>

<style scoped>
    .dev-btn-jewelery {
  background-image: url('~/assets/Icons/Bottun-White.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 160PX;
  height: 50px;
  margin-left: 64px;
  margin-bottom: 8px;
}

.jewelery {
  height: 90vh;
  width: 100%;
  background-image: url('~/assets/Images/Header-3.jpg');
  background-size: cover;
    @media (max-width: 768px ) {
    background-size: contain;
  }
  background-position: center;
  background-repeat: no-repeat;
}
</style>