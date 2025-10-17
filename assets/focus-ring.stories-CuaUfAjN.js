import{j as e,aO as i,T as s,R as r,S as a}from"./iframe-BynoZ0Oq.js";import{G as u}from"./grid-MdBZoBbZ.js";import{F as d}from"./for-BimcTw3e.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Styled System / Focus Ring"},t=()=>e.jsx(u,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:e.jsx(i,{value:{variant:"outline"},children:e.jsx(d,{each:[void 0,"outline","inline","mixed","outside","inside","none"],children:(n,o)=>e.jsxs(e.Fragment,{children:[e.jsx(s,{fontWeight:"medium",children:r(n??"default")}),e.jsx(a,{focusVisibleRing:n,children:"Button"})]},o)})})});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const g=["Basic"];export{t as Basic,g as __namedExportsOrder,p as default};
