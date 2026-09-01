import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./text-CioY78R0.js";import{t as r}from"./text-D0TQhQLQ.js";import{t as i}from"./center-3lj5pUDb.js";import{t as a}from"./center-DdX31IlC.js";import{Fa as o,Ia as s,Ma as c,Na as l,Sf as u,Xf as d,Yf as f,cs as p,ds as m,ls as h,us as g,xf as _}from"./iframe-DgeyRRbK.js";var v,y,b,x;e((()=>{a(),p(),o(),c(),r(),f(),_(),v=t(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{children:`Radii`}),(0,v.jsxs)(m,{children:[(0,v.jsx)(g,{children:(0,v.jsx)(l,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(s,{each:Object.entries(u),children:([e,t],r)=>(0,v.jsxs)(i,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(n,{children:e}),(0,v.jsx)(n,{color:`fg.muted`,children:t})]},r)})})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(g,{children:(0,v.jsx)(l,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(h,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(s,{each:Object.entries(d),children:([e,t],r)=>(0,v.jsxs)(i,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(n,{children:e}),(0,v.jsx)(n,{color:`fg.muted`,children:t})]},r)})})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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