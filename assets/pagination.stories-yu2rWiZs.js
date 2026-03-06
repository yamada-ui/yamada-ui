import{n as io,o as co,I as go,j as o,Z as t,J as Po,r as xo,C as ho}from"./iframe-BI5PsGPv.js";import{P as I}from"./props-table-voBjQM0I.js";import{P as r,a as jo,C as Io,b as lo,c as bo,d as mo,e as To,f as b,g as wo}from"./pagination-CzREIezU.js";import{C as po}from"./chevron-left-icon-DThfT1Ic.js";import{E as Co,C as fo}from"./ellipsis-icon-DiWenIV4.js";import{C as uo}from"./chevron-right-icon-DY-IdPPo.js";import{M as vo}from"./minus-icon-1lybsIZ8.js";import{G as T}from"./ghost-icon-Cun_pqcg.js";import{A as Ro}from"./arrow-left-icon-bYERe1ab.js";import{A as So}from"./arrow-right-icon-BLDQOa76.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CNF2yfb1.js";import"./grid-item-CSGuos0G.js";import"./for-B29raV-x.js";import"./flex-D6mQ8SWx.js";import"./heading-Bsw1CmbU.js";import"./index-DqLoHTQX.js";import"./button-group-u1EJ3wgU.js";import"./group-COA8tXbg.js";import"./index-CB2jobsc.js";import"./use-breakpoint-BKhuIij_.js";import"./use-breakpoint-value-45fYVagw.js";import"./use-color-mode-value-C6Kck7-T.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],ko=io("arrow-left-to-line",Eo);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Lo=io("arrow-right-to-line",yo),Ao=co(go)({as:ko}),Bo=co(go)({as:Lo}),ar={component:r,title:"Components / Pagination"},s=()=>o.jsx(r,{total:10}),i=()=>o.jsx(I,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:ho,children:(n,a,e)=>o.jsx(r,{colorScheme:a,variant:n,"aria-label":`Pagination-${n}-${a}`,total:10},e)}),c=()=>o.jsx(I,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(n,a,e)=>o.jsx(r,{size:a,"aria-label":`Pagination-${a}`,total:10},e)}),g=()=>o.jsx(r,{total:10,withEdges:!0}),l=()=>o.jsx(r,{defaultPage:3,total:10}),m=()=>o.jsx(r,{total:99}),p=()=>o.jsx(r,{siblings:2,total:99}),u=()=>o.jsx(r,{boundaries:3,total:99}),d=()=>o.jsx(r,{disabled:!0,total:10}),P=()=>o.jsx(I,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(n,a,e)=>o.jsxs(r,{size:a,"aria-label":`Pagination-${n}-${a}`,gap:"md",total:10,children:[o.jsx(lo,{children:o.jsx(b,{icon:o.jsx(po,{})})}),o.jsx(wo,{format:n}),o.jsx(mo,{children:o.jsx(b,{icon:o.jsx(uo,{})})})]},e)}),x=()=>o.jsxs(r,{size:"sm",variant:"subtle",total:10,children:[o.jsx(jo,{children:o.jsx(t,{icon:o.jsx(Io,{})})}),o.jsx(lo,{children:o.jsx(t,{icon:o.jsx(po,{})})}),o.jsx(bo,{render:n=>Po(n)?o.jsx(t,{variant:{base:"subtle",_current:"solid"},children:n}):o.jsx(t,{as:"span",icon:o.jsx(Co,{})})}),o.jsx(mo,{children:o.jsx(t,{icon:o.jsx(uo,{})})}),o.jsx(To,{children:o.jsx(t,{icon:o.jsx(fo,{})})})]}),h=()=>o.jsxs(o.Fragment,{children:[o.jsx(r,{"aria-label":"Pagination-ghost-icon",total:10,withEdges:!0,controlProps:{icon:o.jsx(T,{})},edgeProps:{icon:o.jsx(T,{})},ellipsisProps:{icon:o.jsx(vo,{})}}),o.jsx(r,{"aria-label":"Pagination-arrow-icon",total:10,withEdges:!0,controlNextProps:{icon:o.jsx(So,{})},controlPrevProps:{icon:o.jsx(Ro,{})},edgeEndProps:{icon:o.jsx(Bo,{})},edgeStartProps:{icon:o.jsx(Ao,{})}})]}),j=()=>{const[n,a]=xo.useState(1);return o.jsx(r,{page:n,total:10,onChange:a})};var w,C,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var v,R,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'() => {\n  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>\n      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} aria-label={`Pagination-${column}-${row}`} total={10} />}\n    </PropsTable>;\n}',...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var E,k,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} aria-label={\`Pagination-\${row}\`} total={10} />}
    </PropsTable>;
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var L,A,B;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var _,N,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...($=(N=l.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var z,M,O;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...(O=(M=m.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var D,G,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var V,F,J;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Z,q,K;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...(K=(q=d.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,U,W;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(W=(U=P.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,oo;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(oo=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:oo.source}}};var ro,no,ao;h.parameters={...h.parameters,docs:{...(ro=h.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(ao=(no=h.parameters)==null?void 0:no.docs)==null?void 0:ao.source}}};var to,eo,so;j.parameters={...j.parameters,docs:{...(to=j.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...(so=(eo=j.parameters)==null?void 0:eo.docs)==null?void 0:so.source}}};const tr=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{s as Basic,u as Boundaries,x as CustomComponent,j as CustomControl,h as CustomIcon,l as DefaultPage,d as Disabled,g as Edges,p as Siblings,c as Size,P as Text,m as Total,i as Variant,tr as __namedExportsOrder,ar as default};
