import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fa as n,Fs as r,Hp as i,Ia as a,La as o,Pa as s,Ps as c,Up as l,am as u,au as d,dp as f,fm as p,gi as m,hi as h,ou as g,qm as _,sm as v,up as y,vi as b,yi as x}from"./iframe-CXDvaz-K.js";var S,C,w,T,E;e((()=>{S=t(_(),1),c(),s(),b(),h(),d(),u(),i(),y(),C=v(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{children:`Sizes`}),(0,C.jsxs)(o,{children:[(0,C.jsx)(a,{children:(0,C.jsx)(m,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(n,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(x,{each:Object.entries(f).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(g,{children:e}),(0,C.jsx)(g,{color:`fg.muted`,children:t}),(0,C.jsx)(r,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(o,{children:[(0,C.jsx)(a,{children:(0,C.jsx)(m,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(n,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(x,{each:Object.entries(l).filter(([e])=>p(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(g,{children:e}),(0,C.jsx)(g,{color:`fg.muted`,children:t}),(0,C.jsx)(r,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(o,{children:[(0,C.jsx)(a,{children:(0,C.jsx)(m,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(n,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(x,{each:Object.entries(l).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(g,{children:e}),(0,C.jsx)(g,{color:`fg.muted`,children:t}),(0,C.jsx)(r,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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