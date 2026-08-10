import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-kkZeYk3H.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-6la-NVAW.js";import{t as a}from"./text-D2YSsabI.js";import{Al as o,Fa as s,Gf as c,Ia as l,Kf as u,Ma as d,Na as f,_f as p,cs as m,ds as h,jl as g,ls as _,us as v,vf as y}from"./iframe-BHdXPKyL.js";var b,x,S,C,w;t((()=>{b=e(n(),1),o(),m(),s(),d(),a(),c(),p(),x=r(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{children:`Spaces`}),(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{children:(0,x.jsx)(f,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(_,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(l,{each:Object.entries(y).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(i,{children:e}),(0,x.jsx)(i,{color:`fg.muted`,children:t}),(0,x.jsx)(g,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{children:(0,x.jsx)(f,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(_,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(l,{each:Object.entries(u),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(i,{children:e}),(0,x.jsx)(i,{color:`fg.muted`,children:t}),(0,x.jsx)(g,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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