import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./focus-lock-M_XV6bqW.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./collapse-C5CXVe8j.js";import{n as o,t as s}from"./use-disclosure-B4a0PX0z.js";import{r as c,t as l}from"./button-CFBNyQlD.js";import{r as u,t as d}from"./input-Dl7woXLW.js";import{n as f,t as p}from"./v-stack-DgxvBjIl.js";var m,h,g,_;function v(){return(v=e((()=>{t(),s(),c(),i(),u(),f(),m=r(),h={component:n,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=o({defaultOpen:!0});return(0,m.jsxs)(p,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(l,{onClick:t,children:`Please Click`}),(0,m.jsx)(a,{open:e,children:(0,m.jsx)(n,{children:(0,m.jsxs)(p,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(d,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(l,{alignSelf:`flex-end`,children:`Button`})]})})})]})},_=[`Basic`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onToggle
  } = useDisclosure({
    defaultOpen: true
  });
  return <VStack align="flex-start" gap="0">
      <Button onClick={onToggle}>Please Click</Button>

      <Collapse open={open}>
        <FocusLock>
          <VStack bg="bg.panel" mt="lg" p="lg" rounded="l2">
            <Input bg="bg" placeholder="This is Input" />
            <Button alignSelf="flex-end">Button</Button>
          </VStack>
        </FocusLock>
      </Collapse>
    </VStack>;
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Basic,_ as __namedExportsOrder,h as default};