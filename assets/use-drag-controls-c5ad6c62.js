import{u as r}from"./motion-1ef152f4.js";class s{constructor(){this.componentControls=new Set}subscribe(t){return this.componentControls.add(t),()=>this.componentControls.delete(t)}start(t,o){this.componentControls.forEach(n=>{n.start(t.nativeEvent||t,o)})}}const e=()=>new s;function u(){return r(e)}export{u};
//# sourceMappingURL=use-drag-controls-c5ad6c62.js.map
