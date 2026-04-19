import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Gp as n,Ia as r,La as i,Pa as a,Wp as o,_p as s,au as c,gi as l,gp as u,hi as d,nu as f,ou as p,ru as m,sm as h,vi as g,yi as _}from"./iframe-CXDvaz-K.js";var v,y,b,x;e((()=>{f(),a(),g(),d(),c(),o(),u(),v=h(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:`Radii`}),(0,v.jsxs)(i,{children:[(0,v.jsx)(r,{children:(0,v.jsx)(l,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(t,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(_,{each:Object.entries(s),children:([e,t],n)=>(0,v.jsxs)(m,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(p,{children:e}),(0,v.jsx)(p,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(i,{children:[(0,v.jsx)(r,{children:(0,v.jsx)(l,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(t,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(_,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(m,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(p,{children:e}),(0,v.jsx)(p,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Radii</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(radii)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded={token}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body alignItems="center" display="grid" gap="xl" gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))">
          <For each={Object.entries(semanticRadii)}>
            {([token, value], index) => <Center key={index} aspectRatio={1} bg="bg" borderColor="border.subtle" borderWidth="1px" flexDirection="column" rounded={token}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...b.parameters?.docs?.source}}},x=[`Radii`]}))();export{b as Radii,x as __namedExportsOrder,y as default};