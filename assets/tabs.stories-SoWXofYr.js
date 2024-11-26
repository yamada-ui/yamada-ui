import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{u as ce}from"./index-CSLw8Az-.js";import{u as ie}from"./index-CzDHxPKS.js";import{c as Yn}from"./index-CgAyM-xT.js";import{p as Zn,a as $n,h as an,b as w,c as D,q as ne,w as sn,a5 as rn}from"./factory-CehSyZ2b.js";import{u as de,R as xe}from"./use-ripple-lPfPkpPL.js";import{f as k}from"./forward-ref-D13m8o2p.js";import{b as be}from"./index-C_rfNY_4.js";import{a as oe}from"./use-component-style-PhZ538dD.js";import{o as he}from"./theme-provider-BOnS9RWG.js";import{T as s}from"./text-DxpipBZv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DxxoX3c-.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-C8sDf1Q7.js";const{DescendantsContextProvider:je,useDescendant:ee,useDescendants:ue,useDescendantsContext:Pe}=Yn(),{DescendantsContextProvider:me,useDescendant:ae,useDescendants:pe,useDescendantsContext:Ee}=Yn(),[fe,J]=Zn({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),[ve,ye]=Zn({}),e=k(({id:c,className:o,children:f,clickOnEnter:i,clickOnSpace:P,disabled:d,focusable:m,...t},x)=>{var I;const{disableRipple:h,manual:T,orientation:j,selectedIndex:p,setFocusedIndex:y,setSelectedIndex:v,styles:l}=J(),g=u.useId(),{index:b,register:Q}=ee({disabled:d&&!m}),{descendants:X}=ae(),Y=(I=X.value(b))==null?void 0:I.node.id,z=b===p;c??(c=g);const Z=()=>{y(b),!T&&!(d&&m)&&v(b)},C=ie({id:c,"aria-controls":Y,"aria-selected":z,role:"tab",...t,ref:$n(Q,x),clickOnEnter:i,clickOnSpace:P,disabled:d,focusable:m,onClick:an(t.onClick,()=>v(b)),onFocus:d?void 0:an(t.onFocus,Z)}),{onPointerDown:$,...nn}=de({...C,disabled:h||d}),en={alignItems:"center",display:"flex",justifyContent:"center",outline:"0",overflow:"hidden",position:"relative",...l.tab};return n.jsxs(w.button,{className:D("ui-tabs__tab",o),__css:en,...C,type:"button","data-orientation":j,tabIndex:z?0:-1,onPointerDown:$,children:[f,n.jsx(xe,{...nn})]})});e.displayName="Tab";e.__ui__="Tab";const _=k(({className:c,...o},f)=>{const{focusedIndex:i,orientation:P,styles:d,tabListProps:m}=J(),t=Pe(),x=P==="vertical",h=u.useCallback(()=>{const l=t.enabledNextValue(i);l&&l.node.focus()},[t,i]),T=u.useCallback(()=>{const l=t.enabledPrevValue(i);l&&l.node.focus()},[t,i]),j=u.useCallback(()=>{const l=t.enabledFirstValue();l&&l.node.focus()},[t]),p=u.useCallback(()=>{const l=t.enabledLastValue();l&&l.node.focus()},[t]),y=u.useCallback(l=>{const b={ArrowDown:()=>x?h():{},ArrowLeft:()=>x?{}:T(),ArrowRight:()=>x?{}:h(),ArrowUp:()=>x?T():{},End:p,Home:j}[l.key];b&&(l.preventDefault(),b(l))},[j,p,x,T,h]),v={display:"flex",...d.tabList};return n.jsx(w.div,{ref:f,className:D("ui-tabs__list",c),"aria-orientation":P,role:"tablist",__css:v,...m,...o,onKeyDown:an(o.onKeyDown,y)})});_.displayName="TabList";_.__ui__="TabList";const a=k(({id:c,className:o,children:f,...i},P)=>{var b;const{lazy:d,lazyBehavior:m,styles:t}=J(),x=u.useId(),{index:h,selected:T}=ye(),{register:j}=ae(),{descendants:p}=ee(),y=u.useRef(!1),v=(b=p.value(h))==null?void 0:b.node.id;T&&(y.current=!0);const l=be({enabled:d,isSelected:T,mode:m,wasSelected:y.current});c??(c=x);const g={...t.tabPanel};return n.jsx(w.div,{id:c,ref:$n(j,P),className:D("ui-tabs__panel",o),"aria-labelledby":v,role:"tabpanel",__css:g,...i,hidden:!T,children:l?f:null})});a.displayName="TabPanel";a.__ui__="TabPanel";const S=k(({className:c,children:o,...f},i)=>{const{selectedIndex:P,styles:d,tabPanelsProps:m}=J(),x=ne(o).map((T,j)=>{const p=j===P;return u.createElement(ve,{key:j,value:{index:j,selected:p,selectedIndex:P}},T)}),h={w:"100%",...d.tabPanels};return n.jsx(w.div,{ref:i,className:D("ui-tabs__panels",c),__css:h,...m,...f,children:x})});S.displayName="TabPanels";S.__ui__="TabPanels";const r=k(({align:c="start",...o},f)=>{const[i,P]=oe("Tabs",{align:c,...o});let{className:d,children:m,defaultIndex:t=0,disableRipple:x=!1,fitted:h,index:T,isFitted:j,isLazy:p=!0,isManual:y,lazy:v,lazyBehavior:l="keepMounted",manual:g,orientation:b="horizontal",tabListProps:Q,tabPanelsProps:X,onChange:Y,...z}=he(P);h??(h=j),v??(v=p),g??(g=y);const[Z,C]=u.useState(t),[$,nn]=ce({defaultValue:t,value:T,onChange:Y}),en=ue(),I=pe(),L=ne(m),se=sn(L,_),re=sn(L,S),le=rn(L,e),te=rn(L,a),Te={w:"100%",...i.container};return u.useEffect(()=>{T!=null&&C(T)},[T]),n.jsx(je,{value:en,children:n.jsx(me,{value:I,children:n.jsx(fe,{value:{align:c,disableRipple:x,fitted:h,focusedIndex:Z,lazy:v,lazyBehavior:l,manual:g,orientation:b,selectedIndex:$,setFocusedIndex:C,setSelectedIndex:nn,styles:i,tabListProps:Q,tabPanelsProps:X},children:n.jsxs(w.div,{ref:f,className:D("ui-tabs",d),__css:Te,...z,children:[se??n.jsx(_,{children:le}),re??n.jsx(S,{children:te})]})})})})});r.displayName="Tabs";r.__ui__="Tabs";const Me={component:r,title:"Components / Disclosure / Tabs"},F=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),N=()=>n.jsxs(r,{defaultIndex:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),R=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{size:"sm",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"md",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{size:"lg",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-subtle",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"unstyled",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>n.jsxs(r,{colorScheme:"red",variant:"rounded-solid",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),A=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{align:"start",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"center",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{align:"end",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{orientation:"horizontal",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{orientation:"vertical",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),E=()=>n.jsxs(n.Fragment,{children:[n.jsxs(r,{variant:"line",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),n.jsxs(r,{variant:"sticky",fitted:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),M=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{disabled:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>n.jsxs(r,{children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{focusable:!0,children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>n.jsxs(r,{manual:!0,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),q=()=>n.jsxs(r,{lazy:!0,lazyBehavior:"unmount",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>n.jsxs(r,{children:[n.jsxs(_,{borderWidth:1,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"})]}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),U=()=>n.jsxs(r,{variant:"sticky",children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsxs(S,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),G=()=>{const[c,o]=u.useState(0);return n.jsxs(r,{index:c,onChange:o,children:[n.jsx(e,{children:"孫悟空"}),n.jsx(e,{children:"ベジータ"}),n.jsx(e,{children:"フリーザ"}),n.jsx(a,{children:n.jsx(s,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n.jsx(a,{children:n.jsx(s,{children:"へっ！きたねぇ花火だ"})}),n.jsx(a,{children:n.jsx(s,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var ln,tn,Tn;F.parameters={...F.parameters,docs:{...(ln=F.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(Tn=(tn=F.parameters)==null?void 0:tn.docs)==null?void 0:Tn.source}}};var cn,dn,xn;N.parameters={...N.parameters,docs:{...(cn=N.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(xn=(dn=N.parameters)==null?void 0:dn.docs)==null?void 0:xn.source}}};var bn,on,hn;R.parameters={...R.parameters,docs:{...(bn=R.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(hn=(on=R.parameters)==null?void 0:on.docs)==null?void 0:hn.source}}};var jn,un,Pn;V.parameters={...V.parameters,docs:{...(jn=V.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(Pn=(un=V.parameters)==null?void 0:un.docs)==null?void 0:Pn.source}}};var mn,pn,fn;W.parameters={...W.parameters,docs:{...(mn=W.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(fn=(pn=W.parameters)==null?void 0:pn.docs)==null?void 0:fn.source}}};var vn,yn,gn;A.parameters={...A.parameters,docs:{...(vn=A.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(gn=(yn=A.parameters)==null?void 0:yn.docs)==null?void 0:gn.source}}};var Cn,_n,Sn;B.parameters={...B.parameters,docs:{...(Cn=B.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(Sn=(_n=B.parameters)==null?void 0:_n.docs)==null?void 0:Sn.source}}};var wn,Dn,kn;E.parameters={...E.parameters,docs:{...(wn=E.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
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
}`,...(kn=(Dn=E.parameters)==null?void 0:Dn.docs)==null?void 0:kn.source}}};var zn,In,Ln;M.parameters={...M.parameters,docs:{...(zn=M.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(In=M.parameters)==null?void 0:In.docs)==null?void 0:Ln.source}}};var Fn,Nn,Rn;K.parameters={...K.parameters,docs:{...(Fn=K.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
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
}`,...(Rn=(Nn=K.parameters)==null?void 0:Nn.docs)==null?void 0:Rn.source}}};var Vn,Wn,An;O.parameters={...O.parameters,docs:{...(Vn=O.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(An=(Wn=O.parameters)==null?void 0:Wn.docs)==null?void 0:An.source}}};var Bn,En,Mn;q.parameters={...q.parameters,docs:{...(Bn=q.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(En=q.parameters)==null?void 0:En.docs)==null?void 0:Mn.source}}};var Kn,On,qn;H.parameters={...H.parameters,docs:{...(Kn=H.parameters)==null?void 0:Kn.docs,source:{originalSource:`() => {
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
}`,...(qn=(On=H.parameters)==null?void 0:On.docs)==null?void 0:qn.source}}};var Hn,Un,Gn;U.parameters={...U.parameters,docs:{...(Hn=U.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Gn=(Un=U.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};var Jn,Qn,Xn;G.parameters={...G.parameters,docs:{...(Jn=G.parameters)==null?void 0:Jn.docs,source:{originalSource:`() => {
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
}`,...(Xn=(Qn=G.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};const Ke=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","disabled","focusable","manual","lazy","customTabList","customTabPanels","customControl"];export{Ke as __namedExportsOrder,F as basic,G as customControl,H as customTabList,U as customTabPanels,Me as default,M as disabled,K as focusable,q as lazy,O as manual,A as withAlign,W as withColorScheme,N as withDefaultIndex,E as withFitted,B as withOrientation,R as withSize,V as withVariant};
