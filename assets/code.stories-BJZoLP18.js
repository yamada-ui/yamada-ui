import{n as m,o as d,j as e,C as i}from"./iframe-Cz9Hkuf2.js";import{P as c}from"./props-table-D15QSt8u.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-6SbEfbHe.js";import"./grid-item-BacxQ6r_.js";import"./for-DDi6xP15.js";import"./flex-Br6_rt7q.js";import"./heading-JI2tTkQW.js";const u=m({base:{alignItems:"center",display:"inline-flex",fontFamily:"mono",rounded:"l1"},variants:{outline:{layerStyle:"outline"},solid:{layerStyle:"solid"},subtle:{layerStyle:"subtle"},surface:{layerStyle:"surface"}},sizes:{xs:{fontSize:"2xs",lineHeight:"{sizes.4}",minH:"4",px:"1"},sm:{fontSize:"xs",lineHeight:"{sizes.5}",minH:"5",px:"1.5"},md:{fontSize:"sm",lineHeight:"{sizes.6}",minH:"6",px:"2"},lg:{fontSize:"sm",lineHeight:"{sizes.7}",minH:"7",px:"2.5"}},defaultProps:{size:"sm",variant:"subtle"}}),{withContext:p}=d("code",u),n=p("code")(),z={component:n,title:"Components / Code"},o=()=>e.jsx(n,{children:'console.log("Hello, Yamada!")'}),s=()=>e.jsx(c,{columns:["solid","subtle","surface","outline"],rows:i,children:(l,a,t)=>e.jsx(n,{colorScheme:a,variant:l,children:'console.log("Hello, Yamada!")'},t)}),r=()=>e.jsx(c,{columns:["xs","sm","md","lg"],rows:i,children:(l,a,t)=>e.jsx(n,{colorScheme:a,size:l,children:'console.log("Hello, Yamada!")'},t)});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const b=["Basic","Variant","Size"];export{o as Basic,r as Size,s as Variant,b as __namedExportsOrder,z as default};
