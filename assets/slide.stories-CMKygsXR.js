import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Du as n,Eu as r,Fo as i,Gi as a,Io as o,Ut as s,Wi as c,jl as l,pp as u,xl as d}from"./iframe-xN-XyuUR.js";var f,p,m,h,g,_;e((()=>{i(),d(),t(),r(),a(),f=u(),p={component:c,title:`Components / Slide`},m=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{open:e,placement:`block-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},h=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},g=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(c,{open:e,placement:`inline-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(n,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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