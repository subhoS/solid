import {
  createRoot,
  createRenderEffect,
  createMemo,
  createComponent,
  getContextOwner
} from "../..";

// reactive injection for dom-expressions
function memo(fn: () => any, equal: boolean) { return createMemo(fn, undefined, equal); }

export { getContextOwner as currentContext, createComponent, createRoot as root, createRenderEffect as effect, memo }
