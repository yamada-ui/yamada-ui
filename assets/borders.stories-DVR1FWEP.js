import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./borders-BwXpG37r.js";import{n as a,t as o}from"./text-Dqlf99YJ.js";import{n as s,t as c}from"./box-C85ajMHC.js";import{i as l,r as u,t as d}from"./container-ZTgWYDQH.js";import{n as f,t as p}from"./for-CbSj9DmS.js";import{n as m,t as h}from"./heading-DFJsy6_R.js";var g,_,v,y,b;function x(){return(x=e((()=>{g=t(),s(),l(),f(),m(),a(),r(),_=n(),v={title:`Theme / Tokens`},y=()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h,{children:`Borders`}),(0,_.jsx)(u,{children:(0,_.jsx)(d,{alignItems:`center`,display:`grid`,gap:`lg`,gridTemplateColumns:`auto auto 1fr`,children:(0,_.jsx)(p,{each:Object.entries(i),children:([e,t],n)=>(0,_.jsxs)(g.Fragment,{children:[(0,_.jsx)(o,{children:e}),(0,_.jsx)(o,{color:`fg.muted`,children:t}),(0,_.jsx)(c,{borderTop:e})]},n)})})})]}),b=[`Borders`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Borders</Heading>

      <Container.Root>
        <Container.Body alignItems="center" display="grid" gap="lg" gridTemplateColumns="auto auto 1fr">
          <For each={Object.entries(borders)}>
            {([token, value], index) => <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box borderTop={token} />
              </Fragment>}
          </For>
        </Container.Body>
      </Container.Root>
    </>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Borders,b as __namedExportsOrder,v as default};