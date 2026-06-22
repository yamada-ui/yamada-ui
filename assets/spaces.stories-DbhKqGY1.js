import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./text-D-jnAopL.js";import{t as a}from"./text-DV5bCi2n.js";import{Aa as o,If as s,Lf as c,Ma as l,Na as u,Ol as d,as as f,cf as p,is as m,ka as h,kl as g,lf as _,os as v,ss as y}from"./iframe-CgnmJX3j.js";var b,x,S,C,w;t((()=>{b=e(n(),1),d(),m(),l(),h(),a(),s(),p(),x=r(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{children:`Spaces`}),(0,x.jsxs)(y,{children:[(0,x.jsx)(v,{children:(0,x.jsx)(o,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(f,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(u,{each:Object.entries(_).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(i,{children:e}),(0,x.jsx)(i,{color:`fg.muted`,children:t}),(0,x.jsx)(g,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,x.jsxs)(y,{children:[(0,x.jsx)(v,{children:(0,x.jsx)(o,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(f,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(u,{each:Object.entries(c),children:([e,t],n)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(i,{children:e}),(0,x.jsx)(i,{color:`fg.muted`,children:t}),(0,x.jsx)(g,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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