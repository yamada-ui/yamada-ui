import{n as C,o as f,I as v,j as o,C as k,$ as e,L,r as y}from"./iframe-s8tBpZKs.js";import{P as I}from"./props-table-Cl5IteCw.js";import{P as r,a as R,b as T,c as A,d as S,e as B,C as _,f as N,g as z}from"./pagination-BQ7KB_wk.js";import{C as b}from"./chevron-left-icon-CWkVQfFm.js";import{C as E}from"./chevron-right-icon-DyWvVrt3.js";import{E as M,C as O}from"./ellipsis-icon-CgU3yB_S.js";import{M as D}from"./minus-icon-CduxGRxq.js";import{G as w}from"./ghost-icon-DOLlpGdh.js";import{A as G}from"./arrow-left-icon-IMcPclDq.js";import{A as H}from"./arrow-right-icon-9AwHWGuD.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-B2Ss8PHo.js";import"./grid-item-V397EoNi.js";import"./for-Bxbq8Wz-.js";import"./flex-mUxQtFkB.js";import"./heading-Ch1-J7Fd.js";import"./index-CucUGTla.js";import"./button-group-ypANSIdh.js";import"./group-CCx44ibt.js";import"./index-B5cuAnBy.js";import"./use-breakpoint-1DOTCsHC.js";import"./use-breakpoint-value-DyUXN0Gi.js";import"./use-color-mode-value-Bkev6n0n.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],$=C("arrow-left-to-line",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],q=C("arrow-right-to-line",F),J=f(v)({as:$}),K=f(v)({as:q}),jo={component:r,title:"Components / Pagination"},s=()=>o.jsx(r,{total:10}),i=()=>o.jsx(I,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:k,children:(n,t,a)=>o.jsx(r,{colorScheme:t,variant:n,total:10},a)}),c=()=>o.jsx(I,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(n,t,a)=>o.jsx(r,{size:t,total:10},a)}),g=()=>o.jsx(r,{total:10,withEdges:!0}),m=()=>o.jsx(r,{defaultPage:3,total:10}),p=()=>o.jsx(r,{total:99}),l=()=>o.jsx(r,{siblings:2,total:99}),u=()=>o.jsx(r,{boundaries:3,total:99}),d=()=>o.jsx(r,{disabled:!0,total:10}),P=()=>o.jsx(I,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(n,t,a)=>o.jsxs(r,{size:t,gap:"md",total:10,children:[o.jsx(R,{children:o.jsx(T,{icon:o.jsx(b,{})})}),o.jsx(A,{format:n}),o.jsx(S,{children:o.jsx(T,{icon:o.jsx(E,{})})})]},a)}),x=()=>o.jsxs(r,{size:"sm",variant:"subtle",total:10,children:[o.jsx(B,{children:o.jsx(e,{icon:o.jsx(_,{})})}),o.jsx(R,{children:o.jsx(e,{icon:o.jsx(b,{})})}),o.jsx(N,{render:n=>L(n)?o.jsx(e,{variant:{base:"subtle",_current:"solid"},children:n}):o.jsx(e,{as:"span",icon:o.jsx(M,{})})}),o.jsx(S,{children:o.jsx(e,{icon:o.jsx(E,{})})}),o.jsx(z,{children:o.jsx(e,{icon:o.jsx(O,{})})})]}),h=()=>o.jsxs(o.Fragment,{children:[o.jsx(r,{total:10,withEdges:!0,controlProps:{icon:o.jsx(w,{})},edgeProps:{icon:o.jsx(w,{})},ellipsisProps:{icon:o.jsx(D,{})}}),o.jsx(r,{total:10,withEdges:!0,controlNextProps:{icon:o.jsx(H,{})},controlPrevProps:{icon:o.jsx(G,{})},edgeEndProps:{icon:o.jsx(K,{})},edgeStartProps:{icon:o.jsx(J,{})}})]}),j=()=>{const[n,t]=y.useState(1);return o.jsx(r,{page:n,total:10,onChange:t})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} total={10} />}
    </PropsTable>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} total={10} />}
    </PropsTable>;
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...d.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["short", "compact"]} rows={["xs", "sm", "md", "lg", "xl"]}>
      {(column, row, key) => <Pagination.Root key={key} size={row} gap="md" total={10}>
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
      <Pagination.Root total={10} withEdges controlProps={{
      icon: <GhostIcon />
    }} edgeProps={{
      icon: <GhostIcon />
    }} ellipsisProps={{
      icon: <MinusIcon />
    }} />

      <Pagination.Root total={10} withEdges controlNextProps={{
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
}`,...j.parameters?.docs?.source}}};const Io=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{s as Basic,u as Boundaries,x as CustomComponent,j as CustomControl,h as CustomIcon,m as DefaultPage,d as Disabled,g as Edges,l as Siblings,c as Size,P as Text,p as Total,i as Variant,Io as __namedExportsOrder,jo as default};
