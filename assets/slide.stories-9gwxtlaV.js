import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./text-ClYKebxE.js";import{t as r}from"./text-B2Y0ht7H.js";import{d as i,t as a}from"./button-Dd3r5aCq.js";import{n as o,t as s}from"./use-boolean-ptBD8emB.js";import{No as c,Po as l,Sn as u,Tn as d}from"./iframe-QFtltEr1.js";var f,p,m,h,g,_;e((()=>{s(),a(),u(),r(),l(),f=t(),p={component:c,title:`Components / Slide`},m=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{open:e,placement:`block-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(i,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},h=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(i,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},g=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{open:e,placement:`inline-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(i,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="block-end">
        <VStack bg="bg.panel" p="md" w="full">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide duration={0.7} open={open} placement="block-end">
        <VStack bg="bg.panel" p="md" w="full">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [open, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Slide open={open} placement="inline-end">
        <VStack bg="bg.panel" h="full" p="md">
          <Text color="bg.contrast">
            クリリンのことか……クリリンのことかーーーっ！！！！！
          </Text>

          <Button alignSelf="flex-end" onClick={toggle}>
            Close
          </Button>
        </VStack>
      </Slide>
    </>;
}`,...g.parameters?.docs?.source}}},_=[`Basic`,`Duration`,`Placement`]}))();export{m as Basic,h as Duration,g as Placement,_ as __namedExportsOrder,p as default};