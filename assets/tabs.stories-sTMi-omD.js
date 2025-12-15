import{d as qe,c as Ge,r as o,a as Je,N as Ye,m as O,h as E,f as en,H as U,g as nn,j as e,s as Ne,ah as Ee,T as k,bZ as z,Z as tn,X as an,Q as sn}from"./iframe-C1QqsVA9.js";import{P}from"./props-table-CLqbYtSs.js";import{u as Oe}from"./index-BbjHcVCo.js";import{H as on}from"./heading-V-V_Ybpq.js";import{u as rn}from"./index-Mb_3wvu-.js";import{u as ln}from"./index-BSgcRBWk.js";import{u as cn}from"./index-CuD_K0yg.js";import{c as Ue}from"./index-7fSqCk3c.js";import{P as bn}from"./plus-icon-DqZup0li.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DHpvRiol.js";import"./grid-item-Cxe7QMy1.js";import"./for-Be_orN7T.js";import"./flex-Bs-NHhmm.js";import"./use-breakpoint-CoNcer5t.js";import"./use-breakpoint-value-D2WNVgM0.js";import"./use-color-mode-value-CLV_hip_.js";const un=qe({base:{list:{display:"flex"},panel:{flex:"1"},root:{display:"flex",w:"full"},tab:{alignItems:"center",cursor:"pointer",display:"flex",fontWeight:"medium",gap:"2",justifyContent:"center",transitionDuration:"moderate",transitionProperty:"common",_disabled:{layerStyle:"disabled"}}},props:{align:{center:{list:{justifyContent:"center"}},end:{list:{justifyContent:"flex-end"}},start:{list:{justifyContent:"flex-start"}}},fitted:{true:{tab:{flex:1}}},orientation:{horizontal:{list:{alignItems:"center",flexDirection:"row"},root:{flexDirection:"column"}},vertical:{list:{alignItems:"stretch",flexDirection:"column"},root:{flexDirection:"row"}}}},variants:{line:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{color:"fg.muted",focusVisibleRing:"inside",position:"relative",_selected:{color:"fg",_after:{borderColor:"colorScheme.solid",position:"absolute"},_horizontal:{_after:{borderBottomWidth:"1px",bottom:"-1px",w:"full"}},_vertical:{_after:{borderRightWidth:"1px",h:"full",right:"-1px"}}}}},outline:{list:{_horizontal:{borderBottomWidth:"1px"},_vertical:{borderRightWidth:"1px"}},tab:{border:"1px solid transparent",color:"fg.muted",focusVisibleRing:"inside",position:"relative",_horizontal:{mb:"-1px",roundedStart:"l2"},_vertical:{me:"-1px",roundedLeft:"l2"},_selected:{bg:"bg",borderColor:"border",color:"fg",_horizontal:{borderBottomColor:"transparent"},_vertical:{borderRightColor:"transparent"}}}},plain:{tab:{color:"fg.muted",rounded:"l2",_selected:{color:"fg"}}},subtle:{tab:{border:"1px solid transparent",color:"fg.muted",rounded:"l2",_selected:{layerStyle:"subtle"}}}},sizes:{sm:{root:{gap:"sm"},tab:{fontSize:"sm",px:"3",py:"1"}},md:{root:{gap:"md"},tab:{fontSize:"md",px:"4",py:"2"}},lg:{root:{gap:"lg"},tab:{fontSize:"lg",px:"5",py:"3"}}},defaultProps:{size:"md",variant:"line",align:"start",orientation:"horizontal"}}),{DescendantsContext:dn,useDescendant:mn,useDescendants:pn}=Ue(),{DescendantsContext:xn,useDescendant:Tn,useDescendants:hn}=Ue(),[fn,X]=Ge({name:"TabsContext"}),gn=({id:n,defaultIndex:a=0,index:t,manual:s=!1,orientation:r="horizontal",onChange:d,...l}={})=>{const b=o.useId(),i=pn(),c=hn(),[p,f]=cn({defaultValue:a,value:t,onChange:d}),[x,g]=o.useState(p),j=r==="horizontal";n??(n=b);const C=o.useCallback(()=>{const u=i.enabledFirstValue();u&&u.node.focus()},[i]),I=o.useCallback(()=>{const u=i.enabledLastValue();u&&u.node.focus()},[i]),v=o.useCallback(()=>{const u=i.enabledNextValue(x);u&&u.node.focus()},[i,x]),y=o.useCallback(()=>{const u=i.enabledPrevValue(x);u&&u.node.focus()},[i,x]),R=o.useCallback(u=>{Je(u,{ArrowDown:j?void 0:v,ArrowLeft:j?y:void 0,ArrowRight:j?v:void 0,ArrowUp:j?void 0:y,End:I,Home:C})},[j,v,y,I,C]);Ye(()=>{U(t)||(f(t),g(t))},[t]);const Xe=o.useCallback(({ref:u,...Qe}={})=>({"data-orientation":r,...l,...Qe,ref:O(u,l.ref)}),[r,l]),Ze=o.useCallback((u={})=>({"aria-orientation":r,role:"tablist",...u,onKeyDown:E(u.onKeyDown,R)}),[r,R]);return{id:n,focusedIndex:x,index:p,manual:s,orientation:r,setFocusedIndex:g,setIndex:f,tabDescendants:i,tabPanelDescendants:c,getListProps:Ze,getRootProps:Xe}},jn=({id:n,disabled:a,index:t,...s})=>{const{id:r,index:d,manual:l,orientation:b,setFocusedIndex:i,setIndex:c}=X(),{register:p}=mn({disabled:a}),f=`${r}-panel-${t}`,x=t===d;n??(n=`${r}-tab-${t}`);const g=o.useCallback(()=>{a||c(t)},[t,c,a]),j=o.useCallback(()=>{a||(i(t),l||c(t))},[i,t,l,a,c]),C=o.useCallback(({ref:I,...v}={})=>({id:n,type:"button","aria-controls":f,"aria-selected":x,"data-orientation":b,disabled:a,role:"tab",tabIndex:x?0:-1,...s,...v,ref:O(I,p),onClick:E(v.onClick,s.onClick,g),onFocus:E(v.onFocus,s.onFocus,j)}),[a,n,g,j,b,p,s,x,f]);return{index:t,selected:x,getRootProps:C}},vn=({id:n,"aria-labelledby":a,index:t,...s})=>{const{id:r,index:d,orientation:l}=X(),{register:b}=Tn(),i=`${r}-tab-${t}`,c=t===d;n??(n=`${r}-panel-${t}`);const p=o.useCallback(({ref:f,"aria-labelledby":x,...g}={})=>({id:n,"aria-labelledby":en(a,x,i),"data-orientation":l,hidden:!c,role:"tabpanel",tabIndex:c?0:-1,...s,...g,ref:O(f,b)}),[n,a,l,b,s,c,i]);return{index:t,selected:c,getRootProps:p}},{ComponentContext:In,useComponentContext:Z,withContext:Q,withProvider:Cn}=nn("tabs",un),m=Cn(({children:n,items:a,lazy:t,lazyBehavior:s,orientation:r,...d})=>{const l=ln(r),{id:b,focusedIndex:i,index:c,manual:p,orientation:f,setFocusedIndex:x,setIndex:g,tabDescendants:j,tabPanelDescendants:C,getListProps:I,getRootProps:v}=gn({orientation:l,...d}),y=o.useMemo(()=>({items:a,lazy:t,lazyBehavior:s}),[a,t,s]),R=o.useMemo(()=>({id:b,focusedIndex:i,index:c,manual:p,orientation:f,setFocusedIndex:x,setIndex:g,getListProps:I}),[b,p,i,c,f,x,g,I]);return e.jsx(dn,{value:j,children:e.jsx(xn,{value:C,children:e.jsx(fn,{value:R,children:e.jsx(In,{value:y,children:e.jsx(Ne.div,{...v(),children:n})})})})})},"root",{transferProps:["orientation"]})(),T=Q(({children:n,...a})=>{const{items:t}=Z(),{getListProps:s}=X(),r=o.useMemo(()=>n||(t==null?void 0:t.map(({id:d,panel:l,tab:b,panelProps:i,...c},p)=>U(b)||Ee(b)?null:e.jsx(q,{id:d,index:p,...c,children:b},d??p))),[n,t]);return e.jsx(Ne.div,{...s(a),children:r})},"list")(),q=Q("button","tab")(void 0,n=>{const{getRootProps:a}=jn(n);return a()}),h=({children:n})=>{const{items:a}=Z();return o.useMemo(()=>n||(a==null?void 0:a.map(({id:t,panel:s,panelProps:r},d)=>U(s)||Ee(s)?null:e.jsx(G,{index:d,...r,children:s},t??d))),[n,a])},G=Q("div","panel")(void 0,n=>{const{lazy:a,lazyBehavior:t}=Z(),{selected:s,getRootProps:r}=vn(n),d=rn({lazy:a,lazyBehavior:t,mounted:s,...n});return{...r(),children:d}}),$n={component:m,title:"Components / Tabs"},M=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{children:[e.jsx(T,{children:n.map(({tab:a},t)=>e.jsx(q,{index:t,children:a},t))}),n.map(({panel:a},t)=>e.jsx(G,{index:t,children:a},t))]})},S=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},w=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(P,{variant:"stack",columns:["horizontal","vertical"],rows:["line","outline","subtle","plain"],children:(a,t,s)=>e.jsxs(m,{variant:t,items:n,orientation:a,children:[e.jsx(T,{}),e.jsx(h,{})]},s)})},L=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(P,{variant:"stack",columns:["horizontal","vertical"],rows:["sm","md","lg"],children:(a,t,s)=>e.jsxs(m,{size:t,items:n,orientation:a,children:[e.jsx(T,{}),e.jsx(h,{})]},s)})},D=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{defaultIndex:1,items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},_=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(P,{variant:"stack",rows:["horizontal","vertical"],children:(a,t,s)=>e.jsxs(m,{items:n,orientation:t,children:[e.jsx(T,{}),e.jsx(h,{})]},s)})},F=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(P,{variant:"stack",columns:["horizontal","vertical"],rows:["start","center","end"],children:(a,t,s)=>e.jsxs(m,{align:t,items:n,minH:"xs",orientation:a,children:[e.jsx(T,{}),e.jsx(h,{})]},s)})},B=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsx(P,{variant:"stack",rows:["horizontal","vertical"],children:(a,t,s)=>e.jsxs(m,{fitted:!0,items:n,minH:"xs",orientation:t,children:[e.jsx(T,{}),e.jsx(h,{})]},s)})},A=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{disabled:!0,panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},H=()=>{const n=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{items:n,manual:!0,children:[e.jsx(T,{}),e.jsx(h,{})]})},K=()=>{const n=o.useMemo(()=>[{asChild:!0,panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:e.jsx(k,{as:"a",href:"#孫悟空",children:"孫悟空"})},{asChild:!0,panel:"へっ！きたねぇ花火だ",tab:e.jsx(k,{as:"a",href:"#ベジータ",children:"ベジータ"})},{asChild:!0,panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:e.jsx(k,{as:"a",href:"#フリーザ",children:"フリーザ"})}],[]);return e.jsxs(m,{items:n,children:[e.jsx(T,{}),e.jsx(h,{})]})},V=()=>{const n=()=>{const[t,s]=o.useState(1);return Oe(()=>s(r=>r+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},a=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsx(P,{variant:"stack",rows:["Not Lazy","Lazy","Keep Mounted"],children:(t,s,r)=>e.jsxs(m,{items:a,lazy:s==="Lazy"||s==="Keep Mounted",lazyBehavior:s==="Keep Mounted"?"keepMounted":"unmount",children:[e.jsx(T,{}),e.jsx(h,{})]},r)})},$=()=>{const n=()=>{const[t,s]=o.useState(1);return Oe(()=>s(r=>r+1),1e3),e.jsxs(e.Fragment,{children:["Panel ",t]})},a=o.useMemo(()=>[{panel:e.jsx(n,{}),tab:"Tab 1"},{panel:e.jsx(n,{}),tab:"Tab 2"},{panel:e.jsx(n,{}),tab:"Tab 3"}],[]);return e.jsxs(m,{items:a,lazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(T,{}),e.jsx(h,{})]})},W=()=>{const[n,a]=o.useState(0),[t,s]=o.useState([{id:z(),panel:"Tab Content",tab:"Tab"},{id:z(),panel:"Tab Content",tab:"Tab"},{id:z(),panel:"Tab Content",tab:"Tab"}]),r=()=>{const l=[...t,{id:z(),panel:"Tab Content",tab:"Tab"}];s(l),a(l.length-1)},d=l=>{const b=t.findIndex(c=>c.id===l),i=t.filter(c=>c.id!==l);s(i),b<n?a(n-1):b===n&&a(Math.min(n,i.length-1))};return e.jsxs(m,{index:n,items:t,manual:!0,onChange:a,children:[e.jsxs(T,{children:[t.map(({id:l,tab:b},i)=>{const c=t.length>1;return e.jsxs(q,{index:i,transition:"none",children:[b,c?e.jsx(tn,{as:"span",size:"2xs",variant:"ghost","aria-label":"Remove Tab",icon:e.jsx(an,{}),role:"button",onClick:p=>{p.stopPropagation(),d(l)}}):null]},l)}),e.jsx(sn,{size:"xs",variant:"ghost",role:"tab",startIcon:e.jsx(bn,{}),onClick:r,children:"Add Tab"})]}),t.map(({id:l,panel:b},i)=>e.jsxs(G,{index:i,children:[e.jsxs(on,{children:[b," ",l]}),e.jsxs(k,{children:["index: ",i]}),e.jsxs(k,{children:["id: ",l]})]},l))]})},N=()=>{const[n,a]=o.useState(0),t=o.useMemo(()=>[{panel:"クリリンのことか……クリリンのことかーーーっ！！！！！",tab:"孫悟空"},{panel:"へっ！きたねぇ花火だ",tab:"ベジータ"},{panel:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……",tab:"フリーザ"}],[]);return e.jsxs(m,{index:n,items:t,onChange:a,children:[e.jsx(T,{}),e.jsx(h,{})]})};var J,Y,ee;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(ee=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,te,ae;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,le,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(ce=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var be,ue,de;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(de=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,xe;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(xe=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var Te,he,fe;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(fe=(he=F.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,je,ve;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(ve=(je=B.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var Ie,Ce,Pe;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(Pe=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var ye,ke,Re;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(Re=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var ze,Me,Se;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(Se=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};var we,Le,De;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1);
    useInterval(() => setState(prev => prev + 1), 1000);
    return <>Panel {state}</>;
  };
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(De=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var _e,Fe,Be;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const Panel: FC = () => {
    const [state, setState] = useState<number>(1);
    useInterval(() => setState(prev => prev + 1), 1000);
    return <>Panel {state}</>;
  };
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(Be=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ae,He,Ke;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState<Tabs.Item[]>([{
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
}`,...(Ke=(He=W.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var Ve,$e,We;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [index, setIndex] = useState(0);
  const items = useMemo<Tabs.Item[]>(() => [{
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
}`,...(We=($e=N.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};const Wn=["Basic","Items","Variant","Size","DefaultIndex","Orientation","Align","Fitted","Disabled","Manual","Link","Lazy","LazyBehavior","Dynamic","CustomControl"];export{F as Align,M as Basic,N as CustomControl,D as DefaultIndex,A as Disabled,W as Dynamic,B as Fitted,S as Items,V as Lazy,$ as LazyBehavior,K as Link,H as Manual,_ as Orientation,L as Size,w as Variant,Wn as __namedExportsOrder,$n as default};
