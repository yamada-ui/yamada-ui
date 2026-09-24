import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./text-b2W5euYI.js";import{r as i,t as a}from"./button-CFBNyQlD.js";import{n as o,t as s}from"./use-boolean-DS6wYhWQ.js";import{n as c,t as l}from"./slide-DpBNvqd9.js";import{n as u,t as d}from"./v-stack-DgxvBjIl.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{s(),i(),u(),n(),c(),f=t(),p={component:l,title:`Components / Slide`},m=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(l,{open:e,placement:`block-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(r,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},h=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(l,{duration:.7,open:e,placement:`block-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,p:`md`,w:`full`,children:[(0,f.jsx)(r,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},g=()=>{let[e,{toggle:t}]=o();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{onClick:t,children:`Please Click`}),(0,f.jsx)(l,{open:e,placement:`inline-end`,children:(0,f.jsxs)(d,{bg:`bg.panel`,h:`full`,p:`md`,children:[(0,f.jsx)(r,{color:`bg.contrast`,children:`クリリンのことか……クリリンのことかーーーっ！！！！！`}),(0,f.jsx)(a,{alignSelf:`flex-end`,onClick:t,children:`Close`})]})})]})},_=[`Basic`,`Duration`,`Placement`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Basic,h as Duration,g as Placement,_ as __namedExportsOrder,p as default};