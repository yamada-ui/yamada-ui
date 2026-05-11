import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{i as n,n as r,r as i,t as a}from"./radii-EhUWztfk.js";import{t as o}from"./text-b_IgAtWs.js";import{t as s}from"./text-BspHgeMQ.js";import{t as c}from"./center-CkuL8MEe.js";import{t as l}from"./center-33epxUvO.js";import{t as u}from"./heading-B8YDc5tv.js";import{Gi as d,Hr as f,Ki as p,Ur as m,Wi as h,Wr as g,qi as _}from"./iframe-DO0z5V9x.js";var v,y,b,x;e((()=>{l(),h(),m(),f(),s(),i(),a(),v=t(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{children:`Radii`}),(0,v.jsxs)(_,{children:[(0,v.jsx)(p,{children:(0,v.jsx)(u,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(g,{each:Object.entries(r),children:([e,t],n)=>(0,v.jsxs)(c,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(o,{children:e}),(0,v.jsx)(o,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(_,{children:[(0,v.jsx)(p,{children:(0,v.jsx)(u,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(d,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(g,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(c,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(o,{children:e}),(0,v.jsx)(o,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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