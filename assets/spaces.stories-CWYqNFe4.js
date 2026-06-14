import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{A_ as n,Ev as r,Fa as i,Fl as a,Lf as o,Ma as s,Pa as c,Pl as l,Rf as u,cs as d,iv as f,ja as p,k_ as m,ls as h,os as g,rv as _,ss as v,yy as y}from"./iframe-4z85howq.js";var b,x,S,C,w;t((()=>{b=e(y(),1),l(),g(),c(),p(),o(),_(),m(),x=r(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{children:`Spaces`}),(0,x.jsxs)(h,{children:[(0,x.jsx)(d,{children:(0,x.jsx)(s,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(v,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(i,{each:Object.entries(n).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(u,{children:e}),(0,x.jsx)(u,{color:`fg.muted`,children:t}),(0,x.jsx)(a,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(h,{children:[(0,x.jsx)(d,{children:(0,x.jsx)(s,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(v,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(i,{each:Object.entries(f),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(u,{children:e}),(0,x.jsx)(u,{color:`fg.muted`,children:t}),(0,x.jsx)(a,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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