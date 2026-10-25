import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{bn as t,mn as n}from"./props-Bm02A0Xh.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./text-DXnjJUL9.js";import{n as o,r as s,t as c}from"./button-D-qzJx4d.js";import{n as l,t as u}from"./grid-BMLhKgRh.js";import{n as d,t as f}from"./for-D7nCt3i9.js";var p,m,h,g;function _(){return(_=e((()=>{p=r(),s(),d(),l(),i(),n(),m={title:`Styled System / Focus Ring`},h=()=>(0,p.jsx)(u,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,p.jsx)(o,{value:{variant:`outline`},children:(0,p.jsx)(f,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,n)=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{fontWeight:`medium`,children:t(e??`default`)}),(0,p.jsx)(c,{focusVisibleRing:e,children:`Button`})]},n)})})}),g=[`Basic`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Basic,g as __namedExportsOrder,m as default};