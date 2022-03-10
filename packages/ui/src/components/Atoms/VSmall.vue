<template>
  <small :class="className">
    <slot></slot>
  </small>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VSmall extends Vue {
  @Prop({ default: "" }) className?: string;
}
</script>
