import{n as e}from"./chunk-zsgVPwQN.js";import{Bt as t,Ea as n,El as r,Iu as i,Lt as a,Mu as o,Ta as s,_c as c,_d as l,gl as u,pc as d,sm as f,vd as p}from"./iframe-CXDvaz-K.js";var m,h,g,_;e((()=>{s(),o(),u(),l(),d(),a(),m=f(),h={component:n,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:a}=i({defaultOpen:!0});return(0,m.jsxs)(t,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(r,{onClick:a,children:`Please Click`}),(0,m.jsx)(p,{open:e,children:(0,m.jsx)(n,{children:(0,m.jsxs)(t,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(c,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(r,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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