import{d as ie,c as le,r as o,L as ce,N as de,m as X,h as U,e as be,A as q,f as ue,j as e,s as Z,a1 as $,T as I,af as S}from"./iframe-DqV1pF0Y.js";import{P as y}from"./props-table-D14vFRWA.js";import{u as ee}from"./index-BNCXtwwr.js";import{I as me}from"./icon-button-CMv0JSXn.js";import{B as pe}from"./button-BhTpfwih.js";import{H as xe}from"./heading-Bb3j_Ov5.js";import{u as Te}from"./index-Bph2wCY_.js";import{u as he}from"./index-tKPH2zoG.js";import{u as fe}from"./index-u2jbJpoe.js";import{c as ne}from"./index-BDjDR5hR.js";import{X as je}from"./x-icon-CbMKLqhw.js";import{P as Pe}from"./plus-icon-CYTDhF96.js";import"./grid-DVIWBgtE.js";import"./grid-item-eH7jfJXq.js";import"./for-Jc9KR5-P.js";import"./flex-BBgO32zm.js";import"./use-ripple-DSVVW1dc.js";import"./rings-sHcC8uPJ.js";import"./use-breakpoint-C0qheGjm.js";import"./use-breakpoint-value-DSoUfoVJ.js";import"./use-color-mode-value-CfexdzMu.js";import"./createLucideIcon-dUf62_pT.js";const ge=ie({base:{list:{display:"flex"},panel:{flex:"1"},root:{display:"flex",w:"full"},tab:{alignItems:"center",cursor:"pointer",display:"flex",fontWeight:"medium",gap:"2",justifyContent:"center",transitionDuration:"moderate",transitionProperty:"common",_disabled:{layerStyle:"disabled"}}},props:{align:{center:{list:{justifyContent:"center"}},end:{list:{justifyContent:"flex-end"}},start:{list:{justifyContent:"flex-start"}}},fitted:{true:{tab:{flex:1}}},orientation:{horizontal:{list:{alignItems:"center",flexDirection:"row"},root:{flexDirection:"column"}},vertical:{list:{alignItems:"stretch",flexDirection:"column"},root:{flexDirection:"row"}}}},variants:{line:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{color:"fg.muted",focusVisibleRing:"inside",position:"relative",_selected:{color:"fg",_after:{borderColor:"colorScheme.solid",position:"absolute"},_horizontal:{_after:{borderBottomWidth:"1px",bottom:"-1px",w:"full"}},_vertical:{_after:{borderRightWidth:"1px",h:"full",right:"-1px"}}}}},outline:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{border:"1px solid transparent",color:"fg.muted",focusVisibleRing:"inside",position:"relative",_horizontal:{mb:"-1px",roundedStart:"l2"},_selected:{bg:"bg",borderColor:"border",color:"fg",_horizontal:{borderBottomColor:"transparent"},_vertical:{borderRightColor:"transparent"}},_vertical:{me:"-1px",roundedLeft:"l2"}}},plain:{tab:{color:"fg.muted",rounded:"l2",_selected:{color:"fg"}}},subtle:{tab:{border:"1px solid transparent",color:"fg.muted",rounded:"l2",_selected:{layerStyle:"subtle"}}}},sizes:{sm:{root:{gap:"sm"},tab:{fontSize:"sm",px:"3",py:"1"}},md:{root:{gap:"md"},tab:{fontSize:"md",px:"4",py:"2"}},lg:{root:{gap:"lg"},tab:{fontSize:"lg",px:"5",py:"3"}}},defaultProps:{size:"md",variant:"line",align:"start",orientation:"horizontal"}}),{DescendantsContext:ve,useDescendant:te,useDescendants:Ce}=ne(),{DescendantsContext:Re,useDescendant:se,useDescendants:ye}=ne(),[Ie,G]=le({name:"TabsContext"}),ke=({id:n,defaultIndex:s=0,index:t,manual:a=!1,orientation:i="horizontal",onChange:b,...c}={})=>{const d=o.useId(),r=Ce(),l=ye(),[h,P]=fe({defaultValue:s,value:t,onChange:b}),[x,f]=o.useState(h),j=i==="horizontal";n??=d;const v=o.useCallback(()=>{const u=r.enabledFirstValue();u&&u.node.focus()},[r]),R=o.useCallback(()=>{const u=r.enabledLastValue();u&&u.node.focus()},[r]),C=o.useCallback(()=>{const u=r.enabledNextValue(x);u&&u.node.focus()},[r,x]),g=o.useCallback(()=>{const u=r.enabledPrevValue(x);u&&u.node.focus()},[r,x]),Y=o.useCallback(u=>{ce(u,{ArrowDown:j?void 0:C,ArrowLeft:j?g:void 0,ArrowRight:j?C:void 0,ArrowUp:j?void 0:g,End:R,Home:v})},[j,C,g,R,v]);de(()=>{q(t)||(P(t),f(t))},[t]);const ae=o.useCallback(({ref:u,...re}={})=>({"data-orientation":i,...c,...re,ref:X(u,c.ref)}),[i,c]),oe=o.useCallback((u={})=>({"aria-orientation":i,role:"tablist",...u,onKeyDown:U(u.onKeyDown,Y)}),[i,Y]);return{focusedIndex:x,index:h,manual:a,orientation:i,setFocusedIndex:f,setIndex:P,tabDescendants:r,tabPanelDescendants:l,getListProps:oe,getRootProps:ae}},ze=({id:n,disabled:s,...t}={})=>{const a=o.useId(),{index:i,manual:b,orientation:c,setFocusedIndex:d,setIndex:r}=G(),{index:l,register:h}=te({disabled:s}),{descendants:P}=se(),x=P.value(l)?.node.id,f=l===i;n??=a;const j=o.useCallback(()=>{s||r(l)},[l,r,s]),v=o.useCallback(()=>{s||(d(l),b||r(l))},[d,l,b,s,r]),R=o.useCallback(({ref:C,...g}={})=>({id:n,type:"button","aria-controls":x,"aria-selected":f,"data-orientation":c,disabled:s,role:"tab",tabIndex:f?0:-1,...t,...g,ref:X(C,h),onClick:U(g.onClick,t.onClick,j),onFocus:U(g.onFocus,t.onFocus,v)}),[s,n,j,v,c,h,t,f,x]);return{index:l,selected:f,getRootProps:R}},Se=({"aria-labelledby":n,...s}={})=>{const t=o.useId(),{index:a,orientation:i}=G(),{index:b,register:c}=se(),{descendants:d}=te(),r=d.value(b)?.node.id,l=b===a,h=o.useCallback(({ref:P,"aria-labelledby":x,...f}={})=>({id:t,"aria-labelledby":be(n,x,r),"data-orientation":i,hidden:!l,role:"tabpanel",tabIndex:l?0:-1,...s,...f,ref:X(P,c)}),[t,n,i,c,s,l,r]);return{index:b,selected:l,getRootProps:h}},{ComponentContext:Me,useComponentContext:J,withContext:Q,withProvider:we}=ue("tabs",ge),m=we(({children:n,items:s,lazy:t,lazyBehavior:a,orientation:i,...b})=>{const c=he(i),{focusedIndex:d,index:r,manual:l,orientation:h,setFocusedIndex:P,setIndex:x,tabDescendants:f,tabPanelDescendants:j,getListProps:v,getRootProps:R}=ke({orientation:c,...b}),C=o.useMemo(()=>({items:s,lazy:t,lazyBehavior:a}),[s,t,a]),g=o.useMemo(()=>({focusedIndex:d,index:r,manual:l,orientation:h,setFocusedIndex:P,setIndex:x,getListProps:v}),[l,d,r,h,P,x,v]);return e.jsx(ve,{value:f,children:e.jsx(Re,{value:j,children:e.jsx(Ie,{value:g,children:e.jsx(Me,{value:C,children:e.jsx(Z.div,{...R(),children:n})})})})})},"root",{transferProps:["orientation"]})(),p=Q(({children:n,...s})=>{const{items:t}=J(),{getListProps:a}=G(),i=o.useMemo(()=>n||t?.map(({id:b,panel:c,tab:d,panelProps:r,...l},h)=>q(d)||$(d)?null:e.jsx(k,{id:b,...l,children:d},b??h)),[n,t]);return e.jsx(Z.div,{...a(s),children:i})},"list")(),k=Q("button","tab")(void 0,n=>{const{getRootProps:s}=ze(n);return s()}),T=({children:n})=>{const{items:s}=J();return o.useMemo(()=>n||s?.map(({id:t,panel:a,panelProps:i},b)=>q(a)||$(a)?null:e.jsx(z,{...i,children:a},t??b)),[n,s])},z=Q("div","panel")(void 0,n=>{const{lazy:s,lazyBehavior:t}=J(),{selected:a,getRootProps:i}=Se(n),b=Te({lazy:s,lazyBehavior:t,mounted:a,...n});return{...i(),children:b}}),en={component:m,title:"Components / Tabs"},M=()=>e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(k,{children:"孫悟空"}),e.jsx(k,{children:"ベジータ"}),e.jsx(k,{children:"フリーザ"})]}),e.jsx(z,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"}),e.jsx(z,{children:"へっ！きたねぇ花火だ"}),e.jsx(z,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]}),w=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,children:[e.jsx(p,{}),e.jsx(T,{})]})},L=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(y,{variant:"stack",columns:["horizontal","vertical"],rows:["line","outline","subtle","plain"],children:(s,t,a)=>e.jsxs(m,{variant:t,items:n,orientation:s,children:[e.jsx(p,{}),e.jsx(T,{})]},a)})},D=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(y,{variant:"stack",columns:["horizontal","vertical"],rows:["sm","md","lg"],children:(s,t,a)=>e.jsxs(m,{size:t,items:n,orientation:s,children:[e.jsx(p,{}),e.jsx(T,{})]},a)})},_=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{defaultIndex:1,items:n,children:[e.jsx(p,{}),e.jsx(T,{})]})},F=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(y,{variant:"stack",rows:["horizontal","vertical"],children:(s,t,a)=>e.jsxs(m,{items:n,orientation:t,children:[e.jsx(p,{}),e.jsx(T,{})]},a)})},B=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(y,{variant:"stack",columns:["horizontal","vertical"],rows:["start","center","end"],children:(s,t,a)=>e.jsxs(m,{align:t,items:n,minH:"xs",orientation:s,children:[e.jsx(p,{}),e.jsx(T,{})]},a)})},A=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(y,{variant:"stack",rows:["horizontal","vertical"],children:(s,t,a)=>e.jsxs(m,{fitted:!0,items:n,minH:"xs",orientation:t,children:[e.jsx(p,{}),e.jsx(T,{})]},a)})},K=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{disabled:!0,panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,children:[e.jsx(p,{}),e.jsx(T,{})]})},V=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,manual:!0,children:[e.jsx(p,{}),e.jsx(T,{})]})},H=()=>{const n=o.useMemo(()=>[{asChild:!0,panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:e.jsx(I,{as:"a",href:"#孫悟空",children:"孫悟空"})},{asChild:!0,panel:"へっ！きたねぇ花火だ",tab:e.jsx(I,{as:"a",href:"#ベジータ",children:"ベジータ"})},{asChild:!0,panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:e.jsx(I,{as:"a",href:"#フリーザ",children:"フリーザ"})}],[]);return e.jsxs(m,{items:n,children:[e.jsx(p,{}),e.jsx(T,{})]})},W=()=>{const n=()=>{const[t,a]=o.useState(1);return ee(()=>a(i=>i+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},s=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsx(y,{variant:"stack",rows:["Not Lazy","Lazy","Keep Mounted"],children:(t,a,i)=>e.jsxs(m,{items:s,lazy:a==="Lazy"||a==="Keep Mounted",lazyBehavior:a==="Keep Mounted"?"keepMounted":"unmount",children:[e.jsx(p,{}),e.jsx(T,{})]},i)})},N=()=>{const n=()=>{const[t,a]=o.useState(1);return ee(()=>a(i=>i+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},s=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsxs(m,{items:s,lazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(p,{}),e.jsx(T,{})]})},E=()=>{const[n,s]=o.useState(0),[t,a]=o.useState([{id:S(),panel:"Tab Content",tab:"Tab"},{id:S(),panel:"Tab Content",tab:"Tab"},{id:S(),panel:"Tab Content",tab:"Tab"}]),i=()=>{const c=[...t,{id:S(),panel:"Tab Content",tab:"Tab"}];a(c),s(c.length-1)},b=c=>{const d=t.findIndex(l=>l.id===c),r=t.filter(l=>l.id!==c);a(r),d<n?s(n-1):d===n&&s(Math.min(n,r.length-1))};return e.jsxs(m,{index:n,items:t,manual:!0,onChange:s,children:[e.jsxs(p,{children:[t.map(({id:c,tab:d})=>{const r=t.length>1;return e.jsxs(k,{transition:"none",children:[d,r?e.jsx(me,{as:"span",size:"2xs",variant:"ghost","aria-label":"Remove Tab",icon:e.jsx(je,{}),role:"button",onClick:l=>{l.stopPropagation(),b(c)}}):null]},c)}),e.jsx(pe,{size:"xs",variant:"ghost",role:"tab",startIcon:e.jsx(Pe,{}),onClick:i,children:"Add Tab"})]}),t.map(({id:c,panel:d},r)=>e.jsxs(z,{children:[e.jsxs(xe,{children:[d," ",c]}),e.jsxs(I,{children:["index: ",r]}),e.jsxs(I,{children:["id: ",c]})]},c))]})},O=()=>{const[n,s]=o.useState(0),t=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{index:n,items:t,onChange:s,children:[e.jsx(p,{}),e.jsx(T,{})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Tabs.Root>
      <Tabs.List>
        <Tabs.Tab>孫悟空</Tabs.Tab>
        <Tabs.Tab>ベジータ</Tabs.Tab>
        <Tabs.Tab>フリーザ</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel>
        クリリンのことか……クリリンのことかーーーっ！！！！！
      </Tabs.Panel>
      <Tabs.Panel>へっ！きたねぇ花火だ</Tabs.Panel>
      <Tabs.Panel>
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Tabs.Panel>
    </Tabs.Root>;
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["line", "outline", "subtle", "plain"]}>
      {(column, row, key) => <Tabs.Root key={key} variant={row} items={items} orientation={column}>
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
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["sm", "md", "lg"]}>
      {(column, row, key) => <Tabs.Root key={key} size={row} items={items} orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
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
  return <Tabs.Root defaultIndex={1} items={items}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>;
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
  return <PropsTable variant="stack" rows={["horizontal", "vertical"] as const}>
      {(_, row, key) => <Tabs.Root key={key} items={items} orientation={row}>
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
  return <PropsTable variant="stack" columns={["horizontal", "vertical"]} rows={["start", "center", "end"]}>
      {(column, row, key) => <Tabs.Root key={key} align={row} items={items} minH="xs" orientation={column}>
          <Tabs.List />
          <Tabs.Panels />
        </Tabs.Root>}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
      }) => {
        const hasRemove = items.length > 1;
        return <Tabs.Tab key={id} transition="none">
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
    }, index) => <Tabs.Panel key={id}>
          <Heading>
            {panel} {id}
          </Heading>

          <Text>index: {index}</Text>
          <Text>id: {id}</Text>
        </Tabs.Panel>)}
    </Tabs.Root>;
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};const nn=["Basic","Items","Variant","Size","DefaultIndex","Orientation","Align","Fitted","Disabled","Manual","Link","Lazy","LazyBehavior","Dynamic","CustomControl"];export{B as Align,M as Basic,O as CustomControl,_ as DefaultIndex,K as Disabled,E as Dynamic,A as Fitted,w as Items,W as Lazy,N as LazyBehavior,H as Link,V as Manual,F as Orientation,D as Size,L as Variant,nn as __namedExportsOrder,en as default};
