import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as w}from"./index-BwPxMuoB.js";import{u as ze}from"./index-DLOQPSsO.js";import{m as Oe}from"./forward-ref-Cy2nAbAn.js";import{a as be}from"./use-component-style-65RA3nVD.js";import{o as _e}from"./theme-provider-DGyR61Aa.js";import{u as Ie,d as H,c as _}from"./factory-B_KMcXyW.js";import{m as I}from"./factory-CplEbptb.js";import{C as x,A as f}from"./cherry-DxqbUBTx.js";import{C as t}from"./center-BgoPILRQ.js";import{T as ke}from"./text-clsxocLN.js";import{A as Ae}from"./avatar-BQpbeicy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-qc5arozF.js";import"./icon-DIzRaLo1.js";import"./use-var-Tj-aA0qb.js";import"./forward-ref-Ukjd1cIW.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-image-qWTdrDZe.js";const Be={enter:({ident:n,orientation:s,visible:i})=>({[s==="horizontal"?"rotateY":"rotateX"]:n==="from"?i?180:0:i?0:180}),exit:({ident:n,orientation:s})=>({[s==="horizontal"?"rotateY":"rotateX"]:n==="from"?0:180})},P={animate:"enter",initial:"exit",variants:Be},r=Oe((n,s)=>{const[i,ce]=w.useState({}),y=w.useRef(null),S=w.useRef(null),[l,pe]=be("Flip",n),{className:F,defaultValue:xe="from",delay:fe=0,isDisabled:me,disabled:k=me,duration:de=.4,from:ue,isReadOnly:he,orientation:c="horizontal",readOnly:A=he,to:ge,transition:je={},value:Ce,onChange:ve,...we}=_e(pe),[B,ye]=ze({defaultValue:xe,value:Ce,onChange:ve}),R=B==="to",Se={h:i.height?`${i.height}px`:"auto",w:i.width?`${i.width}px`:"auto",...l.container},$={delay:fe,duration:de,...je},Fe=()=>{A||ye(p=>p==="from"?"to":"from")};return Ie(()=>{const p=y.current,z=S.current;if(!p||!z)return;const O=p.offsetWidth,b=p.offsetHeight,W=z.offsetWidth,D=z.offsetHeight;(O!==W||b!==D)&&console.warn(`Dimensions do not match:
        "from" element (Width: ${O}px, Height: ${b}px)
        does not match "to" element (Width: ${W}px, Height: ${D}px).
        Please ensure both elements have the same dimensions.`),ce({height:b,width:O})},[y,S]),e.jsxs(I.button,{ref:s,type:"button",className:_("ui-flip",`ui-flip__${c}`,F),"data-disabled":H(k),"data-readonly":H(A),"data-value":B,disabled:k,onClick:Fe,__css:Se,...we,children:[e.jsx(I.span,{ref:y,className:_("ui-flip__from",`ui-flip__from--${c}`,F),custom:{ident:"from",orientation:c,visible:R},...P,transition:$,__css:{...l.flipIdent,...l.from},children:ue}),e.jsx(I.span,{ref:S,className:_("ui-flip__to",`ui-flip__to--${c}`,F),custom:{ident:"to",orientation:c,visible:R},...P,transition:$,__css:{...l.flipIdent,...l.to},children:ge})]})});r.displayName="Flip";r.__ui__="Flip";const Qe={component:r,title:"Components / Transitions / Flip"},o=()=>e.jsx(t,{bg:"white",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(ke,{color:"black",fontSize:"lg",children:"Yamada UI"})}),a=()=>e.jsx(t,{bg:"black",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(Ae,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"lg"})}),m=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(a,{}),to:e.jsx(o,{})}),e.jsx(r,{from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(x,{fontSize:"2xl"})})]}),d=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(a,{}),orientation:"vertical",to:e.jsx(o,{})}),e.jsx(r,{from:e.jsx(f,{fontSize:"2xl"}),orientation:"vertical",to:e.jsx(x,{fontSize:"2xl"})})]}),u=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{duration:1.4,from:e.jsx(a,{}),to:e.jsx(o,{})}),e.jsx(r,{duration:1.4,from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(x,{fontSize:"2xl"})})]}),h=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{delay:1,from:e.jsx(a,{}),to:e.jsx(o,{})}),e.jsx(r,{delay:1,from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(x,{fontSize:"2xl"})})]}),g=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(a,{}),to:e.jsx(o,{}),transition:{type:"spring",damping:10,stiffness:80}}),e.jsx(r,{from:e.jsx(f,{fontSize:"2xl"}),to:e.jsx(x,{fontSize:"2xl"}),transition:{type:"spring",damping:10,stiffness:120}})]}),j=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{disabled:!0,from:e.jsx(a,{}),to:e.jsx(o,{})})}),C=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(a,{}),readOnly:!0,to:e.jsx(o,{})})}),v=()=>{const[n,s]=w.useState("from");return e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(a,{}),to:e.jsx(o,{}),value:n,onChange:s})})};var E,N,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
      <Flip disabled from={<BackOfCard />} to={<FrontOfCard />} />
    </Center>;
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ae,ne;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} readOnly to={<FrontOfCard />} />
    </Center>;
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ie,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<FlipIdent>("from");
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} value={value} onChange={onChange} />
    </Center>;
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Ze=["basic","flipVertical","withDuration","withDelay","useSpring","disabled","readOnly","customControl"];export{Ze as __namedExportsOrder,m as basic,v as customControl,Qe as default,j as disabled,d as flipVertical,C as readOnly,g as useSpring,h as withDelay,u as withDuration};
