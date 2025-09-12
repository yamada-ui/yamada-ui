import{j as t,T as i,J as r}from"./iframe-Bn8cMbTR.js";import{G as s}from"./grid-DGlXmtIK.js";import{a,B as u}from"./button-BuVkzRhm.js";import{F as m}from"./for-DbXOaV0m.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";const h={title:"Styled System / Focus Ring"},e=()=>t.jsx(s,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(a,{value:{variant:"outline"},children:t.jsx(m,{each:[void 0,"outline","inline","mixed","outside","inside","none"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:r(n??"default")}),t.jsx(u,{focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const j=["Basic"];export{e as Basic,j as __namedExportsOrder,h as default};
