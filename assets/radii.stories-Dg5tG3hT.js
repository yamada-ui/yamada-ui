import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,F_ as n,Fa as r,Ff as i,If as a,Ma as o,P_ as s,Pa as c,Rf as l,cs as u,cv as d,ja as f,ls as p,lv as m,os as h,ss as g,zf as _}from"./iframe-B6Ybn7OE.js";var v,y,b,x;e((()=>{i(),h(),c(),f(),l(),d(),s(),v=t(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{children:`Radii`}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{children:(0,v.jsx)(o,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(g,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(r,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(a,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(_,{children:e}),(0,v.jsx)(_,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(u,{children:(0,v.jsx)(o,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(g,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(r,{each:Object.entries(m),children:([e,t],n)=>(0,v.jsxs)(a,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(_,{children:e}),(0,v.jsx)(_,{color:`fg.muted`,children:t})]},n)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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