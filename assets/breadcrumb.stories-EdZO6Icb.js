import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Tt as r,_t as i,i as a,o,xn as s}from"./props-Bz1FL_va.js";import{i as c,r as l}from"./i18n-provider-Cc12Ys91.js";import{t as u}from"./jsx-runtime-BdxMnOeJ.js";import{d,f}from"./utils-DG4lHdyV.js";import{d as p,i as m,n as h,r as g}from"./create-component-DtmnY_ce.js";import{n as _,t as v}from"./chevron-right-icon-Cej9ZxLd.js";import{n as y,t as b}from"./chevrons-right-icon-Dpdnwnqf.js";import{f as x,p as ee,r as S,s as C,u as w}from"./menu-D-4MhfP3.js";import{n as te,t as ne}from"./ellipsis-icon-D0peGxQM.js";import{n as re,t as T}from"./props-table-CLkISL0o.js";var E;function D(){return(D=e((()=>{p(),E=m({base:{ellipsis:{color:`fg.muted`},item:{alignItems:`center`,display:`inline-flex`},link:{rounded:`l1`,textDecoration:`none`,transitionDuration:`moderate`,transitionProperty:`common`},list:{alignItems:`center`,display:`flex`,wordBreak:`break-word`},root:{},separator:{color:`fg.muted`}},variants:{plain:{link:{_notCurrent:{color:`fg.muted`,_hover:{color:`fg`}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:`underline`}}}}},sizes:{sm:{list:{fontSize:`sm`,gap:`1`}},md:{list:{fontSize:`md`,gap:`1.5`}},lg:{list:{fontSize:`lg`,gap:`2`}}},defaultProps:{size:`md`,variant:`plain`}})})))()}var O,k;function A(){return(A=e((()=>{O=t(),a(),l(),s(),i(),k=({children:e,ellipsis:t,endBoundaries:i=0,items:a=[],link:s,startBoundaries:l=0,...u}={})=>{let d=r(e),f=d.length||a.length,{t:p}=c(`breadcrumb`),m=l+i>0&&f>l+i,h=(0,O.useCallback)(e=>s?e.map(({label:e,...t})=>(0,O.cloneElement)(s,{...s.props,children:e,...t})):[],[s]),g=(0,O.useCallback)(e=>t?n(t,{items:e}):null,[t]),_=(0,O.useCallback)(e=>{let t=e.length;return[e.slice(0,l),e.slice(l,t-i),e.slice(t-i)]},[l,i]),v=(0,O.useMemo)(()=>{if(d.length)return d;if(m){let[e,t,n]=_(a);return[...h(e),g(t),...h(n)]}return h(a)},[d,a,m,g,h,_]),y=(0,O.useCallback)(e=>o({"aria-label":p(`Breadcrumb`)},u,e)(),[u,p]),b=(0,O.useCallback)(e=>({...e}),[]),x=(0,O.useCallback)(({href:e,currentPage:t,...n}={})=>({href:t?void 0:e,"aria-current":t?`page`:void 0,...n}),[]);return{children:v,getEllipsisProps:(0,O.useCallback)(e=>({"aria-label":p(`Ellipsis`),role:`presentation`,...e}),[p]),getLinkProps:x,getListProps:b,getRootProps:y}}})))()}var j,M,ie,ae,N,oe,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{j=t(),g(),d(),_(),te(),D(),A(),M=u(),{ComponentContext:ie,PropsContext:ae,useComponentContext:N,usePropsContext:oe,withContext:P,withProvider:F}=h(`breadcrumb`,E),I=F(({endBoundaries:e,gap:t,separator:n,startBoundaries:r,itemProps:i,listProps:a,separatorProps:o,...s})=>{let{children:c,getEllipsisProps:l,getLinkProps:u,getListProps:d,getRootProps:p}=k({ellipsis:(0,M.jsx)(V,{}),endBoundaries:e,link:(0,M.jsx)(B,{}),startBoundaries:r,...s}),m=(0,j.useMemo)(()=>({getEllipsisProps:l,getLinkProps:u}),[l,u]);return(0,M.jsx)(ie,{value:m,children:(0,M.jsx)(f.nav,{...p(),children:(0,M.jsx)(L,{...d({gap:t,...a}),children:c.map((e,t)=>{let r=t===c.length-1;return(0,M.jsxs)(j.Fragment,{children:[(0,M.jsx)(R,{...i,children:e}),r?null:(0,M.jsx)(z,{...o,children:n})]},t)})})})})},`root`)(),L=P(`ol`,`list`)(),R=P(`li`,`item`)(),z=P(R,`separator`)(({children:e,...t})=>({children:e??(0,M.jsx)(v,{}),...t})),B=P(`a`,`link`)(void 0,({currentPage:e,...t})=>{let{getLinkProps:n}=N();return{as:e?`span`:`a`,...n({currentPage:e,...t})}}),V=P(ne,`ellipsis`)(void 0,e=>{let{getEllipsisProps:t}=N();return{...t(e)}})})))()}var U,W,G,K,q,J,Y,X,Z,Q,$,se;function ce(){return(ce=e((()=>{U=t(),re(),y(),ee(),H(),W=u(),G={component:I,title:`Components / Breadcrumb`},K=()=>(0,W.jsxs)(I,{children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),q=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(I,{items:e})},J=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`plain`,`underline`],children:(t,n,r)=>(0,W.jsx)(I,{variant:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,W.jsx)(I,{size:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},X=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(I,{endBoundaries:1,items:e,startBoundaries:1})},Z=()=>(0,W.jsxs)(I,{children:[(0,W.jsx)(B,{href:`/`,children:`孫悟空少年編`}),(0,W.jsx)(V,{}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),Q=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(I,{"aria-label":`Breadcrumb-slash`,separator:`/`,children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),(0,W.jsxs)(I,{"aria-label":`Breadcrumb-icon`,separator:(0,W.jsx)(b,{}),children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]}),$=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(I,{"aria-label":`Breadcrumb-items`,ellipsis:({items:e})=>(0,W.jsxs)(w,{children:[(0,W.jsx)(x,{children:(0,W.jsx)(V,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,W.jsx)(S,{children:e.map(({href:e,label:t},n)=>(0,W.jsx)(C,{as:`a`,href:e,children:t},n))})]}),endBoundaries:1,items:e,startBoundaries:1}),(0,W.jsxs)(I,{"aria-label":`Breadcrumb-children`,children:[(0,W.jsx)(B,{href:`/`,children:`孫悟空少年編`}),(0,W.jsxs)(w,{children:[(0,W.jsx)(x,{children:(0,W.jsx)(V,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,W.jsxs)(S,{children:[(0,W.jsx)(C,{as:`a`,href:`/`,children:`ピッコロ大魔王編`}),(0,W.jsx)(C,{as:`a`,href:`/`,children:`サイヤ人編`}),(0,W.jsx)(C,{as:`a`,href:`/`,children:`フリーザ編`})]})]}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]})},se=[`Basic`,`Items`,`Variant`,`Size`,`Boundaries`,`Ellipsis`,`Separator`,`CustomEllipsis`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}ce();export{K as Basic,X as Boundaries,$ as CustomEllipsis,Z as Ellipsis,q as Items,Q as Separator,Y as Size,J as Variant,se as __namedExportsOrder,G as default};