import{d as de,a4 as ce,g as ue,r as t,j as e,s as Y,C as Z,T as K,V as $,R as ee}from"./iframe-Brv718Ke.js";import{P as N}from"./props-table-BhZ2Cxzm.js";import{u as oe,C as re}from"./index.esm-DLcPDS83.js";import{F as Q}from"./for-y9tZyjCV.js";import{r as i,u as pe,a as me,R as be}from"./use-radio-COgD17lS.js";import{u as ve}from"./use-input-border-EKiwMOEK.js";import{G as Re}from"./group-SFENiReo.js";import{R as he,S as Ce,a as fe}from"./squirrel-icon-M_2xI6Bn.js";import{F as v}from"./use-field-props-CVZTzbsP.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DLYm4Rks.js";import"./grid-item-DWuT-LWZ.js";import"./flex-DhUoci5A.js";import"./heading-DLtRtgvj.js";import"./index-DcQLEJWH.js";import"./index-D5wu8vhg.js";import"./use-breakpoint-BYwrrTnn.js";import"./use-breakpoint-value-B49E1fW3.js";import"./use-color-mode-value-DNz64yif.js";const xe=de({base:{addon:{borderColor:"{--addon-border-color}",borderTopWidth:"1px",fontSize:"{description-size}",mt:"{space-y}",pt:"{space-y}",px:"{space-x}"},description:{color:"fg.muted",fontSize:"{description-size}"},group:{w:"full"},indicator:{...i.base?.indicator,"input:focus-visible + &":{borderColor:"{focus-ring-color}"},position:"absolute",top:"calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)"},root:{...i.base?.root,"&:has(input:focus-visible)":ce.outline,"--addon-border-color":"{root-border-color}","--root-border-color":"colors.border",alignItems:"stretch",borderColor:"{--root-border-color}",borderWidth:"1px",flexDirection:"column",focusRingColor:"{focus-border-color}",gap:"1",position:"relative",px:"{space-x}",py:"{space-y}",rounded:"l2",w:"full",_invalid:{borderColor:"{error-border-color}",focusRingColor:"{error-border-color}"}}},props:{justify:{end:{addon:{me:"calc({bleed-size} * -1)",ms:"calc({space-x} * -1)"},indicator:{right:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",pe:"{bleed-size}"}},start:{addon:{me:"calc({space-x} * -1)",ms:"calc({bleed-size} * -1)"},indicator:{left:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",ps:"{bleed-size}"}}},shape:{...i.props?.shape}},variants:{base:{indicator:i.variants?.base.indicator},outline:{root:{_checked:{"--indicator-border-color":"colorScheme.outline","--root-border-color":"colorScheme.outline"}}},subtle:{indicator:{_checked:{bg:"bg"}},root:{_checked:{"--addon-border-color":"colorScheme.muted","--indicator-border-color":"colorScheme.emphasized","--root-border-color":"transparent",bg:"colorScheme.subtle"}}},surface:{indicator:{_checked:{bg:"bg"}},root:{_checked:{"--indicator-border-color":"colorScheme.emphasized","--root-border-color":"colorScheme.muted",bg:"colorScheme.subtle"}}}},sizes:{sm:{indicator:i.sizes?.sm.indicator,root:{...i.sizes?.sm.root,"--description-size":"fontSizes.xs","--space-x":"spaces.3","--space-y":"spaces.2"}},md:{indicator:i.sizes?.md.indicator,root:{...i.sizes?.md.root,"--description-size":"fontSizes.sm","--space-x":"spaces.4","--space-y":"spaces.3"}},lg:{indicator:i.sizes?.lg.indicator,root:{...i.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.5","--space-y":"spaces.4"}},xl:{indicator:i.sizes?.lg.indicator,root:{...i.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.6","--space-y":"spaces.5"}}},defaultProps:{size:"md",variant:"surface",justify:"start",shape:"circle"}}),{component:Se,PropsContext:ge,withContext:A,withProvider:je,useRootComponentProps:Ge}=ue("radio-card",xe),p=je(({addon:o,children:a,description:r,errorBorderColor:s,focusBorderColor:c,label:l,withIndicator:d=!0,addonProps:u,descriptionProps:m,indicatorProps:R,inputProps:h,labelProps:b,rootProps:C,...f})=>{const{getIndicatorProps:J,getInputProps:x,getRootProps:S}=pe(f),g=ve({errorBorderColor:s,focusBorderColor:c}),j=t.useMemo(()=>a||e.jsxs(e.Fragment,{children:[l?e.jsx(L,{...b,children:l}):null,r?e.jsx(E,{...m,children:r}):null,o?e.jsx(ze,{...u,children:o}):null]}),[o,u,a,r,m,l,b]);return e.jsxs(Y.label,{...S({...g,...C}),children:[e.jsx(Y.input,{...x(h)}),d?e.jsx(ye,{...J(R)}):null,j]})},"root")(),ye=A("div","indicator")({"data-indicator":""}),L=A("span","label")(),E=A("span","description")(),ze=A("span","addon")(),n=Se(o=>{const[,{colorScheme:a,size:r,variant:s,children:c,disabled:l,errorBorderColor:d,focusBorderColor:u,invalid:m,items:R=[],justify:h,readOnly:b,shape:C,withIndicator:f,...J}]=Ge(o,"group",{transferProps:["variant","colorScheme","size","shape","justify","withIndicator"]}),{name:x,value:S,getInputProps:g,getLabelProps:j,getRootProps:ae,onChange:U}=me(J),ne=t.useMemo(()=>c||R.map(({value:X,...ie},le)=>e.jsx(p,{value:X,...ie},X??le)),[R,c]),te=t.useMemo(()=>({colorScheme:a,size:r,variant:s,disabled:l,errorBorderColor:d,focusBorderColor:u,invalid:m,justify:h,readOnly:b,shape:C,withIndicator:f}),[a,r,s,l,h,f,d,u,m,b,C]),se=t.useMemo(()=>({name:x,value:S,getInputProps:g,getLabelProps:j,onChange:U}),[x,S,g,j,U]);return e.jsx(ge,{value:te,children:e.jsx(be,{value:se,children:e.jsx(Re,{...ae(),children:ne})})})},"group")(),Je={component:p,title:"Components / RadioCard"},G=()=>e.jsxs(n,{children:[e.jsxs(p,{value:"1",children:[e.jsx(L,{children:"ビアンカ"}),e.jsx(E,{children:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。"})]}),e.jsxs(p,{value:"2",children:[e.jsx(L,{children:"フローラ"}),e.jsx(E,{children:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。"})]}),e.jsxs(p,{value:"3",children:[e.jsx(L,{children:"ルドマン"}),e.jsx(E,{children:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。"})]})]}),y=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:o})},z=()=>{const o=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(N,{columns:["subtle","surface","outline"],rows:Z,children:(a,r,s)=>e.jsx(n,{colorScheme:r,variant:a,defaultValue:"1",items:o,orientation:"vertical"},s)})},V=()=>{const o=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(N,{columns:["sm","md","lg"],rows:Z,children:(a,r,s)=>e.jsx(n,{colorScheme:r,size:a,defaultValue:"1",items:o,orientation:"vertical"},s)})},w=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{defaultValue:"2",items:o})},I=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{defaultChecked:!0,description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:o})},k=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:o,orientation:"vertical"})},M=()=>{const o=t.useMemo(()=>[{addon:"ドラゴンクエストV 天空の花嫁",description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{addon:"ドラゴンクエストV 天空の花嫁",description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{addon:"ドラゴンクエストV 天空の花嫁",description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:o,orientation:"vertical"})},P=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(N,{variant:"stack",rows:["circle","square","rounded"],children:(a,r,s)=>e.jsx(n,{defaultValue:"2",items:o,shape:r},s)})},F=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(N,{variant:"stack",rows:["start","end"],children:(a,r,s)=>e.jsx(n,{defaultValue:"2",items:o,justify:r},s)})},D=()=>e.jsxs(n,{withIndicator:!1,children:[e.jsxs(p,{flexDirection:"row",gap:"sm",value:"1",w:"auto",children:[e.jsx(he,{fontSize:"2xl"}),e.jsx(K,{as:"span",children:"Rabbit"})]}),e.jsxs(p,{flexDirection:"row",gap:"sm",value:"2",w:"auto",children:[e.jsx(Ce,{fontSize:"2xl"}),e.jsx(K,{as:"span",children:"Snail"})]}),e.jsxs(p,{flexDirection:"row",gap:"sm",value:"3",w:"auto",children:[e.jsx(fe,{fontSize:"2xl"}),e.jsx(K,{as:"span",children:"Squirrel"})]})]}),T=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(Q,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(n,{variant:a,defaultValue:"2",disabled:!0,items:o},r)}),e.jsx(v,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{defaultValue:"2",items:o})})]})},B=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(Q,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(n,{variant:a,defaultValue:"2",items:o,readOnly:!0},r)}),e.jsx(v,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{defaultValue:"2",items:o})})]})},O=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(Q,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(n,{variant:a,defaultValue:"2",invalid:!0,items:o},r)}),e.jsx(v,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{defaultValue:"2",items:o})})]})},_=()=>{const o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{focusBorderColor:"green.500",items:o}),e.jsx(n,{defaultValue:"2",errorBorderColor:"orange.500",invalid:!0,items:o})]})},q=()=>{const[o,a]=t.useState("2"),r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:r,value:o,onChange:a})},W=()=>{const{control:o,formState:{errors:a},handleSubmit:r,watch:s}=oe(),c=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]),l=d=>console.log("submit:",d);return console.log("watch:",s()),e.jsxs($,{as:"form",onSubmit:r(l),children:[e.jsx(v,{errorMessage:a.radioCard?.message,invalid:!!a.radioCard,label:"Who is your favorite character?",children:e.jsx(re,{name:"radioCard",control:o,render:({field:d})=>e.jsx(n,{items:c,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{const o={radioCard:"2"},{control:a,formState:{errors:r},handleSubmit:s,watch:c}=oe({defaultValues:o}),l=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]),d=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs($,{as:"form",onSubmit:s(d),children:[e.jsx(v,{errorMessage:r.radioCard?.message,invalid:!!r.radioCard,label:"Who is your favorite character?",children:e.jsx(re,{name:"radioCard",control:a,render:({field:u})=>e.jsx(n,{items:l,...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <RadioCardGroup.Root>
      <RadioCardGroup.Item.Root value="1">
        <RadioCardGroup.Item.Label>ビアンカ</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root value="2">
        <RadioCardGroup.Item.Label>フローラ</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root value="3">
        <RadioCardGroup.Item.Label>ルドマン</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
    </RadioCardGroup.Root>;
}`,...G.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root items={items} />;
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <RadioCardGroup.Root key={key} colorScheme={row} variant={column} defaultValue="1" items={items} orientation="vertical" />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <RadioCardGroup.Root key={key} colorScheme={row} size={column} defaultValue="1" items={items} orientation="vertical" />;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root defaultValue="2" items={items} />;
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    defaultChecked: true,
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root items={items} />;
}`,...I.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root items={items} orientation="vertical" />;
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    addon: "ドラゴンクエストV 天空の花嫁",
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    addon: "ドラゴンクエストV 天空の花嫁",
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    addon: "ドラゴンクエストV 天空の花嫁",
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root items={items} orientation="vertical" />;
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => <RadioCardGroup.Root key={key} defaultValue="2" items={items} shape={row} />}
    </PropsTable>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => <RadioCardGroup.Root key={key} defaultValue="2" items={items} justify={row} />}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <RadioCardGroup.Root withIndicator={false}>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="1" w="auto">
        <RabbitIcon fontSize="2xl" />
        <Text as="span">Rabbit</Text>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="2" w="auto">
        <SnailIcon fontSize="2xl" />
        <Text as="span">Snail</Text>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="3" w="auto">
        <SquirrelIcon fontSize="2xl" />
        <Text as="span">Squirrel</Text>
      </RadioCardGroup.Item.Root>
    </RadioCardGroup.Root>;
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioCardGroup.Root key={index} variant={variant} defaultValue="2" disabled items={items} />}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>;
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioCardGroup.Root key={index} variant={variant} defaultValue="2" items={items} readOnly />}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>;
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <RadioCardGroup.Root key={index} variant={variant} defaultValue="2" invalid items={items} />}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>;
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <>
      <RadioCardGroup.Root focusBorderColor="green.500" items={items} />
      <RadioCardGroup.Root defaultValue="2" errorBorderColor="orange.500" invalid items={items} />
    </>;
}`,..._.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("2");
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  return <RadioCardGroup.Root items={items} value={value} onChange={setValue} />;
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    radioCard: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.radioCard?.message} invalid={!!errors.radioCard} label="Who is your favorite character?">
        <Controller name="radioCard" control={control} render={({
        field
      }) => <RadioCardGroup.Root items={items} {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    radioCard: string;
  }
  const defaultValues: Data = {
    radioCard: "2"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<RadioCardGroup.RootProps["items"]>(() => [{
    description: "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
    label: "ビアンカ",
    value: "1"
  }, {
    description: "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
    label: "フローラ",
    value: "2"
  }, {
    description: "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
    label: "ルドマン",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.radioCard?.message} invalid={!!errors.radioCard} label="Who is your favorite character?">
        <Controller name="radioCard" control={control} render={({
        field
      }) => <RadioCardGroup.Root items={items} {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...H.parameters?.docs?.source}}};const Ke=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Addon","Shape","Justify","HiddenIndicator","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{M as Addon,G as Basic,_ as BorderColor,q as CustomControl,I as DefaultChecked,w as DefaultValue,T as Disabled,D as HiddenIndicator,O as Invalid,y as Items,F as Justify,k as Orientation,W as ReactHookForm,H as ReactHookFormWithDefaultValue,B as ReadOnly,P as Shape,V as Size,z as Variant,Ke as __namedExportsOrder,Je as default};
