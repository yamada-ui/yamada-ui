import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{_n as t,dn as n}from"./props-Bz1FL_va.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,t as a}from"./text-b2W5euYI.js";import{n as o,r as s,t as c}from"./button-CFBNyQlD.js";import{n as l,t as u}from"./grid-DAC5TR2S.js";import{n as d,t as f}from"./for-BIl9Q3L3.js";var p,m,h,g,_;function v(){return(v=e((()=>{p=r(),s(),d(),l(),i(),n(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(u,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(o,{value:{variant:`outline`},children:(0,m.jsx)(f,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,n)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(a,{fontWeight:`medium`,children:t(e??`default`)}),(0,m.jsx)(c,{focusVisibleRing:e,children:`Button`})]},n)})})}),_=[`Basic`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Basic,_ as __namedExportsOrder,h as default};