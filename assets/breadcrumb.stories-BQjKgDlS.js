import{d as H,U as K,J as N,r as t,k as Q,g as W,j as e,s as X}from"./iframe-CzLob2S8.js";import{P as J}from"./props-table-hh2sl1VL.js";import{E as Y,C as Z}from"./ellipsis-icon-CeBBABgg.js";import{C as $}from"./chevron-right-icon-ThDfRkPk.js";import{M as V,a as F,b as D,c as P}from"./menu-CohWm5O8.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DcggJ69I.js";import"./grid-item-D2K3UNbQ.js";import"./for-CeSllMh9.js";import"./flex-C6MzWLZ8.js";import"./heading-Dcz9XRZZ.js";import"./menu.style-DQ4ctX9D.js";import"./popover-B4PPvidZ.js";import"./index-DH3Q8P7u.js";import"./index-CTrYnNmA.js";import"./index-B6tbJis0.js";import"./use-disclosure-z7Ww8LBB.js";import"./event-BqUQNVAt.js";import"./slide-fade-DHogtfTH.js";import"./transition-gVg7kimi.js";import"./fade-scale-2HbuV2u5.js";import"./index-CcC-ZdNF.js";import"./index-i-2YwH-J.js";import"./check-icon-gZzA7Zp0.js";const ee=H({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),re=({children:n,ellipsis:o,endBoundaries:a=0,items:i=[],link:u,startBoundaries:m=0,...B}={})=>{const p=K(n),x=p.length||i.length,{t:d}=N("breadcrumb"),f=m+a>0&&x>m+a,b=t.useCallback(s=>u?s.map(({label:c,...h})=>t.cloneElement(u,{...u.props,children:c,...h})):[],[u]),k=t.useCallback(s=>o?Q(o,{items:s}):null,[o]),j=t.useCallback(s=>{const c=s.length,h=s.slice(0,m),z=s.slice(m,c-a),G=s.slice(c-a);return[h,z,G]},[m,a]),T=t.useMemo(()=>{if(!!p.length)return p;if(f){const[c,h,z]=j(i);return[...b(c),k(h),...b(z)]}else return b(i)},[p,i,f,k,b,j]),L=t.useCallback(s=>({"aria-label":d("Breadcrumb"),...B,...s}),[B,d]),_=t.useCallback(s=>({...s}),[]),q=t.useCallback(({href:s,currentPage:c,...h}={})=>({href:c?void 0:s,"aria-current":c?"page":void 0,...h}),[]),A=t.useCallback(s=>({"aria-label":d("Ellipsis"),role:"presentation",...s}),[d]);return{children:T,getEllipsisProps:A,getLinkProps:q,getListProps:_,getRootProps:L}},{ComponentContext:ne,useComponentContext:O,withContext:g,withProvider:se}=W("breadcrumb",ee),l=se(({endBoundaries:n,gap:o,separator:a,startBoundaries:i,itemProps:u,listProps:m,separatorProps:B,...p})=>{const{children:x,getEllipsisProps:d,getLinkProps:f,getListProps:b,getRootProps:k}=re({ellipsis:e.jsx(w,{}),endBoundaries:n,link:e.jsx(r,{}),startBoundaries:i,...p}),j=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:f}),[d,f]);return e.jsx(ne,{value:j,children:e.jsx(X.nav,{...k(),children:e.jsx(te,{...b({gap:o,...m}),children:x.map((T,L)=>{const _=L===x.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(U,{...u,children:T}),_?null:e.jsx(ae,{...B,children:a})]},L)})})})})},"root")(),te=g("ol","list")(),U=g("li","item")(),ae=g(U,"separator")({children:e.jsx($,{})}),r=g("a","link")(void 0,({currentPage:n,...o})=>{const{getLinkProps:a}=O();return{as:n?"span":"a",...a({currentPage:n,...o})}}),w=g(Y,"ellipsis")(void 0,n=>{const{getEllipsisProps:o}=O();return{...o(n)}}),Ee={component:l,title:"Components / Breadcrumb"},M=()=>e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),R=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:n})},C=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(J,{variant:"stack",rows:["plain","underline"],children:(o,a,i)=>e.jsx(l,{variant:a,items:n},i)})},I=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(J,{variant:"stack",rows:["sm","md","lg"],children:(o,a,i)=>e.jsx(l,{size:a,items:n},i)})},v=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:n,startBoundaries:1})},S=()=>e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsx(w,{}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{separator:"/",children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{separator:e.jsx(Z,{}),children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),y=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ellipsis:({items:o})=>e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsx(D,{children:o.map(({href:a,label:i},u)=>e.jsx(P,{as:"a",href:a,children:i},u))})]}),endBoundaries:1,items:n,startBoundaries:1}),e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsxs(D,{children:[e.jsx(P,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(P,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(P,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
  return <>
      <Breadcrumb.Root ellipsis={({
      items
    }) => {
      return <Menu.Root>
              <Menu.Trigger>
                <Breadcrumb.Ellipsis cursor="pointer" focusVisibleRing="outline" outline="none" rounded="l1" />
              </Menu.Trigger>

              <Menu.Content>
                {items.map(({
            href,
            label
          }, index) => <Menu.Item key={index} as="a" href={href}>
                    {label}
                  </Menu.Item>)}
              </Menu.Content>
            </Menu.Root>;
    }} endBoundaries={1} items={items} startBoundaries={1} />

      <Breadcrumb.Root>
        <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
        <Menu.Root>
          <Menu.Trigger>
            <Breadcrumb.Ellipsis cursor="pointer" focusVisibleRing="outline" outline="none" rounded="l1" />
          </Menu.Trigger>

          <Menu.Content>
            <Menu.Item as="a" href="/">
              ピッコロ大魔王編
            </Menu.Item>
            <Menu.Item as="a" href="/">
              サイヤ人編
            </Menu.Item>
            <Menu.Item as="a" href="/">
              フリーザ編
            </Menu.Item>
          </Menu.Content>
        </Menu.Root>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>
    </>;
}`,...y.parameters?.docs?.source}}};const ye=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{M as Basic,v as Boundaries,y as CustomEllipsis,S as Ellipsis,R as Items,E as Separator,I as Size,C as Variant,ye as __namedExportsOrder,Ee as default};
