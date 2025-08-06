import{j as t,T as i,H as s,a}from"./iframe-BVYXOt_x.js";import{G as r}from"./grid-9LY9Mmql.js";import{a as u,B as d}from"./button-DhYNg7P2.js";import{F as m}from"./for-Cq1AI6gw.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";const h={title:"Styled System / Focus Ring"},e=()=>t.jsx(r,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(u,{value:{variant:"outline"},children:t.jsx(m,{each:[void 0,"outline","inline","mixed","outside","inside"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:s(n??"default")}),t.jsx(d,{"data-focus-visible":a(n),focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
