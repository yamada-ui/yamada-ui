import{a as r,j as p}from"./jsx-runtime-b08f8875.js";import{I as A,o as D}from"./fontawesome-icon-55aa2a9e.js";import{r as g}from"./index-8ee6c85d.js";import{k as F,p as T,d as u,e as C}from"./factory-2d442159.js";import{f}from"./forward-ref-cf7188bd.js";import{a as G}from"./use-component-style-b6002d28.js";import{o as H}from"./theme-provider-78d359c6.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const[J,y]=F({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),I=f((m,s)=>{const[n,i]=G("Breadcrumb",m),{className:d,children:c,separator:o="/",gap:k="sm",listProps:L,...x}=H(i),_={display:"flex",alignItems:"center",...n.list},l=T(c),t=l.length,V=l.map((q,z)=>g.cloneElement(q,{separator:o,gap:k,isLastChild:t===z+1}));return r(J,{value:n,children:r(u.nav,{ref:s,className:C("ui-breadcrumb",d),__css:n.container,...x,children:r(u.ol,{className:"ui-breadcrumb__list",...L,__css:_,children:V})})})}),a=f(({className:m,children:s,separator:n,isCurrentPage:i,isLastChild:d,gap:c,...o},k)=>{const L=y(),_=T(s).map(t=>t.type===e?g.cloneElement(t,{isCurrentPage:i}):t.type===S?g.cloneElement(t,{gap:c,children:t.props.children||n}):t),l={display:"inline-flex",alignItems:"center",...L.item};return p(u.li,{ref:k,className:C("ui-breadcrumb__item",m),__css:l,...o,children:[_,d?null:r(S,{gap:c,children:n})]})}),e=f(({className:m,children:s,isCurrentPage:n,href:i,...d},c)=>{const o=y();return r(u.a,{ref:c,as:n?"span":"a",href:n?void 0:i,"aria-current":n?"page":void 0,className:C("ui-breadcrumb__link",m),__css:o.link,...d,children:s})}),S=f(({children:m,gap:s,...n},i)=>{const d=y(),c={mx:s,...d.separator};return r(u.span,{ref:i,className:"ui-breadcrumb__item__separator",__css:c,...n,children:m})}),cr={title:"Components / Navigation / Breadcrumb",component:I},b=()=>p(I,{children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),h=()=>p(I,{separator:"-",children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),B=()=>p(I,{separator:r(A,{icon:D,color:"gray.300"}),children:[r(a,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(a,{children:r(e,{href:"/",children:"ナメック星編"})}),r(a,{children:r(e,{href:"/",children:"人造人間編"})}),r(a,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]});var v,P,N;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(j=(E=h.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,M,O;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(O=(M=B.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const tr=["basic","withSeparator","withCustomSeparator"];export{tr as __namedExportsOrder,b as basic,cr as default,B as withCustomSeparator,h as withSeparator};
//# sourceMappingURL=breadcrumb.stories-32d50e69.js.map
