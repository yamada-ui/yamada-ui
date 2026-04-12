import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bp as n,Fa as r,Ma as i,Ms as a,Na as o,Ns as s,Pa as c,Wm as l,cp as u,gi as d,hi as f,im as p,iu as m,lm as h,nm as g,ru as _,sp as v,vi as y,yi as b,zp as x}from"./iframe-e5Q0HVQf.js";var S,C,w,T,E;e((()=>{S=t(l(),1),a(),i(),y(),f(),_(),g(),x(),v(),C=p(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d,{children:`Sizes`}),(0,C.jsxs)(r,{children:[(0,C.jsx)(c,{children:(0,C.jsx)(d,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(o,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(u).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(m,{children:e}),(0,C.jsx)(m,{color:`fg.muted`,children:t}),(0,C.jsx)(s,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(r,{children:[(0,C.jsx)(c,{children:(0,C.jsx)(d,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(o,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(n).filter(([e])=>h(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(m,{children:e}),(0,C.jsx)(m,{color:`fg.muted`,children:t}),(0,C.jsx)(s,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(r,{children:[(0,C.jsx)(c,{children:(0,C.jsx)(d,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(o,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(n).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(m,{children:e}),(0,C.jsx)(m,{color:`fg.muted`,children:t}),(0,C.jsx)(s,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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