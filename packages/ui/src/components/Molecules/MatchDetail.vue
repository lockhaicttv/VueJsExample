<template>
  <tr>
    <VTd>{{ homeTeam }}</VTd>
    <VTd>{{ title }}</VTd>
    <VTd>{{ awayTeam }}</VTd>
  </tr>
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
export default class MatchDetail extends Vue {
  @Prop(String) homeTeam!: string;
  @Prop(String) awayTeam!: string;
  @Prop(String) title!: string;
}
</script>
