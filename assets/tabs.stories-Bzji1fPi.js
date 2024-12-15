import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{u as ce}from"./index-D-iNr3rb.js";import{u as ie}from"./index-DxQD85Cv.js";import{c as Zn}from"./index-CieLuCnG.js";import{A as $n,a as ne,h as sn,b as k,c as z,g as ee,B as rn,ab as tn}from"./factory-Bqmz9C5P.js";import{u as de,R as xe}from"./use-ripple-DFvMPDyV.js";import{f as I}from"./forward-ref-D13m8o2p.js";import{b as be}from"./index-DcJSUYRC.js";import{a as oe}from"./use-component-style-D7fUVUlo.js";import{o as he}from"./theme-provider-Dit74geM.js";import{T as s}from"./text-Cr1YzEG3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B4UZJbBZ.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-Cbq3E2qU.js";const{DescendantsContextProvider:je,useDescendant:ae,useDescendants:ue,useDescendantsContext:Pe}=Zn(),{DescendantsContextProvider:me,useDescendant:se,useDescendants:pe,useDescendantsContext:Ee}=Zn(),[fe,Q]=$n({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),[ve,ge]=$n({}),e=I(({id:i,className:h,children:p,clickOnEnter:d,clickOnSpace:u,isDisabled:f,disabled:x=f,isFocusable:l,focusable:T=l,...b},o)=>{var F;const c=j.useId(),{disableRipple:P,manual:v,orientation:g,selectedIndex:t,setFocusedIndex:C,setSelectedIndex:m,styles:X}=Q(),{index:y,register:Y}=ae({disabled:x&&!T}),{descendants:Z}=se(),$=(F=Z.value(y))==null?void 0:F.node.id,S=y===t,nn={alignItems:"center",display:"flex",justifyContent:"center",outline:"0",overflow:"hidden",position:"relative",...X.tab};i??(i=c);const en=()=>{C(y),!v&&!(x&&T)&&m(y)},L=ie({id:i,"aria-controls":$,"aria-selected":S,role:"tab",...b,ref:ne(Y,o),clickOnEnter:d,clickOnSpace:u,disabled:x,focusable:T,onClick:sn(b.onClick,()=>m(y)),onFocus:x?void 0:sn(b.onFocus,en)}),{onPointerDown:an,..._}=de({...L,disabled:P||x});return n.jsxs(k.button,{className:z("ui-tabs__tab",h),__css:nn,...L,type:"button","data-orientation":g,tabIndex:S?0:-1,onPointerDown:an,children:[p,n.jsx(xe,{..._})]})});e.displayName="Tab";e.__ui__="Tab";const w=I(({className:i,...h},p)=>{const{focusedIndex:d,orientation:u,styles:f,tabListProps:x}=Q(),l=Pe(),T=u==="vertical",b=j.useCallback(()=>{const t=l.enabledNextValue(d);t&&t.node.focus()},[l,d]),o=j.useCallback(()=>{const t=l.enabledPrevValue(d);t&&t.node.focus()},[l,d]),c=j.useCallback(()=>{const t=l.enabledFirstValue();t&&t.node.focus()},[l]),P=j.useCallback(()=>{const t=l.enabledLastValue();t&&t.node.focus()},[l]),v=j.useCallback(t=>{const m={ArrowDown:()=>T?b():{},ArrowLeft:()=>T?{}:o(),ArrowRight:()=>T?{}:b(),ArrowUp:()=>T?o():{},End:P,Home:c}[t.key];m&&(t.preventDefault(),m(t))},[c,P,T,o,b]),g={display:"flex",...f.tabList};return n.jsx(k.div,{ref:p,className:z("ui-tabs__list",i),"aria-orientation":u,role:"tablist",__css:g,...x,...h,onKeyDown:sn(h.onKeyDown,v)})});w.displayName="TabList";w.__ui__="TabList";const a=I(({id:i,className:h,children:p,...d},u)=>{var m;const f=j.useId(),{lazy:x,lazyBehavior:l,styles:T}=Q(),{index:b,selected:o}=ge(),{register:c}=se(),{descendants:P}=ae(),v=j.useRef(!1),g=(m=P.value(b))==null?void 0:m.node.id;o&&(v.current=!0);const t=be({enabled:x,isSelected:o,mode:l,wasSelected:v.current}),C={...T.tabPanel};return i??(i=f),n.jsx(k.div,{id:i,ref:ne(c,u),className:z("ui-tabs__panel",h),"aria-labelledby":g,role:"tabpanel",__css:C,...d,hidden:!o,children:t?p:null})});a.displayName="TabPanel";a.__ui__="TabPanel";const D=I(({className:i,children:h,...p},d)=>{const{selectedIndex:u,styles:f,tabPanelsProps:x}=Q(),T=ee(h).map((o,c)=>{const P=c===u;return j.createElement(ve,{key:c,value:{index:c,selected:P,selectedIndex:u}},o)}),b={w:"100%",...f.tabPanels};return n.jsx(k.div,{ref:d,className:z("ui-tabs__panels",i),__css:b,...x,...p,children:T})});D.displayName="TabPanels";D.__ui__="TabPanels";const r=I(({align:i="start",...h},p)=>{const[d,u]=oe("Tabs",{align:i,...h}),{className:f,children:x,defaultIndex:l=0,disableRipple:T=!1,isFitted:b,fitted:o=b,index:c,isLazy:P=!0,isManual:v,lazy:g=P,lazyBehavior:t="keepMounted",manual:C=v,orientation:m="horizontal",tabListProps:X,tabPanelsProps:y,onChange:Y,...Z}=he(u),[$,S]=j.useState(l),[nn,en]=ce({defaultValue:l,value:c,onChange:Y}),L=ue(),an=pe(),_=ee(x),F=rn(_,w),re=rn(_,D),te=tn(_,e),le=tn(_,a),Te={w:"100%",...d.container};return j.useEffect(()=>{c!=null&&S(c)},[c]),n.jsx(je,{value:L,children:n.jsx(me,{value:an,children:n.jsx(fe,{value:{align:i,disableRipple:T,fitted:o,focusedIndex:$,lazy:g,lazyBehavior:t,manual:C,orientation:m,selectedIndex:nn,setFocusedIndex:S,setSelectedIndex:en,styles:d,tabListProps:X,tabPanelsProps:y},children:n.jsxs(k.div,{ref:p,className:z("ui-tabs",f),__css:Te,...Z,children:[F??n.jsx(w,{children:te}),re??n.jsx(D,{children:le})]})})})})});r.displayName="Tabs";r.__ui__="Tabs";const Me={component:r,title:"Components / Disclosure / Tabs"},N=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),R=()=>n.jsxs(r,{defaultIndex:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),V=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"unstyled",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>n.jsxs(r,{colorScheme:"red",variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),W=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{align:"start",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"center",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"end",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),E=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{orientation:"horizontal",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{orientation:"vertical",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),M=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),K=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{disabled:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{focusable:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>n.jsxs(r,{manual:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),U=()=>n.jsxs(r,{lazy:!0,lazyBehavior:"unmount",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),q=()=>n.jsxs(r,{children:[n.jsxs(w,{borderWidth:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"})]}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),G=()=>n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsxs(D,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),J=()=>{const[i,h]=j.useState(0);return n.jsxs(r,{index:i,onChange:h,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var ln,Tn,cn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(jn=(hn=V.parameters)==null?void 0:hn.docs)==null?void 0:jn.source}}};var un,Pn,mn;A.parameters={...A.parameters,docs:{...(un=A.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(mn=(Pn=A.parameters)==null?void 0:Pn.docs)==null?void 0:mn.source}}};var pn,fn,vn;B.parameters={...B.parameters,docs:{...(pn=B.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
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
}`,...(vn=(fn=B.parameters)==null?void 0:fn.docs)==null?void 0:vn.source}}};var gn,yn,Cn;W.parameters={...W.parameters,docs:{...(gn=W.parameters)==null?void 0:gn.docs,source:{originalSource:`() => {
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
}`,...(Cn=(yn=W.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source}}};var _n,Sn,wn;E.parameters={...E.parameters,docs:{...(_n=E.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Vn=(Rn=O.parameters)==null?void 0:Rn.docs)==null?void 0:Vn.source}}};var An,Bn,Wn;H.parameters={...H.parameters,docs:{...(An=H.parameters)==null?void 0:An.docs,source:{originalSource:`() => {
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
}`,...(Wn=(Bn=H.parameters)==null?void 0:Bn.docs)==null?void 0:Wn.source}}};var En,Mn,Kn;U.parameters={...U.parameters,docs:{...(En=U.parameters)==null?void 0:En.docs,source:{originalSource:`() => {
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
}`,...(Yn=(Xn=J.parameters)==null?void 0:Xn.docs)==null?void 0:Yn.source}}};const Ke=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","disabled","focusable","manual","lazy","customTabList","customTabPanels","customControl"];export{Ke as __namedExportsOrder,N as basic,J as customControl,q as customTabList,G as customTabPanels,Me as default,K as disabled,O as focusable,U as lazy,H as manual,W as withAlign,B as withColorScheme,R as withDefaultIndex,M as withFitted,E as withOrientation,V as withSize,A as withVariant};
