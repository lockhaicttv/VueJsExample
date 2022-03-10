<template>
  <div id="app">
    <Header v-if="checkRoute()" />
    <router-view
      :class="{ 'col-xs-12 col-sm-12 col-md-12 col-lg-7 container-fluid app_container page-size': checkRoute() }"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Organisms/Header/Header.vue";
import Footer from "@/components/Organisms/Footer/Footer.vue";

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {
  checkRoute(): boolean {
    return (
      this.$route.path === "/matches" ||
      this.$route.path === "/news" ||
      this.$route.path === "/players" ||
      this.$route.path === "/standing" ||
      this.$route.path === "/stats" ||
      this.$route.path === "/" ||
      this.$route.path === "/matches/" + this.$route.params.id
    );
  }
}
</script>

<style>
#app {
  background-color: #f8f9fa;
  height: 100%;
  position: relative;
  min-height: 100vh;
}

.page-size {
  min-height: 80vh;
}
.app_container {
  padding: 0 !important;
}

.loading {
  position: absolute;
  top: 200%;
  left: 50%;
}

@media screen and(min-width: 1020px) and (max-width: 1024px) {
  .app_container {
    width: 70% !important;
    max-width: 70% !important;
  }
}
</style>
