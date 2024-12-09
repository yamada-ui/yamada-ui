import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{c as Ze}from"./components-DwxTyLM4.js";import{u as ae,b as $e,c as ea,d as aa,e as na}from"./checkbox-C4RdA26J.js";import{f as ne}from"./forward-ref-D13m8o2p.js";import{b as m,c as L,a4 as ra,g as Oe,B as $,a5 as oa,a6 as sa}from"./factory-ZSnRp-09.js";import{u as la}from"./use-checkbox-U_dzeJq7.js";import{e as qe}from"./form-control-CsCePsX1.js";import{a as ca}from"./use-component-style-Bj6hwx_Q.js";import{o as ta}from"./theme-provider-B08WIPTu.js";import{u as ia}from"./use-checkbox-group-e0bRijWi.js";import{F as da}from"./flex-ZeDiVseB.js";import{C as ua,a as Ca,b as ha,L as xa,R as ba,S as ma,c as pa}from"./squirrel-DHVEaSWI.js";import{S as ka,U as va}from"./user-round-DJnnAhsG.js";import{F as U}from"./for-BpsNoEAU.js";import{F as re}from"./fieldset-BzdZREpL.js";import{V as g,H as ee}from"./stack-C-NTCosl.js";import{T as C}from"./text-Q2VnSl4h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-C9iD9jp7.js";import"./index-CReU6qRk.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-C676fJGf.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./icon-D-mdHq7J.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-Bnw1OyhA.js";import"./createLucideIcon-C_T9K6g-.js";import"./visually-hidden-DlKdK2Br.js";const b=ne(({className:a,...s},i)=>{const{styles:d}=ae(),c={...d.addon};return e.jsx(m.div,{ref:i,className:L("ui-checkbox-card__addon",a),__css:c,...s})});b.displayName="CheckboxCardAddon";b.__ui__="CheckboxCardAddon";const l=ne(({className:a,...s},i)=>{const{styles:d}=ae(),c={...d.description};return e.jsx(m.div,{ref:i,className:L("ui-checkbox-card__description",a),__css:c,...s})});l.displayName="CheckboxCardDescription";l.__ui__="CheckboxCardDescription";const o=ne(({className:a,children:s,icon:i,withIcon:d,contentProps:c,iconProps:h,...p},k)=>{const{icon:S,styles:x,withIcon:v,getIconProps:j,iconProps:f}=ae();return d??(d=v),e.jsxs(m.div,{ref:k,className:L("ui-checkbox-card__label",a),__css:{...x.label},...p,children:[e.jsx(m.span,{className:"ui-checkbox-card__label-content",__css:{...x.labelContent},...c,children:s}),d?e.jsx(m.div,{className:"ui-checkbox-card__icon",__css:{...x.icon},...j({...f,...h}),children:i??S}):null]})});o.displayName="CheckboxCardLabel";o.__ui__="CheckboxCardLabel";const n=t.forwardRef((a,s)=>{const i=$e(),{value:d,...c}={...i},h=qe(a),[p,k]=ca("CheckboxCard",{...c,...a}),{className:S,addon:x,children:v,description:j,isDisabled:f=c.isDisabled??h.isDisabled,isInvalid:D=c.isInvalid??h.isInvalid,isReadOnly:_=c.isReadOnly??h.isReadOnly,isRequired:F=c.isRequired??h.isRequired,label:G,withIcon:W=!0,addonProps:E,descriptionProps:J,iconProps:K,inputProps:Q,labelProps:X,...u}=ta(k),Y=d&&u.value?d.includes(u.value):u.isChecked,y=c.onChange&&u.value?ra(c.onChange,u.onChange):u.onChange,{isChecked:I,props:Z,getContainerProps:Be,getIconProps:He,getInputProps:Ue}=la({...u,isChecked:Y,isDisabled:f,isInvalid:D,isReadOnly:_,isRequired:F,onChange:y}),{children:We,...Ee}={...K},Je=t.cloneElement(We??e.jsx(ea,{}),{isChecked:I,isDisabled:f,isInvalid:D,isReadOnly:_,isRequired:F,__css:{opacity:I?1:0,transform:I?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}}),V=Oe(v),Ke=$(V,o),Qe=$(V,l),Xe=$(V,b),Ye=oa(V)?v:sa(V,o,l,b);return e.jsx(aa,{value:{icon:Je,styles:p,withIcon:W,getIconProps:He,iconProps:Ee},children:e.jsxs(m.label,{className:L("ui-checkbox-card",S),...Be(Z),__css:{...p.container},children:[e.jsx(m.input,{className:"ui-checkbox-card__input",...Ue(Q,s)}),Ke??(G?e.jsx(o,{...X,children:G}):null),Qe??(j?e.jsx(l,{...J,children:j}):null),Xe??(x?e.jsx(b,{...E,children:x}):null),Ye]})})});n.displayName="CheckboxCard";n.__ui__="CheckboxCard";const r=t.forwardRef(({className:a,colorScheme:s,size:i,variant:d,children:c,direction:h="row",gap:p="0.5rem",items:k=[],withIcon:S=!0,addonProps:x,descriptionProps:v,labelProps:j,...f},D)=>{const{props:_,value:F,getContainerProps:G,onChange:W}=ia(f),{isDisabled:E,isInvalid:J,isReadOnly:K,isRequired:Q,labelId:X,...u}=qe(_),Y=Oe(c);let y=[];return!Y.length&&k.length&&(y=k.map((I,Z)=>e.jsx(n,{...I},Z))),e.jsx(na,{value:{colorScheme:s,size:i,variant:d,isDisabled:E,isInvalid:J,isReadOnly:K,isRequired:Q,value:F,withIcon:S,addonProps:x,descriptionProps:v,labelProps:j,onChange:W},children:e.jsx(da,{ref:D,className:L("ui-checkbox-card-group",a),gap:p,w:"100%",...G({"aria-labelledby":X,...u}),direction:h,children:c??y})})});r.displayName="CheckboxCardGroup";r.__ui__="CheckboxCardGroup";const Sn={component:n,title:"Components / Forms / CheckboxCard"},w=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(l,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(l,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(l,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},P=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["sm","md","lg"],children:s=>e.jsx(r,{size:s,defaultValue:["ドラえもん"],items:a},s)})},R=()=>{const a=t.useMemo(()=>[{description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:s=>e.jsx(r,{variant:s,defaultValue:["ドラえもん"],items:a},s)})},M=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(U,{each:["outline","subtle","surface"],children:s=>e.jsx(U,{each:Ze,children:i=>e.jsx(r,{colorScheme:i,variant:s,defaultValue:["ドラえもん"],items:a},i)},s)})},A=()=>{const a=t.useMemo(()=>[{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"},{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"},{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{addon:"藤子・F・不二雄",description:"22世紀の未来から来たネコ型ロボット。",label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"ドラえもんの妹のロボット。",label:"ドラミ",value:"ドラミ"}),e.jsx(n,{addon:"藤子・F・不二雄",description:"アヒル型のロボット。",label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(l,{children:"22世紀の未来から来たネコ型ロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(l,{children:"ドラえもんの妹のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(l,{children:"アヒル型のロボット。"}),e.jsx(b,{children:"藤子・F・不二雄"})]})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},z=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{defaultValue:["ドラえもん"],items:a})},T=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(l,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isDisabled:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(l,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(l,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isDisabled:!0,items:a}),e.jsx(re,{isDisabled:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},N=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(l,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{isReadOnly:!0,value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(l,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(l,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isReadOnly:!0,items:a}),e.jsx(re,{isReadOnly:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},O=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsxs(n,{isInvalid:!0,value:"ドラえもん",children:[e.jsx(o,{children:"ドラえもん"}),e.jsx(l,{children:"22世紀の未来から来たネコ型ロボット。"})]}),e.jsxs(n,{value:"ドラミ",children:[e.jsx(o,{children:"ドラミ"}),e.jsx(l,{children:"ドラえもんの妹のロボット。"})]}),e.jsxs(n,{value:"ガチャ子",children:[e.jsx(o,{children:"ガチャ子"}),e.jsx(l,{children:"アヒル型のロボット。"})]})]}),e.jsx(r,{isInvalid:!0,items:a}),e.jsx(re,{errorMessage:"This is required.",isInvalid:!0,legend:"Which characters would you like to select?",children:e.jsx(r,{items:a})})]})},q=()=>{const a=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん",withIcon:!1},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["ドラえもん"],withIcon:!1,children:[e.jsx(n,{label:"ドラえもん",value:"ドラえもん"}),e.jsx(n,{label:"ドラミ",value:"ドラミ"}),e.jsx(n,{label:"ガチャ子",value:"ガチャ子"})]}),e.jsxs(r,{defaultValue:["ドラえもん"],children:[e.jsx(n,{value:"ドラえもん",children:e.jsx(o,{withIcon:!1,children:"ドラえもん"})}),e.jsx(n,{value:"ドラミ",children:e.jsx(o,{children:"ドラミ"})}),e.jsx(n,{value:"ガチャ子",children:e.jsx(o,{children:"ガチャ子"})})]}),e.jsx(r,{defaultValue:["ドラえもん"],items:a})]})},B=()=>{const[a,s]=t.useState(["ドラえもん"]),i=t.useMemo(()=>[{label:"ドラえもん",value:"ドラえもん"},{label:"ドラミ",value:"ドラミ"},{label:"ガチャ子",value:"ガチャ子"}],[]);return e.jsx(r,{items:i,value:a,onChange:s})},H=()=>{const a=t.useMemo(()=>[{label:e.jsxs(g,{alignItems:"center",gap:"sm",children:[e.jsx(ua,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Line Chart"})]}),value:"Line Chart"},{label:e.jsxs(g,{alignItems:"center",gap:"sm",children:[e.jsx(Ca,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Bar Chart"})]}),value:"Bar Chart"},{label:e.jsxs(g,{alignItems:"center",gap:"sm",children:[e.jsx(ha,{color:"muted",fontSize:"3xl"}),e.jsx(C,{children:"Area Chart"})]}),value:"Area Chart"}],[]);return e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:["Admin"],children:[e.jsx(n,{description:"Give full access to the system",label:e.jsxs(g,{gap:"sm",children:[e.jsx(ka,{fontSize:"2xl"}),e.jsx(C,{children:"Admin"})]}),value:"Admin",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"Give limited access to the system",label:e.jsxs(g,{gap:"sm",children:[e.jsx(va,{fontSize:"2xl"}),e.jsx(C,{children:"User"})]}),value:"User",labelProps:{alignItems:"start"}}),e.jsx(n,{description:"No access to the system",label:e.jsxs(g,{gap:"sm",children:[e.jsx(xa,{fontSize:"2xl"}),e.jsx(C,{children:"Blocked"})]}),value:"Blocked",labelProps:{alignItems:"start"}})]}),e.jsxs(r,{defaultValue:["Rabbit"],w:"fit-content",withIcon:!1,children:[e.jsx(n,{value:"Rabbit",children:e.jsx(o,{children:e.jsxs(ee,{gap:"sm",children:[e.jsx(ba,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Rabbit"})]})})}),e.jsx(n,{value:"Snail",children:e.jsxs(ee,{gap:"sm",children:[e.jsx(ma,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Snail"})]})}),e.jsx(n,{value:"Squirrel",children:e.jsx(o,{children:e.jsxs(ee,{gap:"sm",children:[e.jsx(pa,{color:"muted",fontSize:"2xl"}),e.jsx(C,{children:"Squirrel"})]})})})]}),e.jsx(r,{defaultValue:["Line Chart"],items:a,labelProps:{flexDirection:"column",gap:"sm"}})]})};var oe,se,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(se=w.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,te,ie;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ie=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,ue,Ce;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};var he,xe,be;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var me,pe,ke;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(ke=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ke.source}}};var ve,je,fe;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Pe=(we=q.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var Re,Me,Ae;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var ze,Te,Ne;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};const In=["basic","withSize","withVariant","withColorScheme","withAddon","withDefaultValue","isDisabled","isReadOnly","isInvalid","hiddenIcon","customControl","customLabel"];export{In as __namedExportsOrder,w as basic,B as customControl,H as customLabel,Sn as default,q as hiddenIcon,T as isDisabled,O as isInvalid,N as isReadOnly,A as withAddon,M as withColorScheme,z as withDefaultValue,P as withSize,R as withVariant};