import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as t}from"./index-BwPxMuoB.js";import{c as Ze}from"./components-aqRY6gsQ.js";import{u as ne,b as $e,c as ea,d as aa,e as na}from"./checkbox-BAqQvmGh.js";import{f as re}from"./forward-ref-Ukjd1cIW.js";import{b as p,c as G,a5 as ra,g as Ue,C as ee,a6 as oa,a7 as la}from"./factory-DbNU74ts.js";import{u as sa}from"./use-checkbox-kKextJMi.js";import{e as We}from"./form-control-DgcE1-oN.js";import{a as ca}from"./use-component-style-CpB_lyT3.js";import{o as ta}from"./theme-provider-ChqdwXGn.js";import{u as ia}from"./use-checkbox-group-lj92ZWvl.js";import{F as da}from"./flex-BYE4mzTi.js";import{C as ua,a as Ca,b as ha,L as xa,R as ba,S as ma,c as pa}from"./squirrel-FfyA6YW8.js";import{S as ka,U as va}from"./user-round-CYnldXq5.js";import{F as U}from"./for-C3O6YLsB.js";import{F as oe}from"./fieldset-Co85odFD.js";import{V as S,H as ae}from"./stack-BP8LKMVN.js";import{T as C}from"./text-DKjBQKmK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-CKfluZfz.js";import"./index-B2an25P7.js";import"./factory-DGyI5Ya3.js";import"./proxy-BdCiNrpl.js";import"./index-DCT-NtcY.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DlbRU9j0.js";import"./tooltip-pq08ah7a.js";import"./index-ZCRYeFYt.js";import"./index-BjpHvtnu.js";import"./index-ZLyktLk6.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-1DMcLXoE.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-Blkmx9LM.js";import"./index-CIcQHIlO.js";import"./index-BOuDj3wB.js";import"./select-75zQ1EOU.js";import"./select-list-C6OImKfQ.js";import"./index-BEog8ndP.js";import"./icon-Dk5VwDTI.js";import"./popover-trigger-Ddfu3ZQC.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-tzU5ipaZ.js";import"./createLucideIcon-D0BTS2fX.js";import"./visually-hidden-C2KN4GNP.js";const b=re(({className:a,...l},i)=>{const{styles:u}=ne(),c={...u.addon};return e.jsx(p.div,{ref:i,className:G("ui-checkbox-card__addon",a),__css:c,...l})});b.displayName="CheckboxCardAddon";b.__ui__="CheckboxCardAddon";const s=re(({className:a,...l},i)=>{const{styles:u}=ne(),c={...u.description};return e.jsx(p.div,{ref:i,className:G("ui-checkbox-card__description",a),__css:c,...l})});s.displayName="CheckboxCardDescription";s.__ui__="CheckboxCardDescription";const o=re(({className:a,children:l,icon:i,withIcon:u,contentProps:c,iconProps:h,...k},v)=>{const{icon:I,styles:x,withIcon:j,getIconProps:f,iconProps:m}=ne();return u??(u=j),e.jsxs(p.div,{ref:v,className:G("ui-checkbox-card__label",a),__css:{...x.label},...k,children:[e.jsx(p.span,{className:"ui-checkbox-card__label-content",__css:{...x.labelContent},...c,children:l}),u?e.jsx(p.div,{className:"ui-checkbox-card__icon",__css:{...x.icon},...f({...m,...h}),children:i??I}):null]})});o.displayName="CheckboxCardLabel";o.__ui__="CheckboxCardLabel";const n=t.forwardRef((a,l)=>{const i=$e(),{value:u,...c}={...i},h=We(a),[k,v]=ca("CheckboxCard",{...c,...a}),{className:I,addon:x,children:j,description:f,disabled:m=c.disabled??h.disabled,invalid:V=c.invalid??h.invalid,label:y,readOnly:L=c.readOnly??h.readOnly,required:_=c.required??h.required,withIcon:W=!0,addonProps:E,descriptionProps:J,iconProps:le,inputProps:se,labelProps:ce,...d}=ta(v);d.checked??(d.checked=d.isChecked);const K=u&&d.value?u.includes(d.value):d.checked,Q=c.onChange&&d.value?ra(c.onChange,d.onChange):d.onChange,{checked:g,props:X,getContainerProps:Y,getIconProps:D,getInputProps:Z}=sa({...d,disabled:m,invalid:V,isChecked:K,readOnly:L,required:_,onChange:Q}),{children:$,...Ee}={...le},Je=t.cloneElement($??e.jsx(ea,{}),{checked:g,disabled:m,invalid:V,isChecked:g,isDisabled:m,isInvalid:V,isReadOnly:L,isRequired:_,readOnly:L,required:_,__css:{opacity:g?1:0,transform:g?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}}),F=Ue(j),Ke=ee(F,o),Qe=ee(F,s),Xe=ee(F,b),Ye=oa(F)?j:la(F,o,s,b);return e.jsx(aa,{value:{icon:Je,styles:k,withIcon:W,getIconProps:D,iconProps:Ee},children:e.jsxs(p.label,{className:G("ui-checkbox-card",I),...Y(X),__css:{...k.container},children:[e.jsx(p.input,{className:"ui-checkbox-card__input",...Z(se,l)}),Ke??(y?e.jsx(o,{...ce,children:y}):null),Qe??(f?e.jsx(s,{...J,children:f}):null),Xe??(x?e.jsx(b,{...E,children:x}):null),Ye]})})});n.displayName="CheckboxCard";n.__ui__="CheckboxCard";const r=t.forwardRef(({className:a,colorScheme:l,size:i,variant:u,children:c,direction:h="row",gap:k="0.5rem",items:v=[],withIcon:I=!0,addonProps:x,descriptionProps:j,labelProps:f,...m},V)=>{const{props:y,value:L,getContainerProps:_,onChange:W}=ia(m),{disabled:E,invalid:J,isDisabled:le,isInvalid:se,isReadOnly:ce,isRequired:d,labelId:K,readOnly:Q,required:g,...X}=We(y),Y=Ue(c);let D=[];return!Y.length&&v.length&&(D=v.map((Z,$)=>e.jsx(n,{...Z},$))),e.jsx(na,{value:{colorScheme:l,size:i,variant:u,disabled:E,invalid:J,readOnly:Q,required:g,value:L,withIcon:I,addonProps:x,descriptionProps:j,labelProps:f,onChange:W},children:e.jsx(da,{ref:V,className:G("ui-checkbox-card-group",a),gap:k,w:"100%",..._({"aria-labelledby":K,...X}),direction:h,children:c??D})})});r.displayName="CheckboxCardGroup";r.__ui__="CheckboxCardGroup";const In={component:n,title:"Components / Forms / CheckboxCard"},w=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},P=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["sm","md","lg"],children:l=>e.jsx(r,{size:l,defaultValue:["ドラえもん"],items:a},l)})},M=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(r,{variant:l,defaultValue:["ドラえもん"],items:a},l)})},A=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(U,{each:Ze,children:i=>e.jsx(r,{colorScheme:i,variant:l,defaultValue:["ドラえもん"],items:a},i)},l)})},z=()=>{const a=t.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},T=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{defaultValue:["ドラえもん"],items:a})},R=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{disabled:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{disabled:!0,items:a}),e.jsx(oe,{disabled:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},N=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{readOnly:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{items:a,readOnly:!0}),e.jsx(oe,{legend:"Which characters would you like to select?",readOnly:!0,children:e.jsx(r,{items:a})})]})},O=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{invalid:!0,value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{invalid:!0,items:a}),e.jsx(oe,{errorMessage:"This is required.",invalid:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},q=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん",withIcon:!1},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],withIcon:!1,children:[e.jsx(n,{label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{label:"ドラミ",value:"ドラミ"}),e.jsx(n,{label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{value:"ドラえもん",children:e.jsx(o,{withIcon:!1,children:"ドラえもん"})}),e.jsx(n,{value:"ドラミ",children:e.jsx(o,{children:"ドラミ"})}),e.jsx(n,{value:"ガチャ子",children:e.jsx(o,{children:"ガチャ子"})})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},B=()=>{const[a,l]=t.useState(["ドラえもん"]),i=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{items:i,value:a,onChange:l})},H=()=>{const a=t.useMemo(()=>[{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ua,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Line Chart"})]}),value:"Line Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(Ca,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Bar Chart"})]}),value:"Bar Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ha,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Area Chart"})]}),value:"Area Chart"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["Admin"],children:[e.jsx(n,{description:"Give full access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(ka,{fontSize:"2xl"}),e.jsx(C,{children:"Admin"})]}),value:"Admin",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"Give limited access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(va,{fontSize:"2xl"}),e.jsx(C,{children:"User"})]}),value:"User",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"No access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(xa,{fontSize:"2xl"}),e.jsx(C,{children:"Blocked"})]}),value:"Blocked",labelProps:{alignItems:"start"}})]}),e.jsxs(r,{defaultValue:["Rabbit"],w:"fit-content",withIcon:!1,children:[e.jsx(n,{value:"Rabbit",children:e.jsx(o,{children:e.jsxs(ae,{gap:"sm",children:[e.jsx(ba,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Rabbit"})]})})}),e.jsx(n,{value:"Snail",children:e.jsxs(ae,{gap:"sm",children:[e.jsx(ma,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Snail"})]})}),e.jsx(n,{value:"Squirrel",children:e.jsx(o,{children:e.jsxs(ae,{gap:"sm",children:[e.jsx(pa,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Squirrel"})]})})})]}),e.jsx(r,{defaultValue:["Line Chart"],items:a,labelProps:{flexDirection:"column",gap:"sm"}})]})};var te,ie,de;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(de=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,Ce,he;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(he=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var xe,be,me;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(me=(be=M.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var pe,ke,ve;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ve=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var je,fe,ge;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Se,Ie,Ve;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Le,_e,Fe;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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

        <CheckboxCard disabled value="ドラミ">
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

      <CheckboxCardGroup disabled items={items} />

      <Fieldset disabled legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(Fe=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Ge,ye,De;N.parameters={...N.parameters,docs:{...(Ge=N.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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

        <CheckboxCard readOnly value="ドラミ">
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

      <CheckboxCardGroup items={items} readOnly />

      <Fieldset legend="Which characters would you like to select?" readOnly>
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(De=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};var we,Pe,Me;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
        <CheckboxCard invalid value="ドラえもん">
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

      <CheckboxCardGroup invalid items={items} />

      <Fieldset errorMessage="This is required." invalid legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>;
}`,...(Me=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Ae,ze,Te;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Te=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var Re,Ne,Oe;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var qe,Be,He;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(He=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};const Vn=["basic","withSize","withVariant","withColorScheme","withAddon","withDefaultValue","disabled","readOnly","invalid","hiddenIcon","customControl","customLabel"];export{Vn as __namedExportsOrder,w as basic,B as customControl,H as customLabel,In as default,R as disabled,q as hiddenIcon,O as invalid,N as readOnly,z as withAddon,A as withColorScheme,T as withDefaultValue,P as withSize,M as withVariant};
