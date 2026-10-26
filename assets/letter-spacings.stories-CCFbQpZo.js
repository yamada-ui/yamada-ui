import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./letter-spacings-CVfoDZFV.js";import{n as i,t as a}from"./text-D9b8hJeR.js";import{i as o,r as s,t as c}from"./container-VVxTkAta.js";import{n as l,t as u}from"./for-QPCbaokC.js";import{n as d,t as f}from"./heading-DI6lIgd-.js";import{n as p,t as m}from"./h-stack-HkLHgaYp.js";import{n as h,t as g}from"./v-stack-B_TJuu3i.js";var _,v,y,b;function x(){return(x=e((()=>{o(),l(),d(),p(),h(),i(),r(),_=t(),v={title:`Theme / Tokens`},y=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{children:`Letter Spacings`}),(0,_.jsx)(s,{children:(0,_.jsx)(c,{gap:`lg`,children:(0,_.jsx)(u,{each:Object.entries(n),children:([e,t],n)=>(0,_.jsxs)(g,{children:[(0,_.jsxs)(m,{children:[(0,_.jsx)(a,{children:e}),(0,_.jsx)(a,{color:`fg.muted`,children:t})]}),(0,_.jsx)(a,{fontSize:`2xl`,letterSpacing:e,children:`Hirotomo Yamada`})]},n)})})})]}),b=[`LetterSpacings`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Letter Spacings</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(letterSpacings)}>
            {([token, value], index) => <VStack key={index}>
                <HStack>
                  <Text>{token}</Text>
                  <Text color="fg.muted">{value}</Text>
                </HStack>

                <Text fontSize="2xl" letterSpacing={token}>
                  Hirotomo Yamada
                </Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as LetterSpacings,b as __namedExportsOrder,v as default};