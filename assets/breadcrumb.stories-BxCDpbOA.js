import{d as N,z as Q,G as U,r as t,g as W,f as X,j as e,s as Y}from"./iframe-BVYXOt_x.js";import{P as A}from"./props-table-CIRWgUZF.js";import{u as D}from"./index-D8jR06a4.js";import{C as Z}from"./chevron-right-icon-CEfDitKB.js";import{E as $,C as ee}from"./ellipsis-icon-DLqDoeEy.js";import{M as G,a as O,b as q,c as L}from"./menu-CEPDp6dO.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-9LY9Mmql.js";import"./grid-item-CdNZxFgP.js";import"./for-Cq1AI6gw.js";import"./flex-DrgWVwNM.js";import"./heading-BUA-B32m.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./createLucideIcon-CyY8KHfN.js";import"./menu.style-CrzpLXb3.js";import"./popover-Ds5KodhE.js";import"./index-3IyU_3IU.js";import"./index--MW3SftU.js";import"./index-C-UgCYOb.js";import"./use-disclosure-D_7SB-7u.js";import"./event-DyjLztTn.js";import"./slide-fade-CMARcYba.js";import"./transition-BHsmQMz4.js";import"./fade-scale-DoL0lHvI.js";import"./index-DtmV-tx0.js";import"./index-CMTHprn5.js";import"./check-icon-CvkdTB2Q.js";const re=N({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),ne=({children:n,ellipsis:o,endBoundaries:a=0,items:i=[],link:u,startBoundaries:m=0,...x}={})=>{const p=Q(n),w=p.length||i.length,{t:b}=U("breadcrumb"),f=m+a>0&&w>m+a,d=t.useCallback(s=>u?s.map(({label:c,...h})=>t.cloneElement(u,{...u.props,children:c,...h})):[],[u]),g=t.useCallback(s=>o?W(o,{items:s}):null,[o]),k=t.useCallback(s=>{const c=s.length,h=s.slice(0,m),F=s.slice(m,c-a),K=s.slice(c-a);return[h,F,K]},[m,a]),z=t.useMemo(()=>{if(!!p.length)return p;if(f){const[c,h,F]=k(i);return[...d(c),g(h),...d(F)]}else return d(i)},[p,i,f,g,d,k]),T=t.useCallback(s=>({"aria-label":b("Breadcrumb"),...x,...s}),[x,b]),_=t.useCallback(s=>({...s}),[]),j=t.useCallback(({href:s,currentPage:c,...h}={})=>({href:c?void 0:s,"aria-current":c?"page":void 0,...h}),[]),V=t.useCallback(s=>({"aria-label":b("Ellipsis"),role:"presentation",...s}),[b]);return{children:z,getEllipsisProps:V,getLinkProps:j,getListProps:_,getRootProps:T}},{ComponentContext:se,useComponentContext:H,withContext:B,withProvider:te}=X("breadcrumb",re),l=te(({endBoundaries:n,gap:o,separator:a,startBoundaries:i,itemProps:u,listProps:m,separatorProps:x,...p})=>{const w=D(n),b=D(i),{children:f,getEllipsisProps:d,getLinkProps:g,getListProps:k,getRootProps:z}=ne({ellipsis:e.jsx(y,{}),endBoundaries:w,link:e.jsx(r,{}),startBoundaries:b,...p}),T=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:g}),[d,g]);return e.jsx(se,{value:T,children:e.jsx(Y.nav,{...z(),children:e.jsx(ae,{...k({gap:o,...m}),children:f.map((_,j)=>{const V=j===f.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(J,{...u,children:_}),V?null:e.jsx(oe,{...x,children:a})]},j)})})})})},"root")(),ae=B("ol","list")(),J=B("li","item")(),oe=B(J,"separator")({children:e.jsx(Z,{})}),r=B("a","link")(void 0,({currentPage:n,...o})=>{const{getLinkProps:a}=H();return{as:n?"span":"a",...a({currentPage:n,...o})}}),y=B($,"ellipsis")(void 0,n=>{const{getEllipsisProps:o}=H();return{...o(n)}}),Ve={component:l,title:"Components / Breadcrumb"},P=()=>e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),M=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:n})},R=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(A,{variant:"stack",rows:["plain","underline"],children:(o,a,i)=>e.jsx(l,{variant:a,items:n},i)})},C=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(A,{variant:"stack",rows:["sm","md","lg"],children:(o,a,i)=>e.jsx(l,{size:a,items:n},i)})},I=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:n,startBoundaries:1})},v=()=>e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsx(y,{}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{separator:"/",children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{separator:e.jsx(ee,{}),children:[e.jsx(r,{href:"/",children:"サイヤ人編"}),e.jsx(r,{href:"/",children:"ナメック星編"}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),E=()=>{const n=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ellipsis:({items:o})=>e.jsxs(G,{children:[e.jsx(O,{children:e.jsx(y,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsx(q,{children:o.map(({href:a,label:i},u)=>e.jsx(L,{as:"a",href:a,children:i},u))})]}),endBoundaries:1,items:n,startBoundaries:1}),e.jsxs(l,{children:[e.jsx(r,{href:"/",children:"孫悟空少年編"}),e.jsxs(G,{children:[e.jsx(O,{children:e.jsx(y,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsxs(q,{children:[e.jsx(L,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(L,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(L,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(r,{href:"/",children:"人造人間編"}),e.jsx(r,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["plain", "underline"]}>
      {(_, row, key) => <Breadcrumb.Root key={key} variant={row} items={items} />}
    </PropsTable>;
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
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Breadcrumb.Root key={key} size={row} items={items} />}
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
}`,...E.parameters?.docs?.source}}};const Fe=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{P as Basic,I as Boundaries,E as CustomEllipsis,v as Ellipsis,M as Items,S as Separator,C as Size,R as Variant,Fe as __namedExportsOrder,Ve as default};
