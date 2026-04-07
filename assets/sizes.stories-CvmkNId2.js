import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,Jf as i,Jr as a,Xp as o,Xr as s,Yf as c,Zr as l,_f as u,da as d,dp as f,ds as p,fa as m,gf as h,pa as g,pp as _,qr as v,ua as y,us as b,vp as x}from"./iframe-ocB1-JHi.js";var S,C,w,T,E;e((()=>{S=t(o(),1),b(),y(),s(),v(),r(),f(),i(),h(),C=_(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{children:`Sizes`}),(0,C.jsxs)(g,{children:[(0,C.jsx)(m,{children:(0,C.jsx)(a,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(d,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(l,{each:Object.entries(u).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],r)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(n,{children:e}),(0,C.jsx)(n,{color:`fg.muted`,children:t}),(0,C.jsx)(p,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},r)})})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(m,{children:(0,C.jsx)(a,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(d,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(l,{each:Object.entries(c).filter(([e])=>x(e)),children:([e,t],r)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(n,{children:e}),(0,C.jsx)(n,{color:`fg.muted`,children:t}),(0,C.jsx)(p,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},r)})})]}),(0,C.jsxs)(g,{children:[(0,C.jsx)(m,{children:(0,C.jsx)(a,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(d,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(l,{each:Object.entries(c).filter(([e])=>e.includes(`/`)),children:([e,t],r)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(n,{children:e}),(0,C.jsx)(n,{color:`fg.muted`,children:t}),(0,C.jsx)(p,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},r)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Sizes</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(sizes).filter(([key]) => !isNaN(Number(key))).sort(([a], [b]) => parseInt(a) - parseInt(b))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(semanticSizes).filter(([key]) => isSize(key))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Fractional Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(semanticSizes).filter(([key]) => key.includes("/"))}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...T.parameters?.docs?.source}}},E=[`Sizes`]}))();export{T as Sizes,E as __namedExportsOrder,w as default};