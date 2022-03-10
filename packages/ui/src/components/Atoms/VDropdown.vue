<template>
  <b-dropdown :text="text" :size="size" :class="className">
    <b-dropdown-item v-for="(item, index) in data" :key="index" @click="changeText(item)">{{ item }}</b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Dropdown extends Vue {
  @Prop(String) size!: string;
  @Prop(String) className!: string;
  @Prop(Array) data!: Array<string>;

  private text: string = this.data[0];

  private changeText = (text: string): void => {
    this.text = text;
  };
}
</script>
