import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Fa as n,Ff as r,Lf as i,Ma as a,N_ as o,P_ as s,Pa as c,Pf as l,Rf as u,cs as d,cv as f,ja as p,ls as m,os as h,ss as g,sv as _}from"./iframe-4z85howq.js";var v,y,b,x;e((()=>{l(),h(),c(),p(),i(),_(),o(),v=t(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{children:`Radii`}),(0,v.jsxs)(m,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(a,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(g,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(n,{each:Object.entries(s),children:([e,t],n)=>(0,v.jsxs)(r,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(u,{children:e}),(0,v.jsx)(u,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(a,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(g,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(n,{each:Object.entries(f),children:([e,t],n)=>(0,v.jsxs)(r,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(u,{children:e}),(0,v.jsx)(u,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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