<template>
  <ul class="nav nav-pills border-top border-bottom nav-justified p-2 my-4 shadow-sm">
    <VNavItem url="/match/0/timeline" content="TIMELINE" :class-name="[isActive('/timeline')]" />
    <VNavItem url="/match/0/lineups" content="LINE UPS" :class-name="[isActive('/lineups')]" />
    <VNavItem url="/match/0/stats" content="STATS" :class-name="[isActive('/stats')]" />
    <VNavItem url="/match/0/news" content="NEWS" :class-name="isActive('/news')" />
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VNavItem from "@/components/Atoms/VNavItem.vue";

@Component({
  components: { VNavItem },
})
export default class NavbarDetailMatch extends Vue {
  isActive(route: string): string {
    return this.$route.path === "/match/" + this.$route.params.id + route
      ? "nav-link text-dark bg-light text-decoration-none"
      : "nav-link text-muted text-decoration-none ";
  }
}
</script>
