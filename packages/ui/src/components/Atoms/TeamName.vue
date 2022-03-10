<template>
  <div :class="className">{{ content }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TeamName extends Vue {
  @Prop(String) className!: string;
  @Prop(String) content!: string;
}
</script>
