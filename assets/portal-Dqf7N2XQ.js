import{j as l}from"./jsx-runtime-CfatFE5O.js";import{r as c}from"./index-ClcD9ViR.js";import{r as p}from"./index-ZuzByk-F.js";import{A as P,u as m}from"./factory-ZSnRp-09.js";const[d,v]=P({name:"PortalContext",strict:!1}),j=({appendToParentPortal:a,children:s,containerRef:o})=>{const r=o.current,t=r??(typeof window<"u"?document.body:void 0),e=c.useMemo(()=>{if(!r)return;const{ownerDocument:n}=r,u=n.createElement("div");return u.className="ui-portal",u},[r]),[,i]=c.useState({});return m(()=>i({}),[]),m(()=>{if(!(!e||!t))return t.appendChild(e),()=>{t.removeChild(e)}},[e,t]),t&&e?p.createPortal(l.jsx(d,{value:a?e:null,children:s}),e):null},C=({appendToParentPortal:a,children:s})=>{const[o,r]=c.useState(null),t=c.useRef(null),[,e]=c.useState({});c.useEffect(()=>e({}),[]);const i=v();return m(()=>{if(!o)return;const{ownerDocument:n}=o,u=a?i??n.body:n.body;t.current=n.createElement("div"),t.current.className="ui-portal",u.appendChild(t.current),e({});const f=t.current;return()=>{u.contains(f)&&u.removeChild(f)}},[o]),t.current?p.createPortal(l.jsx(d,{value:t.current,children:s}),t.current):l.jsx("span",{ref:n=>n?r(n):void 0})},x=({appendToParentPortal:a=!0,children:s,containerRef:o,disabled:r,isDisabled:t})=>(r??(r=t),r?s:o?l.jsx(j,{containerRef:o,appendToParentPortal:a,children:s}):l.jsx(C,{appendToParentPortal:a,children:s}));x.displayName="Portal";x.__ui__="Portal";export{x as P};