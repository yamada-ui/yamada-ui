import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as Se,q as ve}from"./fontawesome-icon-DpaxtiZU.js";import{r as l}from"./index-uCp2LrAq.js";import{u as K}from"./index-DsuEdmfO.js";import{b as Ne}from"./icon-i9DNsLAz.js";import{l as Ge,t as ge,B as Re,u as I,c as G,g as Q}from"./factory-DcjttzXA.js";import{f as C}from"./forward-ref-Dr5Hqd9a.js";import{a as Ve}from"./use-component-style-Bt4oJcRH.js";import{o as qe}from"./theme-provider-blvefFsb.js";import{M as De,a as Le,b as ke,c as N}from"./menu-list-CmOcAzN4.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-gtcoX668.js";import"./index-ZcQ9dmS1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./popover-content-BuqQEBR6.js";import"./index-CnGadzrd.js";import"./index-CBqzus2r.js";import"./index-BEz7kc7x.js";import"./index-BBt5KR5O.js";import"./index-kKcgrWTG.js";import"./index-CfyBxFcd.js";import"./motion-BNFRb361.js";import"./slide-fade-BCrKcD4j.js";import"./index-DSHhgXSs.js";import"./motion-CGV1aZSj.js";import"./utils-qy47cExs.js";import"./scale-fade-DdhoTvDk.js";import"./close-button--PP8EEnm.js";import"./use-ripple-DGdpgE18.js";import"./index-BqfSQEBY.js";import"./index-Chh_-GY8.js";const[Oe,R]=Ge({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),B=C((u,a)=>{const[s,t]=Ve("Breadcrumb",u),{className:m,children:c,separator:f="/",gap:j="fallback(2, 0.5rem)",listProps:V,items:h=[],startBoundaries:q,endBoundaries:O,ellipsis:o,...Me}=qe(t);let i=K(q),d=K(O);i===0&&(i=1),d===0&&(d=1),i&&(d??(d=1)),d&&(i??(i=1));const g=Q(i)&&Q(d),$=g&&i+d<h.length,_e={display:"flex",alignItems:"center",...s.list},D=ge(c),z=D.length,L=l.useCallback(p=>{if(!o)return null;const E=p??h.slice(i,h.length-d);return Re(o,{items:E})},[o,d,h,i]),Pe=l.useMemo(()=>{if(z)return D.map((p,E)=>l.cloneElement(p,{separator:f,gap:j,isLastChild:D.length===E+1}));{let p=[];return h.map((E,b)=>{const{containerProps:we,name:H,isCurrentPage:Fe,isEllipsisPage:ye,...J}=E,T=h.length===b+1,A={separator:f,gap:j,isCurrentPage:Fe,...we};if(!g&&ye)return p.push(E),T?e.jsx(r,{...A,isLastChild:!0,children:L([E])??e.jsx(x,{})},b):null;if(g&&$){const W=h.length-b-1;if(i<=b&&d<=W)return i===b?e.jsx(r,{...A,children:L()??e.jsx(x,{})},b):null}if(p.length){const W=L(p)??e.jsx(x,{});return p=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{...A,children:W}),e.jsx(r,{...A,isLastChild:T,children:e.jsx(n,{...J,children:H})})]},b)}else return e.jsx(r,{...A,isLastChild:T,children:e.jsx(n,{...J,children:H})},b)})}},[z,D,f,j,h,g,$,i,d,L]);return e.jsx(Oe,{value:s,children:e.jsx(I.nav,{ref:a,className:G("ui-breadcrumb",m),__css:s.container,...Me,children:e.jsx(I.ol,{className:"ui-breadcrumb__list",...V,__css:_e,children:Pe})})})}),r=C(({className:u,children:a,separator:s,isCurrentPage:t,isLastChild:m,gap:c,...f},j)=>{const V=R(),q=ge(a).map(o=>o.type===n?l.cloneElement(o,{isCurrentPage:t}):o.type===U?l.cloneElement(o,{gap:c,children:o.props.children||s}):o),O={display:"inline-flex",alignItems:"center",...V.item};return e.jsxs(I.li,{ref:j,className:G("ui-breadcrumb__item",u),__css:O,...f,children:[q,m?null:e.jsx(U,{gap:c,children:s})]})}),n=C(({className:u,children:a,isCurrentPage:s,href:t,...m},c)=>{const f=R();return e.jsx(I.a,{ref:c,as:s?"span":"a",href:s?void 0:t,"aria-current":s?"page":void 0,className:G("ui-breadcrumb__link",u),__css:f.link,...m,children:a})}),U=C(({children:u,gap:a,...s},t)=>{const m=R(),c={mx:a,...m.separator};return e.jsx(I.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:c,...s,children:u})}),x=C(({children:u,className:a,...s},t)=>{const c={...R().ellipsis};return u??e.jsxs(Ne,{ref:t,"aria-label":"ellipsis",className:G("ui-breadcrumb__item__ellipsis",a),__css:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"30",cy:"12",r:"2",fill:"currentColor"})]})}),jr={title:"Components / Navigation / Breadcrumb",component:B},k=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),M=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u})},_=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u,startBoundaries:1,endBoundaries:1})},P=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",isEllipsisPage:!0},{href:"/",name:"人造人間編",isEllipsisPage:!0},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u})},w=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u,startBoundaries:1,endBoundaries:1,ellipsis:({items:a})=>e.jsxs(De,{children:[e.jsx(Le,{children:e.jsx(x,{})}),e.jsx(ke,{children:a.map(({href:s,name:t},m)=>e.jsx(N,{as:"a",href:s,children:t},m))})]})})},F=()=>e.jsxs(B,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),y=()=>e.jsxs(B,{separator:e.jsx(Se,{icon:ve,color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),S=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(x,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),v=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(De,{children:[e.jsx(Le,{children:e.jsx(x,{})}),e.jsxs(ke,{children:[e.jsx(N,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(N,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(N,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ne=(re=M.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ue,se,ae;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ae=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,ie,me;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(me=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ce,oe,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(de=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var le,Be,he;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(he=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:he.source}}};var pe,be,fe;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ee,xe,je;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(je=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ae,Ie,Ce;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};const Ar=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{Ar as __namedExportsOrder,k as basic,P as customBoundaries,w as customEllipsis,jr as default,_ as withBoundaries,y as withCustomSeparator,S as withEllipsis,M as withItems,v as withMenu,F as withSeparator};
