import{n as io,o as co,I as go,j as o,C as Po,Z as e,J as xo,r as ho}from"./iframe-D_HYglKf.js";import{P as I}from"./props-table-TlEH2bpt.js";import{P as r,a as mo,b as T,c as jo,d as po,e as Io,C as To,f as wo,g as Co}from"./pagination-DMAplz4I.js";import{C as lo}from"./chevron-left-icon-EPCVi0rH.js";import{C as uo}from"./chevron-right-icon-CPYIA0WB.js";import{E as fo,C as vo}from"./ellipsis-icon-BdZPR6FG.js";import{M as Ro}from"./minus-icon-CBrO4f99.js";import{G as w}from"./ghost-icon-Dyv7V6oW.js";import{A as So}from"./arrow-left-icon-B0OkHb5W.js";import{A as bo}from"./arrow-right-icon-DPRBXT6u.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./for-B7ME2eWM.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";import"./index-DlPqCcPe.js";import"./button-group-B-mpiRfX.js";import"./group-BP-ePriJ.js";import"./index-YgsjGqza.js";import"./use-breakpoint-DzseuvVx.js";import"./use-breakpoint-value-DJZAC5OA.js";import"./use-color-mode-value-ChIzIqo3.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],ko=io("arrow-left-to-line",Eo);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Lo=io("arrow-right-to-line",yo),Ao=co(go)({as:ko}),Bo=co(go)({as:Lo}),tr={component:r,title:"Components / Pagination"},s=()=>o.jsx(r,{total:10}),i=()=>o.jsx(I,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:Po,children:(n,t,a)=>o.jsx(r,{colorScheme:t,variant:n,total:10},a)}),c=()=>o.jsx(I,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(n,t,a)=>o.jsx(r,{size:t,total:10},a)}),g=()=>o.jsx(r,{total:10,withEdges:!0}),m=()=>o.jsx(r,{defaultPage:3,total:10}),p=()=>o.jsx(r,{total:99}),l=()=>o.jsx(r,{siblings:2,total:99}),u=()=>o.jsx(r,{boundaries:3,total:99}),d=()=>o.jsx(r,{disabled:!0,total:10}),P=()=>o.jsx(I,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(n,t,a)=>o.jsxs(r,{size:t,gap:"md",total:10,children:[o.jsx(mo,{children:o.jsx(T,{icon:o.jsx(lo,{})})}),o.jsx(jo,{format:n}),o.jsx(po,{children:o.jsx(T,{icon:o.jsx(uo,{})})})]},a)}),x=()=>o.jsxs(r,{size:"sm",variant:"subtle",total:10,children:[o.jsx(Io,{children:o.jsx(e,{icon:o.jsx(To,{})})}),o.jsx(mo,{children:o.jsx(e,{icon:o.jsx(lo,{})})}),o.jsx(wo,{render:n=>xo(n)?o.jsx(e,{variant:{base:"subtle",_current:"solid"},children:n}):o.jsx(e,{as:"span",icon:o.jsx(fo,{})})}),o.jsx(po,{children:o.jsx(e,{icon:o.jsx(uo,{})})}),o.jsx(Co,{children:o.jsx(e,{icon:o.jsx(vo,{})})})]}),h=()=>o.jsxs(o.Fragment,{children:[o.jsx(r,{total:10,withEdges:!0,controlProps:{icon:o.jsx(w,{})},edgeProps:{icon:o.jsx(w,{})},ellipsisProps:{icon:o.jsx(Ro,{})}}),o.jsx(r,{total:10,withEdges:!0,controlNextProps:{icon:o.jsx(bo,{})},controlPrevProps:{icon:o.jsx(So,{})},edgeEndProps:{icon:o.jsx(Bo,{})},edgeStartProps:{icon:o.jsx(Ao,{})}})]}),j=()=>{const[n,t]=ho.useState(1);return o.jsx(r,{page:n,total:10,onChange:t})};var C,f,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var R,S,b;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} total={10} />}
    </PropsTable>;
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var E,k,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} total={10} />}
    </PropsTable>;
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var L,A,B;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var _,N,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var M,O,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var G,H,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...(V=(H=l.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var F,J,Z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...(Z=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var $,q,K;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...(K=(q=d.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,U,W;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(oo=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:oo.source}}};var ro,no,to;h.parameters={...h.parameters,docs:{...(ro=h.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
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
}`,...(to=(no=h.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};var eo,ao,so;j.parameters={...j.parameters,docs:{...(eo=j.parameters)==null?void 0:eo.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...(so=(ao=j.parameters)==null?void 0:ao.docs)==null?void 0:so.source}}};const er=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{s as Basic,u as Boundaries,x as CustomComponent,j as CustomControl,h as CustomIcon,m as DefaultPage,d as Disabled,g as Edges,l as Siblings,c as Size,P as Text,p as Total,i as Variant,er as __namedExportsOrder,tr as default};
