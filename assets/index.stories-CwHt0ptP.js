import{r as n,j as l}from"./iframe-6cyGxZR1.js";import{B as m}from"./box-BQQGFgNV.js";const p=["keypress","mousemove","touchmove","click","scroll"],E={events:p,initialState:!0},f=(e,d)=>{const{events:r,initialState:c}={...E,...d},[u,i]=n.useState(c),o=n.useRef(void 0);return n.useEffect(()=>{const a=()=>{i(!1),o.current&&clearTimeout(o.current),o.current=setTimeout(()=>i(!0),e)};return r.forEach(s=>document.addEventListener(s,a)),()=>{r.forEach(s=>document.removeEventListener(s,a))}},[r,e]),u},h={title:"Hooks / useIdle"},t=()=>{const e=f(2e3);return l.jsxs(m,{bg:e?"blue.500":"red.500",color:"white",p:"md",rounded:"md",transitionDuration:"moderate",transitionProperty:"all",children:["Current state: ",e?"idle":"not idle"]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const idle = useIdle(2000);
  return <Box bg={idle ? "blue.500" : "red.500"} color="white" p="md" rounded="md" transitionDuration="moderate" transitionProperty="all">
      Current state: {idle ? "idle" : "not idle"}
    </Box>;
}`,...t.parameters?.docs?.source}}};const B=["Basic"];export{t as Basic,B as __namedExportsOrder,h as default};
