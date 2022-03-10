<template>
  <a :href="link" class="text-decoration-none hover-underline" :class="className" target="_blank">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ExternalLink extends Vue {
  @Prop(String) link!: string;
  @Prop({ default: "" }) className!: string;
}
</script>

<style>
.hover-underline:hover {
  text-decoration: underline;
}
</style>
