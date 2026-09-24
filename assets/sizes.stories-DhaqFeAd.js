import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{dn as n,fn as r}from"./props-Bz1FL_va.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{i as a,n as o,r as s,t as c}from"./sizes-DdsgFmk_.js";import{n as l,t as u}from"./text-b2W5euYI.js";import{n as d,t as f}from"./box-C47iDJeO.js";import{i as p,n as m,r as h,t as g}from"./container-C5kWx763.js";import{n as _,t as v}from"./for-BIl9Q3L3.js";import{n as y,t as b}from"./heading-mQlbK6e0.js";var x,S,C,w,T;function E(){return(E=e((()=>{x=t(),d(),p(),_(),y(),l(),n(),s(),c(),S=i(),C={title:`Theme / Tokens`},w=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b,{children:`Sizes`}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{children:(0,S.jsx)(b,{size:`2xl`,children:`Tokens`})}),(0,S.jsx)(g,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,S.jsx)(v,{each:Object.entries(o).filter(([e])=>!isNaN(Number(e))).sort(([e],[t])=>parseInt(e)-parseInt(t)),children:([e,t],n)=>(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(u,{children:e}),(0,S.jsx)(u,{color:`fg.muted`,children:t}),(0,S.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{children:(0,S.jsx)(b,{size:`2xl`,children:`Semantic Tokens`})}),(0,S.jsx)(g,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,S.jsx)(v,{each:Object.entries(a).filter(([e])=>r(e)),children:([e,t],n)=>(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(u,{children:e}),(0,S.jsx)(u,{color:`fg.muted`,children:t}),(0,S.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]}),(0,S.jsxs)(h,{children:[(0,S.jsx)(m,{children:(0,S.jsx)(b,{size:`2xl`,children:`Fractional Tokens`})}),(0,S.jsx)(g,{alignItems:`center`,display:`grid`,gapX:`lg`,gapY:`md`,gridTemplateColumns:`auto auto 1fr`,children:(0,S.jsx)(v,{each:Object.entries(a).filter(([e])=>e.includes(`/`)),children:([e,t],n)=>(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(u,{children:e}),(0,S.jsx)(u,{color:`fg.muted`,children:t}),(0,S.jsx)(f,{bg:`green`,h:`4`,maxW:e,rounded:`l1`})]},n)})})]})]}),T=[`Sizes`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Sizes,T as __namedExportsOrder,C as default};