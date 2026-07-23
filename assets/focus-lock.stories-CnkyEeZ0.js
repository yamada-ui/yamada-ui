import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{t as n}from"./collapse-CMGd1c3I.js";import{a as r,t as i}from"./use-disclosure-DjpogCJK.js";import{d as a,t as o}from"./button-CqpQ8yWo.js";import{Cn as s,Tu as c,es as l,sf as u,ts as d,vu as f,wn as p}from"./iframe-1VXrorm8.js";var m,h,g,_;e((()=>{l(),i(),o(),u(),f(),s(),m=t(),h={component:d,parameters:{layout:`centered`},title:`Components / FocusLock`},g=()=>{let{open:e,onToggle:t}=r({defaultOpen:!0});return(0,m.jsxs)(p,{align:`flex-start`,gap:`0`,children:[(0,m.jsx)(a,{onClick:t,children:`Please Click`}),(0,m.jsx)(n,{open:e,children:(0,m.jsx)(d,{children:(0,m.jsxs)(p,{bg:`bg.panel`,mt:`lg`,p:`lg`,rounded:`l2`,children:[(0,m.jsx)(c,{bg:`bg`,placeholder:`This is Input`}),(0,m.jsx)(a,{alignSelf:`flex-end`,children:`Button`})]})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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