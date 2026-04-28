import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{Z as r,gn as i}from"./core-C7NnSGLR.js";import{t as a}from"./jsx-runtime-D_578c1K.js";import{i as o,n as s,r as c,t as l}from"./sizes-cEiDGvXI.js";import{t as u}from"./text-DSMMc5B6.js";import{t as d}from"./text-BM4F8FHS.js";import{t as f}from"./box-D_8v7EGt.js";import{t as p}from"./heading-DnIVTUkI.js";import{Fo as m,Gi as h,Hr as g,Ki as _,Ur as v,Wi as y,Wr as b,qi as x}from"./iframe-DE87BsHf.js";var S,C,w,T,E;e((()=>{S=t(n(),1),m(),y(),v(),g(),d(),r(),c(),l(),C=a(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p,{children:`Sizes`}),(0,C.jsxs)(x,{children:[(0,C.jsx)(_,{children:(0,C.jsx)(p,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(h,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(s).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(u,{children:e}),(0,C.jsx)(u,{color:`fg.muted`,children:t}),(0,C.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(x,{children:[(0,C.jsx)(_,{children:(0,C.jsx)(p,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(h,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(o).filter(([e])=>i(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(u,{children:e}),(0,C.jsx)(u,{color:`fg.muted`,children:t}),(0,C.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(x,{children:[(0,C.jsx)(_,{children:(0,C.jsx)(p,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(h,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(b,{each:Object.entries(o).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(u,{children:e}),(0,C.jsx)(u,{color:`fg.muted`,children:t}),(0,C.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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