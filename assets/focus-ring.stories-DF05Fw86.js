import{j as t,T as i,H as s,a}from"./iframe-B58gGoPv.js";import{G as r}from"./grid-BkobzWyq.js";import{a as u,B as d}from"./button-ByKXnJ56.js";import{F as l}from"./for-Bky_3Tl1.js";import"./use-ripple-mP-I-Ewm.js";import"./rings-Dx-JdLv3.js";const B={title:"Styled System / Focus Ring"},e=()=>t.jsx(r,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(u,{value:{variant:"outline"},children:t.jsx(l,{each:[void 0,"outline","inline","mixed","outside","inside"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:s(n??"default")}),t.jsx(d,{"data-focus-visible":a(n),focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
