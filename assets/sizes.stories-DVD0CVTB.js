import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{Hn as r,dt as i}from"./core-DkLkzQLq.js";import{t as a}from"./jsx-runtime-O9QVJvLM.js";import{t as o}from"./text-ClYKebxE.js";import{t as s}from"./text-B2Y0ht7H.js";import{Aa as c,Ma as l,Na as u,Ol as d,Rf as f,as as p,is as m,ka as h,kl as g,of as _,os as v,sf as y,ss as b,zf as x}from"./iframe-DpVGHWSQ.js";var S,C,w,T,E;t((()=>{S=e(n(),1),d(),m(),l(),h(),s(),i(),f(),_(),C=a(),w={title:`Theme / Tokens`},T=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c,{children:`Sizes`}),(0,C.jsxs)(b,{children:[(0,C.jsx)(v,{children:(0,C.jsx)(c,{size:`2xl`,children:`Tokens`})}),(0,C.jsx)(p,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(u,{each:Object.entries(y).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(o,{children:e}),(0,C.jsx)(o,{color:`fg.muted`,children:t}),(0,C.jsx)(g,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(b,{children:[(0,C.jsx)(v,{children:(0,C.jsx)(c,{size:`2xl`,children:`Semantic Tokens`})}),(0,C.jsx)(p,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(u,{each:Object.entries(x).filter(([e])=>r(e)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(o,{children:e}),(0,C.jsx)(o,{color:`fg.muted`,children:t}),(0,C.jsx)(g,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,C.jsxs)(b,{children:[(0,C.jsx)(v,{children:(0,C.jsx)(c,{size:`2xl`,children:`Fractional Tokens`})}),(0,C.jsx)(p,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,C.jsx)(u,{each:Object.entries(x).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,C.jsxs)(S.Fragment,{children:[(0,C.jsx)(o,{children:e}),(0,C.jsx)(o,{color:`fg.muted`,children:t}),(0,C.jsx)(g,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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