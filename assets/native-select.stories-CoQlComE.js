import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as xe}from"./index-BwPxMuoB.js";import{u as fe}from"./index.esm-C038jXrr.js";import{u as We,f as qe,d as p}from"./form-control-DgcE1-oN.js";import{c as He}from"./icon-Dk5VwDTI.js";import{f as D}from"./forward-ref-Ukjd1cIW.js";import{a as Me}from"./use-component-style-CpB_lyT3.js";import{o as Ge}from"./theme-provider-ChqdwXGn.js";import{a3 as Te,M as Ee,aa as Ye,B as Ae,b as u,c as je,ae as Je,g as Ke,q as Le}from"./factory-DbNU74ts.js";import{C as Qe}from"./chevrons-down-B8tBw-Jg.js";import{V as Oe}from"./stack-BP8LKMVN.js";import{B as ge}from"./button-CqSjNDtY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-DlbRU9j0.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";const[Ue,Xe]=Ae({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=D((t,i)=>{const[r,c]=Me("NativeSelect",t),{className:s,children:n,color:o,items:d=[],placeholder:V,placeholderInOptions:ye=!0,containerProps:Ce,iconProps:Ie,...P}=We(Ge(c)),{"aria-readonly":Ze,onBlur:$e,onFocus:ea,...k}=Te(P,qe),[{h:_e,height:Fe,minH:we,minHeight:De,...ze},Ve]=Ee(Ye(P,["aria-readonly"]),Je);let B=[];return!n&&d.length&&(B=d.map((h,R)=>{if("value"in h){const{label:_,value:F,...w}=h;return e.jsx(l,{value:F,...w,children:_},R)}else if("items"in h){const{items:_=[],label:F,...w}=h;return e.jsx(v,{label:F,...w,children:_.map(({label:Pe,value:ke,...Be},Re)=>e.jsx(l,{value:ke,...Be,children:Pe},Re))},R)}}).filter(Boolean)),e.jsx(Ue,{value:r,children:e.jsxs(u.div,{className:"ui-select",__css:{color:o,h:"fit-content",position:"relative",w:"100%",...r.container},...ze,...Ce,...k,children:[e.jsxs(u.select,{ref:i,className:je("ui-select__field",s),__css:{h:_e??Fe,minH:we??De,pe:"2rem",...r.field},...Ve,children:[V?e.jsx(l,{hidden:!ye,value:"",children:V}):null,n??B]}),e.jsx(z,{...Ie,...k})]})})});a.displayName="NativeSelect";a.__ui__="NativeSelect";const z=({className:t,children:i,...r})=>{const s={alignItems:"center",display:"inline-flex",justifyContent:"center",pointerEvents:"none",position:"absolute",top:"50%",transform:"translateY(-50%)",...Xe().icon},o=Ke(i).map(d=>xe.cloneElement(d,{style:{color:"currentColor",height:"1em",width:"1em"},"aria-hidden":!0,focusable:!1}));return e.jsx(u.div,{className:je("ui-select__icon",t),__css:s,...r,children:Le(i)?o:e.jsx(He,{})})};z.displayName="NativeSelectIcon";z.__ui__="NativeSelectIcon";const v=D((t,i)=>e.jsx(u.optgroup,{ref:i,...t}));v.displayName="NativeOptionGroup";v.__ui__="NativeOptionGroup";const l=D((t,i)=>e.jsx(u.option,{ref:i,...t}));l.displayName="NativeOption";l.__ui__="NativeOption";const ja={component:a,title:"Components / Forms / NativeSelect"},m=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}],label:"地球人"},{items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}],label:"フリーザ軍"}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",children:[e.jsxs(v,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(v,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(a,{"aria-label":"Native Select",items:t,placeholder:"キャラクターを選択"})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs","aria-label":"Native Select",placeholder:"extra small size"}),e.jsx(a,{size:"sm","aria-label":"Native Select",placeholder:"small size"}),e.jsx(a,{size:"md","aria-label":"Native Select",placeholder:"medium size"}),e.jsx(a,{size:"lg","aria-label":"Native Select",placeholder:"large size"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",placeholder:"unstyled"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{"aria-label":"Native Select",placeholder:"default border color"}),e.jsx(a,{"aria-label":"Native Select",focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(a,{"aria-label":"Native Select",errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),x=()=>e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",placeholderInOptions:!1,children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",isDisabled:!0,placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",isDisabled:!0,placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",isDisabled:!0,placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",isDisabled:!0,placeholder:"unstyled"}),e.jsx(p,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",isReadOnly:!0,placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",isReadOnly:!0,placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",isReadOnly:!0,placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(p,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline","aria-label":"Native Select",isInvalid:!0,placeholder:"outline"}),e.jsx(a,{variant:"filled","aria-label":"Native Select",isInvalid:!0,placeholder:"filled"}),e.jsx(a,{variant:"flushed","aria-label":"Native Select",isInvalid:!0,placeholder:"flushed"}),e.jsx(a,{variant:"unstyled","aria-label":"Native Select",isInvalid:!0,placeholder:"unstyled"}),e.jsx(p,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",iconProps:{children:e.jsx(Qe,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),y=()=>{const[t,i]=xe.useState("孫悟空");return e.jsxs(a,{"aria-label":"Native Select",placeholder:"キャラクターを選択",value:t,onChange:r=>i(r.target.value),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},C=()=>{var n;const{formState:{errors:t},handleSubmit:i,register:r,watch:c}=fe(),s=o=>console.log("submit:",o);return console.log("watch:",c()),e.jsxs(Oe,{as:"form",onSubmit:i(s),children:[e.jsx(p,{errorMessage:(n=t.select)==null?void 0:n.message,isInvalid:!!t.select,label:"Who is your favorite character?",children:e.jsxs(a,{placeholder:"キャラクターを選択",...r("select",{required:{message:"This is required.",value:!0}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},I=()=>{var o;const t={select:"孫悟空"},{formState:{errors:i},handleSubmit:r,register:c,watch:s}=fe({defaultValues:t}),n=d=>console.log("submit:",d);return console.log("watch:",s()),e.jsxs(Oe,{as:"form",onSubmit:r(n),children:[e.jsx(p,{errorMessage:(o=i.select)==null?void 0:o.message,isInvalid:!!i.select,label:"Who is your favorite character?",children:e.jsxs(a,{placeholder:"キャラクターを選択",...c("select",{required:{message:"This is required.",value:!0}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var W,q,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var M,G,T;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect size="xs" aria-label="Native Select" placeholder="extra small size" />
      <NativeSelect size="sm" aria-label="Native Select" placeholder="small size" />
      <NativeSelect size="md" aria-label="Native Select" placeholder="medium size" />
      <NativeSelect size="lg" aria-label="Native Select" placeholder="large size" />
    </>;
}`,...(T=(G=N.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var E,Y,A;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
      <NativeSelect aria-label="Native Select" errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択" placeholderInOptions={false}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" isDisabled placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" isDisabled placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" isDisabled placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,le,te;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" isReadOnly placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" isReadOnly placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" isReadOnly placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=j.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,re,ne;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" aria-label="Native Select" isInvalid placeholder="outline" />
      <NativeSelect variant="filled" aria-label="Native Select" isInvalid placeholder="filled" />
      <NativeSelect variant="flushed" aria-label="Native Select" isInvalid placeholder="flushed" />
      <NativeSelect variant="unstyled" aria-label="Native Select" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ne=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.select?.message} isInvalid={!!errors.select} label="Who is your favorite character?">
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
}`,...(me=(he=C.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Ne,Se,be;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.select?.message} isInvalid={!!errors.select} label="Who is your favorite character?">
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
}`,...(be=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const Oa=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{Oa as __namedExportsOrder,m as basic,y as customControl,g as customIcon,ja as default,x as disabledPlaceholderInOptions,f as isDisabled,O as isInvalid,j as isReadonly,C as reactHookForm,I as reactHookFormWithDefaultValue,b as withBorderColor,N as withSize,S as withVariant};
