import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{t as n}from"./collapse-BirhK_Jh.js";import{t as r}from"./collapse-BJGg2lwR.js";import{a as i,t as a}from"./use-disclosure-VgCs83Z7.js";import{a as o,t as s}from"./input-CBKgz9Si.js";import{l as c,t as l}from"./button-cUo5BdzA.js";import{n as u,t as d}from"./focus-lock-CukU833o.js";import{r as f}from"./z-stack-DkWkuVbN.js";import{Dt as p}from"./iframe-CntDfobC.js";var m,h,g,_;e((()=>{d(),a(),l(),r(),s(),p(),m=t(),h={component:u,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=i({defaultOpen:!0});return(0,m.jsxs)(f,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(c,{onClick:t,children:`Please Click`}),(0,m.jsx)(n,{open:e,children:(0,m.jsx)(u,{children:(0,m.jsxs)(f,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(o,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(c,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`Basic`]}))();export{g as Basic,_ as __namedExportsOrder,h as default};