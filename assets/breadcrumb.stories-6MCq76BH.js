import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as $}from"./index-D_3Ilmao.js";import{b as Ve}from"./icon-DDeGQYl6.js";import{y as Ae,A as Ce,I as Oe,b as k,c as T,n as ee}from"./factory-Dfrbb1EY.js";import{f as L}from"./forward-ref-D13m8o2p.js";import{a as Te}from"./use-component-style-fOirb5M1.js";import{o as We}from"./theme-provider-DSx3k1bh.js";import{b as Ee,c as we,d as A}from"./menu-list-yAEkbrJ0.js";import{M as Se}from"./menu-button-jcwKAdfS.js";import{C as qe}from"./chevrons-right-C0ECgXvD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CKnINgQh.js";import"./use-var-BQS3JFPa.js";import"./index-DykZTIMV.js";import"./popover-trigger-DAQ55ib6.js";import"./close-button-DENBYMYY.js";import"./use-ripple-59xURXHY.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-DeSWW4o7.js";import"./slide-fade-CQuVyWIS.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-D-TPukYR.js";import"./index-BN23OaLZ.js";import"./index-gGKStiao.js";import"./index-DqeO0dAp.js";import"./index-BVP762bF.js";import"./index-CFtnIMNb.js";import"./index-CgNA1xsw.js";import"./index-O1jdRUiZ.js";import"./createLucideIcon-DHJHrKis.js";const[ze,W]=Ae({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),i=L((s,u)=>{const[c,t]=Te("Breadcrumb",s),{className:o,children:h,ellipsis:p,endBoundaries:j,gap:I="fallback(2, 0.5rem)",items:d=[],separator:g="/",startBoundaries:q,listProps:M,separatorProps:J,...z}=We(t);let m=$(q),a=$(j);m===0&&(m=1),a===0&&(a=1),m&&(a??(a=1)),a&&(m??(m=1));const P=ee(m)&&ee(a),K=P&&m+a<d.length,ve={alignItems:"center",display:"flex",...c.container},y=Ce(h),Q=y.length,C=l.useCallback(B=>{if(!p)return null;const x=B??d.slice(m,d.length-a);return Oe(p,{items:x})},[p,a,d,m]),Ne=l.useMemo(()=>{if(Q)return y.map((B,x)=>l.cloneElement(B,{gap:I,lastChild:y.length===x+1,separator:g}));{let B=[];return d.map((x,b)=>{let{name:U,currentPage:X,ellipsisPage:Y,isCurrentPage:Ge,isEllipsisPage:Re,containerProps:Fe,...Z}=x;const D=d.length===b+1;X??(X=Ge),Y??(Y=Re);const _={currentPage:X,gap:I,separator:g,...Fe};if(!P&&Y)return B.push(x),D?e.jsx(r,{..._,lastChild:!0,children:C([x])??e.jsx(f,{})},b):null;if(P&&K){const H=d.length-b-1;if(m<=b&&a<=H)return m===b?e.jsx(r,{..._,children:C()??e.jsx(f,{})},b):null}if(B.length){const H=C(B)??e.jsx(f,{});return B=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{..._,children:H}),e.jsx(r,{..._,lastChild:D,children:e.jsx(n,{...Z,children:U})})]},b)}else return e.jsx(r,{..._,lastChild:D,children:e.jsx(n,{...Z,children:U})},b)})}},[Q,y,g,I,d,P,K,m,a,C]);return e.jsx(ze,{value:{styles:c,separatorProps:J},children:e.jsx(k.nav,{ref:u,className:T("ui-breadcrumb",o),"aria-label":"Breadcrumb",__css:c.container,...z,children:e.jsx(k.ol,{className:"ui-breadcrumb__list",...M,__css:ve,children:Ne})})})});i.displayName="Breadcrumb";i.__ui__="Breadcrumb";const r=L(({className:s,children:u,currentPage:c,gap:t,isCurrentPage:o,isLastChild:h,lastChild:p,separator:j,separatorProps:I,...d},g)=>{const{styles:q,separatorProps:M}=W();c??(c=o),p??(p=h);const z=Ce(u).map(a=>a.type===n?l.cloneElement(a,{currentPage:c}):a.type===O?l.cloneElement(a,{children:a.props.children||j,gap:t,...M,...I}):a),m={alignItems:"center",display:"inline-flex",...q.item};return e.jsxs(k.li,{ref:g,className:T("ui-breadcrumb__item",s),__css:m,...d,children:[z,p?null:e.jsx(O,{gap:t,...M,...I,children:j})]})});r.displayName="BreadcrumbItem";r.__ui__="BreadcrumbItem";const n=L(({href:s,className:u,children:c,currentPage:t,isCurrentPage:o,...h},p)=>{const{styles:j}=W();return t??(t=o),e.jsx(k.a,{ref:p,as:t?"span":"a",href:t?void 0:s,className:T("ui-breadcrumb__link",u),"aria-current":t?"page":void 0,__css:j.link,...h,children:c})});n.displayName="BreadcrumbLink";n.__ui__="BreadcrumbLink";const O=L(({children:s,gap:u,...c},t)=>{const{styles:o}=W(),h={mx:u,...o.separator};return e.jsx(k.span,{ref:t,className:"ui-breadcrumb__item__separator",__css:h,...c,children:s})});O.displayName="BreadcrumbSeparator";O.__ui__="BreadcrumbSeparator";const f=L(({className:s,children:u,...c},t)=>{const{styles:o}=W(),h={...o.ellipsis};return u??e.jsxs(Ve,{ref:t,className:T("ui-breadcrumb__item__ellipsis",s),"aria-label":"ellipsis",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 36 24",xmlns:"http://www.w3.org/2000/svg",__css:h,...c,children:[e.jsx("circle",{cx:"10",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"20",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"30",cy:"12",fill:"currentColor",r:"2"})]})});f.displayName="BreadcrumbEllipsis";f.__ui__="BreadcrumbEllipsis";const kr={component:i,title:"Components / Navigation / Breadcrumb"},E=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),w=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{items:s})},S=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{endBoundaries:1,items:s,startBoundaries:1})},v=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",ellipsisPage:!0},{href:"/",name:"人造人間編",ellipsisPage:!0},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{items:s})},N=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{ellipsis:({items:u})=>e.jsxs(Ee,{children:[e.jsx(Se,{children:e.jsx(f,{})}),e.jsx(we,{children:u.map(({href:c,name:t},o)=>e.jsx(A,{as:"a",href:c,children:t},o))})]}),endBoundaries:1,items:s,startBoundaries:1})},G=()=>e.jsxs(i,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(i,{separator:e.jsx(qe,{color:"gray.300"}),separatorProps:{alignItems:"center",display:"inline-flex",justifyContent:"center"},children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),F=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(f,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),V=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(Ee,{children:[e.jsx(Se,{children:e.jsx(f,{})}),e.jsxs(we,{children:[e.jsx(A,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(A,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(A,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var re,ne,se;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,te,ce;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ce=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var me,ie,ue;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var oe,de,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(de=v.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var he,pe,Be;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(Be=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:Be.source}}};var be,fe,xe;G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(xe=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var je,Ie,ge;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<ChevronsRightIcon color="gray.300" />} separatorProps={{
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center"
  }}>
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
}`,...(ge=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var _e,ke,Le;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Le=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Me,Pe,ye;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(ye=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};const Lr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{Lr as __namedExportsOrder,E as basic,v as customBoundaries,N as customEllipsis,kr as default,S as withBoundaries,R as withCustomSeparator,F as withEllipsis,w as withItems,V as withMenu,G as withSeparator};
