import{j as t,T as i,G as s,a}from"./iframe-BbB59fLB.js";import{G as r}from"./grid-W1UnxTpU.js";import{a as u,B as d}from"./button-C7yiHaiH.js";import{F as l}from"./for-JwY7aMwm.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";const B={title:"Styled System / Focus Ring"},e=()=>t.jsx(r,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(u,{value:{variant:"outline"},children:t.jsx(l,{each:[void 0,"outline","inline","mixed","outside","inside"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:s(n??"default")}),t.jsx(d,{"data-focus-visible":a(n),focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const h=["Basic"];export{e as Basic,h as __namedExportsOrder,B as default};
