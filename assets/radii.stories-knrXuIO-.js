import{n as e}from"./chunk-zsgVPwQN.js";import{Cf as t,Cu as n,Du as r,Eu as i,Jr as a,Sf as o,Xf as s,Xr as c,Zf as l,Zr as u,da as d,fa as f,pa as p,pp as m,qr as h,ua as g,wu as _}from"./iframe-xN-XyuUR.js";var v,y,b,x;e((()=>{n(),g(),c(),h(),i(),s(),o(),v=m(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{children:`Radii`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{children:(0,v.jsx)(a,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(u,{each:Object.entries(t),children:([e,t],n)=>(0,v.jsxs)(_,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(r,{children:e}),(0,v.jsx)(r,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(f,{children:(0,v.jsx)(a,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(d,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(u,{each:Object.entries(l),children:([e,t],n)=>(0,v.jsxs)(_,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(r,{children:e}),(0,v.jsx)(r,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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