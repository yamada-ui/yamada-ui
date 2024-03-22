function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-DCLm2SLv.js","./iframe-DyKlyqw5.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js","./react-18-D8cruF67.js","./index-BtM5VmRH.js","./index-CR_MNdqh.js","./_basePickBy-BTYWenEZ.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js","./mapValues-JdRuaFY6.js","./inheritsLoose-B7h9gheN.js","./_baseUniq-BldSWMm_.js","./index-BVHHL_dW.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-DyKlyqw5.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-DCLm2SLv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
