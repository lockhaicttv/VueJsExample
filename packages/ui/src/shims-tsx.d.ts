import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    interface IIntrinsicElements {
      // eslint-disable-next-line
      [elem: string]: any;
    }
  }
}
