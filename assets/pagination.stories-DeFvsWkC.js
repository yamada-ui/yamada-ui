import{l as et,I as ot,d as bt,c as wt,z as Pt,r as i,m as Rt,S as nt,h as A,f as yt,j as t,s as Et,g as _t,C as Lt}from"./iframe-BHZTlJ0V.js";import{P as rt}from"./props-table-C4SE-e-6.js";import{i as a,I as P}from"./icon-button-DctN4AEW.js";import{c as st}from"./createLucideIcon-D8IHT0xS.js";import{u as D}from"./index-DBNyBkxR.js";import{u as Mt}from"./index-hNShLvyX.js";import{E as Ct,C as zt}from"./ellipsis-icon-BUH6qwdM.js";import{C as at,A as At}from"./chevron-left-icon-Ct06fwFg.js";import{C as it}from"./chevron-right-icon-BHGnFtDf.js";import{B as Nt}from"./button-group-Co0wmiCm.js";import{M as Bt}from"./minus-icon-zeaL7_uo.js";import{G as ft}from"./ghost-icon-BSMgcb0O.js";import{A as Gt}from"./arrow-right-icon-BFbENAI3.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-ftZgIPsh.js";import"./grid-item-DzHPtOXT.js";import"./for-VorXHFQH.js";import"./flex-DAlkda-X.js";import"./heading-CZleZHQ4.js";import"./button-BB2ssYQZ.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./use-breakpoint-BHTgFfav.js";import"./use-breakpoint-value-DTZaut4a.js";import"./use-color-mode-value-ZthzxX7p.js";import"./group-DVyg0qWk.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],Vt=st("arrow-left-to-line",Dt);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Ht=st("arrow-right-to-line",Ot);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],$t=st("chevrons-left",Ft),Wt=et(ot)({as:Vt}),qt=et(ot)({as:Ht}),St=et(ot)({as:$t}),Jt=bt({base:{item:{fontWeight:"normal",_current:{cursor:"default",pointerEvents:"none"}},root:{"& > [data-ellipsis]":{pointerEvents:"none"}},text:{alignItems:"center",display:"flex",justifyContent:"center"}},variants:{outline:{item:{...a.variants?.ghost,_current:{...a.variants?.outline}}},solid:{item:{...a.variants?.ghost,_current:{...a.variants?.solid}}},subtle:{item:{...a.variants?.ghost,_current:{...a.variants?.subtle}}},surface:{item:{...a.variants?.ghost,_current:{...a.variants?.surface}}}},sizes:{xs:{item:{...a.sizes?.xs,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xs.fontSize}},root:{"--font-size":"fontSizes.sm"},text:{fontSize:"{font-size}"}},sm:{item:{...a.sizes?.sm,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.sm.fontSize}},root:{"--font-size":"fontSizes.md"},text:{fontSize:"{font-size}"}},md:{item:{...a.sizes?.md,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.md.fontSize}},root:{"--font-size":"fontSizes.lg"},text:{fontSize:"{font-size}"}},lg:{item:{...a.sizes?.lg,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.lg.fontSize}},root:{"--font-size":"fontSizes.xl"},text:{fontSize:"{font-size}"}},xl:{item:{...a.sizes?.xl,fontSize:"{font-size}",_icon:{fontSize:a.sizes?.xl.fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}},"2xl":{item:{...a.sizes?.["2xl"],fontSize:"{font-size}",_icon:{fontSize:a.sizes?.["2xl"].fontSize}},root:{"--font-size":"fontSizes.2xl"},text:{fontSize:"{font-size}"}}},defaultProps:{size:"md",variant:"solid"}}),[Kt,T]=wt({name:"PaginationContext"}),Qt=({boundaries:e=1,defaultPage:r=1,disabled:s=!1,page:u,siblings:c=1,total:o,onChange:x,...C})=>{const[l,p]=Mt({defaultValue:r,value:u,onChange:x}),{t:m}=Pt("pagination"),k=i.useMemo(()=>{if(c*2+3+e*2>=o)return h(1,o);const d=Math.max(l-c,e),E=Math.min(l+c,o-e),_=d>e+2,L=E<o-(e+1);if(!_&&L){const M=c*2+e+2;return[...h(1,M),"ellipsis",...h(o-(e-1),o)]}if(_&&!L){const M=e+1+2*c;return[...h(1,e),"ellipsis",...h(o-M,o)]}return[...h(1,e),"ellipsis",...h(d,E),"ellipsis",...h(o-e+1,o)]},[e,c,l,o]),z=i.useCallback(n=>p(Math.max(1,Math.min(o,n))),[p,o]),S=i.useCallback(()=>p(1),[p]),v=i.useCallback(()=>p(o),[p,o]),b=i.useCallback(()=>p(n=>Math.max(1,n-1)),[p]),w=i.useCallback(()=>p(n=>Math.min(o,n+1)),[p,o]),tt=i.useCallback(({ref:n,...d}={})=>({...C,...d,ref:Rt(n,C.ref),"aria-label":m("Pagination"),role:"navigation"}),[C,m]),R=i.useCallback(({page:n,...d}={})=>nt(n)?{type:"button","aria-current":l===n?"page":void 0,"aria-label":m("Go to page",{value:n}),disabled:s,...d,onClick:A(d.onClick,()=>z(n))}:{...d,"data-ellipsis":""},[l,m,z,s]),y=i.useCallback((n={})=>({type:"button","aria-label":m("Go to first page"),disabled:s||l===1,...n,onClick:A(n.onClick,S)}),[S,m,s,l]),N=i.useCallback((n={})=>({type:"button","aria-label":m("Go to last page"),disabled:s||l===o,...n,onClick:A(n.onClick,v)}),[v,m,s,l,o]),B=i.useCallback((n={})=>({type:"button","aria-label":m("Go to previous page"),disabled:s||l===1,...n,onClick:A(n.onClick,b)}),[b,m,s,l]),G=i.useCallback((n={})=>({type:"button","aria-label":m("Go to next page"),disabled:s||l===o,...n,onClick:A(n.onClick,w)}),[w,m,s,l,o]);return{currentPage:l,disabled:s,range:k,total:o,getEndTriggerProps:N,getItemProps:R,getNextTriggerProps:G,getPrevTriggerProps:B,getRootProps:tt,getStartTriggerProps:y,onChange:z,onChangeEnd:v,onChangeNext:w,onChangePrev:b,onChangeStart:S}},h=(e,r)=>Array.from({length:r-e+1},(s,u)=>u+e),{withContext:I,withProvider:Ut}=yt("pagination",Jt),g=Ut(({size:e,variant:r,boundaries:s,children:u,siblings:c,withControls:o=!0,withEdges:x=!1,controlNextProps:C,controlPrevProps:l,controlProps:p,edgeEndProps:m,edgeProps:k,edgeStartProps:z,ellipsisProps:S,itemProps:v,...b})=>{const w=D(s),tt=D(c),R=D(o),y=D(x),{currentPage:N,disabled:B,range:G,total:n,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getRootProps:M,getStartTriggerProps:gt,onChange:ut,onChangeEnd:mt,onChangeNext:pt,onChangePrev:dt,onChangeStart:xt}=Qt({...b,boundaries:w,siblings:tt}),It=i.useMemo(()=>({currentPage:N,disabled:B,range:G,total:n,getEndTriggerProps:d,getItemProps:E,getNextTriggerProps:_,getPrevTriggerProps:L,getStartTriggerProps:gt,onChange:ut,onChangeEnd:mt,onChangeNext:pt,onChangePrev:dt,onChangeStart:xt}),[N,B,G,n,d,E,_,L,gt,ut,mt,pt,dt,xt]),kt=i.useMemo(()=>{if(u)return u;{const j=[];return y&&j.push(t.jsx(jt,{children:t.jsx(f,{icon:t.jsx(St,{}),...k,...z})})),R&&j.push(t.jsx(ct,{children:t.jsx(f,{icon:t.jsx(at,{}),...p,...l})})),j.push(t.jsx(vt,{render:ht=>nt(ht)?t.jsx(f,{...v,children:t.jsx(Et.span,{role:"presentation",children:ht})}):t.jsx(f,{as:"span",icon:t.jsx(Ct,{}),...S})})),R&&j.push(t.jsx(lt,{children:t.jsx(f,{icon:t.jsx(it,{}),...p,...C})})),y&&j.push(t.jsx(Tt,{children:t.jsx(f,{icon:t.jsx(zt,{}),...k,...m})})),j}},[u,y,R,v,S,k,z,m,p,l,C]);return t.jsx(Kt,{value:It,children:t.jsx(Nt,{as:"nav",size:e,variant:r,...M(),children:kt})})},"root",{transferProps:["variant","size"]})(),vt=({children:e,render:r})=>{const{range:s,getItemProps:u}=T();return i.useMemo(()=>s.map((c,o)=>{const x=e?.(c)??r?.(c);return i.isValidElement(x)?i.cloneElement(x,{...u({key:o,page:c,...x.props})}):x}),[e,u,s,r])},f=I(P,"item")(),Xt=I("span","text")(void 0,({children:e,format:r="compact",...s})=>{const{currentPage:u,total:c}=T(),{t:o}=Pt("pagination"),x=i.useMemo(()=>e?_t(e,{page:u,total:c}):r==="short"?o("{value} / {total}",{total:c,value:u}):o("{value} of {total}",{total:c,value:u}),[e,u,r,c,o]);return{...s,children:x}}),jt=I("button",{name:"startTrigger",slot:["trigger","start"]})(void 0,e=>{const{getStartTriggerProps:r}=T();return{asChild:!0,...r(e)}}),Tt=I("button",{name:"endTrigger",slot:["trigger","end"]})(void 0,e=>{const{getEndTriggerProps:r}=T();return{asChild:!0,...r(e)}}),ct=I("button",{name:"prevTrigger",slot:["trigger","prev"]})(void 0,e=>{const{getPrevTriggerProps:r}=T();return{asChild:!0,...r(e)}}),lt=I("button",{name:"nextTrigger",slot:["trigger","next"]})(void 0,e=>{const{getNextTriggerProps:r}=T();return{asChild:!0,...r(e)}}),Te={component:g,title:"Components / Pagination"},V=()=>t.jsx(g,{total:10}),O=()=>t.jsx(rt,{variant:"stack",columns:["solid","subtle","surface","outline"],rows:Lt,children:(e,r,s)=>t.jsx(g,{colorScheme:r,variant:e,total:10},s)}),H=()=>t.jsx(rt,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsx(g,{size:r,total:10},s)}),F=()=>t.jsx(g,{total:10,withEdges:!0}),$=()=>t.jsx(g,{defaultPage:3,total:10}),W=()=>t.jsx(g,{total:99}),q=()=>t.jsx(g,{siblings:2,total:99}),J=()=>t.jsx(g,{boundaries:3,total:99}),K=()=>t.jsx(g,{disabled:!0,total:10}),Q=()=>t.jsx(g,{variant:"outline",attached:!0,total:10}),U=()=>t.jsx(rt,{variant:"stack",columns:["short","compact"],rows:["xs","sm","md","lg","xl"],children:(e,r,s)=>t.jsxs(g,{size:r,gap:"md",total:10,children:[t.jsx(ct,{children:t.jsx(f,{icon:t.jsx(at,{})})}),t.jsx(Xt,{format:e}),t.jsx(lt,{children:t.jsx(f,{icon:t.jsx(it,{})})})]},s)}),X=()=>t.jsxs(g,{size:"sm",variant:"subtle",total:10,children:[t.jsx(jt,{children:t.jsx(P,{icon:t.jsx(St,{})})}),t.jsx(ct,{children:t.jsx(P,{icon:t.jsx(at,{})})}),t.jsx(vt,{render:e=>nt(e)?t.jsx(P,{variant:{base:"subtle",_current:"solid"},children:e}):t.jsx(P,{as:"span",icon:t.jsx(Ct,{})})}),t.jsx(lt,{children:t.jsx(P,{icon:t.jsx(it,{})})}),t.jsx(Tt,{children:t.jsx(P,{icon:t.jsx(zt,{})})})]}),Y=()=>t.jsxs(t.Fragment,{children:[t.jsx(g,{total:10,withEdges:!0,controlProps:{icon:t.jsx(ft,{})},edgeProps:{icon:t.jsx(ft,{})},ellipsisProps:{icon:t.jsx(Bt,{})}}),t.jsx(g,{total:10,withEdges:!0,controlNextProps:{icon:t.jsx(Gt,{})},controlPrevProps:{icon:t.jsx(At,{})},edgeEndProps:{icon:t.jsx(qt,{})},edgeStartProps:{icon:t.jsx(Wt,{})}})]}),Z=()=>{const[e,r]=i.useState(1);return t.jsx(g,{page:e,total:10,onChange:r})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
  return <Pagination.Root variant="outline" attached total={10} />;
}`,...Q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <Pagination.Root page={page} total={10} onChange={setPage} />;
}`,...Z.parameters?.docs?.source}}};const Ie=["Basic","Variant","Size","Edges","DefaultPage","Total","Siblings","Boundaries","Disabled","Attached","Text","CustomComponent","CustomIcon","CustomControl"];export{Q as Attached,V as Basic,J as Boundaries,X as CustomComponent,Z as CustomControl,Y as CustomIcon,$ as DefaultPage,K as Disabled,F as Edges,q as Siblings,H as Size,U as Text,W as Total,O as Variant,Ie as __namedExportsOrder,Te as default};
