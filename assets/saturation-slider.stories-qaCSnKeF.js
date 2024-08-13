import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{u as de,C as me}from"./index.esm-CMZNHfZV.js";import{S as r}from"./saturation-slider-DoULpfEw.js";import{T as u}from"./text-D1mCFSxx.js";import{W as w}from"./flex-Chb4wwx3.js";import{V as F}from"./stack-wqY1Rk5c.js";import{B as d}from"./button-CxyS9etI.js";import{F as O}from"./form-control-C8wk9nRT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-AEOZ2ZJT.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./index-CAFI9pe4.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./theme-provider-woLZZCt0.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-BVTnHHBW.js";import"./use-ripple-BwG2DVG4.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-pO-YJ4mG.js";import"./loading-BHrGiIMj.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";const We={title:"Components / Forms / SaturationSlider",component:r},S=()=>e.jsx(r,{}),p=()=>e.jsx(r,{defaultValue:[320,1,1]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"sm",defaultValue:[120,.33,.33]}),e.jsx(r,{size:"md",defaultValue:[180,.66,.66]}),e.jsx(r,{size:"lg",defaultValue:[240,1,1]})]}),g=()=>{const[n,a]=c.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{value:n,step:.1,onChange:a})]})},x=()=>{const[n,a]=c.useState([180,1,1]),[,s,o]=n,i=(k,m)=>{const t=k==="s"?1:2;a(l=>(m==="increment"?l[t]!==1&&(l[t]=Math.round((l[t]+.1)*10)/10):l[t]!==0&&(l[t]=Math.round((l[t]-.1)*10)/10),[...l]))};return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{value:n,step:10,focusThumbOnChange:!1}),e.jsxs(w,{gap:"md",children:[e.jsxs(F,{w:"auto",gap:"sm",children:[e.jsx(u,{children:"Saturation"}),e.jsxs(w,{gap:"md",children:[e.jsx(d,{isDisabled:s===0,onClick:()=>i("s","decrement"),children:"-0.1"}),e.jsx(d,{isDisabled:s===1,colorScheme:"blue",onClick:()=>i("s","increment"),children:"+0.1"})]})]}),e.jsxs(F,{w:"auto",gap:"sm",children:[e.jsx(u,{children:"Brightness"}),e.jsxs(w,{gap:"md",children:[e.jsx(d,{isDisabled:o===0,onClick:()=>i("v","decrement"),children:"-0.1"}),e.jsx(d,{isDisabled:o===1,colorScheme:"blue",onClick:()=>i("v","increment"),children:"+0.1"})]})]})]})]})},f=()=>e.jsx(r,{withShadow:!1}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0}),e.jsx(O,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0}),e.jsx(O,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e.jsx(r,{})})]}),j=()=>{const[n,a]=c.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Value: ",JSON.stringify(n)]}),e.jsx(r,{value:n,onChange:a})]})},b=()=>{const[n,a]=c.useState([180,1,1]),[s,o]=c.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Value: ",JSON.stringify(n),", Start Value:"," ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:a,onChangeStart:o})]})},V=()=>{const[n,a]=c.useState([180,1,1]),[s,o]=c.useState([180,1,1]);return e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:["Value: ",JSON.stringify(n),", End Value: ",JSON.stringify(s)]}),e.jsx(r,{value:n,onChange:a,onChangeEnd:o})]})},y=()=>{var m;const n={saturationSlider:[180,1,1]},{control:a,handleSubmit:s,watch:o,formState:{errors:i}}=de({defaultValues:n}),k=t=>console.log("submit:",t);return console.log("watch:",o()),e.jsxs(F,{as:"form",onSubmit:s(k),children:[e.jsx(O,{isInvalid:!!i.saturationSlider,label:"Pick color",errorMessage:(m=i.saturationSlider)==null?void 0:m.message,children:e.jsx(me,{name:"saturationSlider",control:a,render:({field:t})=>e.jsx(r,{...t})})}),e.jsx(d,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,T,B;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <SaturationSlider />;
}`,...(B=(T=S.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var J,N,E;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SaturationSlider defaultValue={[320, 1, 1]} />;
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,M,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider size="sm" defaultValue={[120, 0.33, 0.33]} />
      <SaturationSlider size="md" defaultValue={[180, 0.66, 0.66]} />
      <SaturationSlider size="lg" defaultValue={[240, 1, 1]} />
    </>;
}`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,W,R;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} step={0.1} onChange={onChange} />
    </>;
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var I,_,q;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Hsv>([180, 1, 1]);
  const [, s, v] = value;
  const onChange = (space: "s" | "v", type: "increment" | "decrement") => {
    const i = space === "s" ? 1 : 2;
    setValue(prev => {
      if (type === "increment") {
        if (prev[i] !== 1) prev[i] = Math.round((prev[i] + 0.1) * 10) / 10;
      } else {
        if (prev[i] !== 0) prev[i] = Math.round((prev[i] - 0.1) * 10) / 10;
      }
      return [...prev];
    });
  };
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} step={10} focusThumbOnChange={false} />

      <Wrap gap="md">
        <VStack w="auto" gap="sm">
          <Text>Saturation</Text>

          <Wrap gap="md">
            <Button isDisabled={s === 0} onClick={() => onChange("s", "decrement")}>
              -0.1
            </Button>

            <Button isDisabled={s === 1} colorScheme="blue" onClick={() => onChange("s", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack w="auto" gap="sm">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button isDisabled={v === 0} onClick={() => onChange("v", "decrement")}>
              -0.1
            </Button>

            <Button isDisabled={v === 1} colorScheme="blue" onClick={() => onChange("v", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>
      </Wrap>
    </>;
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,G,K;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <SaturationSlider withShadow={false} />;
}`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var L,Q,U;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <SaturationSlider />
      </FormControl>
    </>;
}`,...(U=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <SaturationSlider />
      </FormControl>
    </>;
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} onChange={onChange} />
    </>;
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [startValue, onChangeStart] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ie;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [endValue, onChangeEnd] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, End Value: {JSON.stringify(endValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ie=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ue,ce;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  type Data = {
    saturationSlider: Hsv;
  };
  const defaultValues: Data = {
    saturationSlider: [180, 1, 1]
  };
  const {
    control,
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
      <FormControl isInvalid={!!errors.saturationSlider} label="Pick color" errorMessage={errors.saturationSlider?.message}>
        <Controller name="saturationSlider" control={control} render={({
        field
      }) => <SaturationSlider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Re=["basic","withDefaultValue","withSize","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Re as __namedExportsOrder,S as basic,j as customControl,We as default,f as disabledShadow,C as isDisabled,v as isReadonly,V as onChangeEnd,b as onChangeStart,y as reactHookForm,p as withDefaultValue,x as withFocusThumbOnChange,h as withSize,g as withStep};
