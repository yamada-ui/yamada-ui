import{a as r,j as B}from"./jsx-runtime-b08f8875.js";import{I as A,o as D}from"./fontawesome-icon-55aa2a9e.js";import{r as _}from"./index-8ee6c85d.js";import{k as F,p as T,d as o,e as C}from"./factory-2d442159.js";import{f as p}from"./forward-ref-cf7188bd.js";import{a as G}from"./use-component-style-b6002d28.js";import{o as H}from"./theme-provider-78d359c6.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const[J,y]=F({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),f=p((m,s)=>{const[a,i]=G("Breadcrumb",m),{className:d,children:c,separator:I="/",gap:k="sm",listProps:L,...x}=H(i),g={display:"flex",alignItems:"center",...a.list},u=T(c),t=u.length,V=u.map((q,z)=>_.cloneElement(q,{separator:I,gap:k,isLastChild:t===z+1}));return r(J,{value:a,children:r(o.nav,{ref:s,className:C("ui-breadcrumb",d),__css:a.container,...x,children:r(o.ol,{className:"ui-breadcrumb__list",...L,__css:g,children:V})})})}),n=p(({className:m,children:s,separator:a,isCurrentPage:i,isLastChild:d,gap:c,...I},k)=>{const L=y(),g=T(s).map(t=>t.type===e?_.cloneElement(t,{isCurrentPage:i}):t.type===S?_.cloneElement(t,{gap:c,children:t.props.children||a}):t),u={display:"inline-flex",alignItems:"center",...L.item};return B(o.li,{ref:k,className:C("ui-breadcrumb__item",m),__css:u,...I,children:[g,d?null:r(S,{gap:c,children:a})]})}),e=p(({className:m,children:s,isCurrentPage:a,...i},d)=>{const c=y();return r(o.a,{ref:d,as:a?"span":"a","aria-current":a?"page":void 0,className:C("ui-breadcrumb__link",m),__css:c.link,...i,children:s})}),S=p(({children:m,gap:s,...a},i)=>{const d=y(),c={mx:s,...d.separator};return r(o.span,{ref:i,className:"ui-breadcrumb__item__separator",__css:c,...a,children:m})}),cr={title:"Components / Navigation / Breadcrumb",component:f},l=()=>B(f,{children:[r(n,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(n,{children:r(e,{href:"/",children:"ナメック星編"})}),r(n,{children:r(e,{href:"/",children:"人造人間編"})}),r(n,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),b=()=>B(f,{separator:"-",children:[r(n,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(n,{children:r(e,{href:"/",children:"ナメック星編"})}),r(n,{children:r(e,{href:"/",children:"人造人間編"})}),r(n,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]}),h=()=>B(f,{separator:r(A,{icon:D,color:"gray.300"}),children:[r(n,{children:r(e,{href:"/",children:"サイヤ人編"})}),r(n,{children:r(e,{href:"/",children:"ナメック星編"})}),r(n,{children:r(e,{href:"/",children:"人造人間編"})}),r(n,{isCurrentPage:!0,children:r(e,{href:"/",children:"魔人ブウ編"})})]});var P,v,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(N=(v=l.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,E,j;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(j=(E=b.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,M,O;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const tr=["basic","withSeparator","withCustomSeparator"];export{tr as __namedExportsOrder,l as basic,cr as default,h as withCustomSeparator,b as withSeparator};
//# sourceMappingURL=breadcrumb.stories-a44221df.js.map
