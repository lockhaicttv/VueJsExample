<template>
  <div class="">
    <ul
      id="navbarSupportedContent"
      class="navbar-nav container-fluid justify-content-center col-xs-12 col-sm-12 col-lg-7 header_nav"
      tabs
    >
      <VNavItem v-for="item in navbar" :id="item.id" :key="item.url" :url="item.url" :content="item.content" />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { INews } from "@projectb/shared";
import VNavItem from "@/components/Atoms/VNavItem.vue";

@Component({
  components: { VNavItem },
})
export default class Navbar extends Vue {
  @Prop(Object) item!: INews | undefined;
  navbar = [
    { url: "/matches", content: "MATCHES", id: "matches" },
    { url: "/news", content: "NEWS", id: "news" },
    { url: "/standing", content: "STANDING", id: "standing" },
    { url: "/stats", content: "STATS", id: "stats" },
    { url: "/players", content: "PLAYERS", id: "players" },
  ];
}
</script>
<style scoped>
.nav-item {
  width: 20%;
}
</style>
