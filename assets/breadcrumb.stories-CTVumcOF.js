import{j as r}from"./jsx-runtime-CKrituN3.js";import{I as O,q as T}from"./fontawesome-icon-DGDeQFte.js";import{r as I}from"./index-CBqU2yxZ.js";import{r as V,x as F,u as o,c as k}from"./factory-BVMa8fXZ.js";import{f as p}from"./forward-ref-DuAegr0M.js";import{a as z}from"./use-component-style-DFx-AFMQ.js";import{o as G}from"./theme-provider-BXaPRWNI.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BlEaeaZb.js";import"./index-BtoBQEmV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";const[H,L]=V({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),x=p((c,t)=>{const[n,m]=z("Breadcrumb",c),{className:i,children:u,separator:d="/",gap:f="0.5rem",listProps:j,...C}=G(m),E={display:"flex",alignItems:"center",...n.list},l=F(u),s=l.length,R=l.map((M,q)=>I.cloneElement(M,{separator:d,gap:f,isLastChild:s===q+1}));return r.jsx(H,{value:n,children:r.jsx(o.nav,{ref:t,className:k("ui-breadcrumb",i),__css:n.container,...C,children:r.jsx(o.ol,{className:"ui-breadcrumb__list",...j,__css:E,children:R})})})}),a=p(({className:c,children:t,separator:n,isCurrentPage:m,isLastChild:i,gap:u,...d},f)=>{const j=L(),E=F(t).map(s=>s.type===e?I.cloneElement(s,{isCurrentPage:m}):s.type===A?I.cloneElement(s,{gap:u,children:s.props.children||n}):s),l={display:"inline-flex",alignItems:"center",...j.item};return r.jsxs(o.li,{ref:f,className:k("ui-breadcrumb__item",c),__css:l,...d,children:[E,i?null:r.jsx(A,{gap:u,children:n})]})}),e=p(({className:c,children:t,isCurrentPage:n,href:m,...i},u)=>{const d=L();return r.jsx(o.a,{ref:u,as:n?"span":"a",href:n?void 0:m,"aria-current":n?"page":void 0,className:k("ui-breadcrumb__link",c),__css:d.link,...i,children:t})}),A=p(({children:c,gap:t,...n},m)=>{const i=L(),u={mx:t,...i.separator};return r.jsx(o.span,{ref:m,className:"ui-breadcrumb__item__separator",__css:u,...n,children:c})}),ar={title:"Components / Navigation / Breadcrumb",component:x},B=()=>r.jsxs(x,{children:[r.jsx(a,{children:r.jsx(e,{href:"/",children:"サイヤ人編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"ナメック星編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"人造人間編"})}),r.jsx(a,{isCurrentPage:!0,children:r.jsx(e,{href:"/",children:"魔人ブウ編"})})]}),b=()=>r.jsxs(x,{separator:"-",children:[r.jsx(a,{children:r.jsx(e,{href:"/",children:"サイヤ人編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"ナメック星編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"人造人間編"})}),r.jsx(a,{isCurrentPage:!0,children:r.jsx(e,{href:"/",children:"魔人ブウ編"})})]}),h=()=>r.jsxs(x,{separator:r.jsx(O,{icon:T,color:"gray.300"}),children:[r.jsx(a,{children:r.jsx(e,{href:"/",children:"サイヤ人編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"ナメック星編"})}),r.jsx(a,{children:r.jsx(e,{href:"/",children:"人造人間編"})}),r.jsx(a,{isCurrentPage:!0,children:r.jsx(e,{href:"/",children:"魔人ブウ編"})})]});var _,g,D;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(D=(g=B.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var y,S,v;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(v=(S=b.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var P,N,w;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(w=(N=h.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const ur=["basic","withSeparator","withCustomSeparator"];export{ur as __namedExportsOrder,B as basic,ar as default,h as withCustomSeparator,b as withSeparator};
