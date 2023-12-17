import{j as r,a as p}from"./jsx-runtime-TtYKBvr-.js";import{I as T,q as V}from"./fontawesome-icon-ZfuIL68e.js";import{r as C}from"./index-IybTgENJ.js";import{c as z,p as R,u as o,a as A}from"./factory-yYnGGCem.js";import{f}from"./forward-ref-6T0UNPU-.js";import{u as G}from"./use-component-style-5-ma296Y.js";import{o as H}from"./theme-provider-Wsw433nP.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-h0N_MwdT.js";import"./index-dINoAjpC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const[J,_]=z({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),E=f((t,m)=>{const[n,s]=G("Breadcrumb",t),{className:i,children:u,separator:d="/",gap:I="sm",listProps:k,...g}=H(s),L={display:"flex",alignItems:"center",...n.list},l=R(u),c=l.length,M=l.map((q,O)=>C.cloneElement(q,{separator:d,gap:I,isLastChild:c===O+1}));return r(J,{value:n,children:r(o.nav,{ref:m,className:A("ui-breadcrumb",i),__css:n.container,...g,children:r(o.ol,{className:"ui-breadcrumb__list",...k,__css:L,children:M})})})}),a=f(({className:t,children:m,separator:n,isCurrentPage:s,isLastChild:i,gap:u,...d},I)=>{const k=_(),L=R(m).map(c=>c.type===e?C.cloneElement(c,{isCurrentPage:s}):c.type===D?C.cloneElement(c,{gap:u,children:c.props.children||n}):c),l={display:"inline-flex",alignItems:"center",...k.item};return p(o.li,{ref:I,className:A("ui-breadcrumb__item",t),__css:l,...d,children:[L,i?null:r(D,{gap:u,children:n})]})}),e=f(({className:t,children:m,isCurrentPage:n,href:s,...i},u)=>{const d=_();return r(o.a,{ref:u,as:n?"span":"a",href:n?void 0:s,"aria-current":n?"page":void 0,className:A("ui-breadcrumb__link",t),__css:d.link,...i,children:m})}),D=f(({children:t,gap:m,...n},s)=>{const i=_(),u={mx:m,...i.separator};return r(o.span,{ref:s,className:"ui-breadcrumb__item__separator",__css:u,...n,children:t})}),ur={title:"Components / Navigation / Breadcrumb",component:E},B=()=>p(E,{children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),b=()=>p(E,{separator:"-",children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),h=()=>p(E,{separator:r(T,{icon:V,color:"gray.300"}),children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]});var y,x,S;B.parameters={...B.parameters,docs:{...(y=B.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(S=(x=B.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,P,N;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var w,F,j;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(j=(F=h.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const cr=["basic","withSeparator","withCustomSeparator"];export{cr as __namedExportsOrder,B as basic,ur as default,h as withCustomSeparator,b as withSeparator};
