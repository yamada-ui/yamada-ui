import{j as r,a as p}from"./jsx-runtime-TtYKBvr-.js";import{I as A,q as D}from"./fontawesome-icon-ZF81hbra.js";import{r as g}from"./index-IybTgENJ.js";import{c as F,p as O,u,a as C}from"./factory-BpP3TutA.js";import{f}from"./forward-ref-6T0UNPU-.js";import{u as G}from"./use-component-style-heJEaiUP.js";import{o as H}from"./theme-provider-RZopMVJP.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-C1O_Nmpw.js";import"./index-3Y8obiWq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const[J,y]=F({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),I=f((m,s)=>{const[n,i]=G("Breadcrumb",m),{className:d,children:c,separator:o="/",gap:k="sm",listProps:L,...x}=H(i),_={display:"flex",alignItems:"center",...n.list},l=O(c),t=l.length,T=l.map((V,z)=>g.cloneElement(V,{separator:o,gap:k,isLastChild:t===z+1}));return r(J,{value:n,children:r(u.nav,{ref:s,className:C("ui-breadcrumb",d),__css:n.container,...x,children:r(u.ol,{className:"ui-breadcrumb__list",...L,__css:_,children:T})})})}),a=f(({className:m,children:s,separator:n,isCurrentPage:i,isLastChild:d,gap:c,...o},k)=>{const L=y(),_=O(s).map(t=>t.type===e?g.cloneElement(t,{isCurrentPage:i}):t.type===S?g.cloneElement(t,{gap:c,children:t.props.children||n}):t),l={display:"inline-flex",alignItems:"center",...L.item};return p(u.li,{ref:k,className:C("ui-breadcrumb__item",m),__css:l,...o,children:[_,d?null:r(S,{gap:c,children:n})]})}),e=f(({className:m,children:s,isCurrentPage:n,href:i,...d},c)=>{const o=y();return r(u.a,{ref:c,as:n?"span":"a",href:n?void 0:i,"aria-current":n?"page":void 0,className:C("ui-breadcrumb__link",m),__css:o.link,...d,children:s})}),S=f(({children:m,gap:s,...n},i)=>{const d=y(),c={mx:s,...d.separator};return r(u.span,{ref:i,className:"ui-breadcrumb__item__separator",__css:c,...n,children:m})}),cr={title:"Components / Navigation / Breadcrumb",component:I},b=()=>p(I,{children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),h=()=>p(I,{separator:"-",children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),B=()=>p(I,{separator:r(A,{icon:D,color:"gray.300"}),children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]});var v,P,N;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var w,E,j;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(j=(E=h.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,M,q;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(q=(M=B.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const tr=["basic","withSeparator","withCustomSeparator"];export{tr as __namedExportsOrder,b as basic,cr as default,B as withCustomSeparator,h as withSeparator};
