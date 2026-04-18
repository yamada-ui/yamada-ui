import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{$f as n,Bf as r,Cr as i,If as a,Of as o,Pd as s,Sr as c,Tr as l,Uf as u,Vf as d,Wf as f,_r as p,am as m,br as h,ep as g,gl as _,hf as v,np as y,qm as b,sm as x,tp as S,vl as C,vr as w,wm as T,wr as E,xr as D,ym as O,yr as k}from"./iframe-CHoZGzMw.js";import{n as A,t as j}from"./storybook-D7iTf7Rb.js";var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{j(),M=t(b(),1),p(),m(),_(),s(),N=x(),P={component:i,title:`Components / Pagination`},F=()=>(0,N.jsx)(i,{total:10}),I=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`solid`,`subtle`,`surface`,`outline`],rows:O,children:(e,t,n)=>(0,N.jsx)(i,{colorScheme:t,variant:e,"aria-label":`Pagination-${e}-${t}`,total:10},n)}),L=()=>(0,N.jsx)(A,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(e,t,n)=>(0,N.jsx)(i,{size:t,"aria-label":`Pagination-${t}`,total:10},n)}),R=()=>(0,N.jsx)(i,{total:10,withEdges:!0}),z=()=>(0,N.jsx)(i,{defaultPage:3,total:10}),B=()=>(0,N.jsx)(i,{total:99}),V=()=>(0,N.jsx)(i,{siblings:2,total:99}),H=()=>(0,N.jsx)(i,{boundaries:3,total:99}),U=()=>(0,N.jsx)(i,{disabled:!0,total:10}),W=()=>(0,N.jsx)(A,{variant:`stack`,columns:[`short`,`compact`],rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(e,t,n)=>(0,N.jsxs)(i,{size:t,"aria-label":`Pagination-${e}-${t}`,gap:`md`,total:10,children:[(0,N.jsx)(c,{children:(0,N.jsx)(k,{icon:(0,N.jsx)(f,{})})}),(0,N.jsx)(l,{format:e}),(0,N.jsx)(D,{children:(0,N.jsx)(k,{icon:(0,N.jsx)(u,{})})})]},n)}),G=()=>(0,N.jsxs)(i,{size:`sm`,variant:`subtle`,total:10,children:[(0,N.jsx)(E,{children:(0,N.jsx)(C,{icon:(0,N.jsx)(d,{})})}),(0,N.jsx)(c,{children:(0,N.jsx)(C,{icon:(0,N.jsx)(f,{})})}),(0,N.jsx)(h,{render:e=>T(e)?(0,N.jsx)(C,{variant:{base:`subtle`,_current:`solid`},children:e}):(0,N.jsx)(C,{as:`span`,icon:(0,N.jsx)(a,{})})}),(0,N.jsx)(D,{children:(0,N.jsx)(C,{icon:(0,N.jsx)(u,{})})}),(0,N.jsx)(w,{children:(0,N.jsx)(C,{icon:(0,N.jsx)(r,{})})})]}),K=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i,{"aria-label":`Pagination-ghost-icon`,total:10,withEdges:!0,controlProps:{icon:(0,N.jsx)(o,{})},edgeProps:{icon:(0,N.jsx)(o,{})},ellipsisProps:{icon:(0,N.jsx)(v,{})}}),(0,N.jsx)(i,{"aria-label":`Pagination-arrow-icon`,total:10,withEdges:!0,controlNextProps:{icon:(0,N.jsx)(g,{})},controlPrevProps:{icon:(0,N.jsx)(y,{})},edgeEndProps:{icon:(0,N.jsx)(n,{})},edgeStartProps:{icon:(0,N.jsx)(S,{})}})]}),q=()=>{let[e,t]=(0,M.useState)(1);return(0,N.jsx)(i,{page:e,total:10,onChange:t})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} aria-label={\`Pagination-\${column}-\${row}\`} total={10} />}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} aria-label={\`Pagination-\${row}\`} total={10} />}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["short", "compact"]} rows={["xs", "sm", "md", "lg", "xl"]}>
      {(column, row, key) => <Pagination.Root key={key} size={row} aria-label={\`Pagination-\${column}-\${row}\`} gap="md" total={10}>
          <Pagination.PrevTrigger>
            <Pagination.Item icon={<ChevronLeftIcon />} />
          </Pagination.PrevTrigger>

          <Pagination.Text format={column} />

          <Pagination.NextTrigger>
            <Pagination.Item icon={<ChevronRightIcon />} />
          </Pagination.NextTrigger>
        </Pagination.Root>}
    </PropsTable>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root size="sm" variant="subtle" total={10}>
      <Pagination.StartTrigger>
        <IconButton icon={<ChevronsLeftIcon />} />
      </Pagination.StartTrigger>

      <Pagination.PrevTrigger>
        <IconButton icon={<ChevronLeftIcon />} />
      </Pagination.PrevTrigger>

      <Pagination.Items render={page => isNumber(page) ? <IconButton variant={{
      base: "subtle",
      _current: "solid"
    }}>
              {page}
            </IconButton> : <IconButton as="span" icon={<EllipsisIcon />} />} />

      <Pagination.NextTrigger>
        <IconButton icon={<ChevronRightIcon />} />
      </Pagination.NextTrigger>

      <Pagination.EndTrigger>
        <IconButton icon={<ChevronsRightIcon />} />
      </Pagination.EndTrigger>
    </Pagination.Root>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Pagination.Root aria-label="Pagination-ghost-icon" total={10} withEdges controlProps={{
      icon: <GhostIcon />
    }} edgeProps={{
      icon: <GhostIcon />
    }} ellipsisProps={{
      icon: <MinusIcon />
    }} />

      <Pagination.Root aria-label="Pagination-arrow-icon" total={10} withEdges controlNextProps={{
      icon: <ArrowRightIcon />
    }} controlPrevProps={{
      icon: <ArrowLeftIcon />
    }} edgeEndProps={{
      icon: <ArrowRightToLineIcon />
    }} edgeStartProps={{
      icon: <ArrowLeftToLineIcon />
    }} />
    </>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...q.parameters?.docs?.source}}},J=[`Basic`,`Variant`,`Size`,`Edges`,`DefaultPage`,`Total`,`Siblings`,`Boundaries`,`Disabled`,`Text`,`CustomComponent`,`CustomIcon`,`CustomControl`]}))();export{F as Basic,H as Boundaries,G as CustomComponent,q as CustomControl,K as CustomIcon,z as DefaultPage,U as Disabled,R as Edges,V as Siblings,L as Size,W as Text,B as Total,I as Variant,J as __namedExportsOrder,P as default};