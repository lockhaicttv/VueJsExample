<template>
  <div class="col-1 country">
    <div class="country_item">
      <IconFlag :src="homeTeam" class-name="country_logo" />
    </div>
    <div class="country_item">
      <IconFlag :src="awayTeam" class-name="country_logo" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IconFlag from "@/components/Atoms/IconFlag.vue";
@Component({
  components: {
    IconFlag,
  },
})
export default class MatchesCountry extends Vue {
  @Prop(String) homeTeam!: string;
  @Prop(String) awayTeam!: string;
}
</script>
