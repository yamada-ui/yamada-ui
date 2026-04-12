import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Lt as n,fa as r,im as i,is as a,iu as o,ml as s,pa as c,rs as l,ru as u,wl as d}from"./iframe-DSqJiJ7B.js";var f,p,m,h,g,_;e((()=>{l(),s(),n(),u(),c(),f=i(),p={component:r,title:`Components / Slide`},m=()=>{let[e,{toggle:n}]=a();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{onClick:n,children:`Please Click`}),(0,f.jsx)(r,{open:e,placement:`block-end`,children:(0,f.jsxs)(t,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(o,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(d,{alignSelf:`flex-end`,onClick:n,children:`Close`})]})})]})},h=()=>{let[e,{toggle:n}]=a();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{onClick:n,children:`Please Click`}),(0,f.jsx)(r,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(t,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(o,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(d,{alignSelf:`flex-end`,onClick:n,children:`Close`})]})})]})},g=()=>{let[e,{toggle:n}]=a();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{onClick:n,children:`Please Click`}),(0,f.jsx)(r,{open:e,placement:`inline-end`,children:(0,f.jsxs)(t,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(o,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(d,{alignSelf:`flex-end`,onClick:n,children:`Close`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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