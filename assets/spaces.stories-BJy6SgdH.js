import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{n as i,t as a}from"./spaces-BjRzxpv6.js";import{n as o,t as s}from"./spaces-CXiioP1G.js";import{t as c}from"./text-DSMMc5B6.js";import{t as l}from"./text-BM4F8FHS.js";import{t as u}from"./box-D_8v7EGt.js";import{t as d}from"./heading-DnIVTUkI.js";import{Fo as f,Gi as p,Hr as m,Ki as h,Ur as g,Wi as _,Wr as v,qi as y}from"./iframe-0mSaBMbt.js";var b,x,S,C,w;e((()=>{b=t(n(),1),f(),_(),g(),m(),l(),a(),s(),x=r(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{children:`Spaces`}),(0,x.jsxs)(y,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(d,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(p,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(v,{each:Object.entries(o).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(c,{children:e}),(0,x.jsx)(c,{color:`fg.muted`,children:t}),(0,x.jsx)(u,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(y,{children:[(0,x.jsx)(h,{children:(0,x.jsx)(d,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(p,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(v,{each:Object.entries(i),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(c,{children:e}),(0,x.jsx)(c,{color:`fg.muted`,children:t}),(0,x.jsx)(u,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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