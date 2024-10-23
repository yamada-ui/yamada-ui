import{j as e}from"./extends-CwFRzn3r.js";import{r as w}from"./index-BwDkhjyp.js";import{u as Se}from"./index-CsH8woeS.js";import{m as Fe}from"./forward-ref-scR1bmHx.js";import{a as ze}from"./use-component-style-DhRiPQIp.js";import{o as Oe}from"./theme-provider-Cr3m0r8P.js";import{u as be,c as _,d as P}from"./factory-DBrfn43w.js";import{m as R}from"./factory-CWrzRNZL.js";import{A as x,C as f}from"./cherry-Ba_ksOLX.js";import{C as t}from"./center-DkfaJL4L.js";import{T as _e}from"./text-LaTineB_.js";import{A as Re}from"./avatar-BDq3LkKg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./motion-B7t0mTYZ.js";import"./lucide-icon-CsDBQyHf.js";import"./icon-CVPWgGuL.js";import"./use-var-DcJHaFAf.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-B2-TjMYC.js";const ke={enter:({ident:n,isVisible:o,orientation:i})=>({[i==="horizontal"?"rotateY":"rotateX"]:n==="from"?o?180:0:o?0:180}),exit:({ident:n,orientation:o})=>({[o==="horizontal"?"rotateY":"rotateX"]:n==="from"?0:180})},E={animate:"enter",initial:"exit",variants:ke},r=Fe((n,o)=>{const[i,ce]=w.useState({}),y=w.useRef(null),S=w.useRef(null),[l,pe]=ze("Flip",n),{className:F,defaultValue:xe="from",delay:fe=0,duration:me=.4,from:de,isDisabled:k=!1,isReadOnly:D=!1,orientation:c="horizontal",to:ue,transition:he={},value:ge,onChange:je,...Ce}=Oe(pe),[A,ve]=Se({defaultValue:xe,value:ge,onChange:je}),B=A==="to",we=()=>{D||ve(p=>p==="from"?"to":"from")};be(()=>{const p=y.current,z=S.current;if(!p||!z)return;const O=p.offsetWidth,b=p.offsetHeight,W=z.offsetWidth,H=z.offsetHeight;(O!==W||b!==H)&&console.warn(`Dimensions do not match:
        "from" element (Width: ${O}px, Height: ${b}px)
        does not match "to" element (Width: ${W}px, Height: ${H}px).
        Please ensure both elements have the same dimensions.`),ce({height:b,width:O})},[y,S]);const ye={h:i.height?`${i.height}px`:"auto",w:i.width?`${i.width}px`:"auto",...l.container},$={delay:fe,duration:me,...he};return e.jsxs(R.button,{ref:o,type:"button",className:_("ui-flip",`ui-flip__${c}`,F),"data-disabled":P(k),"data-readonly":P(D),"data-value":A,disabled:k,onClick:we,__css:ye,...Ce,children:[e.jsx(R.span,{ref:y,className:_("ui-flip__from",`ui-flip__from--${c}`,F),custom:{ident:"from",isVisible:B,orientation:c},...E,transition:$,__css:{...l.flipIdent,...l.from},children:de}),e.jsx(R.span,{ref:S,className:_("ui-flip__to",`ui-flip__to--${c}`,F),custom:{ident:"to",isVisible:B,orientation:c},...E,transition:$,__css:{...l.flipIdent,...l.to},children:ue})]})});r.displayName="Flip";r.__ui__="Flip";const Je={component:r,title:"Components / Transitions / Flip"},a=()=>e.jsx(t,{bg:"white",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(_e,{color:"black",fontSize:"lg",children:"Yamada UI"})}),s=()=>e.jsx(t,{bg:"black",borderRadius:"lg",borderWidth:"1px",h:"2xs",w:"3xs",children:e.jsx(Re,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"lg"})}),m=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),d=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),orientation:"vertical",to:e.jsx(a,{})}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),orientation:"vertical",to:e.jsx(f,{fontSize:"2xl"})})]}),u=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{duration:1.4,from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{duration:1.4,from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),h=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{delay:1,from:e.jsx(s,{}),to:e.jsx(a,{})}),e.jsx(r,{delay:1,from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"})})]}),g=()=>e.jsxs(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{}),transition:{type:"spring",damping:10,stiffness:80}}),e.jsx(r,{from:e.jsx(x,{fontSize:"2xl"}),to:e.jsx(f,{fontSize:"2xl"}),transition:{type:"spring",damping:10,stiffness:120}})]}),j=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),isDisabled:!0,to:e.jsx(a,{})})}),C=()=>e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),isReadOnly:!0,to:e.jsx(a,{})})}),v=()=>{const[n,o]=w.useState("from");return e.jsx(t,{display:"flex",gap:"4xl",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(r,{from:e.jsx(s,{}),to:e.jsx(a,{}),value:n,onChange:o})})};var N,I,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,Y,X;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} orientation="vertical" to={<FrontOfCard />} />

      <Flip from={<Apple fontSize="2xl" />} orientation="vertical" to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(X=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var L,M,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip duration={1.4} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip duration={1.4} from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip delay={1} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip delay={1} from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
    </Center>;
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Center display="flex" gap="4xl" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Flip from={<BackOfCard />} to={<FrontOfCard />} transition={{
      type: "spring",
      damping: 10,
      stiffness: 80
    }} />

      <Flip from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} transition={{
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
