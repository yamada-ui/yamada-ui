import{j as u,a as F,F as f}from"./jsx-runtime-TtYKBvr-.js";import{r as E}from"./index-IybTgENJ.js";import{u as n0}from"./index-JOm7fgLq.js";import{c as e0}from"./index-ka2hqMi2.js";import{c as Ju,p as Uu,J as $,S as uu,u as v,a as g,h as X,v as a0,G as F0}from"./factory-0U35BYk-.js";import{u as r0}from"./index-ymhgcOaY.js";import{u as l0,R as t0}from"./use-ripple-0Krh0NIL.js";import{f as y}from"./forward-ref-6T0UNPU-.js";import{a as T0}from"./index-V-wXfN6t.js";import{u as i0}from"./use-component-style-5nTHLJk_.js";import{o as c0}from"./theme-provider-_TpUstJ8.js";import{T as a}from"./text-v7BrHFOc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-EYTS8taP.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-oaSIzDbx.js";const{DescendantsContextProvider:s0,useDescendantsContext:d0,useDescendants:b0,useDescendant:o0}=e0(),[B0,U]=Ju({name:"TabsContext",errorMessage:`useTabsContext returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />"`}),r=y(({align:b="start",...T},B)=>{const[d,A]=i0("Tabs",{align:b,...T}),{className:D,index:c,defaultIndex:t=0,onChange:s,isFitted:h,isManual:o,isLazy:C=!0,disableRipple:x=!1,lazyBehavior:p="keepMounted",orientation:P="horizontal",tabListProps:l,tabPanelsProps:i,children:m,...S}=c0(A),[q,w]=E.useState(t),[Q,qu]=n0({value:c,defaultValue:t,onChange:s}),Qu=b0(),k=Uu(m),[Xu]=$(k,Y),[Yu]=$(k,Z),Zu=uu(k,n),$u=uu(k,e);E.useEffect(()=>{c!=null&&w(c)},[c]);const u0={w:"100%",...d.container};return u(s0,{value:Qu,children:u(B0,{value:{focusedIndex:q,setFocusedIndex:w,selectedIndex:Q,setSelectedIndex:qu,disableRipple:x,isFitted:h,align:b,isManual:o,isLazy:C,lazyBehavior:p,orientation:P,tabListProps:l,tabPanelsProps:i,styles:d},children:F(v.div,{ref:B,className:g("ui-tabs",D),__css:u0,...S,children:[Xu??u(Y,{children:Zu}),Yu??u(Z,{children:$u})]})})})}),Y=y(({className:b,...T},B)=>{const{focusedIndex:d,orientation:A,tabListProps:D,styles:c}=U(),t=d0(),s=A==="vertical",h=E.useCallback(()=>{var i;const l=t.enabledNextValue(d);l&&((i=l.node)==null||i.focus())},[t,d]),o=E.useCallback(()=>{var i;const l=t.enabledPrevValue(d);l&&((i=l.node)==null||i.focus())},[t,d]),C=E.useCallback(()=>{var i;const l=t.enabledFirstValue();l&&((i=l.node)==null||i.focus())},[t]),x=E.useCallback(()=>{var i;const l=t.enabledLastValue();l&&((i=l.node)==null||i.focus())},[t]),p=E.useCallback(l=>{const m={ArrowLeft:()=>s?{}:o(),ArrowRight:()=>s?{}:h(),ArrowDown:()=>s?h():{},ArrowUp:()=>s?o():{},Home:C,End:x}[l.key];m&&(l.preventDefault(),m(l))},[C,x,s,o,h]),P={display:"flex",...c.tabList};return u(v.div,{ref:B,className:g("ui-tabs__list",b),role:"tablist",__css:P,...D,...T,onKeyDown:X(T.onKeyDown,p)})}),n=y(({className:b,isDisabled:T,isFocusable:B,clickOnEnter:d,clickOnSpace:A,children:D,...c},t)=>{const{selectedIndex:s,isManual:h,disableRipple:o,setSelectedIndex:C,setFocusedIndex:x,styles:p}=U(),{index:P,register:l}=o0({disabled:T&&!B}),i=P===s,m=()=>{x(P),!h&&!(T&&B)&&C(P)},S=r0({ref:a0(l,t),isDisabled:T,isFocusable:B,clickOnEnter:d,clickOnSpace:A,onClick:X(c.onClick,()=>C(P))}),{onPointerDown:q,...w}=l0({...S,isDisabled:o||T}),Q={position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...p.tab};return F(v.button,{className:g("ui-tabs__tab",b),__css:Q,role:"tab",...c,...S,type:"button",tabIndex:i?0:-1,"aria-selected":F0(i),onPointerDown:q,onFocus:T?void 0:X(c.onFocus,m),children:[D,u(t0,{isDisabled:o||T,...w})]})}),[h0,A0]=Ju({}),Z=y(({className:b,children:T,...B},d)=>{const{selectedIndex:A,tabPanelsProps:D,styles:c}=U(),s=Uu(T).map((o,C)=>{const x=C===A;return E.createElement(h0,{key:C,value:{isSelected:x,selectedIndex:A}},o)}),h={w:"100%",...c.tabPanels};return u(v.div,{ref:d,className:g("ui-tabs__panels",b),__css:h,...D,...B,children:s})}),e=y(({className:b,children:T,...B},d)=>{const{isLazy:A,lazyBehavior:D,styles:c}=U(),{isSelected:t}=A0(),s=E.useRef(!1);t&&(s.current=!0);const h=T0({wasSelected:s.current,isSelected:t,enabled:A,mode:D}),o={...c.tabPanel};return u(v.div,{ref:d,className:g("ui-tabs__panel",b),role:"tabpanel",__css:o,...B,hidden:!t,children:h?T:null})}),R0={title:"Components / Disclosure / Tabs",component:r},z=()=>F(r,{children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),L=()=>F(r,{defaultIndex:1,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),_=()=>F(f,{children:[F(r,{size:"sm",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{size:"md",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{size:"lg",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),I=()=>F(f,{children:[F(r,{variant:"line",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"sticky",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"sticky-subtle",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"sticky-solid",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"rounded",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"rounded-subtle",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"rounded-solid",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"unstyled",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),R=()=>F(r,{variant:"rounded-solid",colorScheme:"red",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),M=()=>F(f,{children:[F(r,{align:"start",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{align:"center",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{align:"end",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),V=()=>F(f,{children:[F(r,{orientation:"horizontal",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{orientation:"vertical",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),N=()=>F(f,{children:[F(r,{variant:"line",isFitted:!0,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),F(r,{variant:"sticky",isFitted:!0,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),W=()=>F(r,{children:[u(n,{children:"孫悟空"}),u(n,{isDisabled:!0,children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),j=()=>F(r,{children:[u(n,{children:"孫悟空"}),u(n,{isFocusable:!0,children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),K=()=>F(r,{isManual:!0,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),O=()=>F(r,{isLazy:!0,lazyBehavior:"unmount",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),G=()=>F(r,{children:[F(Y,{borderWidth:1,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"})]}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]}),H=()=>F(r,{variant:"sticky",children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),F(Z,{borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,children:[u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})]}),J=()=>{const[b,T]=E.useState(0);return F(r,{index:b,onChange:T,children:[u(n,{children:"孫悟空"}),u(n,{children:"ベジータ"}),u(n,{children:"フリーザ"}),u(e,{children:u(a,{children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u(e,{children:u(a,{children:"へっ！きたねぇ花火だ"})}),u(e,{children:u(a,{children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})})]})};var nu,eu,au;z.parameters={...z.parameters,docs:{...(nu=z.parameters)==null?void 0:nu.docs,source:{originalSource:`() => {
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
}`,...(au=(eu=z.parameters)==null?void 0:eu.docs)==null?void 0:au.source}}};var Fu,ru,lu;L.parameters={...L.parameters,docs:{...(Fu=L.parameters)==null?void 0:Fu.docs,source:{originalSource:`() => {
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
}`,...(lu=(ru=L.parameters)==null?void 0:ru.docs)==null?void 0:lu.source}}};var tu,Tu,iu;_.parameters={..._.parameters,docs:{...(tu=_.parameters)==null?void 0:tu.docs,source:{originalSource:`() => {
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
}`,...(iu=(Tu=_.parameters)==null?void 0:Tu.docs)==null?void 0:iu.source}}};var cu,su,du;I.parameters={...I.parameters,docs:{...(cu=I.parameters)==null?void 0:cu.docs,source:{originalSource:`() => {
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
}`,...(du=(su=I.parameters)==null?void 0:su.docs)==null?void 0:du.source}}};var bu,ou,Bu;R.parameters={...R.parameters,docs:{...(bu=R.parameters)==null?void 0:bu.docs,source:{originalSource:`() => {
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
}`,...(Bu=(ou=R.parameters)==null?void 0:ou.docs)==null?void 0:Bu.source}}};var hu,Au,Cu;M.parameters={...M.parameters,docs:{...(hu=M.parameters)==null?void 0:hu.docs,source:{originalSource:`() => {
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
}`,...(Cu=(Au=M.parameters)==null?void 0:Au.docs)==null?void 0:Cu.source}}};var Eu,Du,xu;V.parameters={...V.parameters,docs:{...(Eu=V.parameters)==null?void 0:Eu.docs,source:{originalSource:`() => {
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
}`,...(xu=(Du=V.parameters)==null?void 0:Du.docs)==null?void 0:xu.source}}};var Pu,mu,pu;N.parameters={...N.parameters,docs:{...(Pu=N.parameters)==null?void 0:Pu.docs,source:{originalSource:`() => {
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
}`,...(pu=(mu=N.parameters)==null?void 0:mu.docs)==null?void 0:pu.source}}};var fu,vu,gu;W.parameters={...W.parameters,docs:{...(fu=W.parameters)==null?void 0:fu.docs,source:{originalSource:`() => {
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
}`,...(gu=(vu=W.parameters)==null?void 0:vu.docs)==null?void 0:gu.source}}};var yu,Su,wu;j.parameters={...j.parameters,docs:{...(yu=j.parameters)==null?void 0:yu.docs,source:{originalSource:`() => {
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
}`,...(wu=(Su=j.parameters)==null?void 0:Su.docs)==null?void 0:wu.source}}};var ku,zu,Lu;K.parameters={...K.parameters,docs:{...(ku=K.parameters)==null?void 0:ku.docs,source:{originalSource:`() => {
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
}`,...(Lu=(zu=K.parameters)==null?void 0:zu.docs)==null?void 0:Lu.source}}};var _u,Iu,Ru;O.parameters={...O.parameters,docs:{...(_u=O.parameters)==null?void 0:_u.docs,source:{originalSource:`() => {
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
}`,...(Ru=(Iu=O.parameters)==null?void 0:Iu.docs)==null?void 0:Ru.source}}};var Mu,Vu,Nu;G.parameters={...G.parameters,docs:{...(Mu=G.parameters)==null?void 0:Mu.docs,source:{originalSource:`() => {
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
}`,...(Nu=(Vu=G.parameters)==null?void 0:Vu.docs)==null?void 0:Nu.source}}};var Wu,ju,Ku;H.parameters={...H.parameters,docs:{...(Wu=H.parameters)==null?void 0:Wu.docs,source:{originalSource:`() => {
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
}`,...(Ku=(ju=H.parameters)==null?void 0:ju.docs)==null?void 0:Ku.source}}};var Ou,Gu,Hu;J.parameters={...J.parameters,docs:{...(Ou=J.parameters)==null?void 0:Ou.docs,source:{originalSource:`() => {
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
}`,...(Hu=(Gu=J.parameters)==null?void 0:Gu.docs)==null?void 0:Hu.source}}};const M0=["basic","withDefaultIndex","withSize","withVariant","withColorScheme","withAlign","withOrientation","withFitted","isDisabled","isFocusable","isManual","isLazy","customTabList","customTabPanels","customControl"];export{M0 as __namedExportsOrder,z as basic,J as customControl,G as customTabList,H as customTabPanels,R0 as default,W as isDisabled,j as isFocusable,O as isLazy,K as isManual,M as withAlign,R as withColorScheme,L as withDefaultIndex,N as withFitted,V as withOrientation,_ as withSize,I as withVariant};
