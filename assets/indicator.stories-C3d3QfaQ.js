import{d as N,f as O,r as P,j as e,s as H,R as E,a as B,ax as T,C as w}from"./iframe-CDTQ5ROD.js";import{P as j}from"./props-table-B8uhL38C.js";import{F as _}from"./float-CeJcU5i7.js";import{W as Y}from"./wrap-DMlLu_h9.js";import{a as n}from"./avatar-Sdff0Kjf.js";import{G as F}from"./grid-CIpCdlsO.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-item-C-cNoi2G.js";import"./for-B3jOju7X.js";import"./flex-BrTFS1Ax.js";import"./heading-dqd1jbYP.js";import"./createLucideIcon-D7lzYFmP.js";const W=N({base:{float:{zIndex:"yamcha"},label:{alignItems:"center",display:"inline-flex",rounded:"full",verticalAlign:"middle",whiteSpace:"nowrap",_numeric:{fontWeight:"medium"}},root:{position:"relative"}},props:{inline:{false:{root:{display:"block"}},true:{root:{display:"inline-block"}}},ping:{true:{label:{_before:{animationDuration:"{duration, 1.4s}",animationFillMode:"forwards",animationIterationCount:"{iteration-count, infinite}",animationName:"ping",animationTimingFunction:"{timing-function, cubic-bezier(0, 0, 0.2, 1)}",bg:"{ping-color}",boxSize:"100%",inset:"0",opacity:.7,position:"absolute",rounded:"full",zIndex:-1}},root:{"--animation-scale":"1.8"}}},withBorder:{true:{label:{borderColor:["white","black"],borderWidth:"0.2em"}}}},variants:{solid:{label:{layerStyle:"solid","--ping-color":"colorScheme.outline"}},subtle:{label:{layerStyle:"subtle","--ping-color":"colorScheme.outline"}},surface:{label:{layerStyle:"surface","--ping-color":"colorScheme.outline"}}},sizes:{sm:{label:{fontSize:"xs",minBoxSize:"3",px:"1.5"}},md:{label:{fontSize:"sm",minBoxSize:"4",px:"2"}},lg:{label:{fontSize:"md",minBoxSize:"5",px:"2.5"}}},defaultProps:{size:"sm",variant:"solid",ping:!1}}),{withContext:y,withProvider:L}=O("indicator",W),t=L(({children:o,disabled:r,label:a,offset:c,overflowCount:s=99,placement:I,showZero:i=!0,floatProps:C,labelProps:k,...A})=>{const l=E(a);r??=l&&!i&&a<=0;const z=P.useMemo(()=>l&&a>s?e.jsxs(e.Fragment,{children:[s,e.jsx(H.span,{children:"+"})]}):a,[l,a,s]);return e.jsxs(H.div,{...A,children:[o,r?null:e.jsx(M,{offset:c,placement:I,...C,children:e.jsx(R,{"data-numeric":B(l),...k,children:z})})]})},"root")(({ping:o,...r})=>{if(T(o)){const{color:a,duration:c,iterationCount:s,scale:I,timingFunction:i}=o;return{...r,"--animation-scale":I,"--duration":c?`durations.${c}`:void 0,"--iteration-count":s,"--ping-color":a?`colors.${a}`:void 0,"--timing-function":i?`easings.${i}`:void 0,ping:!0}}else return{...r,ping:o}}),M=y(_,"float")(),R=y("span","label")(),re={component:t,title:"Components / Indicator"},m=()=>e.jsxs(Y,{gap:"lg",children:[e.jsx(t,{colorScheme:"blue",label:"New",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430"})}),e.jsx(t,{colorScheme:"blue",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})})]}),u=()=>e.jsx(j,{columns:["solid","subtle","surface"],rows:w,children:(o,r,a)=>e.jsx(t,{colorScheme:r,variant:o,label:"New",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},a)}),d=()=>e.jsx(j,{columns:["sm","md","lg"],rows:w,children:(o,r,a)=>e.jsx(t,{colorScheme:r,size:o,label:"New",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},a)}),p=()=>{const o=["start-start","start-center","start-end","center-start","center-center","center-end","end-start","end-center","end-end"];return e.jsx(F,{gap:"lg",p:"lg",templateColumns:"repeat(3, 1fr)",children:o.map(r=>e.jsx(t,{colorScheme:"blue",label:"New",placement:r,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},r))})},h=()=>e.jsx(t,{colorScheme:"blue",offset:"1.5",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),b=()=>e.jsx(t,{colorScheme:"blue",label:100,overflowCount:99,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),v=()=>e.jsxs(Y,{gap:"lg",children:[e.jsx(t,{colorScheme:"blue",label:0,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),e.jsx(t,{colorScheme:"blue",label:0,showZero:!1,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})})]}),g=()=>e.jsx(t,{colorScheme:"blue",label:99,withBorder:!0,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),S=()=>e.jsx(t,{disabled:!0,label:"New",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),x=()=>e.jsx(t,{colorScheme:"blue",inline:!0,label:"New",children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{columns:["solid","subtle","surface"],rows:w,children:(o,r,a)=>e.jsx(t,{colorScheme:r,variant:o,label:"New",ping:{scale:1.4},children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},a)}),e.jsx(j,{columns:["solid","subtle","surface"],rows:w,children:(o,r,a)=>e.jsx(t,{colorScheme:r,variant:o,ping:!0,children:e.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",shape:"rounded"})},a)})]});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="lg">
      <Indicator colorScheme="blue" label="New">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430" />
      </Indicator>

      <Indicator colorScheme="blue">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>
    </Wrap>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Indicator key={key} colorScheme={row} variant={column} label="New">
            <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
          </Indicator>;
    }}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Indicator key={key} colorScheme={row} size={column} label="New">
            <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
          </Indicator>;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <Indicator key={placement} colorScheme="blue" label="New" placement={placement}>
          <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
        </Indicator>)}
    </Grid>;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" offset="1.5">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="lg">
      <Indicator colorScheme="blue" label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>

      <Indicator colorScheme="blue" label={0} showZero={false}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
      </Indicator>
    </Wrap>;
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" label={99} withBorder>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Indicator disabled label="New">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Indicator colorScheme="blue" inline label="New">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" shape="rounded" />
    </Indicator>;
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};const ae=["Basic","Variant","Size","Placement","Offset","OverflowCount","ShowZero","Border","Disabled","InlineBlock","Ping"];export{m as Basic,g as Border,S as Disabled,x as InlineBlock,h as Offset,b as OverflowCount,f as Ping,p as Placement,v as ShowZero,d as Size,u as Variant,ae as __namedExportsOrder,re as default};
