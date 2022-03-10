<template>
  <div :class="className">
    <VTitle content="Season" clas-name="text-muted" />
    <Dropdown :data="season" size="sm" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Dropdown from "@/components/Atoms/VDropdown.vue";
import VTitle from "@/components/Atoms/VTitle.vue";

@Component({
  components: {
    VTitle,
    Dropdown,
  },
})
export default class SeasonDropdown extends Vue {
  @Prop(String) className!: string;

  private season: string[] = ["2021"];
}
</script>
