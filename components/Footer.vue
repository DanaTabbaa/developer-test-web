<template>
  <footer class="footer-bg">
    <div class="thin-golden-row"></div>

    <div class="row">

      <!-- Logo + Social -->
      <div class="col-md-3 col-sm-12">
        <div class="d-flex flex-column justify-content-start align-items-center ml-8 mt-5">

          <img
            src="~/assets/Icons/DEVELOPERTEST-Logo.png"
            alt=""
            width="300"
            height="300"
          />

          <ul class="d-flex list-inline">
            <li class="list-inline-item mr-4" v-for="icon in socialIcons" :key="icon.alt">
              <a href="#">
                <img :src="icon.src" :alt="icon.alt" class="nav-icon w-100px" />
              </a>
            </li>
          </ul>

        </div>
      </div>

      <!-- Middle Links -->
      <div class="col-md-6 col-sm-12 d-flex flex-row justify-content-center align-items-start mt-t">

        <div class="footer-links d-flex flex-column justify-content-between h-75 text-white mr-32">
          <h2 class="text-white">Home</h2>
          <h6>About us</h6>
          <h6>Media center</h6>
          <h6>Contact us</h6>
        </div>

        <div class="footer-links d-flex flex-column justify-content-between h-75 text-white">
          <h2 class="text-white">Electronics</h2>
          <h6>Jewelry</h6>
          <h6>Men Clothing</h6>
          <h6>Women Clothing</h6>
        </div>

      </div>

      <!-- Contact -->
      <div class="col-md-3 col-sm-12 d-flex flex-row justify-content-center align-items-start mt-t">
        <div class="footer-linkss">
          <h2 class="text-white">Contact us</h2>
          <h6>+971 56 715 5150</h6>
          <h6>+971 4 832 2253</h6>
          <h6>info@almotthedon.com</h6>
        </div>
      </div>

    </div>

    <!-- Divider -->
    <div class="footer-divider m-auto">
      <p class="paraghraph-footer">© Al Motthedon 2024 all right reserved</p>
    </div>
  </footer>
</template>

<script setup>
const socialIcons = [
  { src: "assets/Icons/facebook_Gold.png", alt: "Facebook" },
  { src: "assets/Icons/Twitter-Gold.png", alt: "Twitter" },
  { src: "assets/Icons/instagram_Gold.png", alt: "Instagram" },
  { src: "assets/Icons/Youtube-Gold.png", alt: "YouTube" }
];
</script>

<style scoped>
.footer-bg {
  background-color: black;
    height: 70vh;
  @media (max-width: 768px) {
    height: 152vh;
  }
}

/* Keep dimensions for list items */
ul li {
  width: 36px;
  height: 36px;
}

/* Headings */
h2 {
  font-weight: 700;
  font-size: 24px;
}

h6 {
  font-weight: 400;
  font-size: 18px;
  color: white;
}

/* Bottom text */
.paraghraph-footer {
  padding: 12px;
  text-align: center;
  color: white;
}

/* Divider */
.footer-divider {
  margin-top: 30px !important;
  height: 2px;
  width: 95%;
  background: white;
}

/* Custom margin class */
.mt-t {
  margin-top: 6rem;
}
</style>
