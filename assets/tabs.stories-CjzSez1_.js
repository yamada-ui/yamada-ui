import{d as oe,c as re,r as o,M as ie,O as le,m as O,h as N,e as ce,A as U,f as be,j as e,s as Y,a7 as Z,T as I,al as z}from"./iframe-BVYXOt_x.js";import{P as R}from"./props-table-CIRWgUZF.js";import{u as ee}from"./index-XLjoGSj8.js";import{I as me}from"./icon-button-98N7seJL.js";import{B as ue}from"./button-DhYNg7P2.js";import{H as de}from"./heading-BUA-B32m.js";import{u as pe}from"./index-B9suY7eb.js";import{u as xe}from"./index-D8jR06a4.js";import{u as Te}from"./index-DtmV-tx0.js";import{c as ne}from"./index-CMTHprn5.js";import{X as he}from"./x-icon-DaA4WkJU.js";import{P as fe}from"./plus-icon-9RC4MpEC.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-9LY9Mmql.js";import"./grid-item-CdNZxFgP.js";import"./for-Cq1AI6gw.js";import"./flex-DrgWVwNM.js";import"./use-ripple-u6ssX4Wq.js";import"./rings-BrWstOb1.js";import"./use-breakpoint-CAqBpJlJ.js";import"./use-breakpoint-value-Bh-BKcFh.js";import"./use-color-mode-value-Bkhxg2Cu.js";import"./createLucideIcon-CyY8KHfN.js";const ge=oe({base:{list:{display:"flex"},panel:{flex:"1"},root:{display:"flex",w:"full"},tab:{alignItems:"center",cursor:"pointer",display:"flex",fontWeight:"medium",gap:"2",justifyContent:"center",transitionDuration:"moderate",transitionProperty:"common",_disabled:{layerStyle:"disabled"}}},props:{align:{center:{list:{justifyContent:"center"}},end:{list:{justifyContent:"flex-end"}},start:{list:{justifyContent:"flex-start"}}},fitted:{true:{tab:{flex:1}}},orientation:{horizontal:{list:{alignItems:"center",flexDirection:"row"},root:{flexDirection:"column"}},vertical:{list:{alignItems:"stretch",flexDirection:"column"},root:{flexDirection:"row"}}}},variants:{line:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{color:"fg.muted",focusVisibleRing:"inside",position:"relative",_selected:{color:"fg",_after:{borderColor:"colorScheme.solid",position:"absolute"},_horizontal:{_after:{borderBottomWidth:"1px",bottom:"-1px",w:"full"}},_vertical:{_after:{borderRightWidth:"1px",h:"full",right:"-1px"}}}}},outline:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{border:"1px solid transparent",color:"fg.muted",focusVisibleRing:"inside",position:"relative",_horizontal:{mb:"-1px",roundedStart:"l2"},_selected:{bg:"bg",borderColor:"border",color:"fg",_horizontal:{borderBottomColor:"transparent"},_vertical:{borderRightColor:"transparent"}},_vertical:{me:"-1px",roundedLeft:"l2"}}},plain:{tab:{color:"fg.muted",rounded:"l2",_selected:{color:"fg"}}},subtle:{tab:{border:"1px solid transparent",color:"fg.muted",rounded:"l2",_selected:{layerStyle:"subtle"}}}},sizes:{sm:{root:{gap:"sm"},tab:{fontSize:"sm",px:"3",py:"1"}},md:{root:{gap:"md"},tab:{fontSize:"md",px:"4",py:"2"}},lg:{root:{gap:"lg"},tab:{fontSize:"lg",px:"5",py:"3"}}},defaultProps:{size:"md",variant:"line",align:"start",orientation:"horizontal"}}),{DescendantsContext:je,useDescendant:Pe,useDescendants:ve}=ne(),{DescendantsContext:Ce,useDescendant:Re,useDescendants:ye}=ne(),[Ie,X]=re({name:"TabsContext"}),ke=({id:n,defaultIndex:s=0,index:t,manual:a=!1,orientation:r="horizontal",onChange:u,...l}={})=>{const b=o.useId(),i=ve(),c=ye(),[p,f]=Te({defaultValue:s,value:t,onChange:u}),[x,g]=o.useState(p),j=r==="horizontal";n??=b;const C=o.useCallback(()=>{const m=i.enabledFirstValue();m&&m.node.focus()},[i]),v=o.useCallback(()=>{const m=i.enabledLastValue();m&&m.node.focus()},[i]),P=o.useCallback(()=>{const m=i.enabledNextValue(x);m&&m.node.focus()},[i,x]),y=o.useCallback(()=>{const m=i.enabledPrevValue(x);m&&m.node.focus()},[i,x]),k=o.useCallback(m=>{ie(m,{ArrowDown:j?void 0:P,ArrowLeft:j?y:void 0,ArrowRight:j?P:void 0,ArrowUp:j?void 0:y,End:v,Home:C})},[j,P,y,v,C]);le(()=>{U(t)||(f(t),g(t))},[t]);const te=o.useCallback(({ref:m,...ae}={})=>({"data-orientation":r,...l,...ae,ref:O(m,l.ref)}),[r,l]),se=o.useCallback((m={})=>({"aria-orientation":r,role:"tablist",...m,onKeyDown:N(m.onKeyDown,k)}),[r,k]);return{id:n,focusedIndex:x,index:p,manual:a,orientation:r,setFocusedIndex:g,setIndex:f,tabDescendants:i,tabPanelDescendants:c,getListProps:se,getRootProps:te}},ze=({id:n,disabled:s,index:t,...a})=>{const{id:r,index:u,manual:l,orientation:b,setFocusedIndex:i,setIndex:c}=X(),{register:p}=Pe({disabled:s}),f=`${r}-panel-${t}`,x=t===u;n??=`${r}-tab-${t}`;const g=o.useCallback(()=>{s||c(t)},[t,c,s]),j=o.useCallback(()=>{s||(i(t),l||c(t))},[i,t,l,s,c]),C=o.useCallback(({ref:v,...P}={})=>({id:n,type:"button","aria-controls":f,"aria-selected":x,"data-orientation":b,disabled:s,role:"tab",tabIndex:x?0:-1,...a,...P,ref:O(v,p),onClick:N(P.onClick,a.onClick,g),onFocus:N(P.onFocus,a.onFocus,j)}),[s,n,g,j,b,p,a,x,f]);return{index:t,selected:x,getRootProps:C}},Me=({id:n,"aria-labelledby":s,index:t,...a})=>{const{id:r,index:u,orientation:l}=X(),{register:b}=Re(),i=`${r}-tab-${t}`,c=t===u;n??=`${r}-panel-${t}`;const p=o.useCallback(({ref:f,"aria-labelledby":x,...g}={})=>({id:n,"aria-labelledby":ce(s,x,i),"data-orientation":l,hidden:!c,role:"tabpanel",tabIndex:c?0:-1,...a,...g,ref:O(f,b)}),[n,s,l,b,a,c,i]);return{index:t,selected:c,getRootProps:p}},{ComponentContext:Se,useComponentContext:q,withContext:G,withProvider:we}=be("tabs",ge),d=we(({children:n,items:s,lazy:t,lazyBehavior:a,orientation:r,...u})=>{const l=xe(r),{id:b,focusedIndex:i,index:c,manual:p,orientation:f,setFocusedIndex:x,setIndex:g,tabDescendants:j,tabPanelDescendants:C,getListProps:v,getRootProps:P}=ke({orientation:l,...u}),y=o.useMemo(()=>({items:s,lazy:t,lazyBehavior:a}),[s,t,a]),k=o.useMemo(()=>({id:b,focusedIndex:i,index:c,manual:p,orientation:f,setFocusedIndex:x,setIndex:g,getListProps:v}),[b,p,i,c,f,x,g,v]);return e.jsx(je,{value:j,children:e.jsx(Ce,{value:C,children:e.jsx(Ie,{value:k,children:e.jsx(Se,{value:y,children:e.jsx(Y.div,{...P(),children:n})})})})})},"root",{transferProps:["orientation"]})(),T=G(({children:n,...s})=>{const{items:t}=q(),{getListProps:a}=X(),r=o.useMemo(()=>n||t?.map(({id:u,panel:l,tab:b,panelProps:i,...c},p)=>U(b)||Z(b)?null:e.jsx(J,{id:u,index:p,...c,children:b},u??p)),[n,t]);return e.jsx(Y.div,{...a(s),children:r})},"list")(),J=G("button","tab")(void 0,n=>{const{getRootProps:s}=ze(n);return s()}),h=({children:n})=>{const{items:s}=q();return o.useMemo(()=>n||s?.map(({id:t,panel:a,panelProps:r},u)=>U(a)||Z(a)?null:e.jsx(Q,{index:u,...r,children:a},t??u)),[n,s])},Q=G("div","panel")(void 0,n=>{const{lazy:s,lazyBehavior:t}=q(),{selected:a,getRootProps:r}=Me(n),u=pe({lazy:s,lazyBehavior:t,mounted:a,...n});return{...r(),children:u}}),nn={component:d,title:"Components / Tabs"},M=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{children:[e.jsx(T,{children:n.map(({tab:s},t)=>e.jsx(J,{index:t,children:s},t))}),n.map(({panel:s},t)=>e.jsx(Q,{index:t,children:s},t))]})},S=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},w=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(R,{variant:"stack",columns:["horizontal","vertical"],rows:["line","outline","subtle","plain"],children:(s,t,a)=>e.jsxs(d,{variant:t,items:n,orientation:s,children:[e.jsx(T,{}),e.jsx(h,{})]},a)})},L=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(R,{variant:"stack",columns:["horizontal","vertical"],rows:["sm","md","lg"],children:(s,t,a)=>e.jsxs(d,{size:t,items:n,orientation:s,children:[e.jsx(T,{}),e.jsx(h,{})]},a)})},D=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{defaultIndex:1,items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},_=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(R,{variant:"stack",rows:["horizontal","vertical"],children:(s,t,a)=>e.jsxs(d,{items:n,orientation:t,children:[e.jsx(T,{}),e.jsx(h,{})]},a)})},F=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(R,{variant:"stack",columns:["horizontal","vertical"],rows:["start","center","end"],children:(s,t,a)=>e.jsxs(d,{align:t,items:n,minH:"xs",orientation:s,children:[e.jsx(T,{}),e.jsx(h,{})]},a)})},B=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(R,{variant:"stack",rows:["horizontal","vertical"],children:(s,t,a)=>e.jsxs(d,{fitted:!0,items:n,minH:"xs",orientation:t,children:[e.jsx(T,{}),e.jsx(h,{})]},a)})},A=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{disabled:!0,panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},K=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{items:n,manual:!0,children:[e.jsx(T,{}),e.jsx(h,{})]})},V=()=>{const n=o.useMemo(()=>[{asChild:!0,panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:e.jsx(I,{as:"a",href:"#孫悟空",children:"孫悟空"})},{asChild:!0,panel:"へっ！きたねぇ花火だ",tab:e.jsx(I,{as:"a",href:"#ベジータ",children:"ベジータ"})},{asChild:!0,panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:e.jsx(I,{as:"a",href:"#フリーザ",children:"フリーザ"})}],[]);return e.jsxs(d,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},H=()=>{const n=()=>{const[t,a]=o.useState(1);return ee(()=>a(r=>r+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},s=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsx(R,{variant:"stack",rows:["Not Lazy","Lazy","Keep Mounted"],children:(t,a,r)=>e.jsxs(d,{items:s,lazy:a==="Lazy"||a==="Keep Mounted",lazyBehavior:a==="Keep Mounted"?"keepMounted":"unmount",children:[e.jsx(T,{}),e.jsx(h,{})]},r)})},$=()=>{const n=()=>{const[t,a]=o.useState(1);return ee(()=>a(r=>r+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},s=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsxs(d,{items:s,lazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(T,{}),e.jsx(h,{})]})},W=()=>{const[n,s]=o.useState(0),[t,a]=o.useState([{id:z(),panel:"Tab Content",tab:"Tab"},{id:z(),panel:"Tab Content",tab:"Tab"},{id:z(),panel:"Tab Content",tab:"Tab"}]),r=()=>{const l=[...t,{id:z(),panel:"Tab Content",tab:"Tab"}];a(l),s(l.length-1)},u=l=>{const b=t.findIndex(c=>c.id===l),i=t.filter(c=>c.id!==l);a(i),b<n?s(n-1):b===n&&s(Math.min(n,i.length-1))};return e.jsxs(d,{index:n,items:t,manual:!0,onChange:s,children:[e.jsxs(T,{children:[t.map(({id:l,tab:b},i)=>{const c=t.length>1;return e.jsxs(J,{index:i,transition:"none",children:[b,c?e.jsx(me,{as:"span",size:"2xs",variant:"ghost","aria-label":"Remove Tab",icon:e.jsx(he,{}),role:"button",onClick:p=>{p.stopPropagation(),u(l)}}):null]},l)}),e.jsx(ue,{size:"xs",variant:"ghost",role:"tab",startIcon:e.jsx(fe,{}),onClick:r,children:"Add Tab"})]}),t.map(({id:l,panel:b},i)=>e.jsxs(Q,{index:i,children:[e.jsxs(de,{children:[b," ",l]}),e.jsxs(I,{children:["index: ",i]}),e.jsxs(I,{children:["id: ",l]})]},l))]})},E=()=>{const[n,s]=o.useState(0),t=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(d,{index:n,items:t,onChange:s,children:[e.jsx(T,{}),e.jsx(h,{})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root>
      <Tabs.List>
        {items.map(({
        tab
      }, index) => <Tabs.Tab key={index} index={index}>
            {tab}
          </Tabs.Tab>)}
      </Tabs.List>

      {items.map(({
      panel
    }, index) => <Tabs.Panel key={index} index={index}>
          {panel}
        </Tabs.Panel>)}
    </Tabs.Root>;
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["line", "outline", "subtle", "plain"]}>
      {(column, row, key) => <Tabs.Root key={key} variant={row} items={items} orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["sm", "md", "lg"]}>
      {(column, row, key) => <Tabs.Root key={key} size={row} items={items} orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root defaultIndex={1} items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
      {(_, row, key) => <Tabs.Root key={key} items={items} orientation={row}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["start", "center", "end"]}>
      {(column, row, key) => <Tabs.Root key={key} align={row} items={items} minH="xs" orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
      {(_, row, key) => <Tabs.Root key={key} fitted items={items} minH="xs" orientation={row}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    disabled: true,
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...A.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root items={items} manual>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    asChild: true,
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: <Text as="a" href="#孫悟空">
            孫悟空
          </Text>
  }, {
    asChild: true,
    panel: "へっ！きたねぇ花火だ",
    tab: <Text as="a" href="#ベジータ">
            ベジータ
          </Text>
  }, {
    asChild: true,
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: <Text as="a" href="#フリーザ">
            フリーザ
          </Text>
  }], []);
  return <Tabs.Root items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1);
    useInterval(() => setState(prev => prev + 1), 1000);
    return <>Panel {state}</>;
  };
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: <Panel />,
    tab: "Tab 1"
  }, {
    panel: <Panel />,
    tab: "Tab 2"
  }, {
    panel: <Panel />,
    tab: "Tab 3"
  }], []);
  return <PropsTable variant="stack" rows={["Not Lazy", "Lazy", "Keep Mounted"] as const}>
      {(_, row, key) => <Tabs.Root key={key} items={items} lazy={row === "Lazy" || row === "Keep Mounted"} lazyBehavior={row === "Keep Mounted" ? "keepMounted" : "unmount"}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1);
    useInterval(() => setState(prev => prev + 1), 1000);
    return <>Panel {state}</>;
  };
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: <Panel />,
    tab: "Tab 1"
  }, {
    panel: <Panel />,
    tab: "Tab 2"
  }, {
    panel: <Panel />,
    tab: "Tab 3"
  }], []);
  return <Tabs.Root items={items} lazy lazyBehavior="keepMounted">
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...$.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState<Required<Tabs.RootProps>["items"]>([{
    id: uuid(),
    panel: "Tab Content",
    tab: "Tab"
  }, {
    id: uuid(),
    panel: "Tab Content",
    tab: "Tab"
  }, {
    id: uuid(),
    panel: "Tab Content",
    tab: "Tab"
  }]);
  const onAddTab = () => {
    const nextItems = [...items, {
      id: uuid(),
      panel: "Tab Content",
      tab: "Tab"
    }];
    setItems(nextItems);
    setIndex(nextItems.length - 1);
  };
  const onRemoveTab = (id: string) => {
    const removeIndex = items.findIndex(item => item.id === id);
    const nextItems = items.filter(item => item.id !== id);
    setItems(nextItems);
    if (removeIndex < index) {
      setIndex(index - 1);
    } else if (removeIndex === index) {
      setIndex(Math.min(index, nextItems.length - 1));
    }
  };
  return <Tabs.Root index={index} items={items} manual onChange={setIndex}>
      <Tabs.List>
        {items.map(({
        id,
        tab
      }, index) => {
        const hasRemove = items.length > 1;
        return <Tabs.Tab key={id} index={index} transition="none">
              {tab}
              {hasRemove ? <IconButton as="span" size="2xs" variant="ghost" aria-label="Remove Tab" icon={<XIcon />} role="button" onClick={ev => {
            ev.stopPropagation();
            onRemoveTab(id!);
          }} /> : null}
            </Tabs.Tab>;
      })}

        <Button size="xs" variant="ghost" role="tab" startIcon={<PlusIcon />} onClick={onAddTab}>
          Add Tab
        </Button>
      </Tabs.List>

      {items.map(({
      id,
      panel
    }, index) => <Tabs.Panel key={id} index={index}>
          <Heading>
            {panel} {id}
          </Heading>

          <Text>index: {index}</Text>
          <Text>id: {id}</Text>
        </Tabs.Panel>)}
    </Tabs.Root>;
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const items = useMemo<Tabs.RootProps["items"]>(() => [{
    panel: "クリリンのことか……クリリンのことかーーーっ！！！！！",
    tab: "孫悟空"
  }, {
    panel: "へっ！きたねぇ花火だ",
    tab: "ベジータ"
  }, {
    panel: "私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",
    tab: "フリーザ"
  }], []);
  return <Tabs.Root index={index} items={items} onChange={setIndex}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
}`,...E.parameters?.docs?.source}}};const tn=["Basic","Items","Variant","Size","DefaultIndex","Orientation","Align","Fitted","Disabled","Manual","Link","Lazy","LazyBehavior","Dynamic","CustomControl"];export{F as Align,M as Basic,E as CustomControl,D as DefaultIndex,A as Disabled,W as Dynamic,B as Fitted,S as Items,H as Lazy,$ as LazyBehavior,V as Link,K as Manual,_ as Orientation,L as Size,w as Variant,tn as __namedExportsOrder,nn as default};
