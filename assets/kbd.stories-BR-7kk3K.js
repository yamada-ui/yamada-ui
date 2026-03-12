import{j as r,T as i,C as T}from"./iframe-qjGiUz6b.js";import{P as K}from"./props-table-695isBmC.js";import{K as e}from"./kbd-BBuHyQ6U.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CZYREmgE.js";import"./grid-item-DMIxSy19.js";import"./for-BvpQiPtL.js";import"./flex-BMAQi8a8.js";import"./heading-CexfIZlJ.js";const P={component:e,title:"Components / Kbd"},s=()=>r.jsxs(i,{children:[r.jsx(e,{children:"Shift"})," + ",r.jsx(e,{children:"Tab"})]}),t=()=>r.jsx(K,{columns:["solid","subtle","surface","outline"],rows:T,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,variant:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,variant:o,children:"Tab"})]},c)}),a=()=>r.jsx(K,{columns:["sm","md","lg"],rows:T,children:(o,n,c)=>r.jsxs(i,{children:[r.jsx(e,{colorScheme:n,size:o,children:"Shift"})," ","+"," ",r.jsx(e,{colorScheme:n,size:o,children:"Tab"})]},c)});var m,l,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Text>
      <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd>
    </Text>;
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} variant={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} variant={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,S,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Text key={key}>
            <Kbd colorScheme={row} size={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} size={column}>
              Tab
            </Kbd>
          </Text>;
    }}
    </PropsTable>;
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const g=["Basic","Variant","Size"];export{s as Basic,a as Size,t as Variant,g as __namedExportsOrder,P as default};
