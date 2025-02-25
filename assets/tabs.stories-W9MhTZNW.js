import{j as n}from"./jsx-runtime-BpbtHYHY.js";import{r as j}from"./index-BwPxMuoB.js";import{u as ce}from"./index-DCT-NtcY.js";import{u as ie}from"./index-BEog8ndP.js";import{c as Zn}from"./index-Blkmx9LM.js";import{B as $n,a as ne,h as sn,b as k,c as z,g as ee,C as rn,ac as ln}from"./factory-DbNU74ts.js";import{u as de,R as xe}from"./use-ripple-HQjPVeUd.js";import{f as I}from"./forward-ref-Ukjd1cIW.js";import{b as be}from"./index-B2an25P7.js";import{a as oe}from"./use-component-style-CpB_lyT3.js";import{o as he}from"./theme-provider-ChqdwXGn.js";import{T as s}from"./text-DKjBQKmK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ZCRYeFYt.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";const{DescendantsContextProvider:je,useDescendant:ae,useDescendants:ue,useDescendantsContext:Pe}=Zn(),{DescendantsContextProvider:me,useDescendant:se,useDescendants:pe}=Zn(),[fe,Q]=$n({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),[ve,ge]=$n({}),e=I(({id:i,className:o,children:P,clickOnEnter:h,clickOnSpace:u,isDisabled:m,disabled:x=m,isFocusable:t,focusable:T=t,...d},b)=>{var F;const c=j.useId(),{disableRipple:p,manual:v,orientation:g,selectedIndex:l,setFocusedIndex:C,setSelectedIndex:f,styles:X}=Q(),{index:y,register:Y}=ae({disabled:x&&!T}),{descendants:Z}=se(),$=(F=Z.value(y))==null?void 0:F.node.id,S=y===l,nn={alignItems:"center",display:"flex",justifyContent:"center",outline:"0",overflow:"hidden",position:"relative",...X.tab};i??(i=c);const en=()=>{C(y),!v&&!(x&&T)&&f(y)},L=ie({id:i,"aria-controls":$,"aria-selected":S,role:"tab",...d,ref:ne(Y,b),clickOnEnter:h,clickOnSpace:u,disabled:x,focusable:T,onClick:sn(d.onClick,()=>f(y)),onFocus:x?void 0:sn(d.onFocus,en)}),{onPointerDown:an,..._}=de({...L,disabled:p||x});return n.jsxs(k.button,{className:z("ui-tabs__tab",o),__css:nn,...L,type:"button","data-orientation":g,tabIndex:S?0:-1,onPointerDown:an,children:[P,n.jsx(xe,{..._})]})});e.displayName="Tab";e.__ui__="Tab";const w=I(({className:i,...o},P)=>{const{focusedIndex:h,orientation:u,styles:m,tabListProps:x}=Q(),t=Pe(),T=u==="vertical",d=j.useCallback(()=>{const l=t.enabledNextValue(h);l&&l.node.focus()},[t,h]),b=j.useCallback(()=>{const l=t.enabledPrevValue(h);l&&l.node.focus()},[t,h]),c=j.useCallback(()=>{const l=t.enabledFirstValue();l&&l.node.focus()},[t]),p=j.useCallback(()=>{const l=t.enabledLastValue();l&&l.node.focus()},[t]),v=j.useCallback(l=>{const f={ArrowDown:()=>T?d():{},ArrowLeft:()=>T?{}:b(),ArrowRight:()=>T?{}:d(),ArrowUp:()=>T?b():{},End:p,Home:c}[l.key];f&&(l.preventDefault(),f(l))},[c,p,T,b,d]),g={display:"flex",...m.tabList};return n.jsx(k.div,{ref:P,className:z("ui-tabs__list",i),"aria-orientation":u,role:"tablist",__css:g,...x,...o,onKeyDown:sn(o.onKeyDown,v)})});w.displayName="TabList";w.__ui__="TabList";const a=I(({id:i,className:o,children:P,...h},u)=>{var f;const m=j.useId(),{lazy:x,lazyBehavior:t,styles:T}=Q(),{index:d,selected:b}=ge(),{register:c}=se(),{descendants:p}=ae(),v=j.useRef(!1),g=(f=p.value(d))==null?void 0:f.node.id;b&&(v.current=!0);const l=be({enabled:x,isSelected:b,mode:t,wasSelected:v.current}),C={...T.tabPanel};return i??(i=m),n.jsx(k.div,{id:i,ref:ne(c,u),className:z("ui-tabs__panel",o),"aria-labelledby":g,role:"tabpanel",__css:C,...h,hidden:!b,children:l?P:null})});a.displayName="TabPanel";a.__ui__="TabPanel";const D=I(({className:i,children:o,...P},h)=>{const{selectedIndex:u,styles:m,tabPanelsProps:x}=Q(),T=ee(o).map((b,c)=>{const p=c===u;return j.createElement(ve,{key:c,value:{index:c,selected:p,selectedIndex:u}},b)}),d={w:"100%",...m.tabPanels};return n.jsx(k.div,{ref:h,className:z("ui-tabs__panels",i),__css:d,...x,...P,children:T})});D.displayName="TabPanels";D.__ui__="TabPanels";const r=I(({align:i="start",isFitted:o,fitted:P=o,...h},u)=>{const[m,x]=oe("Tabs",{align:i,fitted:P,...h}),{className:t,children:T,defaultIndex:d=0,disableRipple:b=!1,index:c,isLazy:p=!0,isManual:v,lazy:g=p,lazyBehavior:l="keepMounted",manual:C=v,orientation:f="horizontal",tabListProps:X,tabPanelsProps:y,onChange:Y,...Z}=he(x),[$,S]=j.useState(d),[nn,en]=ce({defaultValue:d,value:c,onChange:Y}),L=ue(),an=pe(),_=ee(T),F=rn(_,w),re=rn(_,D),le=ln(_,e),te=ln(_,a),Te={w:"100%",...m.container};return j.useEffect(()=>{c!=null&&S(c)},[c]),n.jsx(je,{value:L,children:n.jsx(me,{value:an,children:n.jsx(fe,{value:{align:i,disableRipple:b,fitted:P,focusedIndex:$,lazy:g,lazyBehavior:l,manual:C,orientation:f,selectedIndex:nn,setFocusedIndex:S,setSelectedIndex:en,styles:m,tabListProps:X,tabPanelsProps:y},children:n.jsxs(k.div,{ref:u,className:z("ui-tabs",t),__css:Te,...Z,children:[F??n.jsx(w,{children:le}),re??n.jsx(D,{children:te})]})})})})});r.displayName="Tabs";r.__ui__="Tabs";const Ee={component:r,title:"Components / Disclosure / Tabs"},N=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),R=()=>n.jsxs(r,{defaultIndex:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),V=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"unstyled",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>n.jsxs(r,{colorScheme:"red",variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{align:"start",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"center",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"end",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),E=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{orientation:"horizontal",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{orientation:"vertical",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),M=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),K=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{disabled:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{focusable:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>n.jsxs(r,{manual:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),U=()=>n.jsxs(r,{lazy:!0,lazyBehavior:"unmount",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),q=()=>n.jsxs(r,{children:[n.jsxs(w,{borderWidth:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"})]}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),G=()=>n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsxs(D,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),J=()=>{const[i,o]=j.useState(0);return n.jsxs(r,{index:i,onChange:o,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var tn,Tn,cn;N.parameters={...N.parameters,docs:{...(tn=N.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(cn=(Tn=N.parameters)==null?void 0:Tn.docs)==null?void 0:cn.source}}};var dn,xn,bn;R.parameters={...R.parameters,docs:{...(dn=R.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
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
}`,...(bn=(xn=R.parameters)==null?void 0:xn.docs)==null?void 0:bn.source}}};var on,hn,jn;V.parameters={...V.parameters,docs:{...(on=V.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(jn=(hn=V.parameters)==null?void 0:hn.docs)==null?void 0:jn.source}}};var un,Pn,mn;B.parameters={...B.parameters,docs:{...(un=B.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(mn=(Pn=B.parameters)==null?void 0:Pn.docs)==null?void 0:mn.source}}};var pn,fn,vn;W.parameters={...W.parameters,docs:{...(pn=W.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(vn=(fn=W.parameters)==null?void 0:fn.docs)==null?void 0:vn.source}}};var gn,yn,Cn;A.parameters={...A.parameters,docs:{...(gn=A.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(yn=A.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};var _n,Sn,wn;E.parameters={...E.parameters,docs:{...(_n=E.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(wn=(Sn=E.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var Dn,kn,zn;M.parameters={...M.parameters,docs:{...(Dn=M.parameters)==null?void 0:Dn.docs,source:{originalSource:`() => {
  return <>
      <Tabs variant="line" fitted>
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

      <Tabs variant="sticky" fitted>
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
}`,...(zn=(kn=M.parameters)==null?void 0:kn.docs)==null?void 0:zn.source}}};var In,Ln,Fn;K.parameters={...K.parameters,docs:{...(In=K.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab disabled>ベジータ</Tab>
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
}`,...(Fn=(Ln=K.parameters)==null?void 0:Ln.docs)==null?void 0:Fn.source}}};var Nn,Rn,Vn;O.parameters={...O.parameters,docs:{...(Nn=O.parameters)==null?void 0:Nn.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab>孫悟空</Tab>
      <Tab focusable>ベジータ</Tab>
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
}`,...(Vn=(Rn=O.parameters)==null?void 0:Rn.docs)==null?void 0:Vn.source}}};var Bn,Wn,An;H.parameters={...H.parameters,docs:{...(Bn=H.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <Tabs manual>
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
}`,...(An=(Wn=H.parameters)==null?void 0:Wn.docs)==null?void 0:An.source}}};var En,Mn,Kn;U.parameters={...U.parameters,docs:{...(En=U.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
  return <Tabs lazy lazyBehavior="unmount">
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
}`,...(Kn=(Mn=U.parameters)==null?void 0:Mn.docs)==null?void 0:Kn.source}}};var On,Hn,Un;q.parameters={...q.parameters,docs:{...(On=q.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
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
}`,...(Un=(Hn=q.parameters)==null?void 0:Hn.docs)==null?void 0:Un.source}}};var qn,Gn,Jn;G.parameters={...G.parameters,docs:{...(qn=G.parameters)==null?void 0:qn.docs,source:{originalSource:`() => {
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
}`,...(Jn=(Gn=G.parameters)==null?void 0:Gn.docs)==null?void 0:Jn.source}}};var Qn,Xn,Yn;J.parameters={...J.parameters,docs:{...(Qn=J.parameters)==null?void 0:Qn.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=J.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};const Me=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","disabled","focusable","manual","lazy","customTabList","customTabPanels","customControl"];export{Me as __namedExportsOrder,N as basic,J as customControl,q as customTabList,G as customTabPanels,Ee as default,K as disabled,O as focusable,U as lazy,H as manual,A as withAlign,W as withColorScheme,R as withDefaultIndex,M as withFitted,E as withOrientation,V as withSize,B as withVariant};
