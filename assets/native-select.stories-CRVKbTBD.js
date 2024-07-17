import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as xe}from"./index-BwDkhjyp.js";import{u as fe}from"./index.esm-CnEPCCvu.js";import{u as _e,f as We,F as v}from"./form-control-v7wnzt3v.js";import{c as qe}from"./icon-DBsGF4uC.js";import{l as He,T as Me,a0 as Te,R as Ee,b as u,c as je,t as Ge,j as Ye,a1 as Ae}from"./factory-CtEVzbYf.js";import{f as V}from"./forward-ref-BmTAT9U5.js";import{a as Je}from"./use-component-style-D3qgkwVB.js";import{o as Ke}from"./theme-provider-DwNsBv-g.js";import{C as Le}from"./chevrons-down-C-8gUV4E.js";import{V as Oe}from"./stack-C7XG3IUB.js";import{B as ge}from"./button-k9WmOR8p.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DXbYvzpO.js";import"./extends-CF3RwP-h.js";import"./lucide-icon-DT4tbm16.js";import"./use-ripple-TwsMOega.js";import"./index-Bv1g3FT6.js";import"./motion-rfajLyyA.js";import"./motion-CBb6JxAi.js";import"./loading-k_S2O4S_.js";const[Qe,Ue]=He({name:"NativeSelectContext",errorMessage:`useNativeSelect returned is 'undefined'. Seems you forgot to wrap the components in "<NativeSelect />"`}),a=V((t,i)=>{const[r,c]=Je("NativeSelect",t);let{className:n,children:o,placeholderInOptions:s=!0,color:d,h:ye,height:Ce,minH:Fe,minHeight:Ie,items:P=[],placeholder:k,containerProps:we,iconProps:De,...p}=Ke(c);p=_e(p);const{"aria-readonly":Ze,...R}=Me(p,We),[ze,Ve]=Te(Ee(p,["aria-readonly"]),Ae);let B=[];return!o&&P.length&&(B=P.map((h,_)=>{if("value"in h){const{label:I,value:w,...D}=h;return e.jsx(l,{value:w,...D,children:I},_)}else if("items"in h){const{label:I,items:w=[],...D}=h;return e.jsx(z,{label:I,...D,children:w.map(({label:Pe,value:ke,...Re},Be)=>e.jsx(l,{value:ke,...Re,children:Pe},Be))},_)}}).filter(Boolean)),e.jsx(Qe,{value:r,children:e.jsxs(u.div,{className:"ui-select",__css:{position:"relative",w:"100%",h:"fit-content",color:d,...r.container},...ze,...we,...R,children:[e.jsxs(u.select,{ref:i,className:je("ui-select__field",n),__css:{pe:"2rem",h:ye??Ce,minH:Fe??Ie,...r.field},...Ve,children:[k?e.jsx(l,{value:"",hidden:!s,children:k}):null,o??B]}),e.jsx(Xe,{...De,...R})]})})}),Xe=({className:t,children:i,...r})=>{const n={position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)",...Ue().icon},s=Ge(i).map(d=>xe.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}}));return e.jsx(u.div,{className:je("ui-select__icon",t),__css:n,...r,children:Ye(i)?s:e.jsx(qe,{})})},z=V((t,i)=>e.jsx(u.optgroup,{ref:i,...t})),l=V((t,i)=>e.jsx(u.option,{ref:i,...t})),fa={title:"Components / Forms / NativeSelect",component:a},m=()=>{const t=[{label:"ベジータ",value:"ベジータ"},{label:"地球人",items:[{label:"孫悟空",value:"孫悟空"},{label:"孫悟飯",value:"孫悟飯"},{label:"クリリン",value:"クリリン"}]},{label:"フリーザ軍",items:[{label:"フリーザ",value:"フリーザ"},{label:"ギニュー",value:"ギニュー"},{label:"リクーム",value:"リクーム"},{label:"バータ",value:"バータ"},{label:"ジース",value:"ジース"},{label:"グルド",value:"グルド"}]}];return e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",children:[e.jsxs(z,{label:"地球人",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"孫悟飯",children:"孫悟飯"}),e.jsx(l,{value:"クリリン",children:"クリリン"})]}),e.jsxs(z,{label:"フリーザ軍",children:[e.jsx(l,{value:"フリーザ",children:"フリーザ"}),e.jsx(l,{value:"ギニュー",children:"ギニュー"}),e.jsx(l,{value:"リクーム",children:"リクーム"}),e.jsx(l,{value:"バータ",children:"バータ"}),e.jsx(l,{value:"ジース",children:"ジース"}),e.jsx(l,{value:"グルド",children:"グルド"})]})]}),e.jsx(a,{placeholder:"キャラクターを選択",items:t,"aria-label":"Native Select"})]})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"extra small size",size:"xs","aria-label":"Native Select"}),e.jsx(a,{placeholder:"small size",size:"sm","aria-label":"Native Select"}),e.jsx(a,{placeholder:"medium size",size:"md","aria-label":"Native Select"}),e.jsx(a,{placeholder:"large size",size:"lg","aria-label":"Native Select"})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default border color","aria-label":"Native Select"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"custom border color","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color","aria-label":"Native Select"})]}),x=()=>e.jsxs(a,{placeholder:"キャラクターを選択",placeholderInOptions:!1,"aria-label":"Native Select",children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(a,{placeholder:"Select notifications"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isInvalid:!0,variant:"outline",placeholder:"outline","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"filled",placeholder:"filled","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"flushed",placeholder:"flushed","aria-label":"Native Select"}),e.jsx(a,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled","aria-label":"Native Select"}),e.jsx(v,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(a,{placeholder:"Select notifications"})})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{color:"primary"},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",iconProps:{children:e.jsx(Le,{})},children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})]}),y=()=>{const[t,i]=xe.useState("孫悟空");return e.jsxs(a,{placeholder:"キャラクターを選択","aria-label":"Native Select",value:t,onChange:r=>i(r.target.value),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})},C=()=>{var o;const{register:t,handleSubmit:i,watch:r,formState:{errors:c}}=fe(),n=s=>console.log("submit:",s);return console.log("watch:",r()),e.jsxs(Oe,{as:"form",onSubmit:i(n),children:[e.jsx(v,{isInvalid:!!c.select,label:"Who is your favorite character?",errorMessage:(o=c.select)==null?void 0:o.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...t("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},F=()=>{var s;const t={select:"孫悟空"},{register:i,handleSubmit:r,watch:c,formState:{errors:n}}=fe({defaultValues:t}),o=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(Oe,{as:"form",onSubmit:r(o),children:[e.jsx(v,{isInvalid:!!n.select,label:"Who is your favorite character?",errorMessage:(s=n.select)==null?void 0:s.message,children:e.jsxs(a,{placeholder:"キャラクターを選択",...i("select",{required:{value:!0,message:"This is required."}}),children:[e.jsx(l,{value:"孫悟空",children:"孫悟空"}),e.jsx(l,{value:"ベジータ",children:"ベジータ"}),e.jsx(l,{value:"フリーザ",children:"フリーザ"})]})}),e.jsx(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var W,q,H;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var M,T,E;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect placeholder="extra small size" size="xs" aria-label="Native Select" />
      <NativeSelect placeholder="small size" size="sm" aria-label="Native Select" />
      <NativeSelect placeholder="medium size" size="md" aria-label="Native Select" />
      <NativeSelect placeholder="large size" size="lg" aria-label="Native Select" />
    </>;
}`,...(E=(T=N.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var G,Y,A;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <NativeSelect placeholder="キャラクターを選択" placeholderInOptions={false} aria-label="Native Select">
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isDisabled variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isDisabled variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isDisabled variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isDisabled variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,le,te;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isReadOnly variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isReadOnly variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(te=(le=j.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,re,ne;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <NativeSelect isInvalid variant="outline" placeholder="outline" aria-label="Native Select" />
      <NativeSelect isInvalid variant="filled" placeholder="filled" aria-label="Native Select" />
      <NativeSelect isInvalid variant="flushed" placeholder="flushed" aria-label="Native Select" />
      <NativeSelect isInvalid variant="unstyled" placeholder="unstyled" aria-label="Native Select" />

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>;
}`,...(ne=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ce=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,ue,ve;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select" value={value} onChange={e => setValue(e.target.value)}>
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>;
}`,...(ve=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var pe,he,me;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
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
}`,...(me=(he=C.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Ne,Se,be;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  type Data = {
    select: string;
  };
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
}`,...(be=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const ja=["basic","withSize","withVariant","withBorderColor","disabledPlaceholderInOptions","isDisabled","isReadonly","isInvalid","customIcon","customControl","reactHookForm","reactHookFormWithDefaultValue"];export{ja as __namedExportsOrder,m as basic,y as customControl,g as customIcon,fa as default,x as disabledPlaceholderInOptions,f as isDisabled,O as isInvalid,j as isReadonly,C as reactHookForm,F as reactHookFormWithDefaultValue,b as withBorderColor,N as withSize,S as withVariant};
