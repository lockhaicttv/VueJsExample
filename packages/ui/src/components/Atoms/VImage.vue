<template>
  <img :src="src" :height="height" :width="width" :class="className" :alt="alt" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class IconFlag extends Vue {
  @Prop(String) src!: string;
  @Prop(String) alt!: string;
  @Prop(Number) height!: number;
  @Prop(Number) width!: number;
  @Prop(String) className!: string;
}
</script>
