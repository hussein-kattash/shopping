<template>
  <swiper
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class=""
  >
    <swiper-slide v-for="(slide, index) in data" :key="index">
      <HeroSection
        :slide="slide.image"
        :title="slide.title"
        :desc="slide.desc"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/images/slide1.png";
import image2 from "../../assets/images/slide2.png";
import image3 from "../../assets/images/slide3.png";

const modules = [Autoplay, Pagination, Navigation];
const data = [
  {
    image: image1,
    title: "Welcome to our store.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    image: image2,
    title: "Make your life easier through online shopping.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    image: image3,
    title: "All products can be found here with discounts.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
/* .swiper-pagination-bullet-active{
  background: red;
}
.swiper-button-next::after{
  background-color:red;
} */
</style>

<!-- 
:pagination="{
  clickable: true,
}"
:navigation="true" -->