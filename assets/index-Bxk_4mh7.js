import{r as a}from"./index-BwDkhjyp.js";import{u as l}from"./theme-provider-BxuddooS.js";import{f as q,P as w}from"./factory-BFmlPmGv.js";const d=()=>{var E;const e=a.useRef(0),{theme:n}=l(),r=n.__breakpoints,{containerRef:c,direction:m="down",identifier:p="@media screen"}=((E=n.__config)==null?void 0:E.breakpoint)??{},i=!!c;if(!r)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const u=a.useMemo(()=>r.queries.map(({breakpoint:f,minMaxQuery:t,minW:s,maxW:o})=>{const k=p==="@media screen"?"@media screen and ":`${p} `,b=(t==null?void 0:t.replace(k,""))??"";return{breakpoint:f,query:b,minW:s,maxW:o}}),[r,p]),[g,h]=a.useState(()=>{if(!w()||i)return"base";for(const{breakpoint:t,query:s}of u)if(window.matchMedia(s).matches)return t}),B=a.useCallback(f=>{for(const{breakpoint:t,minW:s,maxW:o}of u)if(m!=="up"){if((s??0)<=f)return t}else if(f<=(o??1/0))return t;return"base"},[u,m]);return a.useEffect(()=>{if(!i||!w())return;const t=new ResizeObserver(([s])=>{if(!s)return;cancelAnimationFrame(e.current);const{width:o}=s.contentRect;e.current=requestAnimationFrame(()=>{const k=B(o);h(k)})});return c.current&&t.observe(c.current),()=>{t.disconnect(),cancelAnimationFrame(e.current)}},[i,c,B]),a.useEffect(()=>{if(i)return;const f=u.map(({breakpoint:t,query:s})=>{const o=window.matchMedia(s),k=b=>{b.matches&&h(t)};return typeof o.addEventListener=="function"&&o.addEventListener("change",k),()=>{typeof o.removeEventListener=="function"&&o.removeEventListener("change",k)}});return()=>{f.forEach(t=>t())}},[u,i]),g},v=e=>{const{theme:n}=l(),r=d();return a.useMemo(()=>_(e)(n,r),[e,n,r])},_=(e={})=>(n,r)=>{var p;if(!n)throw Error("getBreakpointValue: `theme` is undefined.");const c=(p=n.__breakpoints)==null?void 0:p.keys;if(!c)throw Error("getBreakpointValue: `breakpoints` is undefined.");const m=c.indexOf(r);for(let i=m;0<i;i--){const u=c[i];if(e.hasOwnProperty(u))return e[u]}return e.base},R=e=>{const n=v(e);return a.useState(n)},S=(e,n)=>{const r=d();a.useEffect(()=>{e(r)},[r,...n])},y=(e,n)=>{const r=d();q(()=>{e(r)},[r,...n])};export{R as a,S as b,y as c,v as d,_ as g,d as u};