import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{I as $,q as z}from"./fontawesome-icon-DZ7LyXjv.js";import{r as C}from"./index-BwDkhjyp.js";import{b as G}from"./icon-BzYp-3aP.js";import{l as H,t as O,u as o,c as j}from"./factory-QgPjGyGX.js";import{f as l}from"./forward-ref-BmTAT9U5.js";import{a as J}from"./use-component-style-Dz3o-zMC.js";import{o as K}from"./theme-provider-CJ7n5K3X.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-NB1UEv68.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";const[Q,E]=H({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),B=l((u,a)=>{const[s,t]=J("Breadcrumb",u),{className:m,children:c,separator:d="/",gap:I="fallback(2, 0.5rem)",listProps:k,...A}=K(t),L={display:"flex",alignItems:"center",...s.list},b=O(c),i=b.length,T=b.map((V,W)=>C.cloneElement(V,{separator:d,gap:I,isLastChild:i===W+1}));return r.jsx(Q,{value:s,children:r.jsx(o.nav,{ref:a,className:j("ui-breadcrumb",m),__css:s.container,...A,children:r.jsx(o.ol,{className:"ui-breadcrumb__list",...k,__css:L,children:T})})})}),e=l(({className:u,children:a,separator:s,isCurrentPage:t,isLastChild:m,gap:c,...d},I)=>{const k=E(),L=O(a).map(i=>i.type===n?C.cloneElement(i,{isCurrentPage:t}):i.type===_?C.cloneElement(i,{gap:c,children:i.props.children||s}):i),b={display:"inline-flex",alignItems:"center",...k.item};return r.jsxs(o.li,{ref:I,className:j("ui-breadcrumb__item",u),__css:b,...d,children:[L,m?null:r.jsx(_,{gap:c,children:s})]})}),n=l(({className:u,children:a,isCurrentPage:s,href:t,...m},c)=>{const d=E();return r.jsx(o.a,{ref:c,as:s?"span":"a",href:s?void 0:t,"aria-current":s?"page":void 0,className:j("ui-breadcrumb__link",u),__css:d.link,...m,children:a})}),_=l(({children:u,gap:a,...s},t)=>{const m=E(),c={mx:a,...m.separator};return r.jsx(o.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:c,...s,children:u})}),U=l(({children:u,className:a,...s},t)=>{const c={...E().ellipsis};return u??r.jsxs(G,{ref:t,title:"ellipsis",className:j("ui-breadcrumb__item__ellipsis",a),__css:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[r.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),r.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor"}),r.jsx("circle",{cx:"30",cy:"12",r:"2",fill:"currentColor"})]})}),ir={title:"Components / Navigation / Breadcrumb",component:B},h=()=>r.jsxs(B,{children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"サイヤ人編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"ナメック星編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"人造人間編"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),p=()=>r.jsxs(B,{separator:"-",children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"サイヤ人編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"ナメック星編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"人造人間編"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),x=()=>r.jsxs(B,{separator:r.jsx($,{icon:z,color:"gray.300"}),children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"サイヤ人編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"ナメック星編"})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"人造人間編"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),f=()=>r.jsxs(B,{children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"サイヤ人編"})}),r.jsx(e,{children:r.jsx(U,{})}),r.jsx(e,{children:r.jsx(n,{href:"/",children:"人造人間編"})}),r.jsx(e,{isCurrentPage:!0,children:r.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var g,D,y;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(y=(D=h.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var w,v,S;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var P,N,F;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<Icon icon={faCaretRight} color="gray.300" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(F=(N=x.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var R,M,q;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const dr=["basic","withSeparator","withCustomSeparator","withEllipsis"];export{dr as __namedExportsOrder,h as basic,ir as default,x as withCustomSeparator,f as withEllipsis,p as withSeparator};
