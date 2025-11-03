import{j as e,C as g}from"./iframe-D0k82VKj.js";import{P as S}from"./props-table-CTaVRFRo.js";import{I as r}from"./indicator-Nlu4sOyy.js";import{W as w}from"./wrap-CSHnAtYr.js";import{a}from"./avatar-C6Wk6wgu.js";import{G as x}from"./grid-W2jtEO_S.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-item-BEXtmAs-.js";import"./for-VxQ1P6BR.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./float-BgVeg84i.js";const E={component:r,title:"Components / Indicator"},s=()=>e.jsxs(w,{gap:"lg",children:[e.jsx(r,{colorScheme:"blue",label:"New",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430"})}),e.jsx(r,{colorScheme:"blue",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})})]}),c=()=>e.jsx(S,{columns:["solid","subtle","surface"],rows:g,children:(t,o,n)=>e.jsx(r,{colorScheme:o,variant:t,label:"New",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},n)}),m=()=>e.jsx(S,{columns:["sm","md","lg"],rows:g,children:(t,o,n)=>e.jsx(r,{colorScheme:o,size:t,label:"New",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},n)}),u=()=>{const t=["start-start","start-center","start-end","center-start","center-center","center-end","end-start","end-center","end-end"];return e.jsx(x,{gap:"lg",p:"lg",templateColumns:"repeat(3, 1fr)",children:t.map(o=>e.jsx(r,{colorScheme:"blue",label:"New",placement:o,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},o))})},l=()=>e.jsx(r,{colorScheme:"blue",offset:"1.5",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),d=()=>e.jsx(r,{colorScheme:"blue",label:100,overflowCount:99,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),i=()=>e.jsxs(w,{gap:"lg",children:[e.jsx(r,{colorScheme:"blue",label:0,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),e.jsx(r,{colorScheme:"blue",label:0,showZero:!1,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})})]}),p=()=>e.jsx(r,{colorScheme:"blue",label:99,withBorder:!0,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),h=()=>e.jsx(r,{disabled:!0,label:"New",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),b=()=>e.jsx(r,{colorScheme:"blue",inline:!0,label:"New",children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{columns:["solid","subtle","surface"],rows:g,children:(t,o,n)=>e.jsx(r,{colorScheme:o,variant:t,label:"New",ping:{scale:1.4},children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},n)}),e.jsx(S,{columns:["solid","subtle","surface"],rows:g,children:(t,o,n)=>e.jsx(r,{colorScheme:o,variant:t,ping:!0,children:e.jsx(a,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},n)})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="lg">
      <Indicator colorScheme="blue" label="New">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430" />
      </Indicator>

      <Indicator colorScheme="blue">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>
    </Wrap>;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Indicator key={key} colorScheme={row} variant={column} label="New">
            <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
          </Indicator>;
    }}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Indicator key={key} colorScheme={row} size={column} label="New">
            <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
          </Indicator>;
    }}
    </PropsTable>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <Indicator key={placement} colorScheme="blue" label="New" placement={placement}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
        </Indicator>)}
    </Grid>;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" offset="1.5">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="lg">
      <Indicator colorScheme="blue" label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>

      <Indicator colorScheme="blue" label={0} showZero={false}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>
    </Wrap>;
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" label={99} withBorder>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Indicator disabled label="New">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" inline label="New">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <>
      <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Indicator key={key} colorScheme={row} variant={column} label="New" ping={{
          scale: 1.4
        }}>
              <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
            </Indicator>;
      }}
      </PropsTable>

      <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
        return <Indicator key={key} colorScheme={row} variant={column} ping>
              <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
            </Indicator>;
      }}
      </PropsTable>
    </>;
}`,...v.parameters?.docs?.source}}};const T=["Basic","Variant","Size","Placement","Offset","OverflowCount","ShowZero","Border","Disabled","InlineBlock","Ping"];export{s as Basic,p as Border,h as Disabled,b as InlineBlock,l as Offset,d as OverflowCount,v as Ping,u as Placement,i as ShowZero,m as Size,c as Variant,T as __namedExportsOrder,E as default};
