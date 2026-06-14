import{i as e}from"./preload-helper-usAeo7Bx.js";import{$c as t,Ev as n,Fo as r,Io as i,Kd as a,Lf as o,Nd as s,Rf as c,Sn as l,Tn as u,el as d}from"./iframe-4z85howq.js";var f,p,m,h,g,_;e((()=>{t(),s(),l(),o(),i(),f=n(),p={component:r,title:`Components / Slide`},m=()=>{let[e,{toggle:t}]=d();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(r,{open:e,placement:`block-end`,children:(0,f.jsxs)(u,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(c,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},h=()=>{let[e,{toggle:t}]=d();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(r,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(u,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(c,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},g=()=>{let[e,{toggle:t}]=d();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(r,{open:e,placement:`inline-end`,children:(0,f.jsxs)(u,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(c,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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