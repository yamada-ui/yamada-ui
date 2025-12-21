import{d as Po,a3 as ne,g as _o,r as n,j as e,s as te,C as Io,T as oe,V as Mo,Q as zo}from"./iframe-LqombrNM.js";import{P as $}from"./props-table-P2PnH6mP.js";import{u as Vo,C as To}from"./index.esm-BeCx6Kqd.js";import{R as Bo,S as Oo,a as Lo}from"./squirrel-icon-CZfZ_QGU.js";import{F as re}from"./for-CkWl_ugB.js";import{c,u as qo,a as Wo,C as Eo}from"./use-checkbox-BlWWVSEB.js";import{u as Ho}from"./use-input-border-50s9ZO4y.js";import{M as No}from"./minus-icon-JSIY3_AZ.js";import{C as Yo}from"./check-icon-D38JxNqM.js";import{G as Ao}from"./group-DdV_q8Ch.js";import{F as f}from"./use-field-props-DcPw9IyF.js";import{P as Jo}from"./plus-icon-BfmpWkry.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DFOS9khk.js";import"./grid-item-BVQQuAHt.js";import"./flex-ksADg7SB.js";import"./heading-Bq_Y6181.js";import"./index-CQhAjkmY.js";import"./index-CM3S4n_z.js";import"./use-breakpoint-Cd5iIj4S.js";import"./use-breakpoint-value-hp_pLYBn.js";import"./use-color-mode-value-C3KP8KHB.js";var se,ie,ce,le,ue,de,me,pe,be,he,xe;const Qo=Po({base:{addon:{borderColor:"{--addon-border-color}",borderTopWidth:"1px",fontSize:"{description-size}",mt:"{space-y}",pt:"{space-y}",px:"{space-x}"},description:{color:"fg.muted",fontSize:"{description-size}"},group:{w:"full"},indicator:{...(se=c.base)==null?void 0:se.indicator,"input:focus-visible + &":{_checked:ne.outline,_notChecked:{borderColor:"{focus-ring-color}"}},position:"absolute",top:"calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)"},root:{...(ie=c.base)==null?void 0:ie.root,"&:has(input:focus-visible)":ne.outline,"--addon-border-color":"{root-border-color}","--root-border-color":"colors.border",alignItems:"stretch",borderColor:"{--root-border-color}",borderWidth:"1px",flexDirection:"column",focusRingColor:"{focus-border-color}",gap:"1",position:"relative",px:"{space-x}",py:"{space-y}",rounded:"l2",w:"full",_invalid:{borderColor:"{error-border-color}",focusRingColor:"{error-border-color}"}}},props:{justify:{end:{addon:{me:"calc({bleed-size} * -1)",ms:"calc({space-x} * -1)"},indicator:{right:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",pe:"{bleed-size}"}},start:{addon:{me:"calc({space-x} * -1)",ms:"calc({bleed-size} * -1)"},indicator:{left:"{space-x}"},root:{"&:has([data-indicator])":{"--bleed-size":"calc({indicator-size} + ({space-x} * 2))"},"--bleed-size":"{space-x}",ps:"{bleed-size}"}}},shape:{...(ce=c.props)==null?void 0:ce.shape}},variants:{base:{indicator:{color:"colorScheme.contrast",_checked:{bg:"colorScheme.solid"},_indeterminate:{bg:"colorScheme.solid"}},root:{_checked:{"--indicator-border-color":"colorScheme.solid"},_indeterminate:{"--indicator-border-color":"colorScheme.solid"}}},outline:{root:{_checked:{"--root-border-color":"colorScheme.outline"}}},subtle:{root:{_checked:{"--addon-border-color":"colorScheme.muted","--root-border-color":"transparent",bg:"colorScheme.subtle"}}},surface:{root:{_checked:{"--root-border-color":"colorScheme.muted",bg:"colorScheme.subtle"}}}},sizes:{sm:{indicator:(le=c.sizes)==null?void 0:le.sm.indicator,root:{...(ue=c.sizes)==null?void 0:ue.sm.root,"--description-size":"fontSizes.xs","--space-x":"spaces.3","--space-y":"spaces.2"}},md:{indicator:(de=c.sizes)==null?void 0:de.md.indicator,root:{...(me=c.sizes)==null?void 0:me.md.root,"--description-size":"fontSizes.sm","--space-x":"spaces.4","--space-y":"spaces.3"}},lg:{indicator:(pe=c.sizes)==null?void 0:pe.lg.indicator,root:{...(be=c.sizes)==null?void 0:be.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.5","--space-y":"spaces.4"}},xl:{indicator:(he=c.sizes)==null?void 0:he.lg.indicator,root:{...(xe=c.sizes)==null?void 0:xe.lg.root,"--description-size":"fontSizes.md","--space-x":"spaces.6","--space-y":"spaces.5"}}},defaultProps:{size:"md",variant:"surface",justify:"start",shape:"rounded"}}),{component:$o,PropsContext:Ko,withContext:K,withProvider:Uo,useRootComponentProps:Xo}=_o("checkbox-card",Qo),d=Uo(({addon:o,checkedIcon:a,children:r,description:s,errorBorderColor:m,focusBorderColor:l,indeterminateIcon:i,label:u,withIndicator:S=!0,addonProps:h,descriptionProps:x,indicatorProps:g,inputProps:j,labelProps:C,rootProps:y,...U})=>{const{checked:v,indeterminate:k,getIndicatorProps:R,getInputProps:G,getRootProps:X}=qo(U),I=Ho({errorBorderColor:m,focusBorderColor:l}),Z=n.useMemo(()=>k?i||e.jsx(No,{}):v?a||e.jsx(Yo,{}):null,[k,i,v,a]),ee=n.useMemo(()=>r||e.jsxs(e.Fragment,{children:[u?e.jsx(p,{...C,children:u}):null,s?e.jsx(b,{...x,children:s}):null,o?e.jsx(er,{...h,children:o}):null]}),[o,h,r,s,x,u,C]);return e.jsxs(te.label,{...X({...I,...y}),children:[e.jsx(te.input,{...G(j)}),S?e.jsx(Zo,{...R(g),children:Z}):null,ee]})},"root")(),Zo=K("div","indicator")({"data-indicator":""}),p=K("span","label")(),b=K("span","description")(),er=K("span","addon")(),t=$o(o=>{const[,{colorScheme:a,size:r,variant:s,checkedIcon:m,children:l,disabled:i,errorBorderColor:u,focusBorderColor:S,invalid:h,items:x=[],justify:g,readOnly:j,shape:C,withIndicator:y,...U}]=Xo(o,"group",{transferProps:["variant","colorScheme","size","shape","justify","withIndicator"]}),{max:v,value:k,getInputProps:R,getLabelProps:G,getRootProps:X,onChange:I}=Wo(U),Z=n.useMemo(()=>l||x.map(({value:ae,...wo},Do)=>e.jsx(d,{value:ae,...wo},ae??Do)),[x,l]),ee=n.useMemo(()=>({colorScheme:a,size:r,variant:s,checkedIcon:m,disabled:i,errorBorderColor:u,focusBorderColor:S,invalid:h,justify:g,readOnly:j,shape:C,withIndicator:y}),[a,r,m,s,i,g,y,u,S,h,j,C]),Fo=n.useMemo(()=>({max:v,value:k,getInputProps:R,getLabelProps:G,onChange:I}),[v,k,R,G,I]);return e.jsx(Ko,{value:ee,children:e.jsx(Eo,{value:Fo,children:e.jsx(Ao,{...X(),children:Z})})})},"group")(),jr={component:d,title:"Components / CheckboxCard"},M=()=>e.jsxs(d,{children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),z=()=>e.jsxs(t,{children:[e.jsxs(d,{value:"1",children:[e.jsx(p,{children:"ドラえもん"}),e.jsx(b,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(d,{value:"2",children:[e.jsx(p,{children:"ドラミ"}),e.jsx(b,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(d,{value:"3",children:[e.jsx(p,{children:"ガチャ子"}),e.jsx(b,{children:"アヒル型のロボット。"})]})]}),V=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o})},T=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["subtle","surface","outline"],rows:Io,children:(a,r,s)=>e.jsx(t,{colorScheme:r,variant:a,defaultValue:["1"],items:o,orientation:"vertical"},s)})},F=()=>{const o=n.useMemo(()=>[{label:"Checked",value:"1"},{label:"No checked",value:"2"}],[]);return e.jsx($,{columns:["sm","md","lg"],rows:Io,children:(a,r,s)=>e.jsx(t,{colorScheme:r,size:a,defaultValue:["1"],items:o,orientation:"vertical"},s)})},w=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{defaultValue:["1"],items:o})},D=()=>e.jsxs(d,{defaultChecked:!0,children:[e.jsx(p,{children:"Enable notifications"}),e.jsx(b,{children:"You can enable or disable notifications at any time."})]}),P=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,max:2})},_=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,orientation:"vertical"})},B=()=>{const o=n.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:o,orientation:"vertical"})},O=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["rounded","square"],children:(a,r,s)=>e.jsx(t,{defaultValue:["1"],items:o,shape:r},s)})},L=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx($,{variant:"stack",rows:["start","end"],children:(a,r,s)=>e.jsx(t,{defaultValue:["1"],items:o,justify:r},s)})},q=()=>e.jsxs(t,{withIndicator:!1,children:[e.jsxs(d,{flexDirection:"row",gap:"sm",value:"1",w:"auto",children:[e.jsx(Bo,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Rabbit"})]}),e.jsxs(d,{flexDirection:"row",gap:"sm",value:"2",w:"auto",children:[e.jsx(Oo,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Snail"})]}),e.jsxs(d,{flexDirection:"row",gap:"sm",value:"3",w:"auto",children:[e.jsx(Lo,{fontSize:"2xl"}),e.jsx(oe,{as:"span",children:"Squirrel"})]})]}),W=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],disabled:!0,items:o},r)}),e.jsx(f,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(t,{defaultValue:["1"],items:o})})]})},E=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],items:o,readOnly:!0},r)}),e.jsx(f,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(t,{defaultValue:["1"],items:o})})]})},H=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(re,{each:["subtle","surface","outline"],children:(a,r)=>e.jsx(t,{variant:a,defaultValue:["1"],invalid:!0,items:o},r)}),e.jsx(f,{invalid:!0,label:"Who is your favorite character?",children:e.jsx(t,{defaultValue:["1"],items:o})})]})},N=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{focusBorderColor:"green.500",items:o}),e.jsx(t,{defaultValue:["1"],errorBorderColor:"orange.500",invalid:!0,items:o})]})},Y=()=>{const[o,a]=n.useState(["1"]),r=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{items:r,value:o,onChange:a})},A=()=>{const o=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]);return e.jsx(t,{checkedIcon:e.jsx(Jo,{}),items:o})},J=()=>{var l;const{control:o,formState:{errors:a},handleSubmit:r}=Vo(),s=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),m=i=>console.log("submit:",i);return e.jsxs(Mo,{as:"form",onSubmit:r(m),children:[e.jsx(f,{errorMessage:(l=a.checkboxCard)==null?void 0:l.message,invalid:!!a.checkboxCard,label:"Who is your favorite character?",children:e.jsx(To,{name:"checkboxCard",control:o,render:({field:i})=>e.jsx(t,{items:s,...i}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(zo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Q=()=>{var i;const o={checkboxCard:["2"]},{control:a,formState:{errors:r},handleSubmit:s}=Vo({defaultValues:o}),m=n.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"1"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"2"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"3"}],[]),l=u=>console.log("submit:",u);return e.jsxs(Mo,{as:"form",onSubmit:s(l),children:[e.jsx(f,{errorMessage:(i=r.checkboxCard)==null?void 0:i.message,invalid:!!r.checkboxCard,label:"Who is your favorite character?",children:e.jsx(To,{name:"checkboxCard",control:a,render:({field:u})=>e.jsx(t,{items:m,...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(zo,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ce,ve,ke;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <CheckboxCard.Root>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>;
}`,...(ke=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var fe,Se,ge;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var je,ye,Re;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Re=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var Ge,Ie,Me;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Me=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var ze,Ve,Te;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Te=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var Fe,we,De;w.parameters={...w.parameters,docs:{...(Fe=w.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(De=(we=w.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Pe,_e,Be;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <CheckboxCard.Root defaultChecked>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>;
}`,...(Be=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Oe,Le,qe;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(qe=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var We,Ee,He;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(He=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Ne,Ye,Ae;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Ae=(Ye=B.parameters)==null?void 0:Ye.docs)==null?void 0:Ae.source}}};var Je,Qe,$e;O.parameters={...O.parameters,docs:{...(Je=O.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...($e=(Qe=O.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var Ke,Ue,Xe;L.parameters={...L.parameters,docs:{...(Ke=L.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Xe=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ze,eo,oo;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(oo=(eo=q.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var ro,ao,no;W.parameters={...W.parameters,docs:{...(ro=W.parameters)==null?void 0:ro.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(no=(ao=W.parameters)==null?void 0:ao.docs)==null?void 0:no.source}}};var to,so,io;E.parameters={...E.parameters,docs:{...(to=E.parameters)==null?void 0:to.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(io=(so=E.parameters)==null?void 0:so.docs)==null?void 0:io.source}}};var co,lo,uo;H.parameters={...H.parameters,docs:{...(co=H.parameters)==null?void 0:co.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(uo=(lo=H.parameters)==null?void 0:lo.docs)==null?void 0:uo.source}}};var mo,po,bo;N.parameters={...N.parameters,docs:{...(mo=N.parameters)==null?void 0:mo.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(bo=(po=N.parameters)==null?void 0:po.docs)==null?void 0:bo.source}}};var ho,xo,Co;Y.parameters={...Y.parameters,docs:{...(ho=Y.parameters)==null?void 0:ho.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(["1"]);
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Co=(xo=Y.parameters)==null?void 0:xo.docs)==null?void 0:Co.source}}};var vo,ko,fo;A.parameters={...A.parameters,docs:{...(vo=A.parameters)==null?void 0:vo.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(fo=(ko=A.parameters)==null?void 0:ko.docs)==null?void 0:fo.source}}};var So,go,jo;J.parameters={...J.parameters,docs:{...(So=J.parameters)==null?void 0:So.docs,source:{originalSource:`() => {
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
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(jo=(go=J.parameters)==null?void 0:go.docs)==null?void 0:jo.source}}};var yo,Ro,Go;Q.parameters={...Q.parameters,docs:{...(yo=Q.parameters)==null?void 0:yo.docs,source:{originalSource:`() => {
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
  const items = useMemo<CheckboxCardGroup.ItemType[]>(() => [{
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
}`,...(Go=(Ro=Q.parameters)==null?void 0:Ro.docs)==null?void 0:Go.source}}};const yr=["Basic","Group","Items","Variant","Size","DefaultValue","DefaultChecked","Max","Orientation","Addon","Shape","Justify","HiddenIndicator","Disabled","ReadOnly","Invalid","BorderColor","CustomControl","CustomIcon","ReactHookForm","ReactHookFormWithDefaultValue"];export{B as Addon,M as Basic,N as BorderColor,Y as CustomControl,A as CustomIcon,D as DefaultChecked,w as DefaultValue,W as Disabled,z as Group,q as HiddenIndicator,H as Invalid,V as Items,L as Justify,P as Max,_ as Orientation,J as ReactHookForm,Q as ReactHookFormWithDefaultValue,E as ReadOnly,O as Shape,F as Size,T as Variant,yr as __namedExportsOrder,jr as default};
