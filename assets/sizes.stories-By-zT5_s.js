import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Cv as n,D_ as r,Ev as i,Fa as a,Fl as o,Lf as s,Ma as c,O_ as l,Pa as u,Pl as d,Pv as f,Rf as p,av as m,cs as h,ja as g,ls as _,os as v,ov as y,ss as b,yy as x}from"./iframe-4z85howq.js";var S,C,w,T,E;t((()=>{S=e(x(),1),d(),v(),u(),g(),s(),n(),m(),r(),C=i(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c,{children:`Sizes`}),(0,C.jsxs)(_,{children:[(0,C.jsx)(h,{children:(0,C.jsx)(c,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(b,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(a,{each:Object.entries(l).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(p,{children:e}),(0,C.jsx)(p,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(h,{children:(0,C.jsx)(c,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(b,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(a,{each:Object.entries(y).filter(([e])=>f(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(p,{children:e}),(0,C.jsx)(p,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(h,{children:(0,C.jsx)(c,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(b,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(a,{each:Object.entries(y).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(p,{children:e}),(0,C.jsx)(p,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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