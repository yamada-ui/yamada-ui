import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Dn as n,i as r,jt as i,kn as ee,o as a,xt as o}from"./props-sAZv67b_.js";import{i as s,r as c}from"./i18n-provider-CVU3vuxJ.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{d as u,f as d}from"./utils-DU-a_DAF.js";import{d as f,i as p,n as m,r as h}from"./create-component-CMKj7xAv.js";import{n as g,t as _}from"./chevron-right-icon-BdIPUar-.js";import{n as v,t as y}from"./chevrons-right-icon-CmsSnVXl.js";import{f as b,p as x,r as S,s as C,u as w}from"./menu-C4DiZVs7.js";import{n as te,t as ne}from"./ellipsis-icon-B8_L1-br.js";import{n as re,t as T}from"./props-table-DnYpWynU.js";var E;function D(){return(D=e((()=>{f(),E=p({base:{ellipsis:{color:`fg.muted`},item:{alignItems:`center`,display:`inline-flex`},link:{rounded:`l1`,textDecoration:`none`,transitionDuration:`moderate`,transitionProperty:`common`},list:{alignItems:`center`,display:`flex`,wordBreak:`break-word`},root:{},separator:{color:`fg.muted`}},variants:{plain:{link:{_notCurrent:{color:`fg.muted`,_hover:{color:`fg`}}}},underline:{link:{_notCurrent:{_hover:{textDecoration:`underline`}}}}},sizes:{sm:{list:{fontSize:`sm`,gap:`1`}},md:{list:{fontSize:`md`,gap:`1.5`}},lg:{list:{fontSize:`lg`,gap:`2`}}},defaultProps:{size:`md`,variant:`plain`}})})))()}var O,k;function A(){return(A=e((()=>{O=t(),r(),c(),n(),o(),k=({children:e,ellipsis:t,endBoundaries:n=0,items:r=[],link:o,startBoundaries:c=0,...l}={})=>{let u=i(e),[d]=i(o),f=u.length||r.length,{t:p}=s(`breadcrumb`),m=c+n>0&&f>c+n,h=(0,O.useCallback)(e=>d?e.map(({label:e,...t})=>(0,O.cloneElement)(d,{...d.props,children:e,...t})):[],[d]),g=(0,O.useCallback)(e=>t?ee(t,{items:e}):null,[t]),_=(0,O.useCallback)(e=>{let t=e.length;return[e.slice(0,c),e.slice(c,t-n),e.slice(t-n)]},[c,n]),v=(0,O.useMemo)(()=>{if(u.length)return u;if(m){let[e,t,n]=_(r);return[...h(e),g(t),...h(n)]}return h(r)},[u,r,m,g,h,_]),y=(0,O.useCallback)(e=>a({"aria-label":p(`Breadcrumb`)},l,e)(),[l,p]),b=(0,O.useCallback)(e=>({...e}),[]),x=(0,O.useCallback)(({href:e,currentPage:t,...n}={})=>({href:t?void 0:e,"aria-current":t?`page`:void 0,...n}),[]);return{children:v,getEllipsisProps:(0,O.useCallback)(e=>({"aria-label":p(`Ellipsis`),role:`presentation`,...e}),[p]),getLinkProps:x,getListProps:b,getRootProps:y}}})))()}var j,M,ie,ae,N,oe,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{j=t(),h(),u(),g(),te(),D(),A(),M=l(),{ComponentContext:ie,PropsContext:ae,useComponentContext:N,usePropsContext:oe,withContext:P,withProvider:F}=m(`breadcrumb`,E),I=F(({endBoundaries:e,gap:t,separator:n,startBoundaries:r,itemProps:i,listProps:ee,separatorProps:a,...o})=>{let{children:s,getEllipsisProps:c,getLinkProps:l,getListProps:u,getRootProps:f}=k({ellipsis:(0,M.jsx)(V,{}),endBoundaries:e,link:(0,M.jsx)(B,{}),startBoundaries:r,...o}),p=(0,j.useMemo)(()=>({getEllipsisProps:c,getLinkProps:l}),[c,l]);return(0,M.jsx)(ie,{value:p,children:(0,M.jsx)(d.nav,{...f(),children:(0,M.jsx)(L,{...u({gap:t,...ee}),children:s.map((e,t)=>{let r=t===s.length-1;return(0,M.jsxs)(j.Fragment,{children:[(0,M.jsx)(R,{...i,children:e}),r?null:(0,M.jsx)(z,{...a,children:n})]},t)})})})})},`root`)(),L=P(`ol`,`list`)(),R=P(`li`,`item`)(),z=P(R,`separator`)(({children:e,...t})=>({children:e??(0,M.jsx)(_,{}),...t})),B=P(`a`,`link`)(void 0,({currentPage:e,...t})=>{let{getLinkProps:n}=N();return{as:e?`span`:`a`,...n({currentPage:e,...t})}}),V=P(ne,`ellipsis`)(void 0,e=>{let{getEllipsisProps:t}=N();return{...t(e)}})})))()}var U,W,G,K,q,J,Y,X,Z,Q,$,se;function ce(){return(ce=e((()=>{U=t(),re(),v(),x(),H(),W=l(),G={component:I,title:`Components / Breadcrumb`},K=()=>(0,W.jsxs)(I,{children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),q=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(I,{items:e})},J=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`plain`,`underline`],children:(t,n,r)=>(0,W.jsx)(I,{variant:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},Y=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(T,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,W.jsx)(I,{size:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},X=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsx)(I,{endBoundaries:1,items:e,startBoundaries:1})},Z=()=>(0,W.jsxs)(I,{children:[(0,W.jsx)(B,{href:`/`,children:`孫悟空少年編`}),(0,W.jsx)(V,{}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),Q=()=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(I,{"aria-label":`Breadcrumb-slash`,separator:`/`,children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),(0,W.jsxs)(I,{"aria-label":`Breadcrumb-icon`,separator:(0,W.jsx)(y,{}),children:[(0,W.jsx)(B,{href:`/`,children:`サイヤ人編`}),(0,W.jsx)(B,{href:`/`,children:`ナメック星編`}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]}),$=()=>{let e=(0,U.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(I,{"aria-label":`Breadcrumb-items`,ellipsis:({items:e})=>(0,W.jsxs)(w,{children:[(0,W.jsx)(b,{children:(0,W.jsx)(V,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,W.jsx)(S,{children:e.map(({href:e,label:t},n)=>(0,W.jsx)(C,{as:`a`,href:e,children:t},n))})]}),endBoundaries:1,items:e,startBoundaries:1}),(0,W.jsxs)(I,{"aria-label":`Breadcrumb-children`,children:[(0,W.jsx)(B,{href:`/`,children:`孫悟空少年編`}),(0,W.jsxs)(w,{children:[(0,W.jsx)(b,{children:(0,W.jsx)(V,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,W.jsxs)(S,{children:[(0,W.jsx)(C,{as:`a`,href:`/`,children:`ピッコロ大魔王編`}),(0,W.jsx)(C,{as:`a`,href:`/`,children:`サイヤ人編`}),(0,W.jsx)(C,{as:`a`,href:`/`,children:`フリーザ編`})]})]}),(0,W.jsx)(B,{href:`/`,children:`人造人間編`}),(0,W.jsx)(B,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]})},se=[`Basic`,`Items`,`Variant`,`Size`,`Boundaries`,`Ellipsis`,`Separator`,`CustomEllipsis`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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