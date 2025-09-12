import{n as X,I as D,o as _,p as w,r as I,j as e,q as O,h as E,b as z,t as R,v as V}from"./iframe-Bn8cMbTR.js";import{u as B}from"./index-DxOQ1YS9.js";import{u as q}from"./use-animation-Dyhv-PQR.js";import{c as K}from"./createLucideIcon-C--YS6xs.js";import{X as n}from"./x-icon-CUNqek_Z.js";import"./preload-helper-D9Z9MdNV.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],N=K("menu",L),a=X(D)({as:N}),P=_({base:{opacity:1,rounded:"l1",userSelect:"none",width:"fit-content",_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}}}),{withContext:F}=w("airy",P),o=F(({defaultValue:t="from",delay:r=0,disabled:p,duration:f=.2,from:C,readOnly:x,to:h,value:b,onChange:v,onClick:g,...A})=>{const y="var(--opacity)",s=q(),[S,j]=B({defaultValue:t,value:b,onChange:v}),M=I.useCallback(async()=>{x||(await s.start({opacity:0,transition:{delay:r,duration:f}}),j(k=>k==="from"?"to":"from"),await s.start({opacity:y,transition:{duration:f}}))},[s,j,x,y,f,r]);return e.jsx(O.button,{type:"button","data-disabled":z(p),"data-readonly":z(x),"data-value":S,animate:s,disabled:p,initial:{opacity:y},onClick:E(g,M),...A,children:S==="from"?C:h})})(void 0,t=>{const r=R(t.css,{opacity:"opacity"});return{...V(t,{opacity:"opacity"}),css:r,opacity:"{opacity}"}}),W={component:o,title:"Components / Airy"},c=()=>e.jsx(o,{from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(n,{fontSize:"2xl"})}),i=()=>e.jsx(o,{duration:.6,from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(n,{fontSize:"2xl"})}),l=()=>e.jsx(o,{delay:1,from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(n,{fontSize:"2xl"})}),u=()=>e.jsx(o,{disabled:!0,from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(n,{fontSize:"2xl"})}),m=()=>e.jsx(o,{from:e.jsx(a,{fontSize:"2xl"}),readOnly:!0,to:e.jsx(n,{fontSize:"2xl"})}),d=()=>{const[t,r]=I.useState("to");return e.jsx(o,{from:e.jsx(a,{fontSize:"2xl"}),to:e.jsx(n,{fontSize:"2xl"}),value:t,onChange:r})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Airy duration={0.6} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Airy delay={1} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Airy disabled from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Airy from={<MenuIcon fontSize="2xl" />} readOnly to={<XIcon fontSize="2xl" />} />;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<KeyframeIdent>("to");
  return <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} value={value} onChange={onChange} />;
}`,...d.parameters?.docs?.source}}};const Y=["Basic","Duration","Delay","Disabled","ReadOnly","CustomControl"];export{c as Basic,d as CustomControl,l as Delay,u as Disabled,i as Duration,m as ReadOnly,Y as __namedExportsOrder,W as default};
