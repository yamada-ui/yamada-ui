import{d as be,Q as ne,f as he,r as n,j as e,s as te,C as se,T as oe,V as ie}from"./iframe-DkaXVr_9.js";import{P as $}from"./props-table-ByaJ1liL.js";import{u as ce,C as le}from"./index.esm-DDaL27Ye.js";import{R as xe,S as Ce,a as ve}from"./squirrel-icon-DAer1T0F.js";import{F as re}from"./for-DxIEhtdT.js";import{B as ue}from"./button-RXS8KHkm.js";import{c,u as ke,a as fe,C as Se}from"./use-checkbox-t1NGE84b.js";import{u as ge}from"./use-input-border-NRtK0GoI.js";import{M as Re}from"./minus-icon-DdkfOHm9.js";import{C as je}from"./check-icon-gPTZ1XkK.js";import{G as Ge}from"./group-QrAqTYqx.js";import{F as f}from"./use-field-props-BZmj12NB.js";import{P as ye}from"./plus-icon-C3ISBKZ5.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-EMuntHHW.js";import"./grid-item-RkuPzjjc.js";import"./flex-DcE13gV0.js";import"./heading-CmJx7P9m.js";import"./createLucideIcon-C_OTIpjj.js";import"./use-ripple-Conhq2CH.js";import"./rings-Dawgqh-Z.js";import"./index-BAHhqMeb.js";import"./index-3YgWOY-Y.js";import"./use-breakpoint-BTniZXuw.js";import"./use-breakpoint-value-CouZTxc7.js";import"./use-color-mode-value-x7SRIQlN.js";const Ie=be({base:{addon:{borderColor:"{--addon-border-color}",borderTopWidth:"1px",fontSize:"{description-size}",mt:"{space-y}",pt:"{space-y}",px:"{space-x}"},description:{color:"fg.muted",fontSize:"{description-size}"},group:{w:"full"},indicator:{...c.base?.indicator,"input:focus-visible + &":{_checked:ne.outline,_notChecked:{borderColor:"{focus-ring-color}"}},position:"absolute",top:"calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)"},root:{...c.base?.root,"&:has(input:focus-visible)":ne.outline,"--addon-border-color":"{root-border-color}","--root-border-color":"colors.border",alignItems:"stretch",borderColor:"{--root-border-color}",borderWidth:"1px",flexDirection:"column",focusRingColor:"{focus-border-color}",gap:"1",position:"relative",px:"{space-x}",py:"{space-y}",rounded:"l2",w:"full",_invalid:{borderColor:"{error-border-color}",focusRingColor:"{error-border-color}"}}},props:{justify:{end:{addon:{me:"calc({bleed-size} * -1)",ms:"calc({space-x} * -1)"},indicator:{right:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",pe:"{bleed-size}"}},start:{addon:{me:"calc({space-x} * -1)",ms:"calc({bleed-size} * -1)"},indicator:{left:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",ps:"{bleed-size}"}}},shape:{...c.props?.shape}},variants:{base:{indicator:{color:"colorScheme.contrast",_checked:{bg:"colorScheme.solid"},_indeterminate:{bg:"colorScheme.solid"}},root:{_checked:{"--indicator-border-color":"colorScheme.solid"},_indeterminate:{"--indicator-border-color":"colorScheme.solid"}}},outline:{root:{_checked:{"--root-border-color":"colorScheme.outline"}}},subtle:{root:{_checked:{"--addon-border-color":"colorScheme.muted","--root-border-color":"transparent",bg:"colorScheme.subtle"}}},surface:{root:{_checked:{"--root-border-color":"colorScheme.muted",bg:"colorScheme.subtle"}}}},sizes:{sm:{indicator:c.sizes?.sm.indicator,root:{...c.sizes?.sm.root,"--description-size":"fontSizes.xs","--space-x":"spaces.3","--space-y":"spaces.2"}},md:{indicator:c.sizes?.md.indicator,root:{...c.sizes?.md.root,"--description-size":"fontSizes.sm","--space-x":"spaces.4","--space-y":"spaces.3"}},lg:{indicator:c.sizes?.lg.indicator,root:{...c.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.5","--space-y":"spaces.4"}},xl:{indicator:c.sizes?.lg.indicator,root:{...c.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.6","--space-y":"spaces.5"}}},defaultProps:{size:"md",variant:"surface",justify:"start",shape:"rounded"}}),{component:Me,PropsContext:we,withContext:K,withProvider:ze,useRootComponentProps:Ve}=he("checkbox-card",Ie),u=ze(({addon:o,checkedIcon:a,children:r,description:s,errorBorderColor:m,focusBorderColor:d,indeterminateIcon:i,label:l,withIndicator:S=!0,addonProps:h,descriptionProps:x,indicatorProps:g,inputProps:R,labelProps:C,rootProps:j,...U})=>{const{checked:v,indeterminate:k,getIndicatorProps:G,getInputProps:y,getRootProps:X}=ke(U),I=ge({errorBorderColor:m,focusBorderColor:d}),Z=n.useMemo(()=>k?i||e.jsx(Re,{}):v?a||e.jsx(je,{}):null,[k,i,v,a]),ee=n.useMemo(()=>r||e.jsxs(e.Fragment,{children:[l?e.jsx(p,{...C,children:l}):null,s?e.jsx(b,{...x,children:s}):null,o?e.jsx(Fe,{...h,children:o}):null]}),[o,h,r,s,x,l,C]);return e.jsxs(te.label,{...X({...I,...j}),children:[e.jsx(te.input,{...y(R)}),S?e.jsx(Pe,{...G(g),children:Z}):null,ee]})},"root")(),Pe=K("div","indicator")({"data-indicator":""}),p=K("span","label")(),b=K("span","description")(),Fe=K("span","addon")(),t=Me(o=>{const[,{colorScheme:a,size:r,variant:s,checkedIcon:m,children:d,disabled:i,errorBorderColor:l,focusBorderColor:S,invalid:h,items:x=[],justify:g,readOnly:R,shape:C,withIndicator:j,...U}]=Ve(o,"group",{transferProps:["variant","colorScheme","size","shape","justify","withIndicator"]}),{max:v,value:k,getInputProps:G,getLabelProps:y,getRootProps:X,onChange:I}=fe(U),Z=n.useMemo(()=>d||x.map(({value:ae,...me},pe)=>e.jsx(u,{value:ae,...me},ae??pe)),[x,d]),ee=n.useMemo(()=>({colorScheme:a,size:r,variant:s,checkedIcon:m,disabled:i,errorBorderColor:l,focusBorderColor:S,invalid:h,justify:g,readOnly:R,shape:C,withIndicator:j}),[a,r,m,s,i,g,j,l,S,h,R,C]),de=n.useMemo(()=>({max:v,value:k,getInputProps:G,getLabelProps:y,onChange:I}),[v,k,G,y,I]);return e.jsx(we,{value:ee,children:e.jsx(Se,{value:de,children:e.jsx(Ge,{...X(),children:Z})})})},"group")(),so={component:u,title:"Components / CheckboxCard"},M=()=>e.jsxs(u,{children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),w=()=>e.jsxs(t,{children:[e.jsxs(u,{value:"1",children:[e.jsx(p,{children:"ドラえもん"}),e.jsx(b,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(u,{value:"2",children:[e.jsx(p,{children:"ドラミ"}),e.jsx(b,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(u,{value:"3",children:[e.jsx(p,{children:"ガチャ子"}),e.jsx(b,{children:"アヒル型のロボット。"})]})]}),z=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o})},V=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["subtle","surface","outline"],rows:se,children:(a,r,s)=>e.jsx(t,{colorScheme:r,variant:a,defaultValue:["1"],items:o,orientation:"vertical"},s)})},P=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["sm","md","lg"],rows:se,children:(a,r,s)=>e.jsx(t,{colorScheme:r,size:a,defaultValue:["1"],items:o,orientation:"vertical"},s)})},F=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{defaultValue:["1"],items:o})},D=()=>e.jsxs(u,{defaultChecked:!0,children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),T=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,max:2})},_=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,orientation:"vertical"})},B=()=>{const o=n.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,orientation:"vertical"})},L=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["rounded","square"],children:(a,r,s)=>e.jsx(t,{defaultValue:["1"],items:o,shape:r},s)})},q=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["start","end"],children:(a,r,s)=>e.jsx(t,{defaultValue:["1"],items:o,justify:r},s)})},O=()=>e.jsxs(t,{withIndicator:!1,children:[e.jsxs(u,{flexDirection:"row",gap:"sm",value:"1",w:"auto",children:[e.jsx(xe,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Rabbit"})]}),e.jsxs(u,{flexDirection:"row",gap:"sm",value:"2",w:"auto",children:[e.jsx(Ce,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Snail"})]}),e.jsxs(u,{flexDirection:"row",gap:"sm",value:"3",w:"auto",children:[e.jsx(ve,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Squirrel"})]})]}),W=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],disabled:!0,items:o},r)}),e.jsx(f,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(t,{defaultValue:["1"],items:o})})]})},E=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],items:o,readOnly:!0},r)}),e.jsx(f,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(t,{defaultValue:["1"],items:o})})]})},H=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],invalid:!0,items:o},r)}),e.jsx(f,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(t,{defaultValue:["1"],items:o})})]})},N=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{focusBorderColor:"green.500",items:o}),e.jsx(t,{defaultValue:["1"],errorBorderColor:"orange.500",invalid:!0,items:o})]})},Y=()=>{const[o,a]=n.useState(["1"]),r=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:r,value:o,onChange:a})},A=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{checkedIcon:e.jsx(ye,{}),items:o})},J=()=>{const{control:o,formState:{errors:a},handleSubmit:r,watch:s}=ce(),m=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),d=i=>console.log("submit:",i);return console.log("watch:",s()),e.jsxs(ie,{as:"form",onSubmit:r(d),children:[e.jsx(f,{errorMessage:a.checkboxCard?.message,invalid:!!a.checkboxCard,label:"Who is your favorite character?",children:e.jsx(le,{name:"checkboxCard",control:o,render:({field:i})=>e.jsx(t,{items:m,...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ue,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Q=()=>{const o={checkboxCard:["2"]},{control:a,formState:{errors:r},handleSubmit:s,watch:m}=ce({defaultValues:o}),d=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),i=l=>console.log("submit:",l);return console.log("watch:",m()),e.jsxs(ie,{as:"form",onSubmit:s(i),children:[e.jsx(f,{errorMessage:r.checkboxCard?.message,invalid:!!r.checkboxCard,label:"Who is your favorite character?",children:e.jsx(le,{name:"checkboxCard",control:a,render:({field:l})=>e.jsx(t,{items:d,...l}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ue,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxCard.Root>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>;
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxCardGroup.Root>
      <CheckboxCardGroup.Item.Root value="1">
        <CheckboxCardGroup.Item.Label>ドラえもん</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          22世紀の未来から来たネコ型ロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root value="2">
        <CheckboxCardGroup.Item.Label>ドラミ</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          ドラえもんの妹のロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root value="3">
        <CheckboxCardGroup.Item.Label>ガチャ子</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          アヒル型のロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
    </CheckboxCardGroup.Root>;
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root items={items} />;
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CheckboxCardGroup.Root key={key} colorScheme={row} variant={column} defaultValue={["1"]} items={items} orientation="vertical" />;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    label: "Checked",
    value: "1"
  }, {
    label: "No checked",
    value: "2"
  }], []);
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <CheckboxCardGroup.Root key={key} colorScheme={row} size={column} defaultValue={["1"]} items={items} orientation="vertical" />;
    }}
    </PropsTable>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />;
}`,...F.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxCard.Root defaultChecked>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>;
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root items={items} max={2} />;
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root items={items} orientation="vertical" />;
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    addon: "藤子・F・不二雄",
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    addon: "藤子・F・不二雄",
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    addon: "藤子・F・不二雄",
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root items={items} orientation="vertical" />;
}`,...B.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => <CheckboxCardGroup.Root key={key} defaultValue={["1"]} items={items} shape={row} />}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => <CheckboxCardGroup.Root key={key} defaultValue={["1"]} items={items} justify={row} />}
    </PropsTable>;
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxCardGroup.Root withIndicator={false}>
      <CheckboxCardGroup.Item.Root flexDirection="row" gap="sm" value="1" w="auto">
        <RabbitIcon fontSize="2xl" />
        <Text as="span">Rabbit</Text>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root flexDirection="row" gap="sm" value="2" w="auto">
        <SnailIcon fontSize="2xl" />
        <Text as="span">Snail</Text>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root flexDirection="row" gap="sm" value="3" w="auto">
        <SquirrelIcon fontSize="2xl" />
        <Text as="span">Squirrel</Text>
      </CheckboxCardGroup.Item.Root>
    </CheckboxCardGroup.Root>;
}`,...O.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxCardGroup.Root key={index} variant={variant} defaultValue={["1"]} disabled items={items} />}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>;
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxCardGroup.Root key={index} variant={variant} defaultValue={["1"]} items={items} readOnly />}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>;
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => <CheckboxCardGroup.Root key={index} variant={variant} defaultValue={["1"]} invalid items={items} />}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>;
}`,...H.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <>
      <CheckboxCardGroup.Root focusBorderColor="green.500" items={items} />
      <CheckboxCardGroup.Root defaultValue={["1"]} errorBorderColor="orange.500" invalid items={items} />
    </>;
}`,...N.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(["1"]);
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root items={items} value={value} onChange={setValue} />;
}`,...Y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  return <CheckboxCardGroup.Root checkedIcon={<PlusIcon />} items={items} />;
}`,...A.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    checkboxCard: string[];
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.checkboxCard?.message} invalid={!!errors.checkboxCard} label="Who is your favorite character?">
        <Controller name="checkboxCard" control={control} render={({
        field
      }) => <CheckboxCardGroup.Root items={items} {...field} />} rules={{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    checkboxCard: string[];
  }
  const defaultValues: Data = {
    checkboxCard: ["2"]
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
  const items = useMemo<CheckboxCardGroup.RootProps["items"]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "1"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "2"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "3"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.checkboxCard?.message} invalid={!!errors.checkboxCard} label="Who is your favorite character?">
        <Controller name="checkboxCard" control={control} render={({
        field
      }) => <CheckboxCardGroup.Root items={items} {...field} />} rules={{
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
}`,...Q.parameters?.docs?.source}}};const io=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Max","Orientation","Addon","Shape","Justify","HiddenIndicator","Disabled","Readonly","Invalid","BorderColor","CustomControl","CustomIcon","ReactHookForm","ReactHookFormWithDefaultValue"];export{B as Addon,M as Basic,N as BorderColor,Y as CustomControl,A as CustomIcon,D as DefaultChecked,F as DefaultValue,W as Disabled,w as Group,O as HiddenIndicator,H as Invalid,z as Items,q as Justify,T as Max,_ as Orientation,J as ReactHookForm,Q as ReactHookFormWithDefaultValue,E as Readonly,L as Shape,P as Size,V as Variant,io as __namedExportsOrder,so as default};
