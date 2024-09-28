import{j as e}from"./extends-CwFRzn3r.js";import{r as fe}from"./index-BwDkhjyp.js";import{u as je}from"./index.esm-DXPXqkjk.js";import{u as We,f as qe,F as p}from"./form-control-DTumWR9y.js";import{c as He}from"./icon-FPUxZQsz.js";import{o as Me,V as Ge,U as Te,_ as Ee,b as u,c as Oe,p as Ue,j as Ye,a6 as Ae}from"./factory-CYpx3TMG.js";import{f as D}from"./forward-ref-BWI-Phbn.js";import{a as Je}from"./use-component-style-CfUS8Ki1.js";import{o as Ke}from"./theme-provider-BZKkW4ID.js";import{C as Le}from"./chevrons-down-DXUMrte6.js";import{V as ge}from"./stack-C8qilfIS.js";import{B as ye}from"./button-Bx26J9Y6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-B0r_2U-t.js";import"./lucide-icon-cfLZgeB_.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";const[Qe,Xe]=Me({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=D((t,i)=>{const[r,c]=Je("NativeSelect",t),{className:n,children:o,placeholderInOptions:s=!0,color:d,items:z=[],placeholder:P,containerProps:Ce,iconProps:_e,...k}=We(Ke(c)),{"aria-readonly":Ze,onFocus:$e,onBlur:ea,...B}=Ge(k,qe),[{h:Fe,height:Ie,minH:we,minHeight:De,...Ve},ze]=Te(Ee(k,["aria-readonly"]),Ae);let R=[];return!o&&z.length&&(R=z.map((h,W)=>{if("value"in h){const{label:F,value:I,...w}=h;return e.jsx(l,{value:I,...w,children:F},W)}else if("items"in h){const{label:F,items:I=[],...w}=h;return e.jsx(v,{label:F,...w,children:I.map(({label:Pe,value:ke,...Be},Re)=>e.jsx(l,{value:ke,...Be,children:Pe},Re))},W)}}).filter(Boolean)),e.jsx(Qe,{value:r,children:e.jsxs(u.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:d,...r.container},...Ve,...Ce,...B,children:[e.jsxs(u.select,{ref:i,className:Oe("ui-select__field",n),__css:{pe:"2rem",h:Fe??Ie,minH:we??De,...r.field},...ze,children:[P?e.jsx(l,{value:"",hidden:!s,children:P}):null,o??R]}),e.jsx(V,{..._e,...B})]})})});a.displayName="NativeSelect";a.__ui__="NativeSelect";const V=({className:t,children:i,...r})=>{const n={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Xe().icon},s=Ue(i).map(d=>fe.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e.jsx(u.div,{className:Oe("ui-select__icon",t),__css:n,...r,children:Ye(i)?s:e.jsx(He,{})})};V.displayName="NativeSelectIcon";V.__ui__="NativeSelectIcon";const v=D((t,i)=>e.jsx(u.optgroup,{ref:i,...t}));v.displayName="NativeOptionGroup";v.__ui__="NativeOptionGroup";const l=D((t,i)=>e.jsx(u.option,{ref:i,...t}));l.displayName="NativeOption";l.__ui__="NativeOption";const fa={title:"Components / Forms / NativeSelect",component:a},m=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsxs(v,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(v,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(a,{placeholder:"キャラクターを選択",items:t,"aria-label":"Native Select"})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"extra small size",size:"xs","aria-label":"Native Select"}),e.jsx(a,{placeholder:"small size",size:"sm","aria-label":"Native Select"}),e.jsx(a,{placeholder:"medium size",size:"md","aria-label":"Native Select"}),e.jsx(a,{placeholder:"large size",size:"lg","aria-label":"Native Select"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default border color","aria-label":"Native Select"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"custom border color","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color","aria-label":"Native Select"})]}),x=()=>e.jsxs(a,{placeholder:"キャラクターを選択",placeholderInOptions:!1,"aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(p,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(p,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(p,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"Select notifications"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{children:e.jsx(Le,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),y=()=>{const[t,i]=fe.useState("孫悟空");return e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",value:t,onChange:r=>i(r.target.value),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},C=()=>{var o;const{register:t,handleSubmit:i,watch:r,formState:{errors:c}}=je(),n=s=>console.log("submit:",s);return console.log("watch:",r()),e.jsxs(ge,{as:"form",onSubmit:i(n),children:[e.jsx(p,{isInvalid:!!c.select,label:"Who is your favorite character?",errorMessage:(o=c.select)==null?void 0:o.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...t("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ye,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},_=()=>{var s;const t={select:"孫悟空"},{register:i,handleSubmit:r,watch:c,formState:{errors:n}}=je({defaultValues:t}),o=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(ge,{as:"form",onSubmit:r(o),children:[e.jsx(p,{isInvalid:!!n.select,label:"Who is your favorite character?",errorMessage:(s=n.select)==null?void 0:s.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...i("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ye,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var q,H,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const items: NativeSelectItem[] = [{
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "地球人",
    items: [{
      label: "孫悟空",
      value: "孫悟空"
    }, {
      label: "孫悟飯",
      value: "孫悟飯"
    }, {
      label: "クリリン",
      value: "クリリン"
    }]
  }, {
    label: "フリーザ軍",
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
    }]
  }];
  return <>
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
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

      <NativeSelect placeholder="キャラクターを選択" items={items} aria-label="Native Select" />
    </>;
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var G,T,E;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" aria-label="Native Select" />
      <NativeSelect placeholder="small size" size="sm" aria-label="Native Select" />
      <NativeSelect placeholder="medium size" size="md" aria-label="Native Select" />
      <NativeSelect placeholder="large size" size="lg" aria-label="Native Select" />
    </>;
}`,...(E=(T=N.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var U,Y,A;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect variant="unstyled" placeholder="unstyled" aria-label="Native Select" />
    </>;
}`,...(A=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var J,K,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="default border color" aria-label="Native Select" />
      <NativeSelect focusBorderColor="green.500" placeholder="custom border color" aria-label="Native Select" />
      <NativeSelect isInvalid errorBorderColor="orange.500" placeholder="custom border color" aria-label="Native Select" />
    </>;
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false} aria-label="Native Select">
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,te,ie;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ie=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,ne,oe;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(oe=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ce,de;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      color: "primary"
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" iconProps={{
      children: <ChevronsDown />
    }}>
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>;
}`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,ve,pe;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(pe=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};var he,me,Ne;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
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
}`,...(Ne=(me=C.parameters)==null?void 0:me.docs)==null?void 0:Ne.source}}};var Se,be,xe;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const defaultValues: Data = {
    select: "孫悟空"
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.select} label="Who is your favorite character?" errorMessage={errors.select?.message}>
        <NativeSelect placeholder="キャラクターを選択" {...register("select", {
        required: {
          value: true,
          message: "This is required."
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
}`,...(xe=(be=_.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const ja=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ja as __namedExportsOrder,m as basic,y as customControl,g as customIcon,fa as default,x as disabledPlaceholderInOptions,f as isDisabled,O as isInvalid,j as isReadonly,C as reactHookForm,_ as reactHookFormWithDefaultValue,b as withBorderColor,N as withSize,S as withVariant};
