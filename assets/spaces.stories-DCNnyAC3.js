import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Fa as n,Lp as r,Ma as i,Ms as a,Na as o,Ns as s,Pa as c,Rp as l,Wm as u,gi as d,hi as f,im as p,iu as m,lp as h,ru as g,up as _,vi as v,yi as y}from"./iframe-oONnPOF5.js";var b,x,S,C,w;e((()=>{b=t(u(),1),a(),i(),v(),f(),g(),r(),h(),x=p(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{children:`Spaces`}),(0,x.jsxs)(n,{children:[(0,x.jsx)(c,{children:(0,x.jsx)(d,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(o,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(y,{each:Object.entries(_).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(m,{children:e}),(0,x.jsx)(m,{color:`fg.muted`,children:t}),(0,x.jsx)(s,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(n,{children:[(0,x.jsx)(c,{children:(0,x.jsx)(d,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(o,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(y,{each:Object.entries(l),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(m,{children:e}),(0,x.jsx)(m,{color:`fg.muted`,children:t}),(0,x.jsx)(s,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Spaces</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gapX="lg" gapY="md" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(spaces).filter(([key]) => !isNaN(Number(key))).sort(([a], [b]) => parseInt(a) - parseInt(b))}>
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
          <For each={Object.entries(semanticSpaces)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={value} rounded="l1" />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...C.parameters?.docs?.source}}},w=[`Spaces`]}))();export{C as Spaces,w as __namedExportsOrder,S as default};