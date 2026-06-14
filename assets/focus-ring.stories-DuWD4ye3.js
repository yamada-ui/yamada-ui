import{i as e}from"./preload-helper-usAeo7Bx.js";import{Cv as t,Ev as n,Fa as r,Iv as i,Kd as a,Lf as o,Nd as s,Pa as c,Rf as l,of as u,qd as d,rf as f}from"./iframe-4z85howq.js";var p,m,h,g,_;e((()=>{p=n(),s(),c(),f(),o(),t(),m=n(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(u,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(d,{value:{variant:`outline`},children:(0,m.jsx)(r,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(l,{fontWeight:`medium`,children:i(e??`default`)}),(0,m.jsx)(a,{focusVisibleRing:e,children:`Button`})]},t)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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