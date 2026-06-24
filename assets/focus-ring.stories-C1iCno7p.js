import{i as e}from"./preload-helper-usAeo7Bx.js";import{Gn as t,dt as n}from"./core-DkLkzQLq.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./text-ClYKebxE.js";import{t as a}from"./text-B2Y0ht7H.js";import{r as o}from"./grid-item-Cmr2Zh1K.js";import{d as s,f as c,t as l}from"./button-Dd3r5aCq.js";import{Ad as u,Ma as d,Na as f}from"./iframe-QFtltEr1.js";var p,m,h,g,_;e((()=>{p=r(),l(),d(),u(),a(),n(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(o,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(c,{value:{variant:`outline`},children:(0,m.jsx)(f,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,n)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(i,{fontWeight:`medium`,children:t(e??`default`)}),(0,m.jsx)(s,{focusVisibleRing:e,children:`Button`})]},n)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Grid alignItems="center" gap="md" templateColumns="auto auto">
      <ButtonPropsContext value={{
      variant: "outline"
    }}>
        <For each={[undefined, "outline", "inline", "mixed", "outside", "inside", "none"] as const}>
          {(value, index) => <Fragment key={index}>
              <Text fontWeight="medium">{toTitleCase(value ?? "default")}</Text>

              <Button focusVisibleRing={value}>Button</Button>
            </Fragment>}
        </For>
      </ButtonPropsContext>
    </Grid>;
}`,...g.parameters?.docs?.source}}},_=[`Basic`]}))();export{g as Basic,_ as __namedExportsOrder,h as default};