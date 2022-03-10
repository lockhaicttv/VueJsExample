<template>
  <thead :class="className">
    <tr>
      <VTd v-for="(item, index) in data" :key="index" :class-name="checkIndex(index)">
        {{ item }}
      </VTd>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Dropdown from "@/components/Atoms/VDropdown.vue";
import Title from "@/components/Atoms/VTitle.vue";
import VTd from "@/components/Atoms/VTd.vue";

@Component({
  components: {
    VTd,
    Title,
    Dropdown,
  },
})
export default class GroupHeader extends Vue {
  @Prop(String) className!: string;
  @Prop(Array) data!: Array<string>;
  checkIndex(index: number): string {
    return index === 0 ? "text-lg-start" : "";
  }
}
</script>
