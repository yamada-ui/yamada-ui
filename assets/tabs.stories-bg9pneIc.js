import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as m}from"./index-BwDkhjyp.js";import{u as ne}from"./index-BBYPUtnS.js";import{c as ee}from"./index-C9F83HR8.js";import{l as Un,t as Yn,w as X,Y as Z,b as C,c as S,h as G,a as ae,x as se}from"./factory-C350H5ew.js";import{u as re}from"./index-rjSTK-zs.js";import{u as le,R as te}from"./use-ripple-7ZdFmUrk.js";import{f as w}from"./forward-ref-BmTAT9U5.js";import{a as Te}from"./index-CHFb4Jhb.js";import{a as ie}from"./use-component-style-Deru9ana.js";import{o as ce}from"./theme-provider-Dk_cT8DX.js";import{T as s}from"./text-Bvuw3AK1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./index-BREjiUHm.js";import"./index-C9ZzZzxO.js";import"./motion-KSTl0G6b.js";import"./motion-CsCega8z.js";const{DescendantsContextProvider:xe,useDescendantsContext:de,useDescendants:be,useDescendant:oe}=ee(),[he,U]=Un({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),r=w(({align:b="start",...T},h)=>{const[d,u]=ie("Tabs",{align:b,...T}),{className:p,index:c,defaultIndex:t=0,onChange:x,isFitted:j,isManual:o,isLazy:P=!0,disableRipple:f=!1,lazyBehavior:y="keepMounted",orientation:v="horizontal",tabListProps:l,tabPanelsProps:i,children:g,...k}=ce(u),[Y,z]=m.useState(t),[q,qn]=ne({value:c,defaultValue:t,onChange:x}),Gn=be(),F=Yn(g),[Jn]=X(F,J),[Qn]=X(F,Q),Xn=Z(F,e),Zn=Z(F,a);m.useEffect(()=>{c!=null&&z(c)},[c]);const $n={w:"100%",...d.container};return n.jsx(xe,{value:Gn,children:n.jsx(he,{value:{focusedIndex:Y,setFocusedIndex:z,selectedIndex:q,setSelectedIndex:qn,disableRipple:f,isFitted:j,align:b,isManual:o,isLazy:P,lazyBehavior:y,orientation:v,tabListProps:l,tabPanelsProps:i,styles:d},children:n.jsxs(C.div,{ref:h,className:S("ui-tabs",p),__css:$n,...k,children:[Jn??n.jsx(J,{children:Xn}),Qn??n.jsx(Q,{children:Zn})]})})})}),J=w(({className:b,...T},h)=>{const{focusedIndex:d,orientation:u,tabListProps:p,styles:c}=U(),t=de(),x=u==="vertical",j=m.useCallback(()=>{var i;const l=t.enabledNextValue(d);l&&((i=l.node)==null||i.focus())},[t,d]),o=m.useCallback(()=>{var i;const l=t.enabledPrevValue(d);l&&((i=l.node)==null||i.focus())},[t,d]),P=m.useCallback(()=>{var i;const l=t.enabledFirstValue();l&&((i=l.node)==null||i.focus())},[t]),f=m.useCallback(()=>{var i;const l=t.enabledLastValue();l&&((i=l.node)==null||i.focus())},[t]),y=m.useCallback(l=>{const g={ArrowLeft:()=>x?{}:o(),ArrowRight:()=>x?{}:j(),ArrowDown:()=>x?j():{},ArrowUp:()=>x?o():{},Home:P,End:f}[l.key];g&&(l.preventDefault(),g(l))},[P,f,x,o,j]),v={display:"flex",...c.tabList};return n.jsx(C.div,{ref:h,className:S("ui-tabs__list",b),role:"tablist",__css:v,...p,...T,onKeyDown:G(T.onKeyDown,y)})}),e=w(({className:b,isDisabled:T,isFocusable:h,clickOnEnter:d,clickOnSpace:u,children:p,...c},t)=>{const{selectedIndex:x,isManual:j,disableRipple:o,setSelectedIndex:P,setFocusedIndex:f,styles:y}=U(),{index:v,register:l}=oe({disabled:T&&!h}),i=v===x,g=()=>{f(v),!j&&!(T&&h)&&P(v)},k=re({ref:ae(l,t),isDisabled:T,isFocusable:h,clickOnEnter:d,clickOnSpace:u,onClick:G(c.onClick,()=>P(v))}),{onPointerDown:Y,...z}=le({...k,isDisabled:o||T}),q={position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...y.tab};return n.jsxs(C.button,{className:S("ui-tabs__tab",b),__css:q,role:"tab",...c,...k,type:"button",tabIndex:i?0:-1,"aria-selected":se(i),onPointerDown:Y,onFocus:T?void 0:G(c.onFocus,g),children:[p,n.jsx(te,{isDisabled:o||T,...z})]})}),[je,ue]=Un({}),Q=w(({className:b,children:T,...h},d)=>{const{selectedIndex:u,tabPanelsProps:p,styles:c}=U(),x=Yn(T).map((o,P)=>{const f=P===u;return m.createElement(je,{key:P,value:{isSelected:f,selectedIndex:u}},o)}),j={w:"100%",...c.tabPanels};return n.jsx(C.div,{ref:d,className:S("ui-tabs__panels",b),__css:j,...p,...h,children:x})}),a=w(({className:b,children:T,...h},d)=>{const{isLazy:u,lazyBehavior:p,styles:c}=U(),{isSelected:t}=ue(),x=m.useRef(!1);t&&(x.current=!0);const j=Te({wasSelected:x.current,isSelected:t,enabled:u,mode:p}),o={...c.tabPanel};return n.jsx(C.div,{ref:d,className:S("ui-tabs__panel",b),role:"tabpanel",__css:o,...h,hidden:!t,children:j?T:null})}),Me={title:"Components / Disclosure / Tabs",component:r},L=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),_=()=>n.jsxs(r,{defaultIndex:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),D=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),I=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"unstyled",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),R=()=>n.jsxs(r,{variant:"rounded-solid",colorScheme:"red",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),M=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{align:"start",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"center",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"end",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{orientation:"horizontal",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{orientation:"vertical",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",isFitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",isFitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),N=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{isDisabled:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),W=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{isFocusable:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),B=()=>n.jsxs(r,{isManual:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),E=()=>n.jsxs(r,{isLazy:!0,lazyBehavior:"unmount",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>n.jsxs(r,{children:[n.jsxs(J,{borderWidth:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"})]}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsxs(Q,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),H=()=>{const[b,T]=m.useState(0);return n.jsxs(r,{index:b,onChange:T,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var $,nn,en;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(en=(nn=L.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,sn,rn;_.parameters={..._.parameters,docs:{...(an=_.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <Tabs defaultIndex={1}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(rn=(sn=_.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var ln,tn,Tn;D.parameters={...D.parameters,docs:{...(ln=D.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
  return <>
      <Tabs size="sm">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="md">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs size="lg">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Tn=(tn=D.parameters)==null?void 0:tn.docs)==null?void 0:Tn.source}}};var cn,xn,dn;I.parameters={...I.parameters,docs:{...(cn=I.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-subtle">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="rounded-solid">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="unstyled">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(dn=(xn=I.parameters)==null?void 0:xn.docs)==null?void 0:dn.source}}};var bn,on,hn;R.parameters={...R.parameters,docs:{...(bn=R.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <Tabs variant="rounded-solid" colorScheme="red">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(hn=(on=R.parameters)==null?void 0:on.docs)==null?void 0:hn.source}}};var jn,un,Pn;M.parameters={...M.parameters,docs:{...(jn=M.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
  return <>
      <Tabs align="start">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="center">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs align="end">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(Pn=(un=M.parameters)==null?void 0:un.docs)==null?void 0:Pn.source}}};var mn,pn,fn;V.parameters={...V.parameters,docs:{...(mn=V.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  return <>
      <Tabs orientation="horizontal">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs orientation="vertical">
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(fn=(pn=V.parameters)==null?void 0:pn.docs)==null?void 0:fn.source}}};var vn,gn,yn;A.parameters={...A.parameters,docs:{...(vn=A.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>

      <Tabs variant="sticky" isFitted>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>

        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </Tabs>
    </>;
}`,...(yn=(gn=A.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var Cn,Sn,wn;N.parameters={...N.parameters,docs:{...(Cn=N.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isDisabled>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(wn=(Sn=N.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var kn,zn,Fn;W.parameters={...W.parameters,docs:{...(kn=W.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab isFocusable>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Fn=(zn=W.parameters)==null?void 0:zn.docs)==null?void 0:Fn.source}}};var Ln,_n,Dn;B.parameters={...B.parameters,docs:{...(Ln=B.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <Tabs isManual>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Dn=(_n=B.parameters)==null?void 0:_n.docs)==null?void 0:Dn.source}}};var In,Rn,Mn;E.parameters={...E.parameters,docs:{...(In=E.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <Tabs isLazy lazyBehavior="unmount">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Mn=(Rn=E.parameters)==null?void 0:Rn.docs)==null?void 0:Mn.source}}};var Vn,An,Nn;K.parameters={...K.parameters,docs:{...(Vn=K.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
  return <Tabs>
      <TabList borderWidth={1}>
        <Tab>孫悟空</Tab>
        <Tab>ベジータ</Tab>
        <Tab>フリーザ</Tab>
      </TabList>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Nn=(An=K.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var Wn,Bn,En;O.parameters={...O.parameters,docs:{...(Wn=O.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
  return <Tabs variant="sticky">
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanels borderBottomWidth={1} borderLeftWidth={1} borderRightWidth={1}>
        <TabPanel>
          <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
        </TabPanel>
        <TabPanel>
          <Text>へっ！きたねぇ花火だ</Text>
        </TabPanel>
        <TabPanel>
          <Text>
            私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>;
}`,...(En=(Bn=O.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var Kn,On,Hn;H.parameters={...H.parameters,docs:{...(Kn=H.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
  const [index, onChange] = useState<number>(0);
  return <Tabs index={index} onChange={onChange}>
      <Tab>孫悟空</Tab>
      <Tab>ベジータ</Tab>
      <Tab>フリーザ</Tab>

      <TabPanel>
        <Text>クリリンのことか……クリリンのことかーーーっ！！！！！</Text>
      </TabPanel>
      <TabPanel>
        <Text>へっ！きたねぇ花火だ</Text>
      </TabPanel>
      <TabPanel>
        <Text>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </TabPanel>
    </Tabs>;
}`,...(Hn=(On=H.parameters)==null?void 0:On.docs)==null?void 0:Hn.source}}};const Ve=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{Ve as __namedExportsOrder,L as basic,H as customControl,K as customTabList,O as customTabPanels,Me as default,N as isDisabled,W as isFocusable,E as isLazy,B as isManual,M as withAlign,R as withColorScheme,_ as withDefaultIndex,A as withFitted,V as withOrientation,D as withSize,I as withVariant};
