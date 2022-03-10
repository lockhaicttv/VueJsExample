<template>
  <div>
    <MatchDetailStats />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MatchDetailStats from "@/components/Organisms/MatchDetailStats";

@Component({
  components: { MatchDetailStats },
})
export default class MatchStats extends Vue {}
</script>
