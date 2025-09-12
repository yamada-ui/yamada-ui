import{n as l,I as c,d as i,g as d,r as p,j as n,s as y}from"./iframe-Bn8cMbTR.js";import{c as r}from"./createLucideIcon-C--YS6xs.js";import{u as h}from"./button-BuVkzRhm.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],f=r("circle-check-big",m);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],g=r("info",u);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],S=r("octagon-alert",x);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],A=r("triangle-alert",k),b=l(c)({as:f}),v=l(c)({as:g}),C=l(c)({as:S}),I=l(c)({as:A}),M=i({base:{description:{lineHeight:"shorter"},icon:{boxSize:"5",flexShrink:0,fontSize:"xl",me:"3"},loading:{flexShrink:0,fontSize:"xl",me:"3"},root:{alignItems:"start",display:"flex",overflow:"hidden",position:"relative",px:"4",py:"3",rounded:"l2",w:"full"},title:{display:"block",lineHeight:"shorter",me:"2"}},variants:{island:{description:{color:"fg.muted"},icon:{color:"colorScheme.solid"},root:{layerStyle:"panel",pl:7,_before:{bg:"colorScheme.solid",h:"calc(100% - {sizes.5})",left:"3",position:"absolute",rounded:"full",top:"50%",transform:"translateY(-50%)",w:1}}},plain:{description:{color:"fg.muted"},icon:{color:"colorScheme.solid"},root:{layerStyle:"panel"}},solid:{icon:{textStyle:"solid"},root:{layerStyle:"solid"}},subtle:{icon:{textStyle:"subtle"},root:{layerStyle:"subtle"}},surface:{icon:{textStyle:"surface"},root:{layerStyle:"surface"}}},compounds:[{css:{icon:{color:["colorScheme.600","colorScheme.400"]}},colorScheme:["secondary","gray"],variant:"plain"}],defaultProps:{variant:"plain"}}),_={error:C,info:v,success:b,warning:I},{ComponentContext:j,useComponentContext:w,withContext:s,withProvider:z}=d("alert",M),T=z(({status:o,colorScheme:e=o,...t})=>{const a=p.useMemo(()=>({status:o}),[o]);return n.jsx(j,{value:a,children:n.jsx(y.div,{colorScheme:e,role:"alert",...t})})},"root")({status:"info"}),$=s(({as:o,...e})=>{const{status:t}=w(),a=o||_[t];return n.jsx(a,{...e})},"icon")(),B=s(({loadingScheme:o="oval",...e})=>{const t=h(o);return n.jsx(t,{...e})},["icon","loading"])(),E=s("p","title")(),O=s("span","description")();export{T as A,$ as a,E as b,O as c,B as d};
