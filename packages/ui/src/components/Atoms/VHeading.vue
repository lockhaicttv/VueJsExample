<template>
  <component :is="tag" :class="headingClass" class="font-title font-bold">{{ content }}</component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class VHeading extends Vue {
  @Prop(String) tag!: string;
  @Prop(String) content!: string;
  className = {
    h1: "text-5xl md:text-7xl capitalize",
    h2: "text-3xl md:text-5xl capitalize",
    h3: "text-xl md:text-3xl capitalize",
    h4: "text-lg md:text-xl capitalize",
    h5: "text-base md:text-lg",
    h6: "text-md md:text-base",
  };
  headingClass = this.className["h1"];
  mounted(): void {
    if (this.tag === "h1") {
      this.headingClass = this.className["h1"];
    } else if (this.tag === "h2") {
      this.headingClass = this.className["h2"];
    } else if (this.tag === "h3") {
      this.headingClass = this.className["h3"];
    } else if (this.tag === "h4") {
      this.headingClass = this.className["h4"];
    } else if (this.tag === "h5") {
      this.headingClass = this.className["h5"];
    } else if (this.tag === "h6") {
      this.headingClass = this.className["h6"];
    }
  }
}
</script>
