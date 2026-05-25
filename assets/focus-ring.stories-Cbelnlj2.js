import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Fa as n,Jd as r,Lv as i,Pa as a,Pd as o,Rf as s,if as c,qd as l,sf as u,wv as d,zf as f}from"./iframe-DT1sT_sY.js";var p,m,h,g,_;e((()=>{p=t(),o(),a(),c(),s(),d(),m=t(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(u,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(r,{value:{variant:`outline`},children:(0,m.jsx)(n,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(f,{fontWeight:`medium`,children:i(e??`default`)}),(0,m.jsx)(l,{focusVisibleRing:e,children:`Button`})]},t)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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