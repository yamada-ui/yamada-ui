import{n as e}from"./chunk-jRWAZmH_.js";import{Z as t,yn as n}from"./core-C7NnSGLR.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{t as i}from"./text-DSMMc5B6.js";import{t as a}from"./text-BM4F8FHS.js";import{r as o}from"./grid-item-DDwW3cLH.js";import{t as s}from"./grid--uOXgUdY.js";import{l as c,t as l,u}from"./button-C66K-mOB.js";import{Ur as d,Wr as f}from"./iframe-C9L3rImY.js";var p,m,h,g,_;e((()=>{p=r(),l(),d(),s(),a(),t(),m=r(),h={title:`Styled System / Focus Ring`},g=()=>(0,m.jsx)(o,{alignItems:`center`,gap:`md`,templateColumns:`auto auto`,children:(0,m.jsx)(u,{value:{variant:`outline`},children:(0,m.jsx)(f,{each:[void 0,`outline`,`inline`,`mixed`,`outside`,`inside`,`none`],children:(e,t)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(i,{fontWeight:`medium`,children:n(e??`default`)}),(0,m.jsx)(c,{focusVisibleRing:e,children:`Button`})]},t)})})}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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