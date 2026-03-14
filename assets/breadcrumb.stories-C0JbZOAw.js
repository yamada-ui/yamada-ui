import{d as J,R as K,G as N,r as t,g as Q,j as e,s as U,l as W}from"./iframe-DyywAl9M.js";import{P as D}from"./props-table-DObtv924.js";import{E as X,C as Y}from"./ellipsis-icon--XyPd4Gv.js";import{C as Z}from"./chevron-right-icon-C0lzwUzE.js";import{M as V,a as F,b as $,c as M}from"./menu-DcTAXu0h.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./menu.style-BG2I4LT5.js";import"./popover-DsgsLmqt.js";import"./index-dqh6NKh7.js";import"./index-DicEFgu4.js";import"./index-BbvlZnlb.js";import"./index-REjHn7K4.js";import"./use-disclosure-Dt3eLHwc.js";import"./event-CBin4f3O.js";import"./slide-fade-dNPklWdN.js";import"./transition-DkqPcRr1.js";import"./fade-scale-p-hgm2x3.js";import"./index-BGyahw92.js";import"./index-C0-0TeV0.js";import"./check-icon-Pyr8SBPX.js";const ee=J({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),re=({children:r,ellipsis:o,endBoundaries:a=0,items:i=[],link:u,startBoundaries:m=0,...g}={})=>{const b=K(r),x=b.length||i.length,{t:d}=N("breadcrumb"),f=m+a>0&&x>m+a,p=t.useCallback(s=>u?s.map(({label:c,...h})=>t.cloneElement(u,{...u.props,children:c,...h})):[],[u]),k=t.useCallback(s=>o?Q(o,{items:s}):null,[o]),j=t.useCallback(s=>{const c=s.length,h=s.slice(0,m),z=s.slice(m,c-a),H=s.slice(c-a);return[h,z,H]},[m,a]),T=t.useMemo(()=>{if(!!b.length)return b;if(f){const[c,h,z]=j(i);return[...p(c),k(h),...p(z)]}else return p(i)},[b,i,f,k,p,j]),L=t.useCallback(s=>({"aria-label":d("Breadcrumb"),...g,...s}),[g,d]),_=t.useCallback(s=>({...s}),[]),q=t.useCallback(({href:s,currentPage:c,...h}={})=>({href:c?void 0:s,"aria-current":c?"page":void 0,...h}),[]),A=t.useCallback(s=>({"aria-label":d("Ellipsis"),role:"presentation",...s}),[d]);return{children:T,getEllipsisProps:A,getLinkProps:q,getListProps:_,getRootProps:L}},{ComponentContext:ne,useComponentContext:G,withContext:B,withProvider:ae}=W("breadcrumb",ee),l=ae(({endBoundaries:r,gap:o,separator:a,startBoundaries:i,itemProps:u,listProps:m,separatorProps:g,...b})=>{const{children:x,getEllipsisProps:d,getLinkProps:f,getListProps:p,getRootProps:k}=re({ellipsis:e.jsx(w,{}),endBoundaries:r,link:e.jsx(n,{}),startBoundaries:i,...b}),j=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:f}),[d,f]);return e.jsx(ne,{value:j,children:e.jsx(U.nav,{...k(),children:e.jsx(se,{...p({gap:o,...m}),children:x.map((T,L)=>{const _=L===x.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(O,{...u,children:T}),_?null:e.jsx(te,{...g,children:a})]},L)})})})})},"root")(),se=B("ol","list")(),O=B("li","item")(),te=B(O,"separator")(({children:r,...o})=>({children:r??e.jsx(Z,{}),...o})),n=B("a","link")(void 0,({currentPage:r,...o})=>{const{getLinkProps:a}=G();return{as:r?"span":"a",...a({currentPage:r,...o})}}),w=B(X,"ellipsis")(void 0,r=>{const{getEllipsisProps:o}=G();return{...o(r)}}),ye={component:l,title:"Components / Breadcrumb"},P=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),I=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:r})},C=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(D,{variant:"stack",rows:["plain","underline"],children:(o,a,i)=>e.jsx(l,{variant:a,"aria-label":`Breadcrumb-${a}`,items:r},i)})},R=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(D,{variant:"stack",rows:["sm","md","lg"],children:(o,a,i)=>e.jsx(l,{size:a,"aria-label":`Breadcrumb-${a}`,items:r},i)})},v=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:r,startBoundaries:1})},S=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsx(w,{}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{"aria-label":"Breadcrumb-slash",separator:"/",children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{"aria-label":"Breadcrumb-icon",separator:e.jsx(Y,{}),children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),y=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{"aria-label":"Breadcrumb-items",ellipsis:({items:o})=>e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{"aria-hidden":!1,cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1",tabIndex:-1})}),e.jsx($,{children:o.map(({href:a,label:i},u)=>e.jsx(M,{as:"a",href:a,children:i},u))})]}),endBoundaries:1,items:r,startBoundaries:1}),e.jsxs(l,{"aria-label":"Breadcrumb-children",children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{"aria-hidden":!1,cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1",tabIndex:-1})}),e.jsxs($,{children:[e.jsx(M,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(M,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(M,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.Item[]>(() => [{
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
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.Item[]>(() => [{
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
      {(_, row, key) => <Breadcrumb.Root key={key} variant={row} aria-label={\`Breadcrumb-\${row}\`} items={items} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.Item[]>(() => [{
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
      {(_, row, key) => <Breadcrumb.Root key={key} size={row} aria-label={\`Breadcrumb-\${row}\`} items={items} />}
    </PropsTable>;
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.Item[]>(() => [{
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
      <Breadcrumb.Root aria-label="Breadcrumb-slash" separator="/">
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>

      <Breadcrumb.Root aria-label="Breadcrumb-icon" separator={<ChevronsRightIcon />}>
        <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
        <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
        <Breadcrumb.Link href="/" currentPage>
          魔人ブウ編
        </Breadcrumb.Link>
      </Breadcrumb.Root>
    </>;
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Breadcrumb.Item[]>(() => [{
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
      <Breadcrumb.Root aria-label="Breadcrumb-items" ellipsis={({
      items
    }) => {
      return <Menu.Root>
              <Menu.Trigger>
                <Breadcrumb.Ellipsis aria-hidden={false} cursor="pointer" focusVisibleRing="outline" outline="none" rounded="l1" tabIndex={-1} />
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

      <Breadcrumb.Root aria-label="Breadcrumb-children">
        <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
        <Menu.Root>
          <Menu.Trigger>
            <Breadcrumb.Ellipsis aria-hidden={false} cursor="pointer" focusVisibleRing="outline" outline="none" rounded="l1" tabIndex={-1} />
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
}`,...y.parameters?.docs?.source}}};const we=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{P as Basic,v as Boundaries,y as CustomEllipsis,S as Ellipsis,I as Items,E as Separator,R as Size,C as Variant,we as __namedExportsOrder,ye as default};
