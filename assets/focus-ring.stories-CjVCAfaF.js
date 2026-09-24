import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t,qn as n}from"./core-zvV4jsAK.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{t as i}from"./text-BEzF8HZR.js";import{t as a}from"./text-D8nbdgH0.js";import{d as o,f as s,t as c}from"./button-iNTRPcIY.js";import{Fa as l,Ia as u,Ld as d,Pd as f}from"./iframe-JqStoggy.js";var p,m,h,g,_;e((()=>{p=r(),c(),l(),f(),a(),t(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(d,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(s,{value:{variant:`outline`},children:(0,m.jsx)(u,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(i,{fontWeight:`medium`,children:n(e??`default`)}),(0,m.jsx)(o,{focusVisibleRing:e,children:`Button`})]},t)})})}),_=[`Basic`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}}))();export{g as Basic,_ as __namedExportsOrder,h as default};