<template>
  <nav id="nav" class="header-color navbar-expand-lg">
    <VHeading tag="h5" class="text-white py-3 ps-2 container-fluid" content="UEFA EURO 2020" />
    <Navbar />
  </nav>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import VHeading from "@/components/Atoms/VHeading.vue";
import Navbar from "@/components/Molecules/Navbar.vue";

@Component({
  components: { Navbar, VHeading },
})
export default class Header extends Vue {}
</script>

<style scoped>
.header-color {
  background: #093e84;
}
@media screen and (max-width: 425px) {
  .header_nav {
    justify-content: space-around !important;
  }
}
</style>
