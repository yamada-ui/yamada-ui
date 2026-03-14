import{n as w,o as C,I as f,j as o,Z as t,J as k,r as y,C as L}from"./iframe-BkSt7vyM.js";import{P as I}from"./props-table-DN3lVgaW.js";import{P as r,a as A,C as B,b as v,c as _,d as R,e as N,f as b,g as $}from"./pagination-CDSNYIvt.js";import{C as S}from"./chevron-left-icon-B8FWJ-VX.js";import{E as z,C as M}from"./ellipsis-icon-BQXrZ_YB.js";import{C as E}from"./chevron-right-icon-B8IgEpOA.js";import{M as O}from"./minus-icon-DRwdwN-W.js";import{G as T}from"./ghost-icon-bWw1u4kf.js";import{A as D}from"./arrow-left-icon-C7XhxrcD.js";import{A as G}from"./arrow-right-icon-CMKb-w9z.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DmgtKOBh.js";import"./grid-item-DSqTnqMu.js";import"./for-B9rKCkzX.js";import"./flex-BpaptubY.js";import"./heading-CMTXcFtE.js";import"./index-DPd3oLzm.js";import"./button-group-QHBXeG9V.js";import"./group-Bdk__w8r.js";import"./index-CQxoNWT4.js";import"./use-breakpoint-40vW7z1m.js";import"./use-breakpoint-value-wrLKYw6K.js";import"./use-color-mode-value-ChW2w8QO.js";const H=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],V=w("arrow-left-to-line",H);const F=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],J=w("arrow-right-to-line",F),Z=C(f)({as:V}),q=C(f)({as:J}),jo={component:r,title:"Components / Pagination"},s=()=>o.jsx(r,{total:10}),i=()=>o.jsx(I,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:L,children:(n,a,e)=>o.jsx(r,{colorScheme:a,variant:n,"aria-label":`Pagination-${n}-${a}`,total:10},e)}),c=()=>o.jsx(I,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(n,a,e)=>o.jsx(r,{size:a,"aria-label":`Pagination-${a}`,total:10},e)}),g=()=>o.jsx(r,{total:10,withEdges:!0}),l=()=>o.jsx(r,{defaultPage:3,total:10}),m=()=>o.jsx(r,{total:99}),p=()=>o.jsx(r,{siblings:2,total:99}),u=()=>o.jsx(r,{boundaries:3,total:99}),d=()=>o.jsx(r,{disabled:!0,total:10}),P=()=>o.jsx(I,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(n,a,e)=>o.jsxs(r,{size:a,"aria-label":`Pagination-${n}-${a}`,gap:"md",total:10,children:[o.jsx(v,{children:o.jsx(b,{icon:o.jsx(S,{})})}),o.jsx($,{format:n}),o.jsx(R,{children:o.jsx(b,{icon:o.jsx(E,{})})})]},e)}),x=()=>o.jsxs(r,{size:"sm",variant:"subtle",total:10,children:[o.jsx(A,{children:o.jsx(t,{icon:o.jsx(B,{})})}),o.jsx(v,{children:o.jsx(t,{icon:o.jsx(S,{})})}),o.jsx(_,{render:n=>k(n)?o.jsx(t,{variant:{base:"subtle",_current:"solid"},children:n}):o.jsx(t,{as:"span",icon:o.jsx(z,{})})}),o.jsx(R,{children:o.jsx(t,{icon:o.jsx(E,{})})}),o.jsx(N,{children:o.jsx(t,{icon:o.jsx(M,{})})})]}),h=()=>o.jsxs(o.Fragment,{children:[o.jsx(r,{"aria-label":"Pagination-ghost-icon",total:10,withEdges:!0,controlProps:{icon:o.jsx(T,{})},edgeProps:{icon:o.jsx(T,{})},ellipsisProps:{icon:o.jsx(O,{})}}),o.jsx(r,{"aria-label":"Pagination-arrow-icon",total:10,withEdges:!0,controlNextProps:{icon:o.jsx(G,{})},controlPrevProps:{icon:o.jsx(D,{})},edgeEndProps:{icon:o.jsx(q,{})},edgeStartProps:{icon:o.jsx(Z,{})}})]}),j=()=>{const[n,a]=y.useState(1);return o.jsx(r,{page:n,total:10,onChange:a})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'() => {\n  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>\n      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} aria-label={`Pagination-${column}-${row}`} total={10} />}\n    </PropsTable>;\n}',...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} aria-label={\`Pagination-\${row}\`} total={10} />}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...d.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...j.parameters?.docs?.source}}};const Io=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{s as Basic,u as Boundaries,x as CustomComponent,j as CustomControl,h as CustomIcon,l as DefaultPage,d as Disabled,g as Edges,p as Siblings,c as Size,P as Text,m as Total,i as Variant,Io as __namedExportsOrder,jo as default};
