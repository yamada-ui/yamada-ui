import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{En as n,Tn as r,ct as i,dt as a,en as o,fn as s,i as c,o as l,ot as u,pt as d,sr as f,tr as p}from"./props-BGlEPbcT.js";import{t as m}from"./jsx-runtime-BdxMnOeJ.js";import{E as h,T as g,d as _,f as v}from"./utils-AU-L7yot.js";import{i as ee,t as y}from"./effect-DSHKlzEK.js";import{d as b,i as x,n as S,r as C}from"./create-component-bU8PsV5C.js";import{n as te,t as ne}from"./plus-icon-acXhJmC8.js";import{n as re,t as ie}from"./x-icon-op_cjnn4.js";import{r as ae,t as oe}from"./use-controllable-state-DMHLeVyZ.js";import{n as se,t as ce}from"./use-descendants-D1jwBp2w.js";import{n as le,t as ue}from"./use-value-CdRR9QhC.js";import{n as de,t as w}from"./text-BrExu5sf.js";import{r as fe,t as pe}from"./button-QjBLhmmI.js";import{r as me,t as he}from"./icon-button-CTa1BkTR.js";import{n as ge,t as _e}from"./use-interval-Dp8y7NGv.js";import{n as ve,t as ye}from"./h-stack-Cf58wCGR.js";import{n as be,t as xe}from"./use-lazy-mount-B7G9Nic_.js";import{n as Se,t as T}from"./props-table-f1Xpb6Bc.js";var Ce;function we(){return(we=e((()=>{b(),Ce=x({base:{list:{display:`flex`},panel:{flex:`1`},root:{display:`flex`,w:`full`},tab:{alignItems:`center`,cursor:`pointer`,display:`flex`,fontWeight:`medium`,gap:`2`,justifyContent:`center`,transitionDuration:`moderate`,transitionProperty:`common`,_disabled:{layerStyle:`disabled`}}},props:{align:{center:{list:{justifyContent:`center`}},end:{list:{justifyContent:`flex-end`}},start:{list:{justifyContent:`flex-start`}}},fitted:{true:{tab:{flex:1}}},orientation:{horizontal:{list:{alignItems:`center`,flexDirection:`row`},root:{flexDirection:`column`}},vertical:{list:{alignItems:`stretch`,flexDirection:`column`},root:{flexDirection:`row`}}}},variants:{line:{list:{_horizontal:{borderBottomWidth:`1px`},_vertical:{borderRightWidth:`1px`}},tab:{color:`fg.muted`,focusVisibleRing:`inside`,position:`relative`,_selected:{color:`fg`,_after:{borderColor:`colorScheme.solid`,position:`absolute`},_horizontal:{_after:{borderBottomWidth:`1px`,bottom:`-1px`,w:`full`}},_vertical:{_after:{borderRightWidth:`1px`,h:`full`,right:`-1px`}}}}},outline:{list:{_horizontal:{borderBottomWidth:`1px`},_vertical:{borderRightWidth:`1px`}},tab:{border:`1px solid transparent`,color:`fg.muted`,focusVisibleRing:`inside`,position:`relative`,_horizontal:{mb:`-1px`,roundedStart:`l2`},_vertical:{me:`-1px`,roundedLeft:`l2`},_selected:{bg:`bg`,borderColor:`border`,color:`fg`,_horizontal:{borderBottomColor:`transparent`},_vertical:{borderRightColor:`transparent`}}}},plain:{tab:{color:`fg.muted`,rounded:`l2`,_selected:{color:`fg`}}},subtle:{tab:{border:`1px solid transparent`,color:`fg.muted`,rounded:`l2`,_selected:{layerStyle:`subtle`}}}},sizes:{sm:{root:{gap:`sm`},tab:{fontSize:`sm`,px:`3`,py:`1`}},md:{root:{gap:`md`},tab:{fontSize:`md`,px:`4`,py:`2`}},lg:{root:{gap:`lg`},tab:{fontSize:`lg`,px:`5`,py:`3`}}},defaultProps:{size:`md`,variant:`line`,align:`start`,orientation:`horizontal`}})})))()}var E,Te,Ee,De,Oe,ke,Ae,je,D,Me,Ne,Pe;function Fe(){return(Fe=e((()=>{E=t(),c(),oe(),se(),h(),n(),u(),a(),y(),{DescendantsContext:Te,useDescendant:Ee,useDescendants:De}=ce(),{DescendantsContext:Oe,useDescendant:ke,useDescendants:Ae}=ce(),[je,D]=g({name:`TabsContext`}),Me=({id:e,defaultIndex:t=0,index:n,manual:i=!1,orientation:a=`horizontal`,onChange:o,...s}={})=>{let c=(0,E.useId)(),u=De(),p=Ae(),[m,h]=ae({defaultValue:t,value:n,onChange:o}),[g,_]=(0,E.useState)(m),v=a===`horizontal`;e??=c;let y=(0,E.useCallback)(()=>{let e=u.enabledFirstValue();e&&e.node.focus()},[u]),b=(0,E.useCallback)(()=>{let e=u.enabledLastValue();e&&e.node.focus()},[u]),x=(0,E.useCallback)(()=>{let e=u.enabledNextValue(g);e&&e.node.focus()},[u,g]),S=(0,E.useCallback)(()=>{let e=u.enabledPrevValue(g);e&&e.node.focus()},[u,g]),C=(0,E.useCallback)(e=>{d(e,{ArrowDown:v?void 0:x,ArrowLeft:v?S:void 0,ArrowRight:v?x:void 0,ArrowUp:v?void 0:S,End:b,Home:y})},[v,x,S,b,y]);ee(()=>{f(n)||(h(n),_(n))},[n]);let te=(0,E.useCallback)(({ref:e,...t}={})=>l({"data-orientation":a},s,t,{ref:e})(),[a,s]),ne=(0,E.useCallback)((e={})=>({"aria-orientation":a,role:`tablist`,...e,onKeyDown:r(e.onKeyDown,C)}),[a,C]);return{id:e,focusedIndex:g,index:m,manual:i,orientation:a,setFocusedIndex:_,setIndex:h,tabDescendants:u,tabPanelDescendants:p,getListProps:ne,getRootProps:te}},Ne=({id:e,disabled:t,index:n,...a})=>{let{id:o,index:s,manual:c,orientation:u,setFocusedIndex:d,setIndex:f}=D(),{register:p}=Ee({disabled:t}),m=`${o}-panel-${n}`,h=n===s;e??=`${o}-tab-${n}`;let g=(0,E.useCallback)(()=>{t||f(n)},[n,f,t]),_=(0,E.useCallback)(()=>{t||(d(n),c||f(n))},[d,n,c,t,f]);return{index:n,selected:h,getRootProps:(0,E.useCallback)(({ref:n,...o}={})=>l({id:e,type:`button`,"aria-controls":m,"aria-selected":h,"data-orientation":u,disabled:t,role:`tab`,tabIndex:h?0:-1},a,o,{ref:i(n,p)},{onClick:r(o.onClick,a.onClick,g),onFocus:r(o.onFocus,a.onFocus,_)})({mergeEvent:!1}),[t,e,g,_,u,p,a,h,m])}},Pe=({id:e,index:t,...n})=>{let{id:r,index:i,orientation:a}=D(),{register:o}=ke(),s=`${r}-tab-${t}`,c=t===i;return e??=`${r}-panel-${t}`,{index:t,selected:c,getRootProps:(0,E.useCallback)((t={})=>l({id:e,ref:o,"aria-labelledby":s,"data-orientation":a,hidden:!c,role:`tabpanel`,tabIndex:c?0:-1},n,t)(),[e,a,o,n,c,s])}}})))()}var O,k,Ie,Le,A,Re,j,ze,M,N,P,F,I;function Be(){return(Be=e((()=>{O=t(),C(),_(),xe(),ue(),we(),Fe(),k=m(),{ComponentContext:Ie,PropsContext:Le,useComponentContext:A,usePropsContext:Re,withContext:j,withProvider:ze}=S(`tabs`,Ce),M=ze(({children:e,items:t,lazy:n,lazyBehavior:r,orientation:i,...a})=>{let o=le(i),{id:s,focusedIndex:c,index:l,manual:u,orientation:d,setFocusedIndex:f,setIndex:p,tabDescendants:m,tabPanelDescendants:h,getListProps:g,getRootProps:_}=Me({orientation:o,...a}),ee=(0,O.useMemo)(()=>({items:t,lazy:n,lazyBehavior:r}),[t,n,r]),y=(0,O.useMemo)(()=>({id:s,focusedIndex:c,index:l,manual:u,orientation:d,setFocusedIndex:f,setIndex:p,getListProps:g}),[s,u,c,l,d,f,p,g]);return(0,k.jsx)(Te,{value:m,children:(0,k.jsx)(Oe,{value:h,children:(0,k.jsx)(je,{value:y,children:(0,k.jsx)(Ie,{value:ee,children:(0,k.jsx)(v.div,{..._(),children:e})})})})})},`root`,{transferProps:[`orientation`]})(),N=j(({children:e,...t})=>{let{items:n}=A(),{getListProps:r}=D(),i=(0,O.useMemo)(()=>e||n?.map(({id:e,panel:t,tab:n,panelProps:r,...i},a)=>f(n)||p(n)?null:(0,k.jsx)(P,{id:e,index:a,...i,children:n},e??a)),[e,n]);return(0,k.jsx)(v.div,{...r(t),children:i})},`list`)(),P=j(`button`,`tab`)(void 0,e=>{let{getRootProps:t}=Ne(e);return t()}),F=({children:e})=>{let{items:t}=A();return(0,O.useMemo)(()=>e||t?.map(({id:e,panel:t,panelProps:n},r)=>f(t)||p(t)?null:(0,k.jsx)(I,{index:r,...n,children:t},e??r)),[e,t])},I=j(`div`,`panel`)(void 0,e=>{let{lazy:t,lazyBehavior:n}=A(),{selected:r,getRootProps:i}=Pe(e),a=be({lazy:t,lazyBehavior:n,mounted:r,...e});return{...i(),children:a}})})))()}var L,R,Ve,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,He;function Ue(){return(Ue=e((()=>{L=t(),Se(),_e(),o(),fe(),me(),te(),re(),ve(),de(),Be(),R=m(),Ve={component:M,title:`Components / Tabs`},z=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{children:[(0,R.jsx)(N,{children:e.map(({tab:e},t)=>(0,R.jsx)(P,{index:t,children:e},t))}),e.map(({panel:e},t)=>(0,R.jsx)(I,{index:t,children:e},t))]})},B=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{items:e,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},V=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsx)(T,{variant:`stack`,columns:[`horizontal`,`vertical`],rows:[`line`,`outline`,`subtle`,`plain`],children:(t,n,r)=>(0,R.jsxs)(M,{variant:n,items:e,orientation:t,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},H=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsx)(T,{variant:`stack`,columns:[`horizontal`,`vertical`],rows:[`sm`,`md`,`lg`],children:(t,n,r)=>(0,R.jsxs)(M,{size:n,items:e,orientation:t,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},U=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{defaultIndex:1,items:e,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},W=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsx)(T,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,R.jsxs)(M,{items:e,orientation:n,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},G=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsx)(T,{variant:`stack`,columns:[`horizontal`,`vertical`],rows:[`start`,`center`,`end`],children:(t,n,r)=>(0,R.jsxs)(M,{align:n,items:e,minH:`xs`,orientation:t,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},K=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsx)(T,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(t,n,r)=>(0,R.jsxs)(M,{fitted:!0,items:e,minH:`xs`,orientation:n,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},q=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{disabled:!0,panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{items:e,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},J=()=>{let e=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{items:e,manual:!0,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},Y=()=>{let e=(0,L.useMemo)(()=>[{asChild:!0,panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:(0,R.jsx)(w,{as:`a`,href:`#孫悟空`,children:`孫悟空`})},{asChild:!0,panel:`へっ！きたねぇ花火だ`,tab:(0,R.jsx)(w,{as:`a`,href:`#ベジータ`,children:`ベジータ`})},{asChild:!0,panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:(0,R.jsx)(w,{as:`a`,href:`#フリーザ`,children:`フリーザ`})}],[]);return(0,R.jsxs)(M,{items:e,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},X=()=>{let e=()=>{let[e,t]=(0,L.useState)(1);return ge(()=>t(e=>e+1),1e3),(0,R.jsxs)(R.Fragment,{children:[`Panel `,e]})},t=(0,L.useMemo)(()=>[{panel:(0,R.jsx)(e,{}),tab:`Tab 1`},{panel:(0,R.jsx)(e,{}),tab:`Tab 2`},{panel:(0,R.jsx)(e,{}),tab:`Tab 3`}],[]);return(0,R.jsx)(T,{variant:`stack`,rows:[`Not Lazy`,`Lazy`,`Keep Mounted`],children:(e,n,r)=>(0,R.jsxs)(M,{items:t,lazy:n===`Lazy`||n===`Keep Mounted`,lazyBehavior:n===`Keep Mounted`?`keepMounted`:`unmount`,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]},r)})},Z=()=>{let e=()=>{let[e,t]=(0,L.useState)(1);return ge(()=>t(e=>e+1),1e3),(0,R.jsxs)(R.Fragment,{children:[`Panel `,e]})},t=(0,L.useMemo)(()=>[{panel:(0,R.jsx)(e,{}),tab:`Tab 1`},{panel:(0,R.jsx)(e,{}),tab:`Tab 2`},{panel:(0,R.jsx)(e,{}),tab:`Tab 3`}],[]);return(0,R.jsxs)(M,{items:t,lazy:!0,lazyBehavior:`keepMounted`,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},Q=()=>{let[e,t]=(0,L.useState)(0),[n,r]=(0,L.useState)([{id:s(),panel:`Tab Content`,tab:`Tab`},{id:s(),panel:`Tab Content`,tab:`Tab`},{id:s(),panel:`Tab Content`,tab:`Tab`}]),i=()=>{let e=[...n,{id:s(),panel:`Tab Content`,tab:`Tab`}];r(e),t(e.length-1)},a=i=>{let a=n.findIndex(e=>e.id===i),o=n.filter(e=>e.id!==i);r(o),a<e?t(e-1):a===e&&t(Math.min(e,o.length-1))};return(0,R.jsxs)(M,{index:e,items:n,manual:!0,onChange:t,children:[(0,R.jsxs)(ye,{borderBottomWidth:`1px`,gap:`0`,overflowX:`auto`,pb:`px`,children:[(0,R.jsx)(N,{borderBottomWidth:`0`,children:n.map(({id:e,tab:t},r)=>(0,R.jsxs)(P,{index:r,transition:`none`,children:[t,n.length>1?(0,R.jsx)(he,{as:`span`,size:`2xs`,variant:`ghost`,"aria-label":`Remove Tab`,icon:(0,R.jsx)(ie,{}),onClick:t=>{t.stopPropagation(),a(e)}}):null]},e))}),(0,R.jsx)(pe,{size:`xs`,variant:`ghost`,minW:`fit-content`,startIcon:(0,R.jsx)(ne,{}),onClick:i,children:`Add Tab`})]}),n.map(({id:e,panel:t},n)=>(0,R.jsxs)(I,{index:n,children:[(0,R.jsxs)(w,{children:[`index: `,n]}),(0,R.jsxs)(w,{children:[`id: `,e]}),(0,R.jsxs)(w,{children:[`panel: `,t]})]},e))]})},$=()=>{let[e,t]=(0,L.useState)(0),n=(0,L.useMemo)(()=>[{panel:`クリリンのことか……クリリンのことかーーーっ！！！！！`,tab:`孫悟空`},{panel:`へっ！きたねぇ花火だ`,tab:`ベジータ`},{panel:`私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`,tab:`フリーザ`}],[]);return(0,R.jsxs)(M,{index:e,items:n,onChange:t,children:[(0,R.jsx)(N,{}),(0,R.jsx)(F,{})]})},He=[`Basic`,`Items`,`Variant`,`Size`,`DefaultIndex`,`Orientation`,`Align`,`Fitted`,`Disabled`,`Manual`,`Link`,`Lazy`,`LazyBehavior`,`Dynamic`,`CustomControl`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
    if (removeIndex < index) setIndex(index - 1);else if (removeIndex === index) setIndex(Math.min(index, nextItems.length - 1));
  };
  return <Tabs.Root index={index} items={items} manual onChange={setIndex}>
      <HStack borderBottomWidth="1px" gap="0" overflowX="auto" pb="px">
        <Tabs.List borderBottomWidth="0">
          {items.map(({
          id,
          tab
        }, index) => <Tabs.Tab key={id} index={index} transition="none">
              {tab}
              {items.length > 1 ? <IconButton as="span" size="2xs" variant="ghost" aria-label="Remove Tab" icon={<XIcon />} onClick={ev => {
            ev.stopPropagation();
            onRemoveTab(id!);
          }} /> : null}
            </Tabs.Tab>)}
        </Tabs.List>

        <Button size="xs" variant="ghost" minW="fit-content" startIcon={<PlusIcon />} onClick={onAddTab}>
          Add Tab
        </Button>
      </HStack>

      {items.map(({
      id,
      panel
    }, index) => <Tabs.Panel key={id} index={index}>
          <Text>index: {index}</Text>
          <Text>id: {id}</Text>
          <Text>panel: {panel}</Text>
        </Tabs.Panel>)}
    </Tabs.Root>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Ue();export{G as Align,z as Basic,$ as CustomControl,U as DefaultIndex,q as Disabled,Q as Dynamic,K as Fitted,B as Items,X as Lazy,Z as LazyBehavior,Y as Link,J as Manual,W as Orientation,H as Size,V as Variant,He as __namedExportsOrder,Ve as default};