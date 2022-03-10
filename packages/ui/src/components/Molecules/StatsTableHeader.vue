<template>
  <tr class="sTableHeader">
    <VTd :class-name="'column-1 text-muted'">Player</VTd>
    <VTd :class-name="'text-muted'"></VTd>
    <VTd :class-name="'text-end text-muted'">Goals</VTd>
  </tr>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VTd from "@/components/Atoms/VTd.vue";

@Component({
  components: {
    VTd,
  },
})
export default class GroupHeader extends Vue {}
</script>
