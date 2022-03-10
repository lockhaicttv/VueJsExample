<template>
  <div class="col-4 match_review">
    <div class="match_info">
      <div class="match_status">
        <VSpan :show="showStatus()" :content="getContent()" />
      </div>
      <div class="match_time">
        <VSpan :content="convertDate(startDateTime)" />
        <VSpan :content="convertTime(startDateTime)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VSpan from "@/components/Atoms/VSpan.vue";
import { IInfo } from "@projectb/shared";
import moment from "moment";
@Component({
  components: {
    VSpan,
  },
})
export default class MatchReview extends Vue {
  @Prop(String) status!: string;
  @Prop(String) startDateTime!: string;
  @Prop(Object) penalty!: IInfo | null;

  convertDate(time: string): string {
    let day = moment(time).calendar();
    let date = day.split(" ");
    if (date[0] === "Yesterday" || date[0] === "Tomorrow") {
      return date[0];
    }
    return moment(time).format("ddd, MMM YYYY");
  }
  convertTime(time: string): string {
    return moment(time).format("HH:MM A");
  }
  showStatus(): boolean {
    return this.status === "FINISHED";
  }
  getContent(): string {
    return `FT ${this.penalty ? ` (PEL)` : ""}`;
  }
}
</script>
