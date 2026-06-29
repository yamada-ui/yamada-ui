import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t,qn as n}from"./core-DEigGAm3.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-wFqrq6bG.js";import{t as a}from"./text-hCwie9gl.js";import{d as o,f as s,t as c}from"./button-CApaI_Gh.js";import{Hd as l,Ia as u,La as d,zd as f}from"./iframe-DeULREvG.js";var p,m,h,g,_;e((()=>{p=r(),c(),u(),f(),a(),t(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(l,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(s,{value:{variant:`outline`},children:(0,m.jsx)(d,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(i,{fontWeight:`medium`,children:n(e??`default`)}),(0,m.jsx)(o,{focusVisibleRing:e,children:`Button`})]},t)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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