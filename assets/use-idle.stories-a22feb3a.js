import{j as E}from"./jsx-runtime-03b4ddbf.js";import{r as s}from"./index-76fb7be0.js";import{B as f}from"./box-4174d02c.js";import"./_commonjsHelpers-de833af9.js";import"./factory-94a21dd6.js";const v=["keypress","mousemove","touchmove","click","scroll"],w={events:v,initialState:!0},h=(e,u)=>{const{events:r,initialState:m}={...w,...u},[p,i]=s.useState(m),o=s.useRef(null);return s.useEffect(()=>{const a=()=>{i(!1),o.current&&window.clearTimeout(o.current),o.current=window.setTimeout(()=>{i(!0)},e)};return r.forEach(n=>document.addEventListener(n,a)),()=>{r.forEach(n=>document.removeEventListener(n,a))}},[r,e]),p},B={title:"Hooks / useIdle"},t=()=>{const e=h(2e3);return E(f,{bg:e?"blue.500":"red.500",p:"md",rounded:"md",color:"white",transitionProperty:"all",transitionDuration:"slower",children:["Current state: ",e?"idle":"not idle"]})};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const idle = useIdle(2000);
  return <Box bg={idle ? "blue.500" : "red.500"} p="md" rounded="md" color="white" transitionProperty="all" transitionDuration="slower">
      Current state: {idle ? "idle" : "not idle"}
    </Box>;
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["basic"];export{D as __namedExportsOrder,t as basic,B as default};
//# sourceMappingURL=use-idle.stories-a22feb3a.js.map
