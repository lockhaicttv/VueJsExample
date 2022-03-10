<template>
  <td :class="className">
    <slot></slot>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class GroupHeader extends Vue {
  @Prop(String) className!: string;
}
</script>
