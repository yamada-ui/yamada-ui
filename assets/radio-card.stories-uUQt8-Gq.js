import{d as Sr,a3 as gr,g as jr,r as t,j as e,s as Y,C as cr,T as Q,V as ur,Q as pr}from"./iframe-D_HYglKf.js";import{P as N}from"./props-table-TlEH2bpt.js";import{u as mr,C as br}from"./index.esm-B43pSn5g.js";import{F as K}from"./for-B7ME2eWM.js";import{r as i,u as yr,a as Gr,R as Ir}from"./use-radio-BSHPAhb4.js";import{u as zr}from"./use-input-border-CNq4o9Wo.js";import{G as Vr}from"./group-BP-ePriJ.js";import{R as kr,S as Mr,a as Tr}from"./squirrel-icon-HTFZZhXq.js";import{F as v}from"./use-field-props-DKtq6E-0.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";import"./index-DlPqCcPe.js";import"./index-YgsjGqza.js";import"./use-breakpoint-DzseuvVx.js";import"./use-breakpoint-value-DJZAC5OA.js";import"./use-color-mode-value-ChIzIqo3.js";var Z,$,ee,re,oe,ae,ne,te,se,ie,le,de;const wr=Sr({base:{addon:{borderColor:"{--addon-border-color}",borderTopWidth:"1px",fontSize:"{description-size}",mt:"{space-y}",pt:"{space-y}",px:"{space-x}"},description:{color:"fg.muted",fontSize:"{description-size}"},group:{w:"full"},indicator:{...(Z=i.base)==null?void 0:Z.indicator,"input:focus-visible + &":{borderColor:"{focus-ring-color}"},position:"absolute",top:"calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)"},root:{...($=i.base)==null?void 0:$.root,"&:has(input:focus-visible)":gr.outline,"--addon-border-color":"{root-border-color}","--root-border-color":"colors.border",alignItems:"stretch",borderColor:"{--root-border-color}",borderWidth:"1px",flexDirection:"column",focusRingColor:"{focus-border-color}",gap:"1",position:"relative",px:"{space-x}",py:"{space-y}",rounded:"l2",w:"full",_invalid:{borderColor:"{error-border-color}",focusRingColor:"{error-border-color}"}}},props:{justify:{end:{addon:{me:"calc({bleed-size} * -1)",ms:"calc({space-x} * -1)"},indicator:{right:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",pe:"{bleed-size}"}},start:{addon:{me:"calc({space-x} * -1)",ms:"calc({bleed-size} * -1)"},indicator:{left:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",ps:"{bleed-size}"}}},shape:{...(ee=i.props)==null?void 0:ee.shape}},variants:{base:{indicator:(re=i.variants)==null?void 0:re.base.indicator},outline:{root:{_checked:{"--indicator-border-color":"colorScheme.outline","--root-border-color":"colorScheme.outline"}}},subtle:{indicator:{_checked:{bg:"bg"}},root:{_checked:{"--addon-border-color":"colorScheme.muted","--indicator-border-color":"colorScheme.emphasized","--root-border-color":"transparent",bg:"colorScheme.subtle"}}},surface:{indicator:{_checked:{bg:"bg"}},root:{_checked:{"--indicator-border-color":"colorScheme.emphasized","--root-border-color":"colorScheme.muted",bg:"colorScheme.subtle"}}}},sizes:{sm:{indicator:(oe=i.sizes)==null?void 0:oe.sm.indicator,root:{...(ae=i.sizes)==null?void 0:ae.sm.root,"--description-size":"fontSizes.xs","--space-x":"spaces.3","--space-y":"spaces.2"}},md:{indicator:(ne=i.sizes)==null?void 0:ne.md.indicator,root:{...(te=i.sizes)==null?void 0:te.md.root,"--description-size":"fontSizes.sm","--space-x":"spaces.4","--space-y":"spaces.3"}},lg:{indicator:(se=i.sizes)==null?void 0:se.lg.indicator,root:{...(ie=i.sizes)==null?void 0:ie.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.5","--space-y":"spaces.4"}},xl:{indicator:(le=i.sizes)==null?void 0:le.lg.indicator,root:{...(de=i.sizes)==null?void 0:de.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.6","--space-y":"spaces.5"}}},defaultProps:{size:"md",variant:"surface",justify:"start",shape:"circle"}}),{component:Fr,PropsContext:Dr,withContext:A,withProvider:Pr,useRootComponentProps:Br}=jr("radio-card",wr),p=Pr(({addon:r,children:a,description:o,errorBorderColor:s,focusBorderColor:c,label:l,withIndicator:d=!0,addonProps:u,descriptionProps:m,indicatorProps:R,inputProps:h,labelProps:b,rootProps:C,...f})=>{const{getIndicatorProps:J,getInputProps:x,getRootProps:S}=yr(f),g=zr({errorBorderColor:s,focusBorderColor:c}),j=t.useMemo(()=>a||e.jsxs(e.Fragment,{children:[l?e.jsx(L,{...b,children:l}):null,o?e.jsx(E,{...m,children:o}):null,r?e.jsx(_r,{...u,children:r}):null]}),[r,u,a,o,m,l,b]);return e.jsxs(Y.label,{...S({...g,...C}),children:[e.jsx(Y.input,{...x(h)}),d?e.jsx(Or,{...J(R)}):null,j]})},"root")(),Or=A("div","indicator")({"data-indicator":""}),L=A("span","label")(),E=A("span","description")(),_r=A("span","addon")(),n=Fr(r=>{const[,{colorScheme:a,size:o,variant:s,children:c,disabled:l,errorBorderColor:d,focusBorderColor:u,invalid:m,items:R=[],justify:h,readOnly:b,shape:C,withIndicator:f,...J}]=Br(r,"group",{transferProps:["variant","colorScheme","size","shape","justify","withIndicator"]}),{name:x,value:S,getInputProps:g,getLabelProps:j,getRootProps:vr,onChange:U}=Gr(J),Rr=t.useMemo(()=>c||R.map(({value:X,...fr},xr)=>e.jsx(p,{value:X,...fr},X??xr)),[R,c]),hr=t.useMemo(()=>({colorScheme:a,size:o,variant:s,disabled:l,errorBorderColor:d,focusBorderColor:u,invalid:m,justify:h,readOnly:b,shape:C,withIndicator:f}),[a,o,s,l,h,f,d,u,m,b,C]),Cr=t.useMemo(()=>({name:x,value:S,getInputProps:g,getLabelProps:j,onChange:U}),[x,S,g,j,U]);return e.jsx(Dr,{value:hr,children:e.jsx(Ir,{value:Cr,children:e.jsx(Vr,{...vr(),children:Rr})})})},"group")(),no={component:p,title:"Components / RadioCard"},y=()=>e.jsxs(n,{children:[e.jsxs(p,{value:"1",children:[e.jsx(L,{children:"ビアンカ"}),e.jsx(E,{children:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。"})]}),e.jsxs(p,{value:"2",children:[e.jsx(L,{children:"フローラ"}),e.jsx(E,{children:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。"})]}),e.jsxs(p,{value:"3",children:[e.jsx(L,{children:"ルドマン"}),e.jsx(E,{children:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。"})]})]}),G=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:r})},I=()=>{const r=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(N,{columns:["subtle","surface","outline"],rows:cr,children:(a,o,s)=>e.jsx(n,{colorScheme:o,variant:a,defaultValue:"1",items:r,orientation:"vertical"},s)})},z=()=>{const r=t.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx(N,{columns:["sm","md","lg"],rows:cr,children:(a,o,s)=>e.jsx(n,{colorScheme:o,size:a,defaultValue:"1",items:r,orientation:"vertical"},s)})},V=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{defaultValue:"2",items:r})},k=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{defaultChecked:!0,description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:r})},M=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"vertical"})},T=()=>{const r=t.useMemo(()=>[{addon:"ドラゴンクエストV 天空の花嫁",description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{addon:"ドラゴンクエストV 天空の花嫁",description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{addon:"ドラゴンクエストV 天空の花嫁",description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:r,orientation:"vertical"})},w=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(N,{variant:"stack",rows:["circle","square","rounded"],children:(a,o,s)=>e.jsx(n,{defaultValue:"2",items:r,shape:o},s)})},F=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(N,{variant:"stack",rows:["start","end"],children:(a,o,s)=>e.jsx(n,{defaultValue:"2",items:r,justify:o},s)})},D=()=>e.jsxs(n,{withIndicator:!1,children:[e.jsxs(p,{flexDirection:"row",gap:"sm",value:"1",w:"auto",children:[e.jsx(kr,{fontSize:"2xl"}),e.jsx(Q,{as:"span",children:"Rabbit"})]}),e.jsxs(p,{flexDirection:"row",gap:"sm",value:"2",w:"auto",children:[e.jsx(Mr,{fontSize:"2xl"}),e.jsx(Q,{as:"span",children:"Snail"})]}),e.jsxs(p,{flexDirection:"row",gap:"sm",value:"3",w:"auto",children:[e.jsx(Tr,{fontSize:"2xl"}),e.jsx(Q,{as:"span",children:"Squirrel"})]})]}),P=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(K,{each:["subtle","surface","outline"],children:(a,o)=>e.jsx(n,{variant:a,defaultValue:"2",disabled:!0,items:r},o)}),e.jsx(v,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(n,{defaultValue:"2",items:r})})]})},B=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(K,{each:["subtle","surface","outline"],children:(a,o)=>e.jsx(n,{variant:a,defaultValue:"2",items:r,readOnly:!0},o)}),e.jsx(v,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(n,{defaultValue:"2",items:r})})]})},O=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(K,{each:["subtle","surface","outline"],children:(a,o)=>e.jsx(n,{variant:a,defaultValue:"2",invalid:!0,items:r},o)}),e.jsx(v,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(n,{defaultValue:"2",items:r})})]})},_=()=>{const r=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(n,{focusBorderColor:"green.500",items:r}),e.jsx(n,{defaultValue:"2",errorBorderColor:"orange.500",invalid:!0,items:r})]})},q=()=>{const[r,a]=t.useState("2"),o=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]);return e.jsx(n,{items:o,value:r,onChange:a})},W=()=>{var l;const{control:r,formState:{errors:a},handleSubmit:o}=mr(),s=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]),c=d=>console.log("submit:",d);return e.jsxs(ur,{as:"form",onSubmit:o(c),children:[e.jsx(v,{errorMessage:(l=a.radioCard)==null?void 0:l.message,invalid:!!a.radioCard,label:"Who is your favorite character?",children:e.jsx(br,{name:"radioCard",control:r,render:({field:d})=>e.jsx(n,{items:s,...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(pr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},H=()=>{var d;const r={radioCard:"2"},{control:a,formState:{errors:o},handleSubmit:s}=mr({defaultValues:r}),c=t.useMemo(()=>[{description:"パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",label:"ビアンカ",value:"1"},{description:"大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",label:"フローラ",value:"2"},{description:"なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",label:"ルドマン",value:"3"}],[]),l=u=>console.log("submit:",u);return e.jsxs(ur,{as:"form",onSubmit:s(l),children:[e.jsx(v,{errorMessage:(d=o.radioCard)==null?void 0:d.message,invalid:!!o.radioCard,label:"Who is your favorite character?",children:e.jsx(br,{name:"radioCard",control:a,render:({field:u})=>e.jsx(n,{items:c,...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(pr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ce,ue,pe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(pe=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,ve;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(ve=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Re,he,Ce;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Ce=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var fe,xe,Se;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Se=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var ge,je,ye;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(ye=(je=V.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var Ge,Ie,ze;k.parameters={...k.parameters,docs:{...(Ge=k.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(ze=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};var Ve,ke,Me;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Me=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Te,we,Fe;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Fe=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var De,Pe,Be;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Be=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Oe,_e,qe;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(qe=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var We,He,Le;D.parameters={...D.parameters,docs:{...(We=D.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Le=(He=D.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Ee,Ne,Ae;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Ae=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Je,Qe,Ke;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Ke=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:Ke.source}}};var Ue,Xe,Ye;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(Ye=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,er;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(er=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:er.source}}};var rr,or,ar;q.parameters={...q.parameters,docs:{...(rr=q.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("2");
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(ar=(or=q.parameters)==null?void 0:or.docs)==null?void 0:ar.source}}};var nr,tr,sr;W.parameters={...W.parameters,docs:{...(nr=W.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
  interface Data {
    radioCard: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(sr=(tr=W.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var ir,lr,dr;H.parameters={...H.parameters,docs:{...(ir=H.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<RadioCardGroup.ItemType[]>(() => [{
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
}`,...(dr=(lr=H.parameters)==null?void 0:lr.docs)==null?void 0:dr.source}}};const to=["Basic","Items","Variant","Size","DefaultValue","DefaultChecked","Orientation","Addon","Shape","Justify","HiddenIndicator","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{T as Addon,y as Basic,_ as BorderColor,q as CustomControl,k as DefaultChecked,V as DefaultValue,P as Disabled,D as HiddenIndicator,O as Invalid,G as Items,F as Justify,M as Orientation,W as ReactHookForm,H as ReactHookFormWithDefaultValue,B as ReadOnly,w as Shape,z as Size,I as Variant,to as __namedExportsOrder,no as default};
