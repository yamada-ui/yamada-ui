import{p as H,q as f,j as e,C as y}from"./iframe-LqombrNM.js";import{P as g}from"./props-table-P2PnH6mP.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./for-CkWl_ugB.js";import"./flex-ksADg7SB.js";import"./heading-Bq_Y6181.js";const h=H({base:{alignItems:"center",display:"inline-flex",fontFamily:"mono",rounded:"l1"},variants:{outline:{layerStyle:"outline"},solid:{layerStyle:"solid"},subtle:{layerStyle:"subtle"},surface:{layerStyle:"surface"}},sizes:{xs:{fontSize:"2xs",lineHeight:"{sizes.4}",minH:"4",px:"1"},sm:{fontSize:"xs",lineHeight:"{sizes.5}",minH:"5",px:"1.5"},md:{fontSize:"sm",lineHeight:"{sizes.6}",minH:"6",px:"2"},lg:{fontSize:"sm",lineHeight:"{sizes.7}",minH:"7",px:"2.5"}},defaultProps:{size:"sm",variant:"subtle"}}),{withContext:z}=f("code",h),n=z("code")(),T={component:n,title:"Components / Code"},o=()=>e.jsx(n,{children:'console.log("Hello, Yamada!")'}),s=()=>e.jsx(g,{columns:["solid","subtle","surface","outline"],rows:y,children:(l,a,t)=>e.jsx(n,{colorScheme:a,variant:l,children:'console.log("Hello, Yamada!")'},t)}),r=()=>e.jsx(g,{columns:["xs","sm","md","lg"],rows:y,children:(l,a,t)=>e.jsx(n,{colorScheme:a,size:l,children:'console.log("Hello, Yamada!")'},t)});var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var S,x,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>;
    }}
    </PropsTable>;
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const _=["Basic","Variant","Size"];export{o as Basic,r as Size,s as Variant,_ as __namedExportsOrder,T as default};
