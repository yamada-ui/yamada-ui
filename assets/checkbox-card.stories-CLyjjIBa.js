import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{c as Ze}from"./components-BHpPRnZt.js";import{u as ae,b as $e,c as ea,d as aa,e as na}from"./checkbox-M82QWDqI.js";import{f as ne}from"./forward-ref-D13m8o2p.js";import{b as p,c as F,a4 as ra,g as Oe,B as $,a5 as oa,a6 as la}from"./factory-Bqmz9C5P.js";import{u as sa}from"./use-checkbox-Bmr8WAWN.js";import{e as qe}from"./form-control-DNngTyAT.js";import{a as ca}from"./use-component-style-D7fUVUlo.js";import{o as ta}from"./theme-provider-Dit74geM.js";import{u as ia}from"./use-checkbox-group-DNIFJMgc.js";import{F as da}from"./flex-CcbyqeIa.js";import{C as ua,a as Ca,b as ha,L as xa,R as ba,S as ma,c as pa}from"./squirrel-l2XzrGVs.js";import{S as ka,U as va}from"./user-round-DNlmJVk9.js";import{F as U}from"./for-DuI04vsm.js";import{F as re}from"./fieldset-2iPkQaSi.js";import{V as S,H as ee}from"./stack-DEpjuaqO.js";import{T as C}from"./text-Cr1YzEG3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-CS_Q_mBe.js";import"./index-DcJSUYRC.js";import"./factory-Cbq3E2qU.js";import"./proxy-BYKFXsWv.js";import"./index-D-iNr3rb.js";import"./index-B_9DrOMl.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DKkLsRXg.js";import"./tooltip-BRhMOSGw.js";import"./index-B4UZJbBZ.js";import"./index-D0QjGqiR.js";import"./index-C6P-3PHl.js";import"./index-CZSIMnfE.js";import"./index-Pbv_ILj1.js";import"./index-BkD6i14w.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./slide-fade-BhjlDBiO.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CieLuCnG.js";import"./index-5c62fTH4.js";import"./index-S7lgn1rl.js";import"./select-BAi0Gejg.js";import"./select-list-B1sjvTim.js";import"./index-DxQD85Cv.js";import"./icon-DeZ7GCXS.js";import"./popover-trigger-CaVm9NYE.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-CjWtGFYg.js";import"./index-gGKStiao.js";import"./index-Bqglt4Z4.js";import"./createLucideIcon-C_T9K6g-.js";import"./visually-hidden-CuTTkjW9.js";const b=ne(({className:a,...l},i)=>{const{styles:u}=ae(),c={...u.addon};return e.jsx(p.div,{ref:i,className:F("ui-checkbox-card__addon",a),__css:c,...l})});b.displayName="CheckboxCardAddon";b.__ui__="CheckboxCardAddon";const s=ne(({className:a,...l},i)=>{const{styles:u}=ae(),c={...u.description};return e.jsx(p.div,{ref:i,className:F("ui-checkbox-card__description",a),__css:c,...l})});s.displayName="CheckboxCardDescription";s.__ui__="CheckboxCardDescription";const o=ne(({className:a,children:l,icon:i,withIcon:u,contentProps:c,iconProps:h,...k},v)=>{const{icon:I,styles:x,withIcon:j,getIconProps:f,iconProps:m}=ae();return u??(u=j),e.jsxs(p.div,{ref:v,className:F("ui-checkbox-card__label",a),__css:{...x.label},...k,children:[e.jsx(p.span,{className:"ui-checkbox-card__label-content",__css:{...x.labelContent},...c,children:l}),u?e.jsx(p.div,{className:"ui-checkbox-card__icon",__css:{...x.icon},...f({...m,...h}),children:i??I}):null]})});o.displayName="CheckboxCardLabel";o.__ui__="CheckboxCardLabel";const n=t.forwardRef((a,l)=>{const i=$e(),{value:u,...c}={...i},h=qe(a),[k,v]=ca("CheckboxCard",{...c,...a}),{className:I,addon:x,children:j,description:f,disabled:m=c.disabled??h.disabled,invalid:V=c.invalid??h.invalid,label:G,readOnly:L=c.readOnly??h.readOnly,required:D=c.required??h.required,withIcon:W=!0,addonProps:E,descriptionProps:J,iconProps:K,inputProps:Q,labelProps:X,...d}=ta(v);d.checked??(d.checked=d.isChecked);const Y=u&&d.value?u.includes(d.value):d.checked,y=c.onChange&&d.value?ra(c.onChange,d.onChange):d.onChange,{checked:g,props:Z,getContainerProps:Be,getIconProps:He,getInputProps:Ue}=sa({...d,disabled:m,invalid:V,isChecked:Y,readOnly:L,required:D,onChange:y}),{children:We,...Ee}={...K},Je=t.cloneElement(We??e.jsx(ea,{}),{checked:g,disabled:m,invalid:V,isChecked:g,isDisabled:m,isInvalid:V,isReadOnly:L,isRequired:D,readOnly:L,required:D,__css:{opacity:g?1:0,transform:g?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}}),_=Oe(j),Ke=$(_,o),Qe=$(_,s),Xe=$(_,b),Ye=oa(_)?j:la(_,o,s,b);return e.jsx(aa,{value:{icon:Je,styles:k,withIcon:W,getIconProps:He,iconProps:Ee},children:e.jsxs(p.label,{className:F("ui-checkbox-card",I),...Be(Z),__css:{...k.container},children:[e.jsx(p.input,{className:"ui-checkbox-card__input",...Ue(Q,l)}),Ke??(G?e.jsx(o,{...X,children:G}):null),Qe??(f?e.jsx(s,{...J,children:f}):null),Xe??(x?e.jsx(b,{...E,children:x}):null),Ye]})})});n.displayName="CheckboxCard";n.__ui__="CheckboxCard";const r=t.forwardRef(({className:a,colorScheme:l,size:i,variant:u,children:c,direction:h="row",gap:k="0.5rem",items:v=[],withIcon:I=!0,addonProps:x,descriptionProps:j,labelProps:f,...m},V)=>{const{props:G,value:L,getContainerProps:D,onChange:W}=ia(m),{disabled:E,invalid:J,labelId:K,readOnly:Q,required:X,...d}=qe(G),Y=Oe(c);let y=[];return!Y.length&&v.length&&(y=v.map((g,Z)=>e.jsx(n,{...g},Z))),e.jsx(na,{value:{colorScheme:l,size:i,variant:u,disabled:E,invalid:J,readOnly:Q,required:X,value:L,withIcon:I,addonProps:x,descriptionProps:j,labelProps:f,onChange:W},children:e.jsx(da,{ref:V,className:F("ui-checkbox-card-group",a),gap:k,w:"100%",...D({"aria-labelledby":K,...d}),direction:h,children:c??y})})});r.displayName="CheckboxCardGroup";r.__ui__="CheckboxCardGroup";const Sn={component:n,title:"Components / Forms / CheckboxCard"},w=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},P=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["sm","md","lg"],children:l=>e.jsx(r,{size:l,defaultValue:["ドラえもん"],items:a},l)})},M=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(r,{variant:l,defaultValue:["ドラえもん"],items:a},l)})},A=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(U,{each:Ze,children:i=>e.jsx(r,{colorScheme:i,variant:l,defaultValue:["ドラえもん"],items:a},i)},l)})},R=()=>{const a=t.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},z=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{defaultValue:["ドラえもん"],items:a})},T=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isDisabled:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isDisabled:!0,items:a}),e.jsx(re,{isDisabled:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},N=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isReadOnly:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isReadOnly:!0,items:a}),e.jsx(re,{isReadOnly:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},O=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{isInvalid:!0,value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isInvalid:!0,items:a}),e.jsx(re,{errorMessage:"This is required.",isInvalid:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},q=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん",withIcon:!1},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],withIcon:!1,children:[e.jsx(n,{label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{label:"ドラミ",value:"ドラミ"}),e.jsx(n,{label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{value:"ドラえもん",children:e.jsx(o,{withIcon:!1,children:"ドラえもん"})}),e.jsx(n,{value:"ドラミ",children:e.jsx(o,{children:"ドラミ"})}),e.jsx(n,{value:"ガチャ子",children:e.jsx(o,{children:"ガチャ子"})})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},B=()=>{const[a,l]=t.useState(["ドラえもん"]),i=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{items:i,value:a,onChange:l})},H=()=>{const a=t.useMemo(()=>[{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ua,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Line Chart"})]}),value:"Line Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(Ca,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Bar Chart"})]}),value:"Bar Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ha,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Area Chart"})]}),value:"Area Chart"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["Admin"],children:[e.jsx(n,{description:"Give full access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(ka,{fontSize:"2xl"}),e.jsx(C,{children:"Admin"})]}),value:"Admin",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"Give limited access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(va,{fontSize:"2xl"}),e.jsx(C,{children:"User"})]}),value:"User",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"No access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(xa,{fontSize:"2xl"}),e.jsx(C,{children:"Blocked"})]}),value:"Blocked",labelProps:{alignItems:"start"}})]}),e.jsxs(r,{defaultValue:["Rabbit"],w:"fit-content",withIcon:!1,children:[e.jsx(n,{value:"Rabbit",children:e.jsx(o,{children:e.jsxs(ee,{gap:"sm",children:[e.jsx(ba,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Rabbit"})]})})}),e.jsx(n,{value:"Snail",children:e.jsxs(ee,{gap:"sm",children:[e.jsx(ma,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Snail"})]})}),e.jsx(n,{value:"Squirrel",children:e.jsx(o,{children:e.jsxs(ee,{gap:"sm",children:[e.jsx(pa,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Squirrel"})]})})})]}),e.jsx(r,{defaultValue:["Line Chart"],items:a,labelProps:{flexDirection:"column",gap:"sm"}})]})};var oe,le,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "ドラミ"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard description="22世紀の未来から来たネコ型ロボット。" label="ドラえもん" value="ドラえもん" />
        <CheckboxCard description="ドラえもんの妹のロボット。" label="ドラミ" value="ドラミ" />
        <CheckboxCard description="アヒル型のロボット。" label="ガチャ子" value="ガチャ子" />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>;
}`,...(se=(le=w.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,te,ie;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "ドラミ"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <For each={["sm", "md", "lg"]}>
      {size => <CheckboxCardGroup key={size} size={size} defaultValue={["ドラえもん"]} items={items} />}
    </For>;
}`,...(ie=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,ue,Ce;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "ドラミ"
  }, {
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <For each={["outline", "subtle", "surface"]}>
      {variant => <CheckboxCardGroup key={variant} variant={variant} defaultValue={["ドラえもん"]} items={items} />}
    </For>;
}`,...(Ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};var he,xe,be;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <For each={["outline", "subtle", "surface"]}>
      {variant => <For key={variant} each={colorSchemes}>
          {colorScheme => <CheckboxCardGroup key={colorScheme} colorScheme={colorScheme} variant={variant} defaultValue={["ドラえもん"]} items={items} />}
        </For>}
    </For>;
}`,...(be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var me,pe,ke;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    addon: "藤子・F・不二雄",
    description: "22世紀の未来から来たネコ型ロボット。",
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    addon: "藤子・F・不二雄",
    description: "ドラえもんの妹のロボット。",
    label: "ドラミ",
    value: "ドラミ"
  }, {
    addon: "藤子・F・不二雄",
    description: "アヒル型のロボット。",
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard addon="藤子・F・不二雄" description="22世紀の未来から来たネコ型ロボット。" label="ドラえもん" value="ドラえもん" />
        <CheckboxCard addon="藤子・F・不二雄" description="ドラえもんの妹のロボット。" label="ドラミ" value="ドラミ" />
        <CheckboxCard addon="藤子・F・不二雄" description="アヒル型のロボット。" label="ガチャ子" value="ガチャ子" />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>;
}`,...(ke=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:ke.source}}};var ve,je,fe;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />;
}`,...(fe=(je=z.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ge,Se,Ie;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard isDisabled value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isDisabled items={items} />

      <Fieldset isDisabled legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(Ie=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Ve,Le,De;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard isReadOnly value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isReadOnly items={items} />

      <Fieldset isReadOnly legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(De=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var _e,Fe,Ge;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard isInvalid value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isInvalid items={items} />

      <Fieldset errorMessage="This is required." isInvalid legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(Ge=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var ye,we,Pe;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん",
    withIcon: false
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]} withIcon={false}>
        <CheckboxCard label="ドラえもん" value="ドラえもん" />
        <CheckboxCard label="ドラミ" value="ドラミ" />
        <CheckboxCard label="ガチャ子" value="ガチャ子" />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel withIcon={false}>ドラえもん</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>;
}`,...(Pe=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var Me,Ae,Re;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["ドラえもん"]);
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: "ドラえもん",
    value: "ドラえもん"
  }, {
    label: "ドラミ",
    value: "ドラミ"
  }, {
    label: "ガチャ子",
    value: "ガチャ子"
  }], []);
  return <CheckboxCardGroup items={items} value={value} onChange={setValue} />;
}`,...(Re=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var ze,Te,Ne;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const items = useMemo<CheckboxCardItem[]>(() => [{
    label: <VStack alignItems="center" gap="sm">
            <ChartLineIcon color="muted" fontSize="3xl" />
            <Text>Line Chart</Text>
          </VStack>,
    value: "Line Chart"
  }, {
    label: <VStack alignItems="center" gap="sm">
            <ChartColumnIcon color="muted" fontSize="3xl" />
            <Text>Bar Chart</Text>
          </VStack>,
    value: "Bar Chart"
  }, {
    label: <VStack alignItems="center" gap="sm">
            <ChartAreaIcon color="muted" fontSize="3xl" />
            <Text>Area Chart</Text>
          </VStack>,
    value: "Area Chart"
  }], []);
  return <>
      <CheckboxCardGroup defaultValue={["Admin"]}>
        <CheckboxCard description="Give full access to the system" label={<VStack gap="sm">
              <ShieldCheckIcon fontSize="2xl" />
              <Text>Admin</Text>
            </VStack>} value="Admin" labelProps={{
        alignItems: "start"
      }} />
        <CheckboxCard description="Give limited access to the system" label={<VStack gap="sm">
              <UserRoundIcon fontSize="2xl" />
              <Text>User</Text>
            </VStack>} value="User" labelProps={{
        alignItems: "start"
      }} />
        <CheckboxCard description="No access to the system" label={<VStack gap="sm">
              <LockIcon fontSize="2xl" />
              <Text>Blocked</Text>
            </VStack>} value="Blocked" labelProps={{
        alignItems: "start"
      }} />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["Rabbit"]} w="fit-content" withIcon={false}>
        <CheckboxCard value="Rabbit">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <RabbitIcon color="muted" fontSize="2xl" />
              <Text>Rabbit</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="Snail">
          <HStack gap="sm">
            <SnailIcon color="muted" fontSize="2xl" />
            <Text>Snail</Text>
          </HStack>
        </CheckboxCard>

        <CheckboxCard value="Squirrel">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <SquirrelIcon color="muted" fontSize="2xl" />
              <Text>Squirrel</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["Line Chart"]} items={items} labelProps={{
      flexDirection: "column",
      gap: "sm"
    }} />
    </>;
}`,...(Ne=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};const In=["basic","withSize","withVariant","withColorScheme","withAddon","withDefaultValue","isDisabled","isReadOnly","isInvalid","hiddenIcon","customControl","customLabel"];export{In as __namedExportsOrder,w as basic,B as customControl,H as customLabel,Sn as default,q as hiddenIcon,T as isDisabled,O as isInvalid,N as isReadOnly,R as withAddon,A as withColorScheme,z as withDefaultValue,P as withSize,M as withVariant};
