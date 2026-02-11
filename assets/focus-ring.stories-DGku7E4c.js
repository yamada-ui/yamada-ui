import{j as e,aN as a,T as u,P as d,Q as l}from"./iframe-FV6Pf4zG.js";import{G as m}from"./grid-CSiCDg7_.js";import{F as c}from"./for-v94cQqt1.js";import"./preload-helper-C1FmrZbK.js";const h={title:"Styled System / Focus Ring"},t=()=>e.jsx(m,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:e.jsx(a,{value:{variant:"outline"},children:e.jsx(c,{each:[void 0,"outline","inline","mixed","outside","inside","none"],children:(n,r)=>e.jsxs(e.Fragment,{children:[e.jsx(u,{fontWeight:"medium",children:d(n??"default")}),e.jsx(l,{focusVisibleRing:n,children:"Button"})]},r)})})});var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const B=["Basic"];export{t as Basic,B as __namedExportsOrder,h as default};
