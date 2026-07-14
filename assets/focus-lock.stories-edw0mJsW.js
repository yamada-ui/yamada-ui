import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./collapse-Cy09dx7M.js";import{a as r,t as i}from"./use-disclosure-PiwzIGBZ.js";import{d as a,t as o}from"./button-l6oxNBMW.js";import{Eu as s,Tn as c,cf as l,ns as u,ts as d,wn as f,yu as p}from"./iframe-CUT_NmNE.js";var m,h,g,_;e((()=>{d(),i(),o(),l(),p(),f(),m=t(),h={component:u,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=r({defaultOpen:!0});return(0,m.jsxs)(c,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(a,{onClick:t,children:`Please Click`}),(0,m.jsx)(n,{open:e,children:(0,m.jsx)(u,{children:(0,m.jsxs)(c,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(s,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(a,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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