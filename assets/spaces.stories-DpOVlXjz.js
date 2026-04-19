import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bp as n,Fa as r,Fs as i,Ia as a,La as o,Pa as s,Ps as c,Vp as l,au as u,fp as d,gi as f,hi as p,ou as m,pp as h,qm as g,sm as _,vi as v,yi as y}from"./iframe-CXDvaz-K.js";var b,x,S,C,w;e((()=>{b=t(g(),1),c(),s(),v(),p(),u(),n(),d(),x=_(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{children:`Spaces`}),(0,x.jsxs)(o,{children:[(0,x.jsx)(a,{children:(0,x.jsx)(f,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(r,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(y,{each:Object.entries(h).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(m,{children:e}),(0,x.jsx)(m,{color:`fg.muted`,children:t}),(0,x.jsx)(i,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(o,{children:[(0,x.jsx)(a,{children:(0,x.jsx)(f,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(r,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(y,{each:Object.entries(l),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(m,{children:e}),(0,x.jsx)(m,{color:`fg.muted`,children:t}),(0,x.jsx)(i,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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