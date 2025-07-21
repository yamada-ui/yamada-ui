import{j as e,V as s,T as t,bH as a}from"./iframe-BbB59fLB.js";import{H as c}from"./heading-DTYqldnT.js";import{F as d}from"./for-JwY7aMwm.js";import{H as l}from"./h-stack-DSY2l8Q8.js";import{C as x,b as m}from"./container-D7n_2PY_.js";const u={title:"Theme / Tokens / Line Heights"},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:"Line Heights"}),e.jsx(x,{children:e.jsx(m,{gap:"lg",children:e.jsx(d,{each:Object.entries(a),children:([r,i],o)=>e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(t,{children:r}),e.jsx(t,{color:"fg.muted",children:i})]}),e.jsx(t,{fontSize:"2xl",lineHeight:r,children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"})]},o)})})})]});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Line Heights</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(lineHeights)}>
            {([token, value], index) => <VStack key={index}>
                <HStack>
                  <Text>{token}</Text>
                  <Text color="fg.muted">{value}</Text>
                </HStack>

                <Text fontSize="2xl" lineHeight={token}>
                  『ドラゴンボール』（DRAGON
                  BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
                </Text>
              </VStack>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...n.parameters?.docs?.source}}};const f=["Basic"];export{n as Basic,f as __namedExportsOrder,u as default};
