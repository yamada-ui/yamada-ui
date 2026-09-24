import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,n as r,r as i,t as a}from"./radii-66OoebZ7.js";import{n as o,t as s}from"./text-b2W5euYI.js";import{n as c,t as l}from"./center-C6NHygeb.js";import{i as u,n as d,r as f,t as p}from"./container-C5kWx763.js";import{n as m,t as h}from"./for-BIl9Q3L3.js";import{n as g,t as _}from"./heading-mQlbK6e0.js";var v,y,b,x;function S(){return(S=e((()=>{c(),u(),m(),g(),o(),i(),a(),v=t(),y={title:`Theme / Tokens`},b=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_,{children:`Radii`}),(0,v.jsxs)(f,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(_,{size:`2xl`,children:`Tokens`})}),(0,v.jsx)(p,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(h,{each:Object.entries(r),children:([e,t],n)=>(0,v.jsxs)(l,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(s,{children:e}),(0,v.jsx)(s,{color:`fg.muted`,children:t})]},n)})})]}),(0,v.jsxs)(f,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(_,{size:`2xl`,children:`Semantic Tokens`})}),(0,v.jsx)(p,{alignItems:`center`,display:`grid`,gap:`xl`,gridTemplateColumns:`repeat(auto-fill, minmax({sizes.4xs}, 1fr))`,children:(0,v.jsx)(h,{each:Object.entries(n),children:([e,t],n)=>(0,v.jsxs)(l,{aspectRatio:1,bg:`bg`,borderColor:`border.subtle`,borderWidth:`1px`,flexDirection:`column`,rounded:e,children:[(0,v.jsx)(s,{children:e}),(0,v.jsx)(s,{color:`fg.muted`,children:t})]},n)})})]})]}),x=[`Radii`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Radii,x as __namedExportsOrder,y as default};