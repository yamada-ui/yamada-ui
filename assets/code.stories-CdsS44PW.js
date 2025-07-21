import{t as m,u as d,j as e,C as i}from"./iframe-BbB59fLB.js";import{P as c}from"./props-table-CLQ6uJWO.js";import"./grid-W1UnxTpU.js";import"./grid-item-Dq6QrI7D.js";import"./for-JwY7aMwm.js";import"./flex-mIT1fSUh.js";import"./heading-DTYqldnT.js";const u=m({base:{alignItems:"center",display:"inline-flex",fontFamily:"mono",rounded:"l1"},variants:{outline:{layerStyle:"outline"},solid:{layerStyle:"solid"},subtle:{layerStyle:"subtle"},surface:{layerStyle:"surface"}},sizes:{xs:{fontSize:"2xs",lineHeight:"{sizes.4}",minH:"4",px:"1"},sm:{fontSize:"xs",lineHeight:"{sizes.5}",minH:"5",px:"1.5"},md:{fontSize:"sm",lineHeight:"{sizes.6}",minH:"6",px:"2"},lg:{fontSize:"sm",lineHeight:"{sizes.7}",minH:"7",px:"2.5"}},defaultProps:{size:"sm",variant:"subtle"}}),{withContext:p}=d("code",u),n=p("code")(),h={component:n,title:"Components / Code"},o=()=>e.jsx(n,{children:'console.log("Hello, Yamada!")'}),s=()=>e.jsx(c,{columns:["solid","subtle","surface","outline"],rows:i,children:(l,a,t)=>e.jsx(n,{colorScheme:a,variant:l,children:'console.log("Hello, Yamada!")'},t)}),r=()=>e.jsx(c,{columns:["xs","sm","md","lg"],rows:i,children:(l,a,t)=>e.jsx(n,{colorScheme:a,size:l,children:'console.log("Hello, Yamada!")'},t)});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...r.parameters?.docs?.source}}};const z=["Basic","Variant","Size"];export{o as Basic,r as Size,s as Variant,z as __namedExportsOrder,h as default};
