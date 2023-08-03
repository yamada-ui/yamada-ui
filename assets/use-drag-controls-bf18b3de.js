import{u as r}from"./motion-16fcbfe3.js";class s{constructor(){this.componentControls=new Set}subscribe(t){return this.componentControls.add(t),()=>this.componentControls.delete(t)}start(t,o){this.componentControls.forEach(n=>{n.start(t.nativeEvent||t,o)})}}const e=()=>new s;function u(){return r(e)}export{u};
//# sourceMappingURL=use-drag-controls-bf18b3de.js.map
