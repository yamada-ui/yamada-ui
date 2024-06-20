import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as l}from"./index-BwDkhjyp.js";import{u as Q}from"./index-D7vWbavc.js";import{b as Se}from"./icon-BWDJazoz.js";import{l as ve,t as ge,B as Ne,b as I,c as G,g as U}from"./factory-DqlmaKnk.js";import{f as C}from"./forward-ref-BmTAT9U5.js";import{a as Ge}from"./use-component-style-C3e1SZSW.js";import{o as Re}from"./theme-provider-DKpED47L.js";import{b as De,c as Le,d as N}from"./menu-list-Cc4QRkeG.js";import{M as ke}from"./menu-button-BgReNWL_.js";import{C as Ve}from"./chevrons-right-DoQ6s2te.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DvF7MMPh.js";import"./index-CvHBrwTd.js";import"./index-BQSFCjm-.js";import"./index-Bk4iHozM.js";import"./index-DRSk0S3C.js";import"./index-C2A1EDXj.js";import"./popover-content-Du830PX8.js";import"./index-lDLsA8St.js";import"./index-Du0-7Fls.js";import"./index-CpNyzkHk.js";import"./index-CzMJJlyi.js";import"./motion-Ceh1Zhyk.js";import"./slide-fade-CanhXW_J.js";import"./index-CSNxn7VS.js";import"./motion-CVEUpyyH.js";import"./utils-8zXyhOQf.js";import"./scale-fade-DukJCf2b.js";import"./close-button-Dy2121HX.js";import"./use-ripple-ePVrvqFu.js";import"./lucide-icon-CSlrzH8E.js";const[Oe,R]=ve({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),B=C((u,a)=>{const[s,t]=Ge("Breadcrumb",u),{className:i,children:c,separator:f="/",gap:j="fallback(2, 0.5rem)",listProps:V,items:h=[],startBoundaries:O,endBoundaries:T,ellipsis:o,...Me}=Re(t);let m=Q(O),d=Q(T);m===0&&(m=1),d===0&&(d=1),m&&(d??(d=1)),d&&(m??(m=1));const g=U(m)&&U(d),z=g&&m+d<h.length,_e={display:"flex",alignItems:"center",...s.container},D=ge(c),H=D.length,L=l.useCallback(p=>{if(!o)return null;const E=p??h.slice(m,h.length-d);return Ne(o,{items:E})},[o,d,h,m]),Pe=l.useMemo(()=>{if(H)return D.map((p,E)=>l.cloneElement(p,{separator:f,gap:j,isLastChild:D.length===E+1}));{let p=[];return h.map((E,b)=>{const{containerProps:we,name:J,isCurrentPage:Fe,isEllipsisPage:ye,...K}=E,W=h.length===b+1,A={separator:f,gap:j,isCurrentPage:Fe,...we};if(!g&&ye)return p.push(E),W?e.jsx(r,{...A,isLastChild:!0,children:L([E])??e.jsx(x,{})},b):null;if(g&&z){const q=h.length-b-1;if(m<=b&&d<=q)return m===b?e.jsx(r,{...A,children:L()??e.jsx(x,{})},b):null}if(p.length){const q=L(p)??e.jsx(x,{});return p=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{...A,children:q}),e.jsx(r,{...A,isLastChild:W,children:e.jsx(n,{...K,children:J})})]},b)}else return e.jsx(r,{...A,isLastChild:W,children:e.jsx(n,{...K,children:J})},b)})}},[H,D,f,j,h,g,z,m,d,L]);return e.jsx(Oe,{value:s,children:e.jsx(I.nav,{ref:a,className:G("ui-breadcrumb",i),__css:s.container,"aria-label":"Breadcrumb",...Me,children:e.jsx(I.ol,{className:"ui-breadcrumb__list",...V,__css:_e,children:Pe})})})}),r=C(({className:u,children:a,separator:s,isCurrentPage:t,isLastChild:i,gap:c,...f},j)=>{const V=R(),O=ge(a).map(o=>o.type===n?l.cloneElement(o,{isCurrentPage:t}):o.type===X?l.cloneElement(o,{gap:c,children:o.props.children||s}):o),T={display:"inline-flex",alignItems:"center",...V.item};return e.jsxs(I.li,{ref:j,className:G("ui-breadcrumb__item",u),__css:T,...f,children:[O,i?null:e.jsx(X,{gap:c,children:s})]})}),n=C(({className:u,children:a,isCurrentPage:s,href:t,...i},c)=>{const f=R();return e.jsx(I.a,{ref:c,as:s?"span":"a",href:s?void 0:t,"aria-current":s?"page":void 0,className:G("ui-breadcrumb__link",u),__css:f.link,...i,children:a})}),X=C(({children:u,gap:a,...s},t)=>{const i=R(),c={mx:a,...i.separator};return e.jsx(I.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:c,...s,children:u})}),x=C(({children:u,className:a,...s},t)=>{const c={...R().ellipsis};return u??e.jsxs(Se,{ref:t,"aria-label":"ellipsis",className:G("ui-breadcrumb__item__ellipsis",a),__css:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...s,children:[e.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"30",cy:"12",r:"2",fill:"currentColor"})]})}),xr={title:"Components / Navigation / Breadcrumb",component:B},k=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),M=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u})},_=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u,startBoundaries:1,endBoundaries:1})},P=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",isEllipsisPage:!0},{href:"/",name:"人造人間編",isEllipsisPage:!0},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u})},w=()=>{const u=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(B,{items:u,startBoundaries:1,endBoundaries:1,ellipsis:({items:a})=>e.jsxs(De,{children:[e.jsx(ke,{children:e.jsx(x,{})}),e.jsx(Le,{children:a.map(({href:s,name:t},i)=>e.jsx(N,{as:"a",href:s,children:t},i))})]})})},F=()=>e.jsxs(B,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),y=()=>e.jsxs(B,{separator:e.jsx(Ve,{color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),S=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(x,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),v=()=>e.jsxs(B,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(De,{children:[e.jsx(ke,{children:e.jsx(x,{})}),e.jsxs(Le,{children:[e.jsx(N,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(N,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(N,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ae=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,me,ie;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(ie=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var ce,oe,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};const jr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{jr as __namedExportsOrder,k as basic,P as customBoundaries,w as customEllipsis,xr as default,_ as withBoundaries,y as withCustomSeparator,S as withEllipsis,M as withItems,v as withMenu,F as withSeparator};
