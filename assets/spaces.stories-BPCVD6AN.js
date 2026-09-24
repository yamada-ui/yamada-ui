import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./spaces-CPt020xE.js";import{n as a,t as o}from"./spaces-BWlf3yQ-.js";import{n as s,t as c}from"./text-b2W5euYI.js";import{n as l,t as u}from"./box-C47iDJeO.js";import{i as d,n as f,r as p,t as m}from"./container-C5kWx763.js";import{n as h,t as g}from"./for-BIl9Q3L3.js";import{n as _,t as v}from"./heading-mQlbK6e0.js";var y,b,x,S,C;function w(){return(w=e((()=>{y=t(),l(),d(),h(),_(),s(),i(),o(),b=n(),x={title:`Theme / Tokens`},S=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{children:`Spaces`}),(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{children:(0,b.jsx)(v,{size:`2xl`,children:`Tokens`})}),(0,b.jsx)(m,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,b.jsx)(g,{each:Object.entries(a).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(c,{children:e}),(0,b.jsx)(c,{color:`fg.muted`,children:t}),(0,b.jsx)(u,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{children:(0,b.jsx)(v,{size:`2xl`,children:`Semantic Tokens`})}),(0,b.jsx)(m,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,b.jsx)(g,{each:Object.entries(r),children:([e,t],n)=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(c,{children:e}),(0,b.jsx)(c,{color:`fg.muted`,children:t}),(0,b.jsx)(u,{bg:`green`,h:`4`,maxW:t,rounded:`l1`})]},n)})})]})]}),C=[`Spaces`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Spaces,C as __namedExportsOrder,x as default};