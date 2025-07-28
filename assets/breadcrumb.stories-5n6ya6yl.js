import{d as N,k as Q,H as U,r as t,g as W,f as X,j as e,s as Y}from"./iframe-BHpF9Anv.js";import{P as A}from"./props-table-BDseLMKU.js";import{u as D}from"./index-HzxE17GX.js";import{C as Z}from"./chevron-right-icon-D9zXvGwT.js";import{E as $,C as ee}from"./ellipsis-icon-DV-0GIdu.js";import{M as H,a as O,b as q,c as L}from"./menu-BPxEWrKF.js";import"./grid-ByedI7Nf.js";import"./grid-item-DEAolyKT.js";import"./for-ByLCT2H8.js";import"./flex-BfatBxpB.js";import"./heading-D9cNz4N2.js";import"./use-breakpoint-DjjBb8t0.js";import"./use-breakpoint-value-BjmteGR7.js";import"./use-color-mode-value-CuZcykHs.js";import"./createLucideIcon-Ch8LwIgJ.js";import"./index-CCUIVoeU.js";import"./index-bPZ4fhsG.js";import"./use-disclosure-CHHpwuWM.js";import"./check-icon-vSzE-s3s.js";import"./popover-arPXO97v.js";import"./index-9k2c-L2q.js";import"./index-B355vHar.js";import"./index-uWs6-cL2.js";import"./event-DJ7sWu4h.js";import"./slide-fade-CtDoTTje.js";import"./transition-DhOBOn2b.js";import"./fade-scale-BaLclLqQ.js";const re=N({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),ne=({children:n,ellipsis:o,endBoundaries:a=0,items:i=[],link:u,startBoundaries:m=0,...x}={})=>{const p=Q(n),w=p.length||i.length,{t:b}=U("breadcrumb"),f=m+a>0&&w>m+a,d=t.useCallback(s=>u?s.map(({label:l,...h})=>t.cloneElement(u,{...u.props,children:l,...h})):[],[u]),B=t.useCallback(s=>o?W(o,{items:s}):null,[o]),k=t.useCallback(s=>{const l=s.length,h=s.slice(0,m),V=s.slice(m,l-a),K=s.slice(l-a);return[h,V,K]},[m,a]),T=t.useMemo(()=>{if(!!p.length)return p;if(f){const[l,h,V]=k(i);return[...d(l),B(h),...d(V)]}else return d(i)},[p,i,f,B,d,k]),_=t.useCallback(s=>({"aria-label":b("Breadcrumb"),...x,...s}),[x,b]),z=t.useCallback(s=>({...s}),[]),j=t.useCallback(({href:s,currentPage:l,...h}={})=>({href:l?void 0:s,"aria-current":l?"page":void 0,...h}),[]),F=t.useCallback(s=>({"aria-label":b("Ellipsis"),role:"presentation",...s}),[b]);return{children:T,getEllipsisProps:F,getLinkProps:j,getListProps:z,getRootProps:_}},{ComponentContext:se,useComponentContext:G,withContext:g,withProvider:te}=X("breadcrumb",re),c=te(({endBoundaries:n,gap:o,separator:a,startBoundaries:i,itemProps:u,listProps:m,separatorProps:x,...p})=>{const w=D(n),b=D(i),{children:f,getEllipsisProps:d,getLinkProps:B,getListProps:k,getRootProps:T}=ne({ellipsis:e.jsx(y,{}),endBoundaries:w,link:e.jsx(r,{}),startBoundaries:b,...p}),_=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:B}),[d,B]);return e.jsx(se,{value:_,children:e.jsx(Y.nav,{...T(),children:e.jsx(ae,{...k({gap:o,...m}),children:f.map((z,j)=>{const F=j===f.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(J,{...u,children:z}),F?null:e.jsx(oe,{...x,children:a})]},j)})})})})},"root")(),ae=g("ol","list")(),J=g("li","item")(),oe=g(J,"separator")({children:e.jsx(Z,{})}),r=g("a","link")(void 0,({currentPage:n,...o})=>{const{getLinkProps:a}=G();return{as:n?"span":"a",...a({currentPage:n,...o})}}),y=g($,"ellipsis")(void 0,n=>{const{getEllipsisProps:o}=G();return{...o(n)}}),_e={component:c,title:"Components / Breadcrumb"},P=()=>e.jsxs(c,{children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),M=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(c,{items:n})},C=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(A,{variant:"stack",rows:["plain","underline"],children:(o,a,i)=>e.jsx(c,{variant:a,items:n},i)})},R=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(A,{variant:"stack",rows:["sm","md","lg"],children:(o,a,i)=>e.jsx(c,{size:a,items:n},i)})},I=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(c,{endBoundaries:1,items:n,startBoundaries:1})},v=()=>e.jsxs(c,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsx(y,{}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{separator:"/",children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(c,{separator:e.jsx(ee,{}),children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),E=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{ellipsis:({items:o})=>e.jsxs(H,{children:[e.jsx(O,{children:e.jsx(y,{cursor:"pointer"})}),e.jsx(q,{children:o.map(({href:a,label:i},u)=>e.jsx(L,{as:"a",href:a,children:i},u))})]}),endBoundaries:1,items:n,startBoundaries:1}),e.jsxs(c,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsxs(H,{children:[e.jsx(O,{children:e.jsx(y,{cursor:"pointer"})}),e.jsxs(q,{children:[e.jsx(L,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(L,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(L,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
                <Breadcrumb.Ellipsis cursor="pointer" />
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
            <Breadcrumb.Ellipsis cursor="pointer" />
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
}`,...E.parameters?.docs?.source}}};const ze=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{P as Basic,I as Boundaries,E as CustomEllipsis,v as Ellipsis,M as Items,S as Separator,R as Size,C as Variant,ze as __namedExportsOrder,_e as default};
