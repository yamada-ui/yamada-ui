import{R as sr,H as C,r as k,j as r,s as tr,C as S}from"./iframe-LqombrNM.js";import{P as b}from"./props-table-P2PnH6mP.js";import{c as cr,u as mr,A as ir,a as n}from"./avatar-CBzncW37.js";import{W as or}from"./wrap-DK7EupBs.js";import{G as dr}from"./ghost-icon-T46HhCEQ.js";import{F as c}from"./for-CkWl_ugB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./flex-ksADg7SB.js";import"./heading-Bq_Y6181.js";const lr=({children:e,max:a,reverse:o,...s}={})=>{const t=sr(e),f=C(a)?0:t.length-a,y=k.useCallback(m=>({...s,...m,role:"group"}),[s]);return{children:k.useMemo(()=>{const m=C(a)?[...t]:t.slice(0,a);return o?m.reverse():m},[a,t,o]),excess:f,getRootProps:y}},i=cr(e=>{const[,{colorScheme:a,size:o,variant:s,shape:t,...f}]=mr(e,"group",{transferProps:["variant","colorScheme","size","shape"]}),{children:y,excess:H,getRootProps:m}=lr(f),nr=k.useMemo(()=>({colorScheme:a,size:o,variant:s,shape:t}),[s,o,a,t]);return r.jsx(ir,{value:nr,children:r.jsxs(tr.div,{...m(),children:[H>0?r.jsx(n,{fallback:`+${H}`}):null,y]})})},"group")(),Hr={component:n,title:"Components / Avatar"},d=()=>r.jsx(n,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"}),l=()=>r.jsx(b,{columns:["solid","subtle","surface","outline"],rows:S,children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",colorScheme:a,variant:e},o)}),u=()=>r.jsx(b,{columns:["xs","sm","md","lg","xl"],rows:S,children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",colorScheme:a,size:e},o)}),p=()=>r.jsx(b,{variant:"stack",rows:["circle","square","rounded"],children:(e,a,o)=>r.jsx(n,{name:"Hirotomo Yamada",shape:a},o)}),x=()=>r.jsx(n,{name:"Hirotomo Yamada"}),h=()=>r.jsx(n,{src:"https://avatars.githubusercontent.com/u/84060430?v=4",alt:"Hirotomo Yamada"}),v=()=>r.jsxs(or,{gap:"md",children:[r.jsx(n,{src:"https://not-found.com"}),r.jsx(n,{src:"https://not-found.com",alt:"alternative text"}),r.jsx(n,{src:"https://not-found.com",icon:r.jsx(dr,{fontSize:"2xl"})})]}),A=()=>{const e=a=>{const o=a.charCodeAt(0)%S.length;return S[o]};return r.jsx(or,{gap:"md",children:r.jsx(c,{each:["Hirotomo Yamada","Koiso Kenji","Shinohara Natsuki"],children:(a,o)=>r.jsx(n,{name:a,colorScheme:e(a)},o)})})},g=()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{each:["solid","subtle","surface","outline"],children:(e,a)=>r.jsx(i,{variant:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada",bg:e==="outline"?"bg":void 0},s))},a)}),r.jsx(c,{each:["xs","sm","md","lg","xl"],children:(e,a)=>r.jsx(i,{size:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)}),r.jsx(c,{each:["circle","square","rounded"],children:(e,a)=>r.jsx(i,{shape:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)})]}),j=()=>r.jsxs(r.Fragment,{children:[r.jsx(c,{each:["solid","subtle","surface","outline"],children:(e,a)=>r.jsx(i,{variant:e,max:3,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada",bg:e==="outline"?"bg":void 0},s))},a)}),r.jsx(c,{each:["xs","sm","md","lg","xl"],children:(e,a)=>r.jsx(i,{size:e,max:3,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)}),r.jsx(c,{each:["circle","square","rounded"],children:(e,a)=>r.jsx(i,{max:3,shape:e,children:Array(5).fill(0).map((o,s)=>r.jsx(n,{name:"Hirotomo Yamada"},s))},a)})]});var G,Y,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />;
}`,...(R=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var _,F,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <PropsTable columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Avatar key={key} name="Hirotomo Yamada" colorScheme={row} variant={column} />;
    }}
    </PropsTable>;
}`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var E,P,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Avatar key={key} name="Hirotomo Yamada" colorScheme={row} size={column} />;
    }}
    </PropsTable>;
}`,...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var O,I,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => <Avatar key={key} name="Hirotomo Yamada" shape={row} />}
    </PropsTable>;
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,q,W;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Avatar name="Hirotomo Yamada" />;
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,K,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" alt="Hirotomo Yamada" />;
}`,...(N=(K=h.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var V,B,U;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Avatar src="https://not-found.com" />
      <Avatar src="https://not-found.com" alt="alternative text" />
      <Avatar src="https://not-found.com" icon={<GhostIcon fontSize="2xl" />} />
    </Wrap>;
}`,...(U=(B=v.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var $,D,J;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const randomColorScheme = (name: string) => {
    const index = name.charCodeAt(0) % COLOR_SCHEMES.length;
    return COLOR_SCHEMES[index];
  };
  return <Wrap gap="md">
      <For each={["Hirotomo Yamada", "Koiso Kenji", "Shinohara Natsuki"]}>
        {(name, index) => <Avatar key={index} name={name} colorScheme={randomColorScheme(name)} />}
      </For>
    </Wrap>;
}`,...(J=(D=A.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var rr,ar,er;j.parameters={...j.parameters,docs:{...(rr=j.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(er=(ar=j.parameters)==null?void 0:ar.docs)==null?void 0:er.source}}};const kr=["Basic","Variant","Size","Shape","Name","Image","Fallback","RandomColor","Group","GroupMax"];export{d as Basic,v as Fallback,g as Group,j as GroupMax,h as Image,x as Name,A as RandomColor,p as Shape,u as Size,l as Variant,kr as __namedExportsOrder,Hr as default};
