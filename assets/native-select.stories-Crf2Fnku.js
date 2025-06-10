import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as xe}from"./index-Bv9Y92EF.js";import{u as fe}from"./index.esm-DdgAP9ly.js";import{u as De,f as He,d as p}from"./form-control-C8eO6U25.js";import{c as Me}from"./icon-DKuqv-9Z.js";import{f as V}from"./forward-ref-DH6f5tnY.js";import{a as Ge}from"./use-component-style-DHLtMqa5.js";import{o as Te}from"./theme-provider-DsbwOWxu.js";import{a3 as Ee,M as Re,aa as Ye,B as Ae,b as u,c as je,ae as Je,g as Ke,q as Le}from"./factory-7Z88KRtK.js";import{C as Qe}from"./chevrons-down-BpSqjpuG.js";import{V as Oe}from"./stack-DL8tKm2J.js";import{B as ge}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-Bz9rJ8_M.js";import"./createLucideIcon-Bq8XVWwL.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";const[Ue,Xe]=Ae({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=V((t,r)=>{const[i,c]=Ge("NativeSelect",t),{className:s,children:n,color:o,items:d=[],placeholder:k,placeholderInOptions:ye=!0,containerProps:Ce,iconProps:_e,...B}=De(Te(c)),{"aria-readonly":Ze,onBlur:$e,onFocus:ea,...I}=Ee(B,He),[{h:Fe,height:we,minH:ze,minHeight:Ve,...Pe},ke]=Re(Ye(B,["aria-readonly"]),Je);let W=[];return!n&&d.length&&(W=d.map((h,q)=>{if("value"in h){const{label:F,value:w,...z}=h;return e.jsx(l,{value:w,...z,children:F},q)}else if("items"in h){const{items:F=[],label:w,...z}=h;return e.jsx(v,{label:w,...z,children:F.map(({label:Be,value:Ie,...We},qe)=>e.jsx(l,{value:Ie,...We,children:Be},qe))},q)}}).filter(Boolean)),e.jsx(Ue,{value:i,children:e.jsxs(u.div,{className:"ui-select",__css:{color:o,h:"fit-content",position:"relative",w:"100%",...i.container},...Pe,...Ce,...I,children:[e.jsxs(u.select,{ref:r,className:je("ui-select__field",s),__css:{h:Fe??we,minH:ze??Ve,pe:"2rem",...i.field},...ke,children:[k?e.jsx(l,{hidden:!ye,value:"",children:k}):null,n??W]}),e.jsx(P,{..._e,...I})]})})});a.displayName="NativeSelect";a.__ui__="NativeSelect";const P=({className:t,children:r,...i})=>{const s={alignItems:"center",display:"inline-flex",justifyContent:"center",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",...Xe().icon},o=Ke(r).map(d=>xe.cloneElement(d,{style:{color:"currentColor",height:"1em",width:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(u.div,{className:je("ui-select__icon",t),__css:s,...i,children:Le(r)?o:e.jsx(Me,{})})};P.displayName="NativeSelectIcon";P.__ui__="NativeSelectIcon";const v=V((t,r)=>e.jsx(u.optgroup,{ref:r,...t}));v.displayName="NativeOptionGroup";v.__ui__="NativeOptionGroup";const l=V((t,r)=>e.jsx(u.option,{ref:r,...t}));l.displayName="NativeOption";l.__ui__="NativeOption";const ja={component:a,title:"Components / Forms / NativeSelect"},m=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",children:[e.jsxs(v,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(v,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(a,{"aria-label":"Native Select",items:t,placeholder:"キャラクターを選択"})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs","aria-label":"Native Select",placeholder:"extra small size"}),e.jsx(a,{size:"sm","aria-label":"Native Select",placeholder:"small size"}),e.jsx(a,{size:"md","aria-label":"Native Select",placeholder:"medium size"}),e.jsx(a,{size:"lg","aria-label":"Native Select",placeholder:"large size"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",placeholder:"unstyled"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{"aria-label":"Native Select",placeholder:"default border color"}),e.jsx(a,{"aria-label":"Native Select",focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(a,{"aria-label":"Native Select",errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),x=()=>e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",placeholderInOptions:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",disabled:!0,placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",disabled:!0,placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",disabled:!0,placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",disabled:!0,placeholder:"unstyled"}),e.jsx(p,{disabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",placeholder:"outline",readOnly:!0}),e.jsx(a,{variant:"filled","aria-label":"Native Select",placeholder:"filled",readOnly:!0}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",placeholder:"flushed",readOnly:!0}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",placeholder:"unstyled",readOnly:!0}),e.jsx(p,{label:"Which notifications would you like to receive?",readOnly:!0,children:e.jsx(a,{placeholder:"Select notifications"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",invalid:!0,placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",invalid:!0,placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",invalid:!0,placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",invalid:!0,placeholder:"unstyled"}),e.jsx(p,{errorMessage:"This is required.",invalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qe,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),y=()=>{const[t,r]=xe.useState("孫悟空");return e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",value:t,onChange:i=>r(i.target.value),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},C=()=>{var n;const{formState:{errors:t},handleSubmit:r,register:i,watch:c}=fe(),s=o=>console.log("submit:",o);return console.log("watch:",c()),e.jsxs(Oe,{as:"form",onSubmit:r(s),children:[e.jsx(p,{errorMessage:(n=t.select)==null?void 0:n.message,invalid:!!t.select,label:"Who is your favorite character?",children:e.jsxs(a,{placeholder:"キャラクターを選択",...i("select",{required:{message:"This is required.",value:!0}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_=()=>{var o;const t={select:"孫悟空"},{formState:{errors:r},handleSubmit:i,register:c,watch:s}=fe({defaultValues:t}),n=d=>console.log("submit:",d);return console.log("watch:",s()),e.jsxs(Oe,{as:"form",onSubmit:i(n),children:[e.jsx(p,{errorMessage:(o=r.select)==null?void 0:o.message,invalid:!!r.select,label:"Who is your favorite character?",children:e.jsxs(a,{placeholder:"キャラクターを選択",...c("select",{required:{message:"This is required.",value:!0}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,H,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const items: NativeSelectItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }],
    label: "地球人"
  }, {
    items: [{
      label: "フリーザ",
      value: "フリーザ"
    }, {
      label: "ギニュー",
      value: "ギニュー"
    }, {
      label: "リクーム",
      value: "リクーム"
    }, {
      label: "バータ",
      value: "バータ"
    }, {
      label: "ジース",
      value: "ジース"
    }, {
      label: "グルド",
      value: "グルド"
    }],
    label: "フリーザ軍"
  }];
  return <>
      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択">
        <NativeOptionGroup label="地球人">
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="孫悟飯">孫悟飯</NativeOption>
          <NativeOption value="クリリン">クリリン</NativeOption>
        </NativeOptionGroup>

        <NativeOptionGroup label="フリーザ軍">
          <NativeOption value="フリーザ">フリーザ</NativeOption>
          <NativeOption value="ギニュー">ギニュー</NativeOption>
          <NativeOption value="リクーム">リクーム</NativeOption>
          <NativeOption value="バータ">バータ</NativeOption>
          <NativeOption value="ジース">ジース</NativeOption>
          <NativeOption value="グルド">グルド</NativeOption>
        </NativeOptionGroup>
      </NativeSelect>

      <NativeSelect aria-label="Native Select" items={items} placeholder="キャラクターを選択" />
    </>;
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var G,T,E;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect size="xs" aria-label="Native Select" placeholder="extra small size" />
      <NativeSelect size="sm" aria-label="Native Select" placeholder="small size" />
      <NativeSelect size="md" aria-label="Native Select" placeholder="medium size" />
      <NativeSelect size="lg" aria-label="Native Select" placeholder="large size" />
    </>;
}`,...(E=(T=N.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var R,Y,A;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" placeholder="unstyled" />
    </>;
}`,...(A=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect aria-label="Native Select" placeholder="default border color" />
      <NativeSelect aria-label="Native Select" focusBorderColor="green.500" placeholder="custom border color" />
      <NativeSelect aria-label="Native Select" errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択" placeholderInOptions={false}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" disabled placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" disabled placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" disabled placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" disabled placeholder="unstyled" />

      <FormControl disabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,le,te;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" placeholder="outline" readOnly />
      <NativeSelect variant="filled" aria-label="Native Select" placeholder="filled" readOnly />
      <NativeSelect variant="flushed" aria-label="Native Select" placeholder="flushed" readOnly />
      <NativeSelect variant="unstyled" aria-label="Native Select" placeholder="unstyled" readOnly />

      <FormControl label="Which notifications would you like to receive?" readOnly>
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=j.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var re,ie,ne;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" invalid placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" invalid placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" invalid placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" invalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." invalid label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ne=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var oe,se,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択" iconProps={{
      color: "primary"
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択" iconProps={{
      children: <ChevronsDownIcon />
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(ce=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,ue,ve;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(ve=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var pe,he,me;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          message: "This is required.",
          value: true
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(me=(he=C.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Ne,Se,be;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const defaultValues: Data = {
    select: "孫悟空"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          message: "This is required.",
          value: true
        }
      })}>
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(be=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const Oa=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","disabled","readOnly","invalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Oa as __namedExportsOrder,m as basic,y as customControl,g as customIcon,ja as default,f as disabled,x as disabledPlaceholderInOptions,O as invalid,C as reactHookForm,_ as reactHookFormWithDefaultValue,j as readOnly,b as withBorderColor,N as withSize,S as withVariant};
