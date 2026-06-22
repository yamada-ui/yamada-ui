import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Fo as n,Io as r,Pd as i,Rf as a,Sn as o,Tn as s,el as c,qd as l,tl as u,zf as d}from"./iframe-9OFoenoS.js";var f,p,m,h,g,_;e((()=>{c(),i(),o(),a(),r(),f=t(),p={component:n,title:`Components / Slide`},m=()=>{let[e,{toggle:t}]=u();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(n,{open:e,placement:`block-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(d,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},h=()=>{let[e,{toggle:t}]=u();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(n,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(d,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},g=()=>{let[e,{toggle:t}]=u();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onClick:t,children:`Please Click`}),(0,f.jsx)(n,{open:e,placement:`inline-end`,children:(0,f.jsxs)(s,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(d,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(l,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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