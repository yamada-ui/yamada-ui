import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./collapse-CHVGLOox.js";import{a as r,i}from"./portal-D80ZEDnJ.js";import{a,t as o}from"./use-disclosure-C9puNh-L.js";import{d as s,t as c}from"./button-Cl_AOAPw.js";import{Cn as l,Su as u,hu as d,if as f,wn as p}from"./iframe-C6t-T95A.js";var m,h,g,_;e((()=>{i(),o(),c(),f(),d(),l(),m=t(),h={component:r,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=a({defaultOpen:!0});return(0,m.jsxs)(p,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(s,{onClick:t,children:`Please Click`}),(0,m.jsx)(n,{open:e,children:(0,m.jsx)(r,{children:(0,m.jsxs)(p,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(u,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(s,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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