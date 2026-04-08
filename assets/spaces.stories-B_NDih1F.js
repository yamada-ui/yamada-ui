import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Du as n,Eu as r,Jr as i,Kf as a,Xp as o,Xr as s,Zr as c,da as l,ds as u,fa as d,pa as f,pp as p,qf as m,qr as h,ua as g,us as _,vf as v,yf as y}from"./iframe-DKFq6LfD.js";var b,x,S,C,w;e((()=>{b=t(o(),1),_(),g(),s(),h(),r(),a(),v(),x=p(),S={title:`Theme / Tokens`},C=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{children:`Spaces`}),(0,x.jsxs)(f,{children:[(0,x.jsx)(d,{children:(0,x.jsx)(i,{size:`2xl`,children:`Tokens`})}),(0,x.jsx)(l,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(c,{each:Object.entries(y).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],r)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(n,{children:e}),(0,x.jsx)(n,{color:`fg.muted`,children:t}),(0,x.jsx)(u,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},r)})})]}),(0,x.jsxs)(f,{children:[(0,x.jsx)(d,{children:(0,x.jsx)(i,{size:`2xl`,children:`Semantic Tokens`})}),(0,x.jsx)(l,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,x.jsx)(c,{each:Object.entries(m),children:([e,t],r)=>(0,x.jsxs)(b.Fragment,{children:[(0,x.jsx)(n,{children:e}),(0,x.jsx)(n,{color:`fg.muted`,children:t}),(0,x.jsx)(u,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},r)})})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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