import{d as pe,R as fe,G as Be,r as t,g as ge,j as e,s as xe,l as ke}from"./iframe-C8QXMNnF.js";import{P as ce}from"./props-table-DEc8TF5L.js";import{E as je,C as Le}from"./ellipsis-icon-DBhVdi10.js";import{C as Me}from"./chevron-right-icon-j-VRhUyl.js";import{M as V,a as F,b as $,c as M}from"./menu-ATjOJRcA.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CrdT-hzj.js";import"./grid-item-DXRkyzSU.js";import"./for-DZ1lzcod.js";import"./flex-ClymvRSg.js";import"./heading-BPdw42SK.js";import"./menu.style-DbzXtOnx.js";import"./popover-C0aL2ZD2.js";import"./index-DpZfx1N6.js";import"./index-DUCQ3yh5.js";import"./index-BJO4T4DI.js";import"./index-CSdQ7dcL.js";import"./use-disclosure-BqfhjoHq.js";import"./event-BEMHquWx.js";import"./slide-fade-CzJVdKsB.js";import"./transition-DwQwmHXG.js";import"./fade-scale-CXbj1njH.js";import"./index-BjpWSCw3.js";import"./index-Cjzuiiqm.js";import"./check-icon-MFtPiWt2.js";const Pe=pe({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),Ie=({children:r,ellipsis:o,endBoundaries:a=0,items:i=[],link:u,startBoundaries:m=0,...g}={})=>{const b=fe(r),x=b.length||i.length,{t:d}=Be("breadcrumb"),f=m+a>0&&x>m+a,p=t.useCallback(s=>u?s.map(({label:c,...h})=>t.cloneElement(u,{...u.props,children:c,...h})):[],[u]),k=t.useCallback(s=>o?ge(o,{items:s}):null,[o]),j=t.useCallback(s=>{const c=s.length,h=s.slice(0,m),z=s.slice(m,c-a),be=s.slice(c-a);return[h,z,be]},[m,a]),T=t.useMemo(()=>{if(!!b.length)return b;if(f){const[c,h,z]=j(i);return[...p(c),k(h),...p(z)]}else return p(i)},[b,i,f,k,p,j]),L=t.useCallback(s=>({"aria-label":d("Breadcrumb"),...g,...s}),[g,d]),_=t.useCallback(s=>({...s}),[]),de=t.useCallback(({href:s,currentPage:c,...h}={})=>({href:c?void 0:s,"aria-current":c?"page":void 0,...h}),[]),he=t.useCallback(s=>({"aria-label":d("Ellipsis"),role:"presentation",...s}),[d]);return{children:T,getEllipsisProps:he,getLinkProps:de,getListProps:_,getRootProps:L}},{ComponentContext:Ce,useComponentContext:ue,withContext:B,withProvider:Re}=ke("breadcrumb",Pe),l=Re(({endBoundaries:r,gap:o,separator:a,startBoundaries:i,itemProps:u,listProps:m,separatorProps:g,...b})=>{const{children:x,getEllipsisProps:d,getLinkProps:f,getListProps:p,getRootProps:k}=Ie({ellipsis:e.jsx(w,{}),endBoundaries:r,link:e.jsx(n,{}),startBoundaries:i,...b}),j=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:f}),[d,f]);return e.jsx(Ce,{value:j,children:e.jsx(xe.nav,{...k(),children:e.jsx(ve,{...p({gap:o,...m}),children:x.map((T,L)=>{const _=L===x.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(me,{...u,children:T}),_?null:e.jsx(Se,{...g,children:a})]},L)})})})})},"root")(),ve=B("ol","list")(),me=B("li","item")(),Se=B(me,"separator")(({children:r,...o})=>({children:r??e.jsx(Me,{}),...o})),n=B("a","link")(void 0,({currentPage:r,...o})=>{const{getLinkProps:a}=ue();return{as:r?"span":"a",...a({currentPage:r,...o})}}),w=B(je,"ellipsis")(void 0,r=>{const{getEllipsisProps:o}=ue();return{...o(r)}}),rr={component:l,title:"Components / Breadcrumb"},P=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),I=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:r})},C=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(ce,{variant:"stack",rows:["plain","underline"],children:(o,a,i)=>e.jsx(l,{variant:a,"aria-label":`Breadcrumb-${a}`,items:r},i)})},R=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(ce,{variant:"stack",rows:["sm","md","lg"],children:(o,a,i)=>e.jsx(l,{size:a,"aria-label":`Breadcrumb-${a}`,items:r},i)})},v=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:r,startBoundaries:1})},S=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsx(w,{}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{"aria-label":"Breadcrumb-slash",separator:"/",children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{"aria-label":"Breadcrumb-icon",separator:e.jsx(Le,{}),children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),y=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{"aria-label":"Breadcrumb-items",ellipsis:({items:o})=>e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{"aria-hidden":!1,cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1",tabIndex:-1})}),e.jsx($,{children:o.map(({href:a,label:i},u)=>e.jsx(M,{as:"a",href:a,children:i},u))})]}),endBoundaries:1,items:r,startBoundaries:1}),e.jsxs(l,{"aria-label":"Breadcrumb-children",children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{"aria-hidden":!1,cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1",tabIndex:-1})}),e.jsxs($,{children:[e.jsx(M,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(M,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(M,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};var D,G,O;P.parameters={...P.parameters,docs:{...(D=P.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...(O=(G=P.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var q,A,H;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(H=(A=I.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,N;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(N=(K=C.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,W;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(W=(U=R.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,te;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(te=(se=E.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const nr=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{P as Basic,v as Boundaries,y as CustomEllipsis,S as Ellipsis,I as Items,E as Separator,R as Size,C as Variant,nr as __namedExportsOrder,rr as default};
