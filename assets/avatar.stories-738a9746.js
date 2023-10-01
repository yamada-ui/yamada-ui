import{a as h,j as a}from"./jsx-runtime-29545a09.js";import{u as X,A as t}from"./avatar-d3ee59a3.js";import{f as O}from"./forward-ref-8b7d2a6f.js";import{s as Z,B as x,q as aa,d as H,e as P}from"./factory-e20f0797.js";import{r as ta}from"./index-76fb7be0.js";import{a as ra}from"./use-component-style-eed0605d.js";import{o as ea}from"./theme-752d0904.js";import{W as oa}from"./flex-e2aeca7c.js";import"./icon-0ac17974.js";import"./index-7c33f66e.js";import"./use-image-fcefcf52.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./_commonjsHelpers-de833af9.js";const V=O((o,l)=>{const[s]=ra("Avatar",o),{className:g,max:e,borderColor:b,gap:n="-sm",borderRadius:$="full",rounded:F="full",children:J,...K}=ea(o);let r=Z(J);const Y=x(e)?0:r.length-e;r=x(e)?r:r.slice(0,e),r=r.reverse();const L=r.map((A,Q)=>ta.cloneElement(A,aa({marginEnd:Q?n:0,size:o.size,borderColor:A.props.borderColor??b,borderWidth:"2px"})));return h(H.div,{ref:l,className:P("ui-avatar-group",g),__css:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",alignItems:"center",...s.group},...K,children:[Y>0?a(H.span,{className:"ui-avatar-excess",borderRadius:$,rounded:F,ms:n,__css:{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",borderWidth:"2px",...s.excess},children:`+${Y}`}):null,L]})}),sa={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},na=O(({className:o,boxSize:l="1em",placement:s="bottom-end",...g},e)=>{const b=X(),n={position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",...sa[s],...b.badge};return a(H.div,{ref:e,className:P("ui-avatar-badge",o),boxSize:l,__css:n,...g})}),Aa={title:"Components / Media And Icons / Avatar",component:t},m=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),i=()=>h(oa,{gap:"md",children:[a(t,{size:"2xs",name:"Hirotomo Yamada"}),a(t,{size:"xs",name:"Hirotomo Yamada"}),a(t,{size:"sm",name:"Hirotomo Yamada"}),a(t,{size:"md",name:"Hirotomo Yamada"}),a(t,{size:"lg",name:"Hirotomo Yamada"}),a(t,{size:"xl",name:"Hirotomo Yamada"}),a(t,{size:"2xl",name:"Hirotomo Yamada"})]}),c=()=>a(t,{name:"Hirotomo Yamada"}),u=()=>a(t,{src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),d=()=>a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",children:a(na,{bg:"primary"})}),p=()=>h(V,{children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]}),v=()=>h(V,{max:3,children:[a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),a(t,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})]});var f,z,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />;
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var w,y,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Avatar size='2xs' name='Hirotomo Yamada' />
      <Avatar size='xs' name='Hirotomo Yamada' />
      <Avatar size='sm' name='Hirotomo Yamada' />
      <Avatar size='md' name='Hirotomo Yamada' />
      <Avatar size='lg' name='Hirotomo Yamada' />
      <Avatar size='xl' name='Hirotomo Yamada' />
      <Avatar size='2xl' name='Hirotomo Yamada' />
    </Wrap>;
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var G,_,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Avatar name='Hirotomo Yamada' />;
}`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var j,E,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Avatar src='https://avatars.githubusercontent.com/u/84060430?v=4' />;
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,B,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4'>
      <AvatarBadge bg='primary' />
    </Avatar>;
}`,...(M=(B=d.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var R,T,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <AvatarGroup>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </AvatarGroup>;
}`,...(U=(T=p.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var k,q,D;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <AvatarGroup max={3}>
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
      <Avatar name='Hirotomo Yamada' src='https://avatars.githubusercontent.com/u/84060430?v=4' />
    </AvatarGroup>;
}`,...(D=(q=v.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const xa=["basic","withSize","withName","withImage","withBarge","useGroup","withGroupMax"];export{xa as __namedExportsOrder,m as basic,Aa as default,p as useGroup,d as withBarge,v as withGroupMax,u as withImage,c as withName,i as withSize};
//# sourceMappingURL=avatar.stories-738a9746.js.map
