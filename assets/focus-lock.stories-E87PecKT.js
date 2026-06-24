import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-O9QVJvLM.js";import{t as n}from"./collapse-H7fVfg8s.js";import{a as r,t as i}from"./use-disclosure-JhzQXZBp.js";import{d as a,t as o}from"./button-Dd3r5aCq.js";import{Jo as s,Sn as c,Tn as l,Yd as u,bu as d,pu as f,qo as p}from"./iframe-QFtltEr1.js";var m,h,g,_;e((()=>{p(),i(),o(),u(),f(),c(),m=t(),h={component:s,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=r({defaultOpen:!0});return(0,m.jsxs)(l,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(a,{onClick:t,children:`Please Click`}),(0,m.jsx)(n,{open:e,children:(0,m.jsx)(s,{children:(0,m.jsxs)(l,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(d,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(a,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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