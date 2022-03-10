<template>
  <li class="nav-item text-center" :class="navItemClass()">
    <router-link :to="url" :class="className">
      {{ content }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VNavItem extends Vue {
  @Prop({ default: "nav-link text-white text-decoration-none" }) className!: string;
  @Prop(String) url!: string;
  @Prop(String) content!: string;
  navItemClass(): string {
    return this.$route.path === "/" && this.url === "/matches" ? "router-link-active" : "";
  }
}
</script>

<style scoped>
.router-link-active {
  border-bottom: #ebebeb solid 2px;
  background: rgba(0, 0, 0, 0.1);
}
.nav-link:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
