import{j as e}from"./extends-CwFRzn3r.js";import{r as h}from"./index-BwDkhjyp.js";import{u as U}from"./index-B9IsUjMJ.js";import{b as Ge}from"./icon-CvhI1IwG.js";import{o as Re,p as ke,z as Fe,b as _,c as z,g as X}from"./factory-BgMvz7NM.js";import{f as L}from"./forward-ref-BWI-Phbn.js";import{a as Ve}from"./use-component-style-D3MffxdG.js";import{o as ze}from"./theme-provider-Bpmh2ODM.js";import{b as Ce,c as Me,d as F}from"./menu-list-CRNLAAuY.js";import{M as Pe}from"./menu-button-DtYH09Z9.js";import{C as Oe}from"./chevrons-right-CsZOyAkd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CzplldKp.js";import"./use-var-Dgk44aKJ.js";import"./index-B6ycpjcM.js";import"./popover-content-CkkufdAv.js";import"./index-DX38EdL3.js";import"./index-Du0-7Fls.js";import"./index-i7wmI0W_.js";import"./index-UbUyUaFk.js";import"./index-eVjHUBC4.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./factory-yZQlYpPU.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./index-Br7ZWcgB.js";import"./index-DkfW55MP.js";import"./lucide-icon-2cUstn0F.js";const[Te,O]=Re({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),t=L((s,m)=>{const[a,i]=Ve("Breadcrumb",s),{className:u,children:d,separator:x="/",gap:I="fallback(2, 0.5rem)",listProps:T,items:B=[],startBoundaries:W,endBoundaries:q,ellipsis:o,...Ee}=ze(i);let c=U(W),l=U(q);c===0&&(c=1),l===0&&(l=1),c&&(l??(l=1)),l&&(c??(c=1));const k=X(c)&&X(l),H=k&&c+l<B.length,ye={display:"flex",alignItems:"center",...a.container},C=ke(d),J=C.length,M=h.useCallback(p=>{if(!o)return null;const j=p??B.slice(c,B.length-l);return Fe(o,{items:j})},[o,l,B,c]),we=h.useMemo(()=>{if(J)return C.map((p,j)=>h.cloneElement(p,{separator:x,gap:I,isLastChild:C.length===j+1}));{let p=[];return B.map((j,b)=>{const{containerProps:Se,name:K,isCurrentPage:ve,isEllipsisPage:Ne,...Q}=j,A=B.length===b+1,g={separator:x,gap:I,isCurrentPage:ve,...Se};if(!k&&Ne)return p.push(j),A?e.jsx(r,{...g,isLastChild:!0,children:M([j])??e.jsx(f,{})},b):null;if(k&&H){const D=B.length-b-1;if(c<=b&&l<=D)return c===b?e.jsx(r,{...g,children:M()??e.jsx(f,{})},b):null}if(p.length){const D=M(p)??e.jsx(f,{});return p=[],e.jsxs(h.Fragment,{children:[e.jsx(r,{...g,children:D}),e.jsx(r,{...g,isLastChild:A,children:e.jsx(n,{...Q,children:K})})]},b)}else return e.jsx(r,{...g,isLastChild:A,children:e.jsx(n,{...Q,children:K})},b)})}},[J,C,x,I,B,k,H,c,l,M]);return e.jsx(Te,{value:a,children:e.jsx(_.nav,{ref:m,className:z("ui-breadcrumb",u),__css:a.container,"aria-label":"Breadcrumb",...Ee,children:e.jsx(_.ol,{className:"ui-breadcrumb__list",...T,__css:ye,children:we})})})});t.displayName="Breadcrumb";t.__ui__="Breadcrumb";const r=L(({className:s,children:m,separator:a,isCurrentPage:i,isLastChild:u,gap:d,...x},I)=>{const T=O(),W=ke(m).map(o=>o.type===n?h.cloneElement(o,{isCurrentPage:i}):o.type===V?h.cloneElement(o,{gap:d,children:o.props.children||a}):o),q={display:"inline-flex",alignItems:"center",...T.item};return e.jsxs(_.li,{ref:I,className:z("ui-breadcrumb__item",s),__css:q,...x,children:[W,u?null:e.jsx(V,{gap:d,children:a})]})});r.displayName="BreadcrumbItem";r.__ui__="BreadcrumbItem";const n=L(({className:s,children:m,isCurrentPage:a,href:i,...u},d)=>{const x=O();return e.jsx(_.a,{ref:d,as:a?"span":"a",href:a?void 0:i,"aria-current":a?"page":void 0,className:z("ui-breadcrumb__link",s),__css:x.link,...u,children:m})});n.displayName="BreadcrumbLink";n.__ui__="BreadcrumbLink";const V=L(({children:s,gap:m,...a},i)=>{const u=O(),d={mx:m,...u.separator};return e.jsx(_.span,{ref:i,className:"ui-breadcrumb__item__separator",__css:d,...a,children:s})});V.displayName="BreadcrumbSeparator";V.__ui__="BreadcrumbSeparator";const f=L(({children:s,className:m,...a},i)=>{const d={...O().ellipsis};return s??e.jsxs(Ge,{ref:i,"aria-label":"ellipsis",className:z("ui-breadcrumb__item__ellipsis",m),__css:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...a,children:[e.jsx("circle",{cx:"10",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"20",cy:"12",r:"2",fill:"currentColor"}),e.jsx("circle",{cx:"30",cy:"12",r:"2",fill:"currentColor"})]})});f.displayName="BreadcrumbEllipsis";f.__ui__="BreadcrumbEllipsis";const jr={title:"Components / Navigation / Breadcrumb",component:t},P=()=>e.jsxs(t,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),E=()=>{const s=h.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(t,{items:s})},y=()=>{const s=h.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(t,{items:s,startBoundaries:1,endBoundaries:1})},w=()=>{const s=h.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",isEllipsisPage:!0},{href:"/",name:"人造人間編",isEllipsisPage:!0},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(t,{items:s})},S=()=>{const s=h.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",isCurrentPage:!0}],[]);return e.jsx(t,{items:s,startBoundaries:1,endBoundaries:1,ellipsis:({items:m})=>e.jsxs(Ce,{children:[e.jsx(Pe,{children:e.jsx(f,{})}),e.jsx(Me,{children:m.map(({href:a,name:i},u)=>e.jsx(F,{as:"a",href:a,children:i},u))})]})})},v=()=>e.jsxs(t,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),N=()=>e.jsxs(t,{separator:e.jsx(Oe,{color:"gray.300"}),children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),G=()=>e.jsxs(t,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(f,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(t,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(Ce,{children:[e.jsx(Pe,{children:e.jsx(f,{})}),e.jsxs(Me,{children:[e.jsx(F,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(F,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(F,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{isCurrentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var Y,Z,$;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(ne=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,ae,te;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var me,ie,ce;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,oe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(oe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var le,he,Be;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(Ie=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var ge,_e,Le;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Le=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};const Ir=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{Ir as __namedExportsOrder,P as basic,w as customBoundaries,S as customEllipsis,jr as default,y as withBoundaries,N as withCustomSeparator,G as withEllipsis,E as withItems,R as withMenu,v as withSeparator};
