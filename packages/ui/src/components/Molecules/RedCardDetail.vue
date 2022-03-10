<template>
  <div v-if="checkTeam()" class="row text-center pt-3">
    <div class="col-4">
      <div v-for="(redCard, index) in homeTeam.redCards" :key="index" class="text-muted">
        {{ redCard.player + redCard.minute }}
      </div>
    </div>
    <div class="col">
      <IconFlag :src="require('@/assets/red-card.svg')" />
    </div>
    <div class="col-4">
      <div v-for="(redCard, index) in awayTeam.redCards" :key="index" class="text-muted">
        {{ redCard.player + redCard.minute }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IconFlag from "@/components/Atoms/IconFlag.vue";
import type { IMatchTeamStats } from "@projectb/shared";
@Component({
  components: { IconFlag },
})
export default class RedCardDetail extends Vue {
  @Prop(String) stage!: string;
  @Prop(Object) homeTeam!: IMatchTeamStats;
  @Prop(Object) awayTeam!: IMatchTeamStats;
  checkTeam(): boolean {
    return !!(this.homeTeam && this.awayTeam);
  }
}
</script>
