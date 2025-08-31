import{j as t,T as i,F as r}from"./iframe-COpE3uSe.js";import{G as s}from"./grid-C-W568Cz.js";import{a,B as u}from"./button-C1iRx7Aw.js";import{F as m}from"./for-DdiNkdzb.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";const h={title:"Styled System / Focus Ring"},e=()=>t.jsx(s,{alignItems:"center",gap:"md",templateColumns:"auto auto",children:t.jsx(a,{value:{variant:"outline"},children:t.jsx(m,{each:[void 0,"outline","inline","mixed","outside","inside","none"],children:(n,o)=>t.jsxs(t.Fragment,{children:[t.jsx(i,{fontWeight:"medium",children:r(n??"default")}),t.jsx(u,{focusVisibleRing:n,children:"Button"})]},o)})})});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const F=["Basic"];export{e as Basic,F as __namedExportsOrder,h as default};
