import{j as n,a as l,F as w}from"./jsx-runtime-TtYKBvr-.js";import{r as f}from"./index-IybTgENJ.js";import{u as ae}from"./index-IsKhnU0y.js";import{c as re}from"./index-Ck3mU_gS.js";import{c as qn,p as Gn,J as $,S as nn,u as k,a as z,h as X,v as le,H as te}from"./factory-BpP3TutA.js";import{u as Te}from"./index-nHolorTc.js";import{u as ie,R as ce}from"./use-ripple-XZ8Hx3Ay.js";import{f as L}from"./forward-ref-6T0UNPU-.js";import{a as se}from"./index-czoUJTU6.js";import{u as de}from"./use-component-style-heJEaiUP.js";import{o as be}from"./theme-provider-RZopMVJP.js";import{T as r}from"./text-wk7Pq1NB.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-hj-GFWeP.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-SXgmxp4L.js";const{DescendantsContextProvider:oe,useDescendantsContext:he,useDescendants:xe,useDescendant:ue}=re(),[Pe,q]=qn({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),t=L(({align:h="start",...s},x)=>{const[o,m]=de("Tabs",{align:h,...s}),{className:v,index:d,defaultIndex:i=0,onChange:b,isFitted:u,isManual:P,isLazy:p=!0,disableRipple:g=!1,lazyBehavior:S="keepMounted",orientation:y="horizontal",tabListProps:T,tabPanelsProps:c,children:C,..._}=be(m),[G,F]=f.useState(i),[Q,Qn]=ae({value:d,defaultValue:i,onChange:b}),Xn=xe(),D=Gn(C),[Yn]=$(D,Y),[Zn]=$(D,Z),$n=nn(D,e),ne=nn(D,a);f.useEffect(()=>{d!=null&&F(d)},[d]);const ee={w:"100%",...o.container};return n(oe,{value:Xn,children:n(Pe,{value:{focusedIndex:G,setFocusedIndex:F,selectedIndex:Q,setSelectedIndex:Qn,disableRipple:g,isFitted:u,align:h,isManual:P,isLazy:p,lazyBehavior:S,orientation:y,tabListProps:T,tabPanelsProps:c,styles:o},children:l(k.div,{ref:x,className:z("ui-tabs",v),__css:ee,..._,children:[Yn??n(Y,{children:$n}),Zn??n(Z,{children:ne})]})})})}),Y=L(({className:h,...s},x)=>{const{focusedIndex:o,orientation:m,tabListProps:v,styles:d}=q(),i=he(),b=m==="vertical",u=f.useCallback(()=>{var c;const T=i.enabledNextValue(o);T&&((c=T.node)==null||c.focus())},[i,o]),P=f.useCallback(()=>{var c;const T=i.enabledPrevValue(o);T&&((c=T.node)==null||c.focus())},[i,o]),p=f.useCallback(()=>{var c;const T=i.enabledFirstValue();T&&((c=T.node)==null||c.focus())},[i]),g=f.useCallback(()=>{var c;const T=i.enabledLastValue();T&&((c=T.node)==null||c.focus())},[i]),S=f.useCallback(T=>{const C={ArrowLeft:()=>b?{}:P(),ArrowRight:()=>b?{}:u(),ArrowDown:()=>b?u():{},ArrowUp:()=>b?P():{},Home:p,End:g}[T.key];C&&(T.preventDefault(),C(T))},[p,g,b,P,u]),y={display:"flex",...d.tabList};return n(k.div,{ref:x,className:z("ui-tabs__list",h),role:"tablist",__css:y,...v,...s,onKeyDown:X(s.onKeyDown,S)})}),e=L(({className:h,isDisabled:s,isFocusable:x,clickOnEnter:o,clickOnSpace:m,children:v,...d},i)=>{const{selectedIndex:b,isManual:u,disableRipple:P,setSelectedIndex:p,setFocusedIndex:g,styles:S}=q(),{index:y,register:T}=ue({disabled:s&&!x}),c=y===b,C=()=>{g(y),!u&&!(s&&x)&&p(y)},_=Te({ref:le(T,i),isDisabled:s,isFocusable:x,clickOnEnter:o,clickOnSpace:m,onClick:X(d.onClick,()=>p(y))}),{onClick:G,...F}=ie(_),Q={position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...S.tab};return l(k.button,{className:z("ui-tabs__tab",h),__css:Q,role:"tab",...d,..._,type:"button",tabIndex:c?0:-1,"aria-selected":te(c),onClick:G,onFocus:s?void 0:X(d.onFocus,C),children:[v,n(ce,{isDisabled:P||s,...F})]})}),[me,pe]=qn({}),Z=L(({className:h,children:s,...x},o)=>{const{selectedIndex:m,tabPanelsProps:v,styles:d}=q(),b=Gn(s).map((P,p)=>{const g=p===m;return f.createElement(me,{key:p,value:{isSelected:g,selectedIndex:m}},P)}),u={w:"100%",...d.tabPanels};return n(k.div,{ref:o,className:z("ui-tabs__panels",h),__css:u,...v,...x,children:b})}),a=L(({className:h,children:s,...x},o)=>{const{isLazy:m,lazyBehavior:v,styles:d}=q(),{isSelected:i}=pe(),b=f.useRef(!1);i&&(b.current=!0);const u=se({wasSelected:b.current,isSelected:i,enabled:m,mode:v}),P={...d.tabPanel};return n(k.div,{ref:o,className:z("ui-tabs__panel",h),role:"tabpanel",__css:P,...x,hidden:!i,children:u?s:null})}),Ne={title:"Components / Disclosure / Tabs",component:t},I=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),R=()=>l(t,{defaultIndex:1,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),M=()=>l(w,{children:[l(t,{size:"sm",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{size:"md",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{size:"lg",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>l(w,{children:[l(t,{variant:"line",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky-subtle",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky-solid",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded-subtle",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"rounded-solid",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"unstyled",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),A=()=>l(t,{variant:"rounded-solid",colorScheme:"red",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),N=()=>l(w,{children:[l(t,{align:"start",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{align:"center",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{align:"end",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>l(w,{children:[l(t,{orientation:"horizontal",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{orientation:"vertical",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),B=()=>l(w,{children:[l(t,{variant:"line",isFitted:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),l(t,{variant:"sticky",isFitted:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),E=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{isDisabled:!0,children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),j=()=>l(t,{children:[n(e,{children:"孫悟空"}),n(e,{isFocusable:!0,children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>l(t,{isManual:!0,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>l(t,{isLazy:!0,lazyBehavior:"unmount",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>l(t,{children:[l(Y,{borderWidth:1,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"})]}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),J=()=>l(t,{variant:"sticky",children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),l(Z,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),U=()=>{const[h,s]=f.useState(0);return l(t,{index:h,onChange:s,children:[n(e,{children:"孫悟空"}),n(e,{children:"ベジータ"}),n(e,{children:"フリーザ"}),n(a,{children:n(r,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),n(a,{children:n(r,{children:"へっ！きたねぇ花火だ"})}),n(a,{children:n(r,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var en,an,rn;I.parameters={...I.parameters,docs:{...(en=I.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(rn=(an=I.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var ln,tn,Tn;R.parameters={...R.parameters,docs:{...(ln=R.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(Tn=(tn=R.parameters)==null?void 0:tn.docs)==null?void 0:Tn.source}}};var cn,sn,dn;M.parameters={...M.parameters,docs:{...(cn=M.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(dn=(sn=M.parameters)==null?void 0:sn.docs)==null?void 0:dn.source}}};var bn,on,hn;V.parameters={...V.parameters,docs:{...(bn=V.parameters)==null?void 0:bn.docs,source:{originalSource:`() => {
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
}`,...(hn=(on=V.parameters)==null?void 0:on.docs)==null?void 0:hn.source}}};var xn,un,Pn;A.parameters={...A.parameters,docs:{...(xn=A.parameters)==null?void 0:xn.docs,source:{originalSource:`() => {
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
}`,...(Pn=(un=A.parameters)==null?void 0:un.docs)==null?void 0:Pn.source}}};var mn,pn,fn;N.parameters={...N.parameters,docs:{...(mn=N.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(fn=(pn=N.parameters)==null?void 0:pn.docs)==null?void 0:fn.source}}};var vn,gn,yn;W.parameters={...W.parameters,docs:{...(vn=W.parameters)==null?void 0:vn.docs,source:{originalSource:`() => {
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
}`,...(yn=(gn=W.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var Cn,Sn,wn;B.parameters={...B.parameters,docs:{...(Cn=B.parameters)==null?void 0:Cn.docs,source:{originalSource:`() => {
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
}`,...(wn=(Sn=B.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var kn,zn,Ln;E.parameters={...E.parameters,docs:{...(kn=E.parameters)==null?void 0:kn.docs,source:{originalSource:`() => {
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
}`,...(Ln=(zn=E.parameters)==null?void 0:zn.docs)==null?void 0:Ln.source}}};var _n,Fn,Dn;j.parameters={...j.parameters,docs:{...(_n=j.parameters)==null?void 0:_n.docs,source:{originalSource:`() => {
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
}`,...(Dn=(Fn=j.parameters)==null?void 0:Fn.docs)==null?void 0:Dn.source}}};var In,Rn,Mn;K.parameters={...K.parameters,docs:{...(In=K.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
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
}`,...(Mn=(Rn=K.parameters)==null?void 0:Rn.docs)==null?void 0:Mn.source}}};var Vn,An,Nn;O.parameters={...O.parameters,docs:{...(Vn=O.parameters)==null?void 0:Vn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(An=O.parameters)==null?void 0:An.docs)==null?void 0:Nn.source}}};var Wn,Bn,En;H.parameters={...H.parameters,docs:{...(Wn=H.parameters)==null?void 0:Wn.docs,source:{originalSource:`() => {
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
}`,...(En=(Bn=H.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var jn,Kn,On;J.parameters={...J.parameters,docs:{...(jn=J.parameters)==null?void 0:jn.docs,source:{originalSource:`() => {
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
}`,...(On=(Kn=J.parameters)==null?void 0:Kn.docs)==null?void 0:On.source}}};var Hn,Jn,Un;U.parameters={...U.parameters,docs:{...(Hn=U.parameters)==null?void 0:Hn.docs,source:{originalSource:`() => {
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
}`,...(Un=(Jn=U.parameters)==null?void 0:Jn.docs)==null?void 0:Un.source}}};const We=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{We as __namedExportsOrder,I as basic,U as customControl,H as customTabList,J as customTabPanels,Ne as default,E as isDisabled,j as isFocusable,O as isLazy,K as isManual,N as withAlign,A as withColorScheme,R as withDefaultIndex,B as withFitted,W as withOrientation,M as withSize,V as withVariant};
