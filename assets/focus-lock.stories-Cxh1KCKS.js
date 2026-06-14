import{i as e}from"./preload-helper-usAeo7Bx.js";import{Eu as t,Ev as n,Kd as r,Nd as i,Sn as a,Tn as o,Xo as s,Yo as c,mp as l,nm as u,rm as d,vp as f,yu as p}from"./iframe-4z85howq.js";var m,h,g,_;e((()=>{c(),l(),i(),u(),p(),a(),m=n(),h={component:s,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:n}=f({defaultOpen:!0});return(0,m.jsxs)(o,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(r,{onClick:n,children:`Please Click`}),(0,m.jsx)(d,{open:e,children:(0,m.jsx)(s,{children:(0,m.jsxs)(o,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(t,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(r,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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