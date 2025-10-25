import{d as be,a3 as ne,g as he,r as n,j as e,s as se,C as te,T as oe,V as ie,Q as ce}from"./iframe-5QspZtQ-.js";import{P as $}from"./props-table-DAC1ISVp.js";import{u as le,C as ue}from"./index.esm-Cz3u5K4m.js";import{R as xe,S as Ce,a as ve}from"./squirrel-icon-CbIBSGRI.js";import{F as re}from"./for-DDltKb5N.js";import{c,u as ke,a as fe,C as Se}from"./use-checkbox-DfxzHVRR.js";import{u as Re}from"./use-input-border-DCrAv45g.js";import{M as ge}from"./minus-icon-PjXaoNbh.js";import{C as je}from"./check-icon-cbLoYFR9.js";import{G as Ge}from"./group-OikBWKOl.js";import{F as f}from"./use-field-props-BSPmBEwJ.js";import{P as ye}from"./plus-icon-BKLYo-AF.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-lhGs18c5.js";import"./grid-item-CTbfQR9b.js";import"./flex-F27-7WN2.js";import"./heading-DabtuQYj.js";import"./index-xocwRrSJ.js";import"./index-BYvBzSg1.js";import"./use-breakpoint-chaUVSrh.js";import"./use-breakpoint-value-zlcrtcvs.js";import"./use-color-mode-value-BafFs7oa.js";const Ie=be({base:{addon:{borderColor:"{--addon-border-color}",borderTopWidth:"1px",fontSize:"{description-size}",mt:"{space-y}",pt:"{space-y}",px:"{space-x}"},description:{color:"fg.muted",fontSize:"{description-size}"},group:{w:"full"},indicator:{...c.base?.indicator,"input:focus-visible + &":{_checked:ne.outline,_notChecked:{borderColor:"{focus-ring-color}"}},position:"absolute",top:"calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)"},root:{...c.base?.root,"&:has(input:focus-visible)":ne.outline,"--addon-border-color":"{root-border-color}","--root-border-color":"colors.border",alignItems:"stretch",borderColor:"{--root-border-color}",borderWidth:"1px",flexDirection:"column",focusRingColor:"{focus-border-color}",gap:"1",position:"relative",px:"{space-x}",py:"{space-y}",rounded:"l2",w:"full",_invalid:{borderColor:"{error-border-color}",focusRingColor:"{error-border-color}"}}},props:{justify:{end:{addon:{me:"calc({bleed-size} * -1)",ms:"calc({space-x} * -1)"},indicator:{right:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",pe:"{bleed-size}"}},start:{addon:{me:"calc({space-x} * -1)",ms:"calc({bleed-size} * -1)"},indicator:{left:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",ps:"{bleed-size}"}}},shape:{...c.props?.shape}},variants:{base:{indicator:{color:"colorScheme.contrast",_checked:{bg:"colorScheme.solid"},_indeterminate:{bg:"colorScheme.solid"}},root:{_checked:{"--indicator-border-color":"colorScheme.solid"},_indeterminate:{"--indicator-border-color":"colorScheme.solid"}}},outline:{root:{_checked:{"--root-border-color":"colorScheme.outline"}}},subtle:{root:{_checked:{"--addon-border-color":"colorScheme.muted","--root-border-color":"transparent",bg:"colorScheme.subtle"}}},surface:{root:{_checked:{"--root-border-color":"colorScheme.muted",bg:"colorScheme.subtle"}}}},sizes:{sm:{indicator:c.sizes?.sm.indicator,root:{...c.sizes?.sm.root,"--description-size":"fontSizes.xs","--space-x":"spaces.3","--space-y":"spaces.2"}},md:{indicator:c.sizes?.md.indicator,root:{...c.sizes?.md.root,"--description-size":"fontSizes.sm","--space-x":"spaces.4","--space-y":"spaces.3"}},lg:{indicator:c.sizes?.lg.indicator,root:{...c.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.5","--space-y":"spaces.4"}},xl:{indicator:c.sizes?.lg.indicator,root:{...c.sizes?.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.6","--space-y":"spaces.5"}}},defaultProps:{size:"md",variant:"surface",justify:"start",shape:"rounded"}}),{component:Me,PropsContext:ze,withContext:K,withProvider:Ve,useRootComponentProps:Pe}=he("checkbox-card",Ie),l=Ve(({addon:o,checkedIcon:a,children:r,description:t,errorBorderColor:d,focusBorderColor:i,indeterminateIcon:u,label:m,withIndicator:S=!0,addonProps:h,descriptionProps:x,indicatorProps:R,inputProps:g,labelProps:C,rootProps:j,...U})=>{const{checked:v,indeterminate:k,getIndicatorProps:G,getInputProps:y,getRootProps:X}=ke(U),I=Re({errorBorderColor:d,focusBorderColor:i}),Z=n.useMemo(()=>k?u||e.jsx(ge,{}):v?a||e.jsx(je,{}):null,[k,u,v,a]),ee=n.useMemo(()=>r||e.jsxs(e.Fragment,{children:[m?e.jsx(p,{...C,children:m}):null,t?e.jsx(b,{...x,children:t}):null,o?e.jsx(we,{...h,children:o}):null]}),[o,h,r,t,x,m,C]);return e.jsxs(se.label,{...X({...I,...j}),children:[e.jsx(se.input,{...y(g)}),S?e.jsx(Fe,{...G(R),children:Z}):null,ee]})},"root")(),Fe=K("div","indicator")({"data-indicator":""}),p=K("span","label")(),b=K("span","description")(),we=K("span","addon")(),s=Me(o=>{const[,{colorScheme:a,size:r,variant:t,checkedIcon:d,children:i,disabled:u,errorBorderColor:m,focusBorderColor:S,invalid:h,items:x=[],justify:R,readOnly:g,shape:C,withIndicator:j,...U}]=Pe(o,"group",{transferProps:["variant","colorScheme","size","shape","justify","withIndicator"]}),{max:v,value:k,getInputProps:G,getLabelProps:y,getRootProps:X,onChange:I}=fe(U),Z=n.useMemo(()=>i||x.map(({value:ae,...me},pe)=>e.jsx(l,{value:ae,...me},ae??pe)),[x,i]),ee=n.useMemo(()=>({colorScheme:a,size:r,variant:t,checkedIcon:d,disabled:u,errorBorderColor:m,focusBorderColor:S,invalid:h,justify:R,readOnly:g,shape:C,withIndicator:j}),[a,r,d,t,u,R,j,m,S,h,g,C]),de=n.useMemo(()=>({max:v,value:k,getInputProps:G,getLabelProps:y,onChange:I}),[v,k,G,y,I]);return e.jsx(ze,{value:ee,children:e.jsx(Se,{value:de,children:e.jsx(Ge,{...X(),children:Z})})})},"group")(),ro={component:l,title:"Components / CheckboxCard"},M=()=>e.jsxs(l,{children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),z=()=>e.jsxs(s,{children:[e.jsxs(l,{value:"1",children:[e.jsx(p,{children:"ドラえもん"}),e.jsx(b,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(l,{value:"2",children:[e.jsx(p,{children:"ドラミ"}),e.jsx(b,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(l,{value:"3",children:[e.jsx(p,{children:"ガチャ子"}),e.jsx(b,{children:"アヒル型のロボット。"})]})]}),V=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{items:o})},P=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["subtle","surface","outline"],rows:te,children:(a,r,t)=>e.jsx(s,{colorScheme:r,variant:a,defaultValue:["1"],items:o,orientation:"vertical"},t)})},F=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["sm","md","lg"],rows:te,children:(a,r,t)=>e.jsx(s,{colorScheme:r,size:a,defaultValue:["1"],items:o,orientation:"vertical"},t)})},w=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{defaultValue:["1"],items:o})},D=()=>e.jsxs(l,{defaultChecked:!0,children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),T=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{items:o,max:2})},_=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{items:o,orientation:"vertical"})},B=()=>{const o=n.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{items:o,orientation:"vertical"})},O=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["rounded","square"],children:(a,r,t)=>e.jsx(s,{defaultValue:["1"],items:o,shape:r},t)})},L=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["start","end"],children:(a,r,t)=>e.jsx(s,{defaultValue:["1"],items:o,justify:r},t)})},q=()=>e.jsxs(s,{withIndicator:!1,children:[e.jsxs(l,{flexDirection:"row",gap:"sm",value:"1",w:"auto",children:[e.jsx(xe,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Rabbit"})]}),e.jsxs(l,{flexDirection:"row",gap:"sm",value:"2",w:"auto",children:[e.jsx(Ce,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Snail"})]}),e.jsxs(l,{flexDirection:"row",gap:"sm",value:"3",w:"auto",children:[e.jsx(ve,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Squirrel"})]})]}),W=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(s,{variant:a,defaultValue:["1"],disabled:!0,items:o},r)}),e.jsx(f,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(s,{defaultValue:["1"],items:o})})]})},E=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(s,{variant:a,defaultValue:["1"],items:o,readOnly:!0},r)}),e.jsx(f,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(s,{defaultValue:["1"],items:o})})]})},H=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(s,{variant:a,defaultValue:["1"],invalid:!0,items:o},r)}),e.jsx(f,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(s,{defaultValue:["1"],items:o})})]})},N=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{focusBorderColor:"green.500",items:o}),e.jsx(s,{defaultValue:["1"],errorBorderColor:"orange.500",invalid:!0,items:o})]})},Y=()=>{const[o,a]=n.useState(["1"]),r=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{items:r,value:o,onChange:a})},A=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(s,{checkedIcon:e.jsx(ye,{}),items:o})},J=()=>{const{control:o,formState:{errors:a},handleSubmit:r}=le(),t=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),d=i=>console.log("submit:",i);return e.jsxs(ie,{as:"form",onSubmit:r(d),children:[e.jsx(f,{errorMessage:a.checkboxCard?.message,invalid:!!a.checkboxCard,label:"Who is your favorite character?",children:e.jsx(ue,{name:"checkboxCard",control:o,render:({field:i})=>e.jsx(s,{items:t,...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Q=()=>{const o={checkboxCard:["2"]},{control:a,formState:{errors:r},handleSubmit:t}=le({defaultValues:o}),d=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),i=u=>console.log("submit:",u);return e.jsxs(ie,{as:"form",onSubmit:t(i),children:[e.jsx(f,{errorMessage:r.checkboxCard?.message,invalid:!!r.checkboxCard,label:"Who is your favorite character?",children:e.jsx(ue,{name:"checkboxCard",control:a,render:({field:u})=>e.jsx(s,{items:d,...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxCard.Root>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>;
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
    handleSubmit
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
    handleSubmit
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
}`,...Q.parameters?.docs?.source}}};const ao=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Max","Orientation","Addon","Shape","Justify","HiddenIndicator","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomIcon","ReactHookForm","ReactHookFormWithDefaultValue"];export{B as Addon,M as Basic,N as BorderColor,Y as CustomControl,A as CustomIcon,D as DefaultChecked,w as DefaultValue,W as Disabled,z as Group,q as HiddenIndicator,H as Invalid,V as Items,L as Justify,T as Max,_ as Orientation,J as ReactHookForm,Q as ReactHookFormWithDefaultValue,E as ReadOnly,O as Shape,F as Size,P as Variant,ao as __namedExportsOrder,ro as default};
