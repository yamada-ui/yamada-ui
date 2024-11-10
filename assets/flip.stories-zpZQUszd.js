import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as w}from"./index-ClcD9ViR.js";import{u as Se}from"./index-DPt_fcIQ.js";import{m as Fe}from"./forward-ref-2BKBy0Yi.js";import{a as ze}from"./use-component-style-CLSKeq_H.js";import{o as Oe}from"./theme-provider-CNI9L2WW.js";import{u as be,c as _,d as H}from"./factory-COau3w21.js";import{m as I}from"./factory-ep9rrzy9.js";import{A as x,C as f}from"./cherry-B_74eUj7.js";import{C as t}from"./center-CSG2P-cD.js";import{T as _e}from"./text-BnztNdZ-.js";import{A as Ie}from"./avatar-CP3QDzJg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-Bq47Fk52.js";import"./lucide-icon-pIguMOGe.js";import"./icon-BodRPJCf.js";import"./use-var-YCfkKbSC.js";import"./forward-ref-D13m8o2p.js";import"./use-image-7FWS93Ka.js";const Re={enter:({ident:n,isVisible:o,orientation:i})=>({[i==="horizontal"?"rotateY":"rotateX"]:n==="from"?o?180:0:o?0:180}),exit:({ident:n,orientation:o})=>({[o==="horizontal"?"rotateY":"rotateX"]:n==="from"?0:180})},P={animate:"enter",initial:"exit",variants:Re},r=Fe((n,o)=>{const[i,ce]=w.useState({}),y=w.useRef(null),S=w.useRef(null),[l,pe]=ze("Flip",n),{className:F,defaultValue:xe="from",delay:fe=0,duration:me=.4,from:de,isDisabled:R=!1,isReadOnly:k=!1,orientation:c="horizontal",to:ue,transition:he={},value:ge,onChange:je,...Ce}=Oe(pe),[D,ve]=Se({defaultValue:xe,value:ge,onChange:je}),A=D==="to",we=()=>{k||ve(p=>p==="from"?"to":"from")};be(()=>{const p=y.current,z=S.current;if(!p||!z)return;const O=p.offsetWidth,b=p.offsetHeight,$=z.offsetWidth,W=z.offsetHeight;(O!==$||b!==W)&&console.warn(`Dimensions do not match:
        "from" element (Width: ${O}px, Height: ${b}px)
        does not match "to" element (Width: ${$}px, Height: ${W}px).
        Please ensure both elements have the same dimensions.`),ce({height:b,width:O})},[y,S]);const ye={h:i.height?`${i.height}px`:"auto",w:i.width?`${i.width}px`:"auto",...l.container},B={delay:fe,duration:me,...he};return e.jsxs(I.button,{ref:o,type:"button",className:_("ui-flip",`ui-flip__${c}`,F),"data-disabled":H(R),"data-readonly":H(k),"data-value":D,disabled:R,onClick:we,__css:ye,...Ce,children:[e.jsx(I.span,{ref:y,className:_("ui-flip__from",`ui-flip__from--${c}`,F),custom:{ident:"from",isVisible:A,orientation:c},...P,transition:B,__css:{...l.flipIdent,...l.from},children:de}),e.jsx(I.span,{ref:S,className:_("ui-flip__to",`ui-flip__to--${c}`,F),custom:{ident:"to",isVisible:A,orientation:c},...P,transition:B,__css:{...l.flipIdent,...l.to},children:ue})]})});r.displayName="Flip";r.__ui__="Flip";const Je={component:r,title:"Components / Transitions / Flip"},a=()=>e.jsx(t,{bg:"white",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(_e,{color:"black",fontSize:"lg",children:"Yamada UI"})}),s=()=>e.jsx(t,{bg:"black",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(Ie,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"lg"})}),m=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),d=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),orientation:"vertical",to:e.jsx(a,{})}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),orientation:"vertical",to:e.jsx(f,{fontSize:"2xl"})})]}),u=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{duration:1.4,from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{duration:1.4,from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),h=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{delay:1,from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{delay:1,from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),g=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{}),transition:{type:"spring",damping:10,stiffness:80}}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"}),transition:{type:"spring",damping:10,stiffness:120}})]}),j=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),isDisabled:!0,to:e.jsx(a,{})})}),C=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),isReadOnly:!0,to:e.jsx(a,{})})}),v=()=>{const[n,o]=w.useState("from");return e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{}),value:n,onChange:o})})};var E,N,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,Y,X;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} orientation="vertical" to={<FrontOfCard />} />

      <Flip from={<AppleIcon fontSize="2xl" />} orientation="vertical" to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(X=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var L,M,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip duration={1.4} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip duration={1.4} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip delay={1} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip delay={1} from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} />
    </Center>;
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} transition={{
      type: "spring",
      damping: 10,
      stiffness: 80
    }} />

      <Flip from={<AppleIcon fontSize="2xl" />} to={<CherryIcon fontSize="2xl" />} transition={{
      type: "spring",
      damping: 10,
      stiffness: 120
    }} />
    </Center>;
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,re,te;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} isDisabled to={<FrontOfCard />} />
    </Center>;
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ae,se;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} isReadOnly to={<FrontOfCard />} />
    </Center>;
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,ie,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<FlipIdent>("from");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} value={value} onChange={onChange} />
    </Center>;
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Ke=["basic","flipVertical","withDuration","withDelay","useSpring","isDisabled","isReadOnly","customControl"];export{Ke as __namedExportsOrder,m as basic,v as customControl,Je as default,d as flipVertical,j as isDisabled,C as isReadOnly,g as useSpring,h as withDelay,u as withDuration};
