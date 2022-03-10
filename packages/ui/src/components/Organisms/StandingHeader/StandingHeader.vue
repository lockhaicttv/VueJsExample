<template>
  <div :class="className">
    <SeasonDropdown class-name="py-2 ps-3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SeasonDropdown from "@/components/Molecules/SeasonDropdown.vue";

@Component({
  components: {
    SeasonDropdown,
  },
})
export default class StandingHeader extends Vue {
  @Prop(String) className!: string;
}
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
