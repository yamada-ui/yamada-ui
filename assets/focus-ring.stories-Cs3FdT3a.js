import{j as t,T as i,F as s,a}from"./iframe-Cz9Hkuf2.js";import{G as r}from"./grid-6SbEfbHe.js";import{a as u,B as d}from"./button-D91gE1vK.js";import{F as m}from"./for-DDi6xP15.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-BqwrQuB9.js";import"./rings-DpK90kMJ.js";const h={title:"Styled System / Focus Ring"},e=()=>t.jsx(r,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(u,{value:{variant:"outline"},children:t.jsx(m,{each:[void 0,"outline","inline","mixed","outside","inside"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:s(n??"default")}),t.jsx(d,{"data-focus-visible":a(n),focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <Grid alignItems="center" gap="md" templateColumns="auto auto">
      <ButtonPropsContext value={{
      variant: "outline"
    }}>
        <For each={[undefined, "outline", "inline", "mixed", "outside", "inside"] as const}>
          {(value, index) => <Fragment key={index}>
              <Text fontWeight="medium">{toTitleCase(value ?? "default")}</Text>

              <Button data-focus-visible={dataAttr(value)} focusVisibleRing={value}>
                Button
              </Button>
            </Fragment>}
        </For>
      </ButtonPropsContext>
    </Grid>;
}`,...e.parameters?.docs?.source}}};const v=["Basic"];export{e as Basic,v as __namedExportsOrder,h as default};
