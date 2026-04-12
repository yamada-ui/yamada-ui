import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{As as n,Cc as r,Ec as i,Lf as a,Oc as o,Os as s,Wm as c,gc as l,im as u,jd as d,js as f,ks as p,yc as m}from"./iframe-e5Q0HVQf.js";import{n as h,t as g}from"./storybook-yRZpcV0e.js";var _,v,y,b,x,S,C,w,T,E,D,O;e((()=>{g(),_=t(c(),1),d(),l(),s(),v=u(),y={component:f,title:`Components / Breadcrumb`},b=()=>(0,v.jsxs)(f,{children:[(0,v.jsx)(n,{href:`/`,children:`サイヤ人編`}),(0,v.jsx)(n,{href:`/`,children:`ナメック星編`}),(0,v.jsx)(n,{href:`/`,children:`人造人間編`}),(0,v.jsx)(n,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),x=()=>{let e=(0,_.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,v.jsx)(f,{items:e})},S=()=>{let e=(0,_.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`plain`,`underline`],children:(t,n,r)=>(0,v.jsx)(f,{variant:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},C=()=>{let e=(0,_.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,v.jsx)(f,{size:n,"aria-label":`Breadcrumb-${n}`,items:e},r)})},w=()=>{let e=(0,_.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,v.jsx)(f,{endBoundaries:1,items:e,startBoundaries:1})},T=()=>(0,v.jsxs)(f,{children:[(0,v.jsx)(n,{href:`/`,children:`孫悟空少年編`}),(0,v.jsx)(p,{}),(0,v.jsx)(n,{href:`/`,children:`人造人間編`}),(0,v.jsx)(n,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),E=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(f,{"aria-label":`Breadcrumb-slash`,separator:`/`,children:[(0,v.jsx)(n,{href:`/`,children:`サイヤ人編`}),(0,v.jsx)(n,{href:`/`,children:`ナメック星編`}),(0,v.jsx)(n,{href:`/`,children:`人造人間編`}),(0,v.jsx)(n,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]}),(0,v.jsxs)(f,{"aria-label":`Breadcrumb-icon`,separator:(0,v.jsx)(a,{}),children:[(0,v.jsx)(n,{href:`/`,children:`サイヤ人編`}),(0,v.jsx)(n,{href:`/`,children:`ナメック星編`}),(0,v.jsx)(n,{href:`/`,children:`人造人間編`}),(0,v.jsx)(n,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]}),D=()=>{let e=(0,_.useMemo)(()=>[{href:`/`,label:`サイヤ人編`},{href:`/`,label:`ナメック星編`},{href:`/`,label:`人造人間編`},{href:`/`,currentPage:!0,label:`魔人ブウ編`}],[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{"aria-label":`Breadcrumb-items`,ellipsis:({items:e})=>(0,v.jsxs)(i,{children:[(0,v.jsx)(o,{children:(0,v.jsx)(p,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,v.jsx)(m,{children:e.map(({href:e,label:t},n)=>(0,v.jsx)(r,{as:`a`,href:e,children:t},n))})]}),endBoundaries:1,items:e,startBoundaries:1}),(0,v.jsxs)(f,{"aria-label":`Breadcrumb-children`,children:[(0,v.jsx)(n,{href:`/`,children:`孫悟空少年編`}),(0,v.jsxs)(i,{children:[(0,v.jsx)(o,{children:(0,v.jsx)(p,{"aria-hidden":!1,cursor:`pointer`,focusVisibleRing:`outline`,outline:`none`,rounded:`l1`,tabIndex:-1})}),(0,v.jsxs)(m,{children:[(0,v.jsx)(r,{as:`a`,href:`/`,children:`ピッコロ大魔王編`}),(0,v.jsx)(r,{as:`a`,href:`/`,children:`サイヤ人編`}),(0,v.jsx)(r,{as:`a`,href:`/`,children:`フリーザ編`})]})]}),(0,v.jsx)(n,{href:`/`,children:`人造人間編`}),(0,v.jsx)(n,{href:`/`,currentPage:!0,children:`魔人ブウ編`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">サイヤ人編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">ナメック星編</Breadcrumb.Link>
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <Breadcrumb.Root>
      <Breadcrumb.Link href="/">孫悟空少年編</Breadcrumb.Link>
      <Breadcrumb.Ellipsis />
      <Breadcrumb.Link href="/">人造人間編</Breadcrumb.Link>
      <Breadcrumb.Link href="/" currentPage>
        魔人ブウ編
      </Breadcrumb.Link>
    </Breadcrumb.Root>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}},O=[`Basic`,`Items`,`Variant`,`Size`,`Boundaries`,`Ellipsis`,`Separator`,`CustomEllipsis`]}))();export{b as Basic,w as Boundaries,D as CustomEllipsis,T as Ellipsis,x as Items,E as Separator,C as Size,S as Variant,O as __namedExportsOrder,y as default};