import{U as R,K as C,r as k,j as r,s as _,C as S}from"./iframe-Dp_HdYH_.js";import{P as b}from"./props-table-DR2D3jHB.js";import{c as F,u as z,A as E,a as n}from"./avatar-DqJfjDa4.js";import{W as G}from"./wrap-BSeFDaXv.js";import{G as P}from"./ghost-icon-DrtV221b.js";import{F as c}from"./for-B4pwjnZx.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BxEmWAV4.js";import"./grid-item-B_xTJ0Vv.js";import"./flex-Csx8kE93.js";import"./heading-rI5evaQz.js";const w=({children:e,max:a,reverse:o,...s}={})=>{const t=R(e),f=C(a)?0:t.length-a,y=k.useCallback(m=>({...s,...m,role:"group"}),[s]);return{children:k.useMemo(()=>{const m=C(a)?[...t]:t.slice(0,a);return o?m.reverse():m},[a,t,o]),excess:f,getRootProps:y}},i=F(e=>{const[,{colorScheme:a,size:o,variant:s,shape:t,...f}]=z(e,"group",{transferProps:["variant","colorScheme","size","shape"]}),{children:y,excess:H,getRootProps:m}=w(f),Y=k.useMemo(()=>({colorScheme:a,size:o,variant:s,shape:t}),[s,o,a,t]);return r.jsx(E,{value:Y,children:r.jsxs(_.div,{...m(),children:[H>0?r.jsx(n,{fallback:`+${H}`}):null,y]})})},"group")(),U={component:n,title:"Components / Avatar"},d=()=>r.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),l=()=>r.jsx(b,{columns:["solid","subtle","surface","outline"],rows:S,children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",colorScheme:a,variant:e},o)}),u=()=>r.jsx(b,{columns:["xs","sm","md","lg","xl"],rows:S,children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",colorScheme:a,size:e},o)}),p=()=>r.jsx(b,{variant:"stack",rows:["circle","square","rounded"],children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",shape:a},o)}),x=()=>r.jsx(n,{name:"Hirotomo Yamada"}),h=()=>r.jsx(n,{src:"https://avatars.githubusercontent.com/u/84060430?v=4",alt:"Hirotomo Yamada"}),v=()=>r.jsxs(G,{gap:"md",children:[r.jsx(n,{src:"https://not-found.com"}),r.jsx(n,{src:"https://not-found.com",alt:"alternative text"}),r.jsx(n,{src:"https://not-found.com",icon:r.jsx(P,{fontSize:"2xl"})})]}),A=()=>{const e=a=>{const o=a.charCodeAt(0)%S.length;return S[o]};return r.jsx(G,{gap:"md",children:r.jsx(c,{each:["Hirotomo Yamada","Koiso Kenji","Shinohara Natsuki"],children:(a,o)=>r.jsx(n,{name:a,colorScheme:e(a)},o)})})},g=()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{each:["solid","subtle","surface","outline"],children:(e,a)=>r.jsx(i,{variant:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada",bg:e==="outline"?"bg":void 0},s))},a)}),r.jsx(c,{each:["xs","sm","md","lg","xl"],children:(e,a)=>r.jsx(i,{size:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)}),r.jsx(c,{each:["circle","square","rounded"],children:(e,a)=>r.jsx(i,{shape:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)})]}),j=()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{each:["solid","subtle","surface","outline"],children:(e,a)=>r.jsx(i,{variant:e,max:3,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada",bg:e==="outline"?"bg":void 0},s))},a)}),r.jsx(c,{each:["xs","sm","md","lg","xl"],children:(e,a)=>r.jsx(i,{size:e,max:3,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)}),r.jsx(c,{each:["circle","square","rounded"],children:(e,a)=>r.jsx(i,{max:3,shape:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)})]});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />;
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Avatar key={key} name="Hirotomo Yamada" colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Avatar key={key} name="Hirotomo Yamada" colorScheme={row} size={column} />;
    }}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => <Avatar key={key} name="Hirotomo Yamada" shape={row} />}
    </PropsTable>;
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" />;
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" alt="Hirotomo Yamada" />;
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Avatar src="https://not-found.com" />
      <Avatar src="https://not-found.com" alt="alternative text" />
      <Avatar src="https://not-found.com" icon={<GhostIcon fontSize="2xl" />} />
    </Wrap>;
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const randomColorScheme = (name: string) => {
    const index = name.charCodeAt(0) % COLOR_SCHEMES.length;
    return COLOR_SCHEMES[index];
  };
  return <Wrap gap="md">
      <For each={["Hirotomo Yamada", "Koiso Kenji", "Shinohara Natsuki"]}>
        {(name, index) => <Avatar key={index} name={name} colorScheme={randomColorScheme(name)} />}
      </For>
    </Wrap>;
}`,...A.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <AvatarGroup.Root key={index} variant={variant}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" bg={variant === "outline" ? "bg" : undefined} />)}
          </AvatarGroup.Root>}
      </For>

      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {(size, index) => <AvatarGroup.Root key={index} size={size}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" />)}
          </AvatarGroup.Root>}
      </For>

      <For each={["circle", "square", "rounded"] as const}>
        {(shape, index) => <AvatarGroup.Root key={index} shape={shape}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" />)}
          </AvatarGroup.Root>}
      </For>
    </>;
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => <AvatarGroup.Root key={index} variant={variant} max={3}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" bg={variant === "outline" ? "bg" : undefined} />)}
          </AvatarGroup.Root>}
      </For>

      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {(size, index) => <AvatarGroup.Root key={index} size={size} max={3}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" />)}
          </AvatarGroup.Root>}
      </For>

      <For each={["circle", "square", "rounded"] as const}>
        {(shape, index) => <AvatarGroup.Root key={index} max={3} shape={shape}>
            {Array(5).fill(0).map((_, index) => <AvatarGroup.Item key={index} name="Hirotomo Yamada" />)}
          </AvatarGroup.Root>}
      </For>
    </>;
}`,...j.parameters?.docs?.source}}};const $=["Basic","Variant","Size","Shape","Name","Image","Fallback","RandomColor","Group","GroupMax"];export{d as Basic,v as Fallback,g as Group,j as GroupMax,h as Image,x as Name,A as RandomColor,p as Shape,u as Size,l as Variant,$ as __namedExportsOrder,U as default};
