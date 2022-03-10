<template>
  <div v-if="checkContent(content)" :class="className">{{ content }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VTitle extends Vue {
  @Prop(String) className!: string;
  @Prop(String) content!: string;
  checkContent(content: string): boolean {
    return content !== "DATA";
  }
}
</script>
