import{j as n}from"./extends-CwFRzn3r.js";import{r as u}from"./index-BwDkhjyp.js";import{u as ne}from"./index-B_fkAghs.js";import{u as ee}from"./index-CMM3kl6L.js";import{c as ae}from"./index-DSunIB56.js";import{o as Hn,a as se,h as X,b as S,c as w,t as re,p as Un,q as Y,a2 as Z}from"./factory-uBtAHRUq.js";import{u as le,R as te}from"./use-ripple-B-yka01P.js";import{f as L}from"./forward-ref-BWI-Phbn.js";import{a as Te}from"./index-CdVvibsY.js";import{a as ie}from"./use-component-style-Dk4hKw8J.js";import{o as ce}from"./theme-provider-CXgbrDrx.js";import{T as s}from"./text-CdDC9Ji7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-JkdTfK17.js";import"./factory-BoNL08IU.js";import"./motion-I-9Hg3gW.js";const{DescendantsContextProvider:xe,useDescendant:de,useDescendants:be,useDescendantsContext:oe}=ae(),[he,G]=Hn({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),[je,ue]=Hn({}),e=L(({className:d,children:b,clickOnEnter:P,clickOnSpace:x,isDisabled:T,isFocusable:o,...h},t)=>{const{disableRipple:i,isManual:c,selectedIndex:j,setFocusedIndex:m,setSelectedIndex:p,styles:g}=G(),{index:f,register:l}=de({disabled:T&&!o}),y=f===j,v=()=>{m(f),!c&&!(T&&o)&&p(f)},k=ee({ref:se(l,t),clickOnEnter:P,clickOnSpace:x,isDisabled:T,isFocusable:o,onClick:X(h.onClick,()=>p(f))}),{onPointerDown:J,...z}=le({...k,isDisabled:i||T}),Q={alignItems:"center",display:"flex",justifyContent:"center",outline:"0",overflow:"hidden",position:"relative",...g.tab};return n.jsxs(S.button,{className:w("ui-tabs__tab",d),role:"tab",__css:Q,...h,...k,type:"button","aria-selected":re(y),tabIndex:y?0:-1,onFocus:T?void 0:X(h.onFocus,v),onPointerDown:J,children:[b,n.jsx(te,{isDisabled:i||T,...z})]})});e.displayName="Tab";e.__ui__="Tab";const _=L(({className:d,...b},P)=>{const{focusedIndex:x,orientation:T,styles:o,tabListProps:h}=G(),t=oe(),i=T==="vertical",c=u.useCallback(()=>{const l=t.enabledNextValue(x);l&&l.node.focus()},[t,x]),j=u.useCallback(()=>{const l=t.enabledPrevValue(x);l&&l.node.focus()},[t,x]),m=u.useCallback(()=>{const l=t.enabledFirstValue();l&&l.node.focus()},[t]),p=u.useCallback(()=>{const l=t.enabledLastValue();l&&l.node.focus()},[t]),g=u.useCallback(l=>{const v={ArrowDown:()=>i?c():{},ArrowLeft:()=>i?{}:j(),ArrowRight:()=>i?{}:c(),ArrowUp:()=>i?j():{},End:p,Home:m}[l.key];v&&(l.preventDefault(),v(l))},[m,p,i,j,c]),f={display:"flex",...o.tabList};return n.jsx(S.div,{ref:P,className:w("ui-tabs__list",d),"aria-orientation":T,role:"tablist",__css:f,...h,...b,onKeyDown:X(b.onKeyDown,g)})});_.displayName="TabList";_.__ui__="TabList";const a=L(({className:d,children:b,...P},x)=>{const{isLazy:T,lazyBehavior:o,styles:h}=G(),{isSelected:t}=ue(),i=u.useRef(!1);t&&(i.current=!0);const c=Te({enabled:T,isSelected:t,mode:o,wasSelected:i.current}),j={...h.tabPanel};return n.jsx(S.div,{ref:x,className:w("ui-tabs__panel",d),role:"tabpanel",__css:j,...P,hidden:!t,children:c?b:null})});a.displayName="TabPanel";a.__ui__="TabPanel";const C=L(({className:d,children:b,...P},x)=>{const{selectedIndex:T,styles:o,tabPanelsProps:h}=G(),i=Un(b).map((j,m)=>{const p=m===T;return u.createElement(je,{key:m,value:{isSelected:p,selectedIndex:T}},j)}),c={w:"100%",...o.tabPanels};return n.jsx(S.div,{ref:x,className:w("ui-tabs__panels",d),__css:c,...h,...P,children:i})});C.displayName="TabPanels";C.__ui__="TabPanels";const r=L(({align:d="start",...b},P)=>{const[x,T]=ie("Tabs",{align:d,...b}),{className:o,children:h,defaultIndex:t=0,disableRipple:i=!1,index:c,isFitted:j,isLazy:m=!0,isManual:p,lazyBehavior:g="keepMounted",orientation:f="horizontal",tabListProps:l,tabPanelsProps:y,onChange:v,...k}=ce(T),[J,z]=u.useState(t),[Q,Gn]=ne({defaultValue:t,value:c,onChange:v}),Jn=be(),F=Un(h),Qn=Y(F,_),Xn=Y(F,C),Yn=Z(F,e),Zn=Z(F,a);u.useEffect(()=>{c!=null&&z(c)},[c]);const $n={w:"100%",...x.container};return n.jsx(xe,{value:Jn,children:n.jsx(he,{value:{align:d,disableRipple:i,focusedIndex:J,isFitted:j,isLazy:m,isManual:p,lazyBehavior:g,orientation:f,selectedIndex:Q,setFocusedIndex:z,setSelectedIndex:Gn,styles:x,tabListProps:l,tabPanelsProps:y},children:n.jsxs(S.div,{ref:P,className:w("ui-tabs",o),__css:$n,...k,children:[Qn??n.jsx(_,{children:Yn}),Xn??n.jsx(C,{children:Zn})]})})})});r.displayName="Tabs";r.__ui__="Tabs";const Ie={component:r,title:"Components / Disclosure / Tabs"},D=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),I=()=>n.jsxs(r,{defaultIndex:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),N=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),R=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"unstyled",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),M=()=>n.jsxs(r,{colorScheme:"red",variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),V=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{align:"start",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"center",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"end",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{orientation:"horizontal",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{orientation:"vertical",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",isFitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",isFitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{isDisabled:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),E=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{isFocusable:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>n.jsxs(r,{isManual:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>n.jsxs(r,{isLazy:!0,lazyBehavior:"unmount",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),q=()=>n.jsxs(r,{children:[n.jsxs(_,{borderWidth:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"})]}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsxs(C,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),U=()=>{const[d,b]=u.useState(0);return n.jsxs(r,{index:d,onChange:b,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var $,nn,en;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(en=(nn=D.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,sn,rn;I.parameters={...I.parameters,docs:{...(an=I.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
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
}`,...(rn=(sn=I.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var ln,tn,Tn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(Tn=(tn=N.parameters)==null?void 0:tn.docs)==null?void 0:Tn.source}}};var cn,xn,dn;R.parameters={...R.parameters,docs:{...(cn=R.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(dn=(xn=R.parameters)==null?void 0:xn.docs)==null?void 0:dn.source}}};var bn,on,hn;M.parameters={...M.parameters,docs:{...(bn=M.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
  return <Tabs colorScheme="red" variant="rounded-solid">
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
}`,...(hn=(on=M.parameters)==null?void 0:on.docs)==null?void 0:hn.source}}};var jn,un,Pn;V.parameters={...V.parameters,docs:{...(jn=V.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(Pn=(un=V.parameters)==null?void 0:un.docs)==null?void 0:Pn.source}}};var mn,pn,fn;A.parameters={...A.parameters,docs:{...(mn=A.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(fn=(pn=A.parameters)==null?void 0:pn.docs)==null?void 0:fn.source}}};var vn,gn,yn;W.parameters={...W.parameters,docs:{...(vn=W.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(yn=(gn=W.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var _n,Cn,Sn;B.parameters={...B.parameters,docs:{...(_n=B.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Sn=(Cn=B.parameters)==null?void 0:Cn.docs)==null?void 0:Sn.source}}};var wn,Ln,kn;E.parameters={...E.parameters,docs:{...(wn=E.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(kn=(Ln=E.parameters)==null?void 0:Ln.docs)==null?void 0:kn.source}}};var zn,Fn,Dn;K.parameters={...K.parameters,docs:{...(zn=K.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Fn=K.parameters)==null?void 0:Fn.docs)==null?void 0:Dn.source}}};var In,Nn,Rn;O.parameters={...O.parameters,docs:{...(In=O.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(Rn=(Nn=O.parameters)==null?void 0:Nn.docs)==null?void 0:Rn.source}}};var Mn,Vn,An;q.parameters={...q.parameters,docs:{...(Mn=q.parameters)==null?void 0:Mn.docs,source:{originalSource:`() => {
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
}`,...(An=(Vn=q.parameters)==null?void 0:Vn.docs)==null?void 0:An.source}}};var Wn,Bn,En;H.parameters={...H.parameters,docs:{...(Wn=H.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(En=(Bn=H.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var Kn,On,qn;U.parameters={...U.parameters,docs:{...(Kn=U.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(qn=(On=U.parameters)==null?void 0:On.docs)==null?void 0:qn.source}}};const Ne=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{Ne as __namedExportsOrder,D as basic,U as customControl,q as customTabList,H as customTabPanels,Ie as default,B as isDisabled,E as isFocusable,O as isLazy,K as isManual,V as withAlign,M as withColorScheme,I as withDefaultIndex,W as withFitted,A as withOrientation,N as withSize,R as withVariant};
