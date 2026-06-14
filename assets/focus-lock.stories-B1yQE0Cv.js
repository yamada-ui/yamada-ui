import{i as e}from"./preload-helper-usAeo7Bx.js";import{Du as t,Dv as n,Pd as r,Sn as i,Tn as a,Xo as o,Yo as s,bu as c,hp as l,im as u,qd as d,rm as f,yp as p}from"./iframe-DC0_9n1N.js";var m,h,g,_;e((()=>{s(),l(),r(),f(),c(),i(),m=n(),h={component:o,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:n}=p({defaultOpen:!0});return(0,m.jsxs)(a,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(d,{onClick:n,children:`Please Click`}),(0,m.jsx)(u,{open:e,children:(0,m.jsx)(o,{children:(0,m.jsxs)(a,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(t,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(d,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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