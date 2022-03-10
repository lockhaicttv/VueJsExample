<template>
  <div>
    <VTitle content="News" class="tab_detail text-center p-4" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VTitle from "@/components/Atoms/VTitle.vue";

@Component({
  components: { VTitle },
})
export default class MatchStats extends Vue {}
</script>
<style lang="scss" scope>
.tab_detail {
  min-height: 60vh;
}
</style>
