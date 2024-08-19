import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{u as Q}from"./index-DhA_Vrwc.js";import{b as Ge}from"./icon-CbMgljC8.js";import{l as Re,t as Ce,B as Fe,b as L,c as V,g as U}from"./factory-Bw4mCpcs.js";import{f as k}from"./forward-ref-BmTAT9U5.js";import{a as Ve}from"./use-component-style-CSU0rxou.js";import{o as Oe}from"./theme-provider-Bt6-FvIL.js";import{b as Me,c as _e,d as F}from"./menu-list-tNf_n5sS.js";import{M as Pe}from"./menu-button-LYpin__e.js";import{C as Te}from"./chevrons-right-C4JZJmhA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DtdBXQu8.js";import"./index-CouAGdSP.js";import"./extends-CF3RwP-h.js";import"./index-BHmaC6EZ.js";import"./index-BsiWgpVY.js";import"./index-CL6rTi9E.js";import"./index-B-GxUdRV.js";import"./popover-content-CQDI0zie.js";import"./index-Dlbepm1r.js";import"./index-Du0-7Fls.js";import"./index-jaxGPkCw.js";import"./index-BGU8is4y.js";import"./motion-BETOZcSS.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-Cw3YZ1hb.js";import"./index-Ms_xn5rh.js";import"./utils-Dv3OpIfD.js";import"./scale-fade-CUWSIYm9.js";import"./close-button-J_CD0fSC.js";import"./use-ripple-D1HcDDVg.js";import"./lucide-icon-BcbfY37s.js";const[We,O]=Re({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),h=k((s,t)=>{const[a,m]=Ve("Breadcrumb",s),{className:c,children:u,separator:f="/",gap:I="fallback(2, 0.5rem)",listProps:T,items:B=[],startBoundaries:W,endBoundaries:q,ellipsis:o,...Ee}=Oe(m);let i=Q(W),d=Q(q);i===0&&(i=1),d===0&&(d=1),i&&(d??(d=1)),d&&(i??(i=1));const C=U(i)&&U(d),D=C&&i+d<B.length,we={display:"flex",alignItems:"center",...a.container},M=Ce(u),H=M.length,_=l.useCallback(p=>{if(!o)return null;const x=p??B.slice(i,B.length-d);return Fe(o,{items:x})},[o,d,B,i]),ye=l.useMemo(()=>{if(H)return M.map((p,x)=>l.cloneElement(p,{separator:f,gap:I,isLastChild:M.length===x+1}));{let p=[];return B.map((x,b)=>{const{containerProps:Se,name:J,isCurrentPage:ve,isEllipsisPage:Ne,...K}=x,z=B.length===b+1,g={separator:f,gap:I,isCurrentPage:ve,...Se};if(!C&&Ne)return p.push(x),z?e.jsx(r,{...g,isLastChild:!0,children:_([x])??e.jsx(j,{})},b):null;if(C&&D){const A=B.length-b-1;if(i<=b&&d<=A)return i===b?e.jsx(r,{...g,children:_()??e.jsx(j,{})},b):null}if(p.length){const A=_(p)??e.jsx(j,{});return p=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{...g,children:A}),e.jsx(r,{...g,isLastChild:z,children:e.jsx(n,{...K,children:J})})]},b)}else return e.jsx(r,{...g,isLastChild:z,children:e.jsx(n,{...K,children:J})},b)})}},[H,M,f,I,B,C,D,i,d,_]);return e.jsx(We,{value:a,children:e.jsx(L.nav,{ref:t,className:V("ui-breadcrumb",c),__css:a.container,"aria-label":"Breadcrumb",...Ee,children:e.jsx(L.ol,{className:"ui-breadcrumb__list",...T,__css:we,children:ye})})})}),r=k(({className:s,children:t,separator:a,isCurrentPage:m,isLastChild:c,gap:u,...f},I)=>{const T=O(),W=Ce(t).map(o=>o.type===n?l.cloneElement(o,{isCurrentPage:m}):o.type===X?l.cloneElement(o,{gap:u,children:o.props.children||a}):o),q={display:"inline-flex",alignItems:"center",...T.item};return e.jsxs(L.li,{ref:I,className:V("ui-breadcrumb__item",s),__css:q,...f,children:[W,c?null:e.jsx(X,{gap:u,children:a})]})}),n=k(({className:s,children:t,isCurrentPage:a,href:m,...c},u)=>{const f=O();return e.jsx(L.a,{ref:u,as:a?"span":"a",href:a?void 0:m,"aria-current":a?"page":void 0,className:V("ui-breadcrumb__link",s),__css:f.link,...c,children:t})}),X=k(({children:s,gap:t,...a},m)=>{const c=O(),u={mx:t,...c.separator};return e.jsx(L.span,{ref:m,className:"ui-breadcrumb__item__separator",__css:u,...a,children:s})}),j=k(({children:s,className:t,...a},m)=>{const u={...O().ellipsis};return s??e.jsxs(Ge,{ref:m,"aria-label":"ellipsis",className:V("ui-breadcrumb__item__ellipsis",t),__css:u,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"30",cy:"12",r:"2",fill:"currentColor"})]})}),Ir={title:"Components / Navigation / Breadcrumb",component:h},P=()=>e.jsxs(h,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),E=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(h,{items:s})},w=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(h,{items:s,startBoundaries:1,endBoundaries:1})},y=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",isEllipsisPage:!0},{href:"/",name:"人造人間編",isEllipsisPage:!0},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(h,{items:s})},S=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(h,{items:s,startBoundaries:1,endBoundaries:1,ellipsis:({items:t})=>e.jsxs(Me,{children:[e.jsx(Pe,{children:e.jsx(j,{})}),e.jsx(_e,{children:t.map(({href:a,name:m},c)=>e.jsx(F,{as:"a",href:a,children:m},c))})]})})},v=()=>e.jsxs(h,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),N=()=>e.jsxs(h,{separator:e.jsx(Te,{color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),G=()=>e.jsxs(h,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(j,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(h,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(Me,{children:[e.jsx(Pe,{children:e.jsx(j,{})}),e.jsxs(_e,{children:[e.jsx(F,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(F,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(F,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var Y,Z,$;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(ne=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,te;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} startBoundaries={1} endBoundaries={1} />;
}`,...(te=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var me,ie,ce;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編",
    isEllipsisPage: true
  }, {
    href: "/",
    name: "人造人間編",
    isEllipsisPage: true
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,oe,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    isCurrentPage: true
  }], []);
  return <Breadcrumb items={items} startBoundaries={1} endBoundaries={1} ellipsis={({
    items
  }) => {
    return <Menu>
            <MenuButton>
              <BreadcrumbEllipsis />
            </MenuButton>

            <MenuList>
              {items.map(({
          href,
          name
        }, index) => <MenuItem key={index} as="a" href={href}>
                  {name}
                </MenuItem>)}
            </MenuList>
          </Menu>;
  }} />;
}`,...(de=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var le,he,Be;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(Be=(he=v.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var pe,be,fe;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<ChevronsRight color="gray.300" />}>
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
}`,...(fe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,je,Ie;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Ie=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var ge,Le,ke;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Menu>
          <MenuButton>
            <BreadcrumbEllipsis />
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="/">
              ピッコロ大魔王編
            </MenuItem>
            <MenuItem as="a" href="/">
              サイヤ人編
            </MenuItem>
            <MenuItem as="a" href="/">
              フリーザ編
            </MenuItem>
          </MenuList>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(ke=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};const gr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{gr as __namedExportsOrder,P as basic,y as customBoundaries,S as customEllipsis,Ir as default,w as withBoundaries,N as withCustomSeparator,G as withEllipsis,E as withItems,R as withMenu,v as withSeparator};
