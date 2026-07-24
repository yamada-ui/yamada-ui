import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t,qn as n}from"./core-CwFz10Qm.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-CWhjq_ZM.js";import{t as a}from"./text-PitPK9Eo.js";import{d as o,f as s,t as c}from"./button-B74B6_fk.js";import{Fa as l,Ia as u,Rd as d,Vd as f}from"./iframe-DTxndMIb.js";var p,m,h,g,_;e((()=>{p=r(),c(),l(),d(),a(),t(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(f,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(s,{value:{variant:`outline`},children:(0,m.jsx)(u,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(i,{fontWeight:`medium`,children:n(e??`default`)}),(0,m.jsx)(o,{focusVisibleRing:e,children:`Button`})]},t)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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