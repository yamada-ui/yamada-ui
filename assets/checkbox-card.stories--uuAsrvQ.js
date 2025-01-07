import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{c as Ze}from"./components-BcmmBqo7.js";import{u as ne,b as $e,c as ea,d as aa,e as na}from"./checkbox-BXBLqu8E.js";import{f as re}from"./forward-ref-D13m8o2p.js";import{b as p,c as F,a5 as ra,g as Ue,C as ee,a6 as oa,a7 as la}from"./factory-D0ba2aB7.js";import{u as sa}from"./use-checkbox-D-VN4oI2.js";import{e as We}from"./form-control-BjOXh3qv.js";import{a as ca}from"./use-component-style-B--WxH8d.js";import{o as ta}from"./theme-provider-r-UN7Xzc.js";import{u as ia}from"./use-checkbox-group-CvzPWvVo.js";import{F as da}from"./flex-Dy15NtS6.js";import{C as ua,a as Ca,b as ha,L as xa,R as ba,S as ma,c as pa}from"./squirrel-Bb3v9CP9.js";import{S as ka,U as va}from"./user-round-V0rhwAFj.js";import{F as U}from"./for-gY2HsDDK.js";import{F as oe}from"./fieldset-D7vG6RZi.js";import{V as S,H as ae}from"./stack-CcCHu966.js";import{T as C}from"./text-BB5_0k3k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-Ch0hVi2V.js";import"./index-rZyt8EED.js";import"./factory-COvmBIaQ.js";import"./proxy-DYgA1A03.js";import"./index-CUCM51Cx.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-CTLjK8Sl.js";import"./tooltip-CtQO_TGc.js";import"./index-I8sPqzTA.js";import"./index-Dwwrjx8s.js";import"./index-D8fKLhx4.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./index-YDlv44yi.js";import"./portal-nz1T67ed.js";import"./index-DGFU5M_O.js";import"./slide-fade-B_qqM4fM.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-BWwQf8_A.js";import"./index-CC4Nvd09.js";import"./index-c15aqeo_.js";import"./select-tL1_OW35.js";import"./select-list-DTHtP90Y.js";import"./index-D0l_ls7Z.js";import"./icon-47ftZrjE.js";import"./popover-trigger-kCg_5LKg.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./createLucideIcon-C_T9K6g-.js";import"./visually-hidden-BE6IIooX.js";const b=re(({className:a,...l},i)=>{const{styles:u}=ne(),c={...u.addon};return e.jsx(p.div,{ref:i,className:F("ui-checkbox-card__addon",a),__css:c,...l})});b.displayName="CheckboxCardAddon";b.__ui__="CheckboxCardAddon";const s=re(({className:a,...l},i)=>{const{styles:u}=ne(),c={...u.description};return e.jsx(p.div,{ref:i,className:F("ui-checkbox-card__description",a),__css:c,...l})});s.displayName="CheckboxCardDescription";s.__ui__="CheckboxCardDescription";const o=re(({className:a,children:l,icon:i,withIcon:u,contentProps:c,iconProps:h,...k},v)=>{const{icon:I,styles:x,withIcon:j,getIconProps:f,iconProps:m}=ne();return u??(u=j),e.jsxs(p.div,{ref:v,className:F("ui-checkbox-card__label",a),__css:{...x.label},...k,children:[e.jsx(p.span,{className:"ui-checkbox-card__label-content",__css:{...x.labelContent},...c,children:l}),u?e.jsx(p.div,{className:"ui-checkbox-card__icon",__css:{...x.icon},...f({...m,...h}),children:i??I}):null]})});o.displayName="CheckboxCardLabel";o.__ui__="CheckboxCardLabel";const n=t.forwardRef((a,l)=>{const i=$e(),{value:u,...c}={...i},h=We(a),[k,v]=ca("CheckboxCard",{...c,...a}),{className:I,addon:x,children:j,description:f,disabled:m=c.disabled??h.disabled,invalid:V=c.invalid??h.invalid,label:G,readOnly:L=c.readOnly??h.readOnly,required:_=c.required??h.required,withIcon:W=!0,addonProps:E,descriptionProps:J,iconProps:le,inputProps:se,labelProps:ce,...d}=ta(v);d.checked??(d.checked=d.isChecked);const K=u&&d.value?u.includes(d.value):d.checked,Q=c.onChange&&d.value?ra(c.onChange,d.onChange):d.onChange,{checked:g,props:X,getContainerProps:Y,getIconProps:y,getInputProps:Z}=sa({...d,disabled:m,invalid:V,isChecked:K,readOnly:L,required:_,onChange:Q}),{children:$,...Ee}={...le},Je=t.cloneElement($??e.jsx(ea,{}),{checked:g,disabled:m,invalid:V,isChecked:g,isDisabled:m,isInvalid:V,isReadOnly:L,isRequired:_,readOnly:L,required:_,__css:{opacity:g?1:0,transform:g?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}}),D=Ue(j),Ke=ee(D,o),Qe=ee(D,s),Xe=ee(D,b),Ye=oa(D)?j:la(D,o,s,b);return e.jsx(aa,{value:{icon:Je,styles:k,withIcon:W,getIconProps:y,iconProps:Ee},children:e.jsxs(p.label,{className:F("ui-checkbox-card",I),...Y(X),__css:{...k.container},children:[e.jsx(p.input,{className:"ui-checkbox-card__input",...Z(se,l)}),Ke??(G?e.jsx(o,{...ce,children:G}):null),Qe??(f?e.jsx(s,{...J,children:f}):null),Xe??(x?e.jsx(b,{...E,children:x}):null),Ye]})})});n.displayName="CheckboxCard";n.__ui__="CheckboxCard";const r=t.forwardRef(({className:a,colorScheme:l,size:i,variant:u,children:c,direction:h="row",gap:k="0.5rem",items:v=[],withIcon:I=!0,addonProps:x,descriptionProps:j,labelProps:f,...m},V)=>{const{props:G,value:L,getContainerProps:_,onChange:W}=ia(m),{disabled:E,invalid:J,isDisabled:le,isInvalid:se,isReadOnly:ce,isRequired:d,labelId:K,readOnly:Q,required:g,...X}=We(G),Y=Ue(c);let y=[];return!Y.length&&v.length&&(y=v.map((Z,$)=>e.jsx(n,{...Z},$))),e.jsx(na,{value:{colorScheme:l,size:i,variant:u,disabled:E,invalid:J,readOnly:Q,required:g,value:L,withIcon:I,addonProps:x,descriptionProps:j,labelProps:f,onChange:W},children:e.jsx(da,{ref:V,className:F("ui-checkbox-card-group",a),gap:k,w:"100%",..._({"aria-labelledby":K,...X}),direction:h,children:c??y})})});r.displayName="CheckboxCardGroup";r.__ui__="CheckboxCardGroup";const Sn={component:n,title:"Components / Forms / CheckboxCard"},w=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},P=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["sm","md","lg"],children:l=>e.jsx(r,{size:l,defaultValue:["ドラえもん"],items:a},l)})},R=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(r,{variant:l,defaultValue:["ドラえもん"],items:a},l)})},M=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:l=>e.jsx(U,{each:Ze,children:i=>e.jsx(r,{colorScheme:i,variant:l,defaultValue:["ドラえもん"],items:a},i)},l)})},A=()=>{const a=t.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},z=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{defaultValue:["ドラえもん"],items:a})},T=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isDisabled:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isDisabled:!0,items:a}),e.jsx(oe,{isDisabled:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},N=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isReadOnly:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isReadOnly:!0,items:a}),e.jsx(oe,{isReadOnly:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},O=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{isInvalid:!0,value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(s,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(s,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(s,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isInvalid:!0,items:a}),e.jsx(oe,{errorMessage:"This is required.",isInvalid:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},q=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん",withIcon:!1},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],withIcon:!1,children:[e.jsx(n,{label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{label:"ドラミ",value:"ドラミ"}),e.jsx(n,{label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{value:"ドラえもん",children:e.jsx(o,{withIcon:!1,children:"ドラえもん"})}),e.jsx(n,{value:"ドラミ",children:e.jsx(o,{children:"ドラミ"})}),e.jsx(n,{value:"ガチャ子",children:e.jsx(o,{children:"ガチャ子"})})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},B=()=>{const[a,l]=t.useState(["ドラえもん"]),i=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{items:i,value:a,onChange:l})},H=()=>{const a=t.useMemo(()=>[{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ua,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Line Chart"})]}),value:"Line Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(Ca,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Bar Chart"})]}),value:"Bar Chart"},{label:e.jsxs(S,{alignItems:"center",gap:"sm",children:[e.jsx(ha,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Area Chart"})]}),value:"Area Chart"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["Admin"],children:[e.jsx(n,{description:"Give full access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(ka,{fontSize:"2xl"}),e.jsx(C,{children:"Admin"})]}),value:"Admin",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"Give limited access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(va,{fontSize:"2xl"}),e.jsx(C,{children:"User"})]}),value:"User",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"No access to the system",label:e.jsxs(S,{gap:"sm",children:[e.jsx(xa,{fontSize:"2xl"}),e.jsx(C,{children:"Blocked"})]}),value:"Blocked",labelProps:{alignItems:"start"}})]}),e.jsxs(r,{defaultValue:["Rabbit"],w:"fit-content",withIcon:!1,children:[e.jsx(n,{value:"Rabbit",children:e.jsx(o,{children:e.jsxs(ae,{gap:"sm",children:[e.jsx(ba,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Rabbit"})]})})}),e.jsx(n,{value:"Snail",children:e.jsxs(ae,{gap:"sm",children:[e.jsx(ma,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Snail"})]})}),e.jsx(n,{value:"Squirrel",children:e.jsx(o,{children:e.jsxs(ae,{gap:"sm",children:[e.jsx(pa,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Squirrel"})]})})})]}),e.jsx(r,{defaultValue:["Line Chart"],items:a,labelProps:{flexDirection:"column",gap:"sm"}})]})};var te,ie,de;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(he=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:he.source}}};var xe,be,me;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(me=(be=R.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var pe,ke,ve;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ve=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var je,fe,ge;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Se,Ie,Ve;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Le,_e,De;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(De=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Fe,Ge,ye;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:ye.source}}};var we,Pe,Re;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Re=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Me,Ae,ze;q.parameters={...q.parameters,docs:{...(Me=q.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:ze.source}}};var Te,Ne,Oe;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(He=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};const In=["basic","withSize","withVariant","withColorScheme","withAddon","withDefaultValue","isDisabled","isReadOnly","isInvalid","hiddenIcon","customControl","customLabel"];export{In as __namedExportsOrder,w as basic,B as customControl,H as customLabel,Sn as default,q as hiddenIcon,T as isDisabled,O as isInvalid,N as isReadOnly,A as withAddon,M as withColorScheme,z as withDefaultValue,P as withSize,R as withVariant};
