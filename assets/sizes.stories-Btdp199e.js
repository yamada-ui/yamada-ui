import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{Dv as n,Fa as r,Fl as i,Fv as a,Il as o,Ma as s,O_ as c,Pa as l,Rf as u,by as d,cs as f,ja as p,k_ as m,ls as h,os as g,ov as _,ss as v,sv as y,wv as b,zf as x}from"./iframe-B_RvmxW5.js";var S,C,w,T,E;t((()=>{S=e(d(),1),i(),g(),l(),p(),u(),b(),_(),c(),C=n(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(s,{children:`Sizes`}),(0,C.jsxs)(h,{children:[(0,C.jsx)(f,{children:(0,C.jsx)(s,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(v,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(r,{each:Object.entries(m).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(x,{children:e}),(0,C.jsx)(x,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(h,{children:[(0,C.jsx)(f,{children:(0,C.jsx)(s,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(v,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(r,{each:Object.entries(y).filter(([e])=>a(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(x,{children:e}),(0,C.jsx)(x,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(h,{children:[(0,C.jsx)(f,{children:(0,C.jsx)(s,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(v,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(r,{each:Object.entries(y).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(x,{children:e}),(0,C.jsx)(x,{color:`fg.muted`,children:t}),(0,C.jsx)(o,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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