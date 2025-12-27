import{d as pe,R as fe,G as ge,r as t,k as Be,g as xe,j as e,s as ke}from"./iframe-DaVT7dxo.js";import{P as ce}from"./props-table-c8iwS7A1.js";import{E as je,C as Le}from"./ellipsis-icon-DgqH6jjT.js";import{C as Me}from"./chevron-right-icon-xcpDzMih.js";import{M as V,a as F,b as D,c as M}from"./menu-BrSl_tXb.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./for-CMUOzp-w.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";import"./menu.style-DnOExL9G.js";import"./popover-C34VHR18.js";import"./index-BNFBbaCB.js";import"./index-C5t9Yh7x.js";import"./index-DLK4pN4z.js";import"./use-disclosure-BTurTBEg.js";import"./event-TRHHBbwZ.js";import"./slide-fade-dDL30kjb.js";import"./transition-CY5HdjQM.js";import"./fade-scale-DPxBusVZ.js";import"./index-3228ODx_.js";import"./index-D19KDx1p.js";import"./check-icon-4ziwEdHX.js";const Pe=pe({base:{ellipsis:{color:"fg.muted"},item:{alignItems:"center",display:"inline-flex"},link:{rounded:"l1",textDecoration:"none",transitionDuration:"moderate",transitionProperty:"common"},list:{alignItems:"center",display:"flex",wordBreak:"break-word"},root:{},separator:{color:"fg.muted"}},variants:{plain:{link:{_notCurrent:{color:"fg.muted",_hover:{color:"fg"}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:"underline"}}}}},sizes:{sm:{list:{fontSize:"sm",gap:"1"}},md:{list:{fontSize:"md",gap:"1.5"}},lg:{list:{fontSize:"lg",gap:"2"}}},defaultProps:{size:"md",variant:"plain"}}),Ce=({children:r,ellipsis:a,endBoundaries:o=0,items:i=[],link:u,startBoundaries:m=0,...B}={})=>{const b=fe(r),x=b.length||i.length,{t:d}=ge("breadcrumb"),f=m+o>0&&x>m+o,p=t.useCallback(s=>u?s.map(({label:c,...h})=>t.cloneElement(u,{...u.props,children:c,...h})):[],[u]),k=t.useCallback(s=>a?Be(a,{items:s}):null,[a]),j=t.useCallback(s=>{const c=s.length,h=s.slice(0,m),z=s.slice(m,c-o),be=s.slice(c-o);return[h,z,be]},[m,o]),T=t.useMemo(()=>{if(!!b.length)return b;if(f){const[c,h,z]=j(i);return[...p(c),k(h),...p(z)]}else return p(i)},[b,i,f,k,p,j]),L=t.useCallback(s=>({"aria-label":d("Breadcrumb"),...B,...s}),[B,d]),_=t.useCallback(s=>({...s}),[]),de=t.useCallback(({href:s,currentPage:c,...h}={})=>({href:c?void 0:s,"aria-current":c?"page":void 0,...h}),[]),he=t.useCallback(s=>({"aria-label":d("Ellipsis"),role:"presentation",...s}),[d]);return{children:T,getEllipsisProps:he,getLinkProps:de,getListProps:_,getRootProps:L}},{ComponentContext:Ie,useComponentContext:ue,withContext:g,withProvider:Re}=xe("breadcrumb",Pe),l=Re(({endBoundaries:r,gap:a,separator:o,startBoundaries:i,itemProps:u,listProps:m,separatorProps:B,...b})=>{const{children:x,getEllipsisProps:d,getLinkProps:f,getListProps:p,getRootProps:k}=Ce({ellipsis:e.jsx(w,{}),endBoundaries:r,link:e.jsx(n,{}),startBoundaries:i,...b}),j=t.useMemo(()=>({getEllipsisProps:d,getLinkProps:f}),[d,f]);return e.jsx(Ie,{value:j,children:e.jsx(ke.nav,{...k(),children:e.jsx(ve,{...p({gap:a,...m}),children:x.map((T,L)=>{const _=L===x.length-1;return e.jsxs(t.Fragment,{children:[e.jsx(me,{...u,children:T}),_?null:e.jsx(Se,{...B,children:o})]},L)})})})})},"root")(),ve=g("ol","list")(),me=g("li","item")(),Se=g(me,"separator")(({children:r,...a})=>({children:r??e.jsx(Me,{}),...a})),n=g("a","link")(void 0,({currentPage:r,...a})=>{const{getLinkProps:o}=ue();return{as:r?"span":"a",...o({currentPage:r,...a})}}),w=g(je,"ellipsis")(void 0,r=>{const{getEllipsisProps:a}=ue();return{...a(r)}}),er={component:l,title:"Components / Breadcrumb"},P=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),C=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{items:r})},I=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(ce,{variant:"stack",rows:["plain","underline"],children:(a,o,i)=>e.jsx(l,{variant:o,items:r},i)})},R=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(ce,{variant:"stack",rows:["sm","md","lg"],children:(a,o,i)=>e.jsx(l,{size:o,items:r},i)})},v=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsx(l,{endBoundaries:1,items:r,startBoundaries:1})},S=()=>e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsx(w,{}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{separator:"/",children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]}),e.jsxs(l,{separator:e.jsx(Le,{}),children:[e.jsx(n,{href:"/",children:"サイヤ人編"}),e.jsx(n,{href:"/",children:"ナメック星編"}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]}),y=()=>{const r=t.useMemo(()=>[{href:"/",label:"サイヤ人編"},{href:"/",label:"ナメック星編"},{href:"/",label:"人造人間編"},{href:"/",currentPage:!0,label:"魔人ブウ編"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(l,{ellipsis:({items:a})=>e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsx(D,{children:a.map(({href:o,label:i},u)=>e.jsx(M,{as:"a",href:o,children:i},u))})]}),endBoundaries:1,items:r,startBoundaries:1}),e.jsxs(l,{children:[e.jsx(n,{href:"/",children:"孫悟空少年編"}),e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(w,{cursor:"pointer",focusVisibleRing:"outline",outline:"none",rounded:"l1"})}),e.jsxs(D,{children:[e.jsx(M,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(M,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(M,{as:"a",href:"/",children:"フリーザ編"})]})]}),e.jsx(n,{href:"/",children:"人造人間編"}),e.jsx(n,{href:"/",currentPage:!0,children:"魔人ブウ編"})]})]})};var G,O,q;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...(q=(O=P.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var A,H,J;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
      {(_, row, key) => <Breadcrumb.Root key={key} variant={row} items={items} />}
    </PropsTable>;
}`,...(Q=(N=I.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,W,X;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
      {(_, row, key) => <Breadcrumb.Root key={key} size={row} items={items} />}
    </PropsTable>;
}`,...(X=(W=R.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,te,ae;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const rr=["Basic","Items","Variant","Size","Boundaries","Ellipsis","Separator","CustomEllipsis"];export{P as Basic,v as Boundaries,y as CustomEllipsis,S as Ellipsis,C as Items,E as Separator,R as Size,I as Variant,rr as __namedExportsOrder,er as default};
