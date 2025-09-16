import{n as tt,o as et,I as nt,d as kt,bA as a,c as bt,J as ht,r as i,m as wt,L as ot,h as N,g as Rt,j as t,s as yt,_ as P,k as Et,C as _t}from"./iframe-Brv718Ke.js";import{P as rt}from"./props-table-BhZ2Cxzm.js";import{u as D}from"./index-D5wu8vhg.js";import{u as Lt}from"./index-DcQLEJWH.js";import{E as Pt,C as Ct}from"./ellipsis-icon-DdwLp12U.js";import{C as st}from"./chevron-left-icon-Cl-necyS.js";import{C as at}from"./chevron-right-icon-DrLNkQai.js";import{B as Mt}from"./button-group-BEwWx09a.js";import{M as Nt}from"./minus-icon-BgPXsuJU.js";import{G as ft}from"./ghost-icon-Csygj7us.js";import{A as At}from"./arrow-left-icon-ClChpI58.js";import{A as Bt}from"./arrow-right-icon-djziyT3p.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DLYm4Rks.js";import"./grid-item-DWuT-LWZ.js";import"./for-y9tZyjCV.js";import"./flex-DhUoci5A.js";import"./heading-DLtRtgvj.js";import"./use-breakpoint-BYwrrTnn.js";import"./use-breakpoint-value-B49E1fW3.js";import"./use-color-mode-value-DNz64yif.js";import"./group-SFENiReo.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],Dt=tt("arrow-left-to-line",Gt);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Ot=tt("arrow-right-to-line",Vt);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Ft=tt("chevrons-left",Ht),$t=et(nt)({as:Dt}),Jt=et(nt)({as:Ot}),zt=et(nt)({as:Ft}),Wt=kt({base:{item:{fontWeight:"normal",_current:{cursor:"default",pointerEvents:"none"}},root:{"& > [data-ellipsis]":{pointerEvents:"none"}},text:{alignItems:"center",display:"flex",justifyContent:"center"}},variants:{outline:{item:{...a.variants?.ghost,_current:{...a.variants?.outline}}},solid:{item:{...a.variants?.ghost,_current:{...a.variants?.solid}}},subtle:{item:{...a.variants?.ghost,_current:{...a.variants?.subtle}}},surface:{item:{...a.variants?.ghost,_current:{...a.variants?.surface}}}},sizes:{xs:{item:{...a.sizes?.xs,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xs.fontSize}},root:{"--font-size":"fontSizes.sm"},text:{fontSize:"{font-size}"}},sm:{item:{...a.sizes?.sm,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.sm.fontSize}},root:{"--font-size":"fontSizes.md"},text:{fontSize:"{font-size}"}},md:{item:{...a.sizes?.md,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.md.fontSize}},root:{"--font-size":"fontSizes.lg"},text:{fontSize:"{font-size}"}},lg:{item:{...a.sizes?.lg,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.lg.fontSize}},root:{"--font-size":"fontSizes.xl"},text:{fontSize:"{font-size}"}},xl:{item:{...a.sizes?.xl,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xl.fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}},"2xl":{item:{...a.sizes?.["2xl"],fontSize:"{font-size}",_icon:{fontSize:a.sizes?.["2xl"].fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}}},defaultProps:{size:"md",variant:"solid"}}),[qt,T]=bt({name:"PaginationContext"}),Kt=({boundaries:e=1,defaultPage:r=1,disabled:s=!1,page:l,siblings:c=1,total:n,onChange:x,...C})=>{const[g,p]=Lt({defaultValue:r,value:l,onChange:x}),{t:u}=ht("pagination"),k=i.useMemo(()=>{if(c*2+3+e*2>=n)return f(1,n);const d=Math.max(g-c,e),E=Math.min(g+c,n-e),_=d>e+2,L=E<n-(e+1);if(!_&&L){const M=c*2+e+2;return[...f(1,M),"ellipsis",...f(n-(e-1),n)]}if(_&&!L){const M=e+1+2*c;return[...f(1,e),"ellipsis",...f(n-M,n)]}return[...f(1,e),"ellipsis",...f(d,E),"ellipsis",...f(n-e+1,n)]},[e,c,g,n]),z=i.useCallback(o=>p(Math.max(1,Math.min(n,o))),[p,n]),S=i.useCallback(()=>p(1),[p]),v=i.useCallback(()=>p(n),[p,n]),b=i.useCallback(()=>p(o=>Math.max(1,o-1)),[p]),w=i.useCallback(()=>p(o=>Math.min(n,o+1)),[p,n]),Z=i.useCallback(({ref:o,...d}={})=>({...C,...d,ref:wt(o,C.ref),"aria-label":u("Pagination"),role:"navigation"}),[C,u]),R=i.useCallback(({page:o,...d}={})=>ot(o)?{type:"button","aria-current":g===o?"page":void 0,"aria-label":u("Go to page",{value:o}),disabled:s,...d,onClick:N(d.onClick,()=>z(o))}:{...d,"data-ellipsis":""},[g,u,z,s]),y=i.useCallback((o={})=>({type:"button","aria-label":u("Go to first page"),disabled:s||g===1,...o,onClick:N(o.onClick,S)}),[S,u,s,g]),A=i.useCallback((o={})=>({type:"button","aria-label":u("Go to last page"),disabled:s||g===n,...o,onClick:N(o.onClick,v)}),[v,u,s,g,n]),B=i.useCallback((o={})=>({type:"button","aria-label":u("Go to previous page"),disabled:s||g===1,...o,onClick:N(o.onClick,b)}),[b,u,s,g]),G=i.useCallback((o={})=>({type:"button","aria-label":u("Go to next page"),disabled:s||g===n,...o,onClick:N(o.onClick,w)}),[w,u,s,g,n]);return{currentPage:g,disabled:s,range:k,total:n,getEndTriggerProps:A,getItemProps:R,getNextTriggerProps:G,getPrevTriggerProps:B,getRootProps:Z,getStartTriggerProps:y,onChange:z,onChangeEnd:v,onChangeNext:w,onChangePrev:b,onChangeStart:S}},f=(e,r)=>Array.from({length:r-e+1},(s,l)=>l+e),{withContext:I,withProvider:Qt}=Rt("pagination",Wt),m=Qt(({size:e,variant:r,boundaries:s,children:l,siblings:c,withControls:n=!0,withEdges:x=!1,controlNextProps:C,controlPrevProps:g,controlProps:p,edgeEndProps:u,edgeProps:k,edgeStartProps:z,ellipsisProps:S,itemProps:v,...b})=>{const w=D(s),Z=D(c),R=D(n),y=D(x),{currentPage:A,disabled:B,range:G,total:o,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getRootProps:M,getStartTriggerProps:gt,onChange:lt,onChangeEnd:ut,onChangeNext:mt,onChangePrev:pt,onChangeStart:dt}=Kt({...b,boundaries:w,siblings:Z}),Tt=i.useMemo(()=>({currentPage:A,disabled:B,range:G,total:o,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getStartTriggerProps:gt,onChange:lt,onChangeEnd:ut,onChangeNext:mt,onChangePrev:pt,onChangeStart:dt}),[A,B,G,o,d,E,_,L,gt,lt,ut,mt,pt,dt]),It=i.useMemo(()=>{if(l)return l;{const j=[];return y&&j.push(t.jsx(vt,{children:t.jsx(h,{icon:t.jsx(zt,{}),...k,...z})})),R&&j.push(t.jsx(it,{children:t.jsx(h,{icon:t.jsx(st,{}),...p,...g})})),j.push(t.jsx(St,{render:xt=>ot(xt)?t.jsx(h,{...v,children:t.jsx(yt.span,{role:"presentation",children:xt})}):t.jsx(h,{as:"span",icon:t.jsx(Pt,{}),...S})})),R&&j.push(t.jsx(ct,{children:t.jsx(h,{icon:t.jsx(at,{}),...p,...C})})),y&&j.push(t.jsx(jt,{children:t.jsx(h,{icon:t.jsx(Ct,{}),...k,...u})})),j}},[l,y,R,v,S,k,z,u,p,g,C]);return t.jsx(qt,{value:Tt,children:t.jsx(Mt,{as:"nav",size:e,variant:r,...M(),children:It})})},"root",{transferProps:["variant","size"]})(),St=({children:e,render:r})=>{const{range:s,getItemProps:l}=T();return i.useMemo(()=>s.map((c,n)=>{const x=e?.(c)??r?.(c);return i.isValidElement(x)?i.cloneElement(x,{...l({key:n,page:c,...x.props})}):x}),[e,l,s,r])},h=I(P,"item")(),Ut=I("span","text")(void 0,({children:e,format:r="compact",...s})=>{const{currentPage:l,total:c}=T(),{t:n}=ht("pagination"),x=i.useMemo(()=>e?Et(e,{page:l,total:c}):r==="short"?n("{value} / {total}",{total:c,value:l}):n("{value} of {total}",{total:c,value:l}),[e,l,r,c,n]);return{...s,children:x}}),vt=I("button",{name:"startTrigger",slot:["trigger","start"]})(void 0,e=>{const{getStartTriggerProps:r}=T();return{asChild:!0,...r(e)}}),jt=I("button",{name:"endTrigger",slot:["trigger","end"]})(void 0,e=>{const{getEndTriggerProps:r}=T();return{asChild:!0,...r(e)}}),it=I("button",{name:"prevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:r}=T();return{asChild:!0,...r(e)}}),ct=I("button",{name:"nextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:r}=T();return{asChild:!0,...r(e)}}),Ce={component:m,title:"Components / Pagination"},V=()=>t.jsx(m,{total:10}),O=()=>t.jsx(rt,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:_t,children:(e,r,s)=>t.jsx(m,{colorScheme:r,variant:e,total:10},s)}),H=()=>t.jsx(rt,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsx(m,{size:r,total:10},s)}),F=()=>t.jsx(m,{total:10,withEdges:!0}),$=()=>t.jsx(m,{defaultPage:3,total:10}),J=()=>t.jsx(m,{total:99}),W=()=>t.jsx(m,{siblings:2,total:99}),q=()=>t.jsx(m,{boundaries:3,total:99}),K=()=>t.jsx(m,{disabled:!0,total:10}),Q=()=>t.jsx(rt,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsxs(m,{size:r,gap:"md",total:10,children:[t.jsx(it,{children:t.jsx(h,{icon:t.jsx(st,{})})}),t.jsx(Ut,{format:e}),t.jsx(ct,{children:t.jsx(h,{icon:t.jsx(at,{})})})]},s)}),U=()=>t.jsxs(m,{size:"sm",variant:"subtle",total:10,children:[t.jsx(vt,{children:t.jsx(P,{icon:t.jsx(zt,{})})}),t.jsx(it,{children:t.jsx(P,{icon:t.jsx(st,{})})}),t.jsx(St,{render:e=>ot(e)?t.jsx(P,{variant:{base:"subtle",_current:"solid"},children:e}):t.jsx(P,{as:"span",icon:t.jsx(Pt,{})})}),t.jsx(ct,{children:t.jsx(P,{icon:t.jsx(at,{})})}),t.jsx(jt,{children:t.jsx(P,{icon:t.jsx(Ct,{})})})]}),X=()=>t.jsxs(t.Fragment,{children:[t.jsx(m,{total:10,withEdges:!0,controlProps:{icon:t.jsx(ft,{})},edgeProps:{icon:t.jsx(ft,{})},ellipsisProps:{icon:t.jsx(Nt,{})}}),t.jsx(m,{total:10,withEdges:!0,controlNextProps:{icon:t.jsx(Bt,{})},controlPrevProps:{icon:t.jsx(At,{})},edgeEndProps:{icon:t.jsx(Jt,{})},edgeStartProps:{icon:t.jsx($t,{})}})]}),Y=()=>{const[e,r]=i.useState(1);return t.jsx(m,{page:e,total:10,onChange:r})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} />;
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["solid", "subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Pagination.Root key={key} colorScheme={row} variant={column} total={10} />}
    </PropsTable>;
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} total={10} />}
    </PropsTable>;
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={10} withEdges />;
}`,...F.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root defaultPage={3} total={10} />;
}`,...$.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...q.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root disabled total={10} />;
}`,...K.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...Y.parameters?.docs?.source}}};const ze=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{V as Basic,q as Boundaries,U as CustomComponent,Y as CustomControl,X as CustomIcon,$ as DefaultPage,K as Disabled,F as Edges,W as Siblings,H as Size,Q as Text,J as Total,O as Variant,ze as __namedExportsOrder,Ce as default};
