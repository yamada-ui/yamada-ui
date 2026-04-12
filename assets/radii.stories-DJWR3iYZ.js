import{n as e}from"./chunk-zsgVPwQN.js";import{Fa as t,Hp as n,Ma as r,Na as i,Pa as a,Vp as o,eu as s,gi as c,hi as l,im as u,iu as d,mp as f,pp as p,ru as m,tu as h,vi as g,yi as _}from"./iframe-zMOrAcxo.js";var v,y,b,x;e((()=>{s(),r(),g(),l(),m(),o(),p(),v=u(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{children:`Radii`}),(0,v.jsxs)(t,{children:[(0,v.jsx)(a,{children:(0,v.jsx)(c,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(i,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(_,{each:Object.entries(f),children:([e,t],n)=>(0,v.jsxs)(h,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(d,{children:e}),(0,v.jsx)(d,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(t,{children:[(0,v.jsx)(a,{children:(0,v.jsx)(c,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(i,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(_,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(h,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(d,{children:e}),(0,v.jsx)(d,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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