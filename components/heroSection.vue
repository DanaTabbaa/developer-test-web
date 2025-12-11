<template>
 <div class="row g-0 mx-auto min-h-500">

    <!-- Full-width Image with Overlay -->
    <div class="col-12 position-relative header-bg">

      <div class="position-absolute gap-2 top-50 translate-middle-y 
                d-flex flex-column justify-content-start align-items-start p-4 shop-sec">

        <h2 class="mb-3 ">SALE</h2>
        <h5 class="mb-3 w-75 ">ACCESS A LIMITED SELECTION WITH UP TO 70% OFF</h5>

        <div class="dev-btn d-flex justify-content-center align-items-center ">
          <span class=" text-white mr-8">SHOP NOW</span>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.dev-btn-jewelery {
  background-image: url('~/assets/Icons/Bottun-White.png');
  background-size: contain;
  /* make image cover the whole div */
  background-position: center;
  /* center the image */
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
  background-position: center;
  background-repeat: no-repeat;
}

.header-bg {
  height: 100vh;
  background-image: url('/assets/Images/Header.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
}

.shop-btn {
  height: 70%;

}

.shop-sec {
  z-index: 10;
  left: 75px;
  width: 35%;

  @media (max-width: 768px) {
    width: 70%;
  }
}

.span-btn {
  left: 80px;
  top: 66%;
  letter-spacing: 4px;

  @media screen and (min-width: 400px) and (max-width: 767.98px) {
    left: 36%;
    top: 71%;

  }

}

.dev-btn {
  background-image: url('~/assets/Icons/Bottun.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 160PX;
  height: 50px;

}
.min-h-500 {
  min-height: 500px !important;
}
</style>
