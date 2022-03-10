<template>
  <span v-if="show" :class="className">
    {{ content }}
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VSpan extends Vue {
  @Prop({ default: "" }) content?: string | number;
  @Prop({ default: "" }) className!: string;
  @Prop({ default: true }) show?: boolean;
}
</script>
