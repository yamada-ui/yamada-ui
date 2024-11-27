import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as Z}from"./index-ByME5iZS.js";import{b as Fe}from"./icon-Tcjn8UpA.js";import{p as Ve,q as Ce,C as qe,b as k,c as O,g as $}from"./factory-CehSyZ2b.js";import{f as L}from"./forward-ref-D13m8o2p.js";import{a as Oe}from"./use-component-style-PhZ538dD.js";import{o as Te}from"./theme-provider-BOnS9RWG.js";import{b as ye,c as Ee,d as V}from"./menu-list-CHICHI5O.js";import{M as we}from"./menu-button-CZVyokSK.js";import{C as We}from"./chevrons-right-B7HrxQdF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DTdOA4MV.js";import"./use-var-C7Dt5UAR.js";import"./index-C_rfNY_4.js";import"./popover-trigger-DhcD9ovi.js";import"./close-button-Cb_x0Aeq.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";import"./slide-fade-DgMSpKCp.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-D_CZfsqp.js";import"./scale-fade-VQe77YQ6.js";import"./index-u-n2PdDt.js";import"./index-gGKStiao.js";import"./index-DxxoX3c-.js";import"./index-0DWab3Ls.js";import"./index-BAhNJhwO.js";import"./index-CzDHxPKS.js";import"./index-CgAyM-xT.js";import"./createLucideIcon-DHJHrKis.js";const[ze,T]=Ve({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),m=L((a,i)=>{const[c,t]=Oe("Breadcrumb",a),{className:u,children:h,ellipsis:p,endBoundaries:j,gap:I="fallback(2, 0.5rem)",items:d=[],separator:g="/",startBoundaries:H,listProps:W,...z}=Te(t);let s=Z(H),o=Z(j);s===0&&(s=1),o===0&&(o=1),s&&(o??(o=1)),o&&(s??(s=1));const M=$(s)&&$(o),J=M&&s+o<d.length,Se={alignItems:"center",display:"flex",...c.container},P=Ce(h),K=P.length,C=l.useCallback(B=>{if(!p)return null;const x=B??d.slice(s,d.length-o);return qe(p,{items:x})},[p,o,d,s]),ve=l.useMemo(()=>{if(K)return P.map((B,x)=>l.cloneElement(B,{gap:I,lastChild:P.length===x+1,separator:g}));{let B=[];return d.map((x,b)=>{let{name:Q,currentPage:U,ellipsisPage:X,isCurrentPage:Ne,isEllipsisPage:Ge,containerProps:Re,...Y}=x;const A=d.length===b+1;U??(U=Ne),X??(X=Ge);const _={currentPage:U,gap:I,separator:g,...Re};if(!M&&X)return B.push(x),A?e.jsx(r,{..._,lastChild:!0,children:C([x])??e.jsx(f,{})},b):null;if(M&&J){const D=d.length-b-1;if(s<=b&&o<=D)return s===b?e.jsx(r,{..._,children:C()??e.jsx(f,{})},b):null}if(B.length){const D=C(B)??e.jsx(f,{});return B=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{..._,children:D}),e.jsx(r,{..._,lastChild:A,children:e.jsx(n,{...Y,children:Q})})]},b)}else return e.jsx(r,{..._,lastChild:A,children:e.jsx(n,{...Y,children:Q})},b)})}},[K,P,g,I,d,M,J,s,o,C]);return e.jsx(ze,{value:c,children:e.jsx(k.nav,{ref:i,className:O("ui-breadcrumb",u),"aria-label":"Breadcrumb",__css:c.container,...z,children:e.jsx(k.ol,{className:"ui-breadcrumb__list",...W,__css:Se,children:ve})})})});m.displayName="Breadcrumb";m.__ui__="Breadcrumb";const r=L(({className:a,children:i,currentPage:c,gap:t,isCurrentPage:u,isLastChild:h,lastChild:p,separator:j,...I},d)=>{c??(c=u),p??(p=h);const g=T(),W=Ce(i).map(s=>s.type===n?l.cloneElement(s,{currentPage:c}):s.type===q?l.cloneElement(s,{children:s.props.children||j,gap:t}):s),z={alignItems:"center",display:"inline-flex",...g.item};return e.jsxs(k.li,{ref:d,className:O("ui-breadcrumb__item",a),__css:z,...I,children:[W,p?null:e.jsx(q,{gap:t,children:j})]})});r.displayName="BreadcrumbItem";r.__ui__="BreadcrumbItem";const n=L(({href:a,className:i,children:c,currentPage:t,isCurrentPage:u,...h},p)=>{t??(t=u);const j=T();return e.jsx(k.a,{ref:p,as:t?"span":"a",href:t?void 0:a,className:O("ui-breadcrumb__link",i),"aria-current":t?"page":void 0,__css:j.link,...h,children:c})});n.displayName="BreadcrumbLink";n.__ui__="BreadcrumbLink";const q=L(({children:a,gap:i,...c},t)=>{const u=T(),h={mx:i,...u.separator};return e.jsx(k.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:h,...c,children:a})});q.displayName="BreadcrumbSeparator";q.__ui__="BreadcrumbSeparator";const f=L(({className:a,children:i,...c},t)=>{const h={...T().ellipsis};return i??e.jsxs(Fe,{ref:t,className:O("ui-breadcrumb__item__ellipsis",a),"aria-label":"ellipsis",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 36 24",xmlns:"http://www.w3.org/2000/svg",__css:h,...c,children:[e.jsx("circle",{cx:"10",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"20",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"30",cy:"12",fill:"currentColor",r:"2"})]})});f.displayName="BreadcrumbEllipsis";f.__ui__="BreadcrumbEllipsis";const _r={component:m,title:"Components / Navigation / Breadcrumb"},y=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),E=()=>{const a=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(m,{items:a})},w=()=>{const a=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(m,{endBoundaries:1,items:a,startBoundaries:1})},S=()=>{const a=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",ellipsisPage:!0},{href:"/",name:"人造人間編",ellipsisPage:!0},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(m,{items:a})},v=()=>{const a=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(m,{ellipsis:({items:i})=>e.jsxs(ye,{children:[e.jsx(we,{children:e.jsx(f,{})}),e.jsx(Ee,{children:i.map(({href:c,name:t},u)=>e.jsx(V,{as:"a",href:c,children:t},u))})]}),endBoundaries:1,items:a,startBoundaries:1})},N=()=>e.jsxs(m,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),G=()=>e.jsxs(m,{separator:e.jsx(We,{color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(f,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),F=()=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(ye,{children:[e.jsx(we,{children:e.jsx(f,{})}),e.jsxs(Ee,{children:[e.jsx(V,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(V,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(V,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var ee,re,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,te;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
    currentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ce,me,ie;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
    currentPage: true
  }], []);
  return <Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(ie=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ie.source}}};var ue,de,oe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編",
    ellipsisPage: true
  }, {
    href: "/",
    name: "人造人間編",
    ellipsisPage: true
  }, {
    href: "/",
    name: "魔人ブウ編",
    currentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(oe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var le,he,pe;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
    currentPage: true
  }], []);
  return <Breadcrumb ellipsis={({
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
  }} endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(pe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Be,be,fe;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(fe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,je,Ie;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<ChevronsRightIcon color="gray.300" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Ie=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var ge,_e,ke;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(ke=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var Le,Me,Pe;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Pe=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};const kr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{kr as __namedExportsOrder,y as basic,S as customBoundaries,v as customEllipsis,_r as default,w as withBoundaries,G as withCustomSeparator,R as withEllipsis,E as withItems,F as withMenu,N as withSeparator};
