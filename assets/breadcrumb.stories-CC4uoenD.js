import{d as A,k as G,F as H,r as t,g as J,f as K,j as e,s as N}from"./iframe-Dqv37jui.js";import{u as T}from"./index-DPuk35MY.js";import{C as Q}from"./chevron-right-icon-CKT-WCz9.js";import{E as U,C as W}from"./ellipsis-icon-D_qyV1QS.js";import{P as F}from"./props-table-heQ1Qlq0.js";import"./use-breakpoint-BI3OQxi_.js";import"./use-breakpoint-value-BmkGzUn3.js";import"./use-color-mode-value-D_U_yHOc.js";import"./createLucideIcon-9w-Kw71s.js";import"./grid-B5ktx7rU.js";import"./grid-item-BRLvLdto.js";import"./for-vxGyZb1G.js";import"./flex-GLUBJ1tJ.js";import"./heading-DZTUzuGZ.js";const X=A({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),Y=({children:n,ellipsis:o,endBoundaries:a=0,items:c=[],link:h,startBoundaries:u=0,...k}={})=>{const p=G(n),E=p.length||c.length,{t:b}=H("breadcrumb"),f=u+a>0&&E>u+a,m=t.useCallback(r=>h?r.map(({label:i,...d})=>t.cloneElement(h,{...h.props,children:i,...d})):[],[h]),B=t.useCallback(r=>o?J(o,{items:r}):null,[o]),x=t.useCallback(r=>{const i=r.length,d=r.slice(0,u),z=r.slice(u,i-a),q=r.slice(i-a);return[d,z,q]},[u,a]),w=t.useMemo(()=>{if(!!p.length)return p;if(f){const[i,d,z]=x(c);return[...m(i),B(d),...m(z)]}else return m(c)},[p,c,f,B,m,x]),y=t.useCallback(r=>({"aria-label":b("Breadcrumb"),...k,...r}),[k,b]),M=t.useCallback(r=>({...r}),[]),j=t.useCallback(({href:r,currentPage:i,...d}={})=>({href:i?void 0:r,"aria-current":i?"page":void 0,...d}),[]),_=t.useCallback(r=>({"aria-label":b("Ellipsis"),role:"presentation",...r}),[b]);return{children:w,getEllipsisProps:_,getLinkProps:j,getListProps:M,getRootProps:y}},{ComponentContext:Z,useComponentContext:V,withContext:g,withProvider:$}=K("breadcrumb",X),l=$(({endBoundaries:n,gap:o,separator:a,startBoundaries:c,itemProps:h,listProps:u,separatorProps:k,...p})=>{const E=T(n),b=T(c),{children:f,getEllipsisProps:m,getLinkProps:B,getListProps:x,getRootProps:w}=Y({ellipsis:e.jsx(O,{}),endBoundaries:E,link:e.jsx(s,{}),startBoundaries:b,...p}),y=t.useMemo(()=>({getEllipsisProps:m,getLinkProps:B}),[m,B]);return e.jsx(Z,{value:y,children:e.jsx(N.nav,{...w(),children:e.jsx(ee,{...x({gap:o,...u}),children:f.map((M,j)=>{const _=j===f.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(D,{...h,children:M}),_?null:e.jsx(re,{...k,children:a})]},j)})})})})},"root")(),ee=g("ol","list")(),D=g("li","item")(),re=g(D,"separator")({children:e.jsx(Q,{})}),s=g("a","link")(void 0,({currentPage:n,...o})=>{const{getLinkProps:a}=V();return{as:n?"span":"a",...a({currentPage:n,...o})}}),O=g(U,"ellipsis")(void 0,n=>{const{getEllipsisProps:o}=V();return{...o(n)}}),fe={component:l,title:"Components / Breadcrumb"},L=()=>e.jsxs(l,{children:[e.jsx(s,{href:"/",children:"サイヤ人編"}),e.jsx(s,{href:"/",children:"ナメック星編"}),e.jsx(s,{href:"/",children:"人造人間編"}),e.jsx(s,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),P=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:n})},C=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(F,{variant:"stack",rows:["plain","underline"],children:(o,a,c)=>e.jsx(l,{variant:a,items:n},c)})},R=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(F,{variant:"stack",rows:["sm","md","lg"],children:(o,a,c)=>e.jsx(l,{size:a,items:n},c)})},v=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:n,startBoundaries:1})},S=()=>e.jsxs(l,{children:[e.jsx(s,{href:"/",children:"孫悟空少年編"}),e.jsx(O,{}),e.jsx(s,{href:"/",children:"人造人間編"}),e.jsx(s,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{separator:"/",children:[e.jsx(s,{href:"/",children:"サイヤ人編"}),e.jsx(s,{href:"/",children:"ナメック星編"}),e.jsx(s,{href:"/",children:"人造人間編"}),e.jsx(s,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{separator:e.jsx(W,{}),children:[e.jsx(s,{href:"/",children:"サイヤ人編"}),e.jsx(s,{href:"/",children:"ナメック星編"}),e.jsx(s,{href:"/",children:"人造人間編"}),e.jsx(s,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]});L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(() => [{
    href: "/",
    label: "サイヤ人編"
  }, {
    href: "/",
    label: "ナメック星編"
  }, {
    href: "/",
    label: "人造人間編"
  }, {
    href: "/",
    currentPage: true,
    label: "魔人ブウ編"
  }], []);
  return <Breadcrumb.Root items={items} />;
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(() => [{
    href: "/",
    label: "サイヤ人編"
  }, {
    href: "/",
    label: "ナメック星編"
  }, {
    href: "/",
    label: "人造人間編"
  }, {
    href: "/",
    currentPage: true,
    label: "魔人ブウ編"
  }], []);
  return <PropsTable variant="stack" rows={["plain", "underline"]}>
      {(_, row, key) => <Breadcrumb.Root key={key} variant={row} items={items} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(() => [{
    href: "/",
    label: "サイヤ人編"
  }, {
    href: "/",
    label: "ナメック星編"
  }, {
    href: "/",
    label: "人造人間編"
  }, {
    href: "/",
    currentPage: true,
    label: "魔人ブウ編"
  }], []);
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Breadcrumb.Root key={key} size={row} items={items} />}
    </PropsTable>;
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.RootProps["items"]>(() => [{
    href: "/",
    label: "サイヤ人編"
  }, {
    href: "/",
    label: "ナメック星編"
  }, {
    href: "/",
    label: "人造人間編"
  }, {
    href: "/",
    currentPage: true,
    label: "魔人ブウ編"
  }], []);
  return <Breadcrumb.Root endBoundaries={1} items={items} startBoundaries={1} />;
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Breadcrumb.Root separator="/">
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>

      <Breadcrumb.Root separator={<ChevronsRightIcon />}>
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>
    </>;
}`,...I.parameters?.docs?.source}}};const Be=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator"];export{L as Basic,v as Boundaries,S as Ellipsis,P as Items,I as Separator,R as Size,C as Variant,Be as __namedExportsOrder,fe as default};
