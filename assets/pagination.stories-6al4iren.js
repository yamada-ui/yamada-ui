import{n as tt,I as et,d as kt,c as bt,A as ht,r as i,m as wt,N as ot,h as N,g as Rt,j as t,s as yt,k as Et,C as _t}from"./iframe-COpE3uSe.js";import{P as nt}from"./props-table-XBnOiVZc.js";import{i as a,I as P}from"./icon-button-BjF-Bm1-.js";import{c as rt}from"./createLucideIcon-B04U3mbS.js";import{u as D}from"./index-rIgF0o0K.js";import{u as Lt}from"./index-CmrZ2qa-.js";import{E as Pt,C as Ct}from"./ellipsis-icon-haHQ02GO.js";import{C as st}from"./chevron-left-icon-CXegATnW.js";import{C as at}from"./chevron-right-icon-dsIu5esQ.js";import{B as Mt}from"./button-group-a-joPSUa.js";import{M as Nt}from"./minus-icon-BxeXJlQe.js";import{G as ft}from"./ghost-icon-DhSK9h9-.js";import{A as At}from"./arrow-left-icon-D4lYstL7.js";import{A as Bt}from"./arrow-right-icon-Dt137RsN.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-C-W568Cz.js";import"./grid-item-Bvrr_-qm.js";import"./for-DdiNkdzb.js";import"./flex-v97S7pBb.js";import"./heading-B0z9i4jI.js";import"./button-C1iRx7Aw.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";import"./group-BcN9SPfp.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],Dt=rt("arrow-left-to-line",Gt);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Ot=rt("arrow-right-to-line",Vt);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],Ft=rt("chevrons-left",Ht),$t=tt(et)({as:Dt}),Wt=tt(et)({as:Ot}),zt=tt(et)({as:Ft}),qt=kt({base:{item:{fontWeight:"normal",_current:{cursor:"default",pointerEvents:"none"}},root:{"& > [data-ellipsis]":{pointerEvents:"none"}},text:{alignItems:"center",display:"flex",justifyContent:"center"}},variants:{outline:{item:{...a.variants?.ghost,_current:{...a.variants?.outline}}},solid:{item:{...a.variants?.ghost,_current:{...a.variants?.solid}}},subtle:{item:{...a.variants?.ghost,_current:{...a.variants?.subtle}}},surface:{item:{...a.variants?.ghost,_current:{...a.variants?.surface}}}},sizes:{xs:{item:{...a.sizes?.xs,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xs.fontSize}},root:{"--font-size":"fontSizes.sm"},text:{fontSize:"{font-size}"}},sm:{item:{...a.sizes?.sm,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.sm.fontSize}},root:{"--font-size":"fontSizes.md"},text:{fontSize:"{font-size}"}},md:{item:{...a.sizes?.md,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.md.fontSize}},root:{"--font-size":"fontSizes.lg"},text:{fontSize:"{font-size}"}},lg:{item:{...a.sizes?.lg,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.lg.fontSize}},root:{"--font-size":"fontSizes.xl"},text:{fontSize:"{font-size}"}},xl:{item:{...a.sizes?.xl,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xl.fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}},"2xl":{item:{...a.sizes?.["2xl"],fontSize:"{font-size}",_icon:{fontSize:a.sizes?.["2xl"].fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}}},defaultProps:{size:"md",variant:"solid"}}),[Jt,T]=bt({name:"PaginationContext"}),Kt=({boundaries:e=1,defaultPage:r=1,disabled:s=!1,page:l,siblings:c=1,total:o,onChange:x,...C})=>{const[g,p]=Lt({defaultValue:r,value:l,onChange:x}),{t:u}=ht("pagination"),k=i.useMemo(()=>{if(c*2+3+e*2>=o)return f(1,o);const d=Math.max(g-c,e),E=Math.min(g+c,o-e),_=d>e+2,L=E<o-(e+1);if(!_&&L){const M=c*2+e+2;return[...f(1,M),"ellipsis",...f(o-(e-1),o)]}if(_&&!L){const M=e+1+2*c;return[...f(1,e),"ellipsis",...f(o-M,o)]}return[...f(1,e),"ellipsis",...f(d,E),"ellipsis",...f(o-e+1,o)]},[e,c,g,o]),z=i.useCallback(n=>p(Math.max(1,Math.min(o,n))),[p,o]),S=i.useCallback(()=>p(1),[p]),v=i.useCallback(()=>p(o),[p,o]),b=i.useCallback(()=>p(n=>Math.max(1,n-1)),[p]),w=i.useCallback(()=>p(n=>Math.min(o,n+1)),[p,o]),Z=i.useCallback(({ref:n,...d}={})=>({...C,...d,ref:wt(n,C.ref),"aria-label":u("Pagination"),role:"navigation"}),[C,u]),R=i.useCallback(({page:n,...d}={})=>ot(n)?{type:"button","aria-current":g===n?"page":void 0,"aria-label":u("Go to page",{value:n}),disabled:s,...d,onClick:N(d.onClick,()=>z(n))}:{...d,"data-ellipsis":""},[g,u,z,s]),y=i.useCallback((n={})=>({type:"button","aria-label":u("Go to first page"),disabled:s||g===1,...n,onClick:N(n.onClick,S)}),[S,u,s,g]),A=i.useCallback((n={})=>({type:"button","aria-label":u("Go to last page"),disabled:s||g===o,...n,onClick:N(n.onClick,v)}),[v,u,s,g,o]),B=i.useCallback((n={})=>({type:"button","aria-label":u("Go to previous page"),disabled:s||g===1,...n,onClick:N(n.onClick,b)}),[b,u,s,g]),G=i.useCallback((n={})=>({type:"button","aria-label":u("Go to next page"),disabled:s||g===o,...n,onClick:N(n.onClick,w)}),[w,u,s,g,o]);return{currentPage:g,disabled:s,range:k,total:o,getEndTriggerProps:A,getItemProps:R,getNextTriggerProps:G,getPrevTriggerProps:B,getRootProps:Z,getStartTriggerProps:y,onChange:z,onChangeEnd:v,onChangeNext:w,onChangePrev:b,onChangeStart:S}},f=(e,r)=>Array.from({length:r-e+1},(s,l)=>l+e),{withContext:I,withProvider:Qt}=Rt("pagination",qt),m=Qt(({size:e,variant:r,boundaries:s,children:l,siblings:c,withControls:o=!0,withEdges:x=!1,controlNextProps:C,controlPrevProps:g,controlProps:p,edgeEndProps:u,edgeProps:k,edgeStartProps:z,ellipsisProps:S,itemProps:v,...b})=>{const w=D(s),Z=D(c),R=D(o),y=D(x),{currentPage:A,disabled:B,range:G,total:n,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getRootProps:M,getStartTriggerProps:gt,onChange:lt,onChangeEnd:ut,onChangeNext:mt,onChangePrev:pt,onChangeStart:dt}=Kt({...b,boundaries:w,siblings:Z}),Tt=i.useMemo(()=>({currentPage:A,disabled:B,range:G,total:n,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getStartTriggerProps:gt,onChange:lt,onChangeEnd:ut,onChangeNext:mt,onChangePrev:pt,onChangeStart:dt}),[A,B,G,n,d,E,_,L,gt,lt,ut,mt,pt,dt]),It=i.useMemo(()=>{if(l)return l;{const j=[];return y&&j.push(t.jsx(vt,{children:t.jsx(h,{icon:t.jsx(zt,{}),...k,...z})})),R&&j.push(t.jsx(it,{children:t.jsx(h,{icon:t.jsx(st,{}),...p,...g})})),j.push(t.jsx(St,{render:xt=>ot(xt)?t.jsx(h,{...v,children:t.jsx(yt.span,{role:"presentation",children:xt})}):t.jsx(h,{as:"span",icon:t.jsx(Pt,{}),...S})})),R&&j.push(t.jsx(ct,{children:t.jsx(h,{icon:t.jsx(at,{}),...p,...C})})),y&&j.push(t.jsx(jt,{children:t.jsx(h,{icon:t.jsx(Ct,{}),...k,...u})})),j}},[l,y,R,v,S,k,z,u,p,g,C]);return t.jsx(Jt,{value:Tt,children:t.jsx(Mt,{as:"nav",size:e,variant:r,...M(),children:It})})},"root",{transferProps:["variant","size"]})(),St=({children:e,render:r})=>{const{range:s,getItemProps:l}=T();return i.useMemo(()=>s.map((c,o)=>{const x=e?.(c)??r?.(c);return i.isValidElement(x)?i.cloneElement(x,{...l({key:o,page:c,...x.props})}):x}),[e,l,s,r])},h=I(P,"item")(),Ut=I("span","text")(void 0,({children:e,format:r="compact",...s})=>{const{currentPage:l,total:c}=T(),{t:o}=ht("pagination"),x=i.useMemo(()=>e?Et(e,{page:l,total:c}):r==="short"?o("{value} / {total}",{total:c,value:l}):o("{value} of {total}",{total:c,value:l}),[e,l,r,c,o]);return{...s,children:x}}),vt=I("button",{name:"startTrigger",slot:["trigger","start"]})(void 0,e=>{const{getStartTriggerProps:r}=T();return{asChild:!0,...r(e)}}),jt=I("button",{name:"endTrigger",slot:["trigger","end"]})(void 0,e=>{const{getEndTriggerProps:r}=T();return{asChild:!0,...r(e)}}),it=I("button",{name:"prevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:r}=T();return{asChild:!0,...r(e)}}),ct=I("button",{name:"nextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:r}=T();return{asChild:!0,...r(e)}}),Ie={component:m,title:"Components / Pagination"},V=()=>t.jsx(m,{total:10}),O=()=>t.jsx(nt,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:_t,children:(e,r,s)=>t.jsx(m,{colorScheme:r,variant:e,total:10},s)}),H=()=>t.jsx(nt,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsx(m,{size:r,total:10},s)}),F=()=>t.jsx(m,{total:10,withEdges:!0}),$=()=>t.jsx(m,{defaultPage:3,total:10}),W=()=>t.jsx(m,{total:99}),q=()=>t.jsx(m,{siblings:2,total:99}),J=()=>t.jsx(m,{boundaries:3,total:99}),K=()=>t.jsx(m,{disabled:!0,total:10}),Q=()=>t.jsx(nt,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsxs(m,{size:r,gap:"md",total:10,children:[t.jsx(it,{children:t.jsx(h,{icon:t.jsx(st,{})})}),t.jsx(Ut,{format:e}),t.jsx(ct,{children:t.jsx(h,{icon:t.jsx(at,{})})})]},s)}),U=()=>t.jsxs(m,{size:"sm",variant:"subtle",total:10,children:[t.jsx(vt,{children:t.jsx(P,{icon:t.jsx(zt,{})})}),t.jsx(it,{children:t.jsx(P,{icon:t.jsx(st,{})})}),t.jsx(St,{render:e=>ot(e)?t.jsx(P,{variant:{base:"subtle",_current:"solid"},children:e}):t.jsx(P,{as:"span",icon:t.jsx(Pt,{})})}),t.jsx(ct,{children:t.jsx(P,{icon:t.jsx(at,{})})}),t.jsx(jt,{children:t.jsx(P,{icon:t.jsx(Ct,{})})})]}),X=()=>t.jsxs(t.Fragment,{children:[t.jsx(m,{total:10,withEdges:!0,controlProps:{icon:t.jsx(ft,{})},edgeProps:{icon:t.jsx(ft,{})},ellipsisProps:{icon:t.jsx(Nt,{})}}),t.jsx(m,{total:10,withEdges:!0,controlNextProps:{icon:t.jsx(Bt,{})},controlPrevProps:{icon:t.jsx(At,{})},edgeEndProps:{icon:t.jsx(Wt,{})},edgeStartProps:{icon:t.jsx($t,{})}})]}),Y=()=>{const[e,r]=i.useState(1);return t.jsx(m,{page:e,total:10,onChange:r})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root total={99} />;
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root siblings={2} total={99} />;
}`,...q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <Pagination.Root boundaries={3} total={99} />;
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}};const ke=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Text","CustomComponent","CustomIcon","CustomControl"];export{V as Basic,J as Boundaries,U as CustomComponent,Y as CustomControl,X as CustomIcon,$ as DefaultPage,K as Disabled,F as Edges,q as Siblings,H as Size,Q as Text,W as Total,O as Variant,ke as __namedExportsOrder,Ie as default};
