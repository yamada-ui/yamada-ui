import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as D}from"./index-BwPxMuoB.js";import{u as ye}from"./index.esm-C038jXrr.js";import{a3 as Me,u as Ve,l as _e,o as Oe,n as We,b as Ee,h as qe,c as Pe,a as Ae,I as Le}from"./factory-DbNU74ts.js";import{u as Ne,d as m}from"./form-control-DgcE1-oN.js";import{a as V}from"./event-C_48urmU.js";import{f as Ye}from"./forward-ref-Ukjd1cIW.js";import{u as Ge}from"./use-component-style-CpB_lyT3.js";import{o as Ue}from"./theme-provider-ChqdwXGn.js";import{V as I}from"./stack-BP8LKMVN.js";import{B}from"./button-CqSjNDtY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";const Xe=(o,s,t)=>{const l=D.useRef();return()=>{const a=o.current;if(!a)return;let{placeholder:n,value:i}=a;if(i===l.current)return;l.current=i,i||(i=n||"x");const u=Je(a);if(!u)return;const F=Ke(a,u,i,s,t);a.rows=F}},Ze=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Je=o=>{const s=window.getComputedStyle(o);if(s==null)return null;const t=Me(s,Ze),{boxSizing:l}=t;if(l==="")return null;const d=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),n=parseFloat(t.lineHeight);return{borderSize:a,paddingSize:d,singleRowHeight:n,sizingStyle:t}},Ke=(o,s,t,l,d)=>{const a=o.cloneNode();Object.assign(a.style,s.sizingStyle),Qe(a),a.value=t,document.body.appendChild(a);let n;if(a.scrollHeight){const i=s.singleRowHeight;n=Math.min(l,Math.max(d,Math.floor(a.scrollHeight/i)))}else{const i=(t.match(/\n/g)||[]).length;n=Math.min(l,Math.max(d,i+1))}return document.body.removeChild(a),n},_={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},Qe=o=>{Object.keys(_).forEach(s=>{o.style.setProperty(s,_[s],"important")})},r=Ye((o,s)=>{var M;const[{h:t,height:l,maxH:d,maxHeight:a,minH:n,minHeight:i,...u},F]=Ge("Textarea",o),je=Ue(F),{className:Te,autosize:h,maxRows:we=1/0,minRows:ke=1,resize:Fe="none",resizeRef:Re,rows:H,onChange:Ce,...De}=Ne(je),R=D.useRef(null),Ie=((M=R.current)==null?void 0:M.value)??"",c=Xe(R,we,ke);let C;return H||h?C=u:C={h:t,height:l,maxH:d,maxHeight:a,minH:n,minHeight:i,...u},Ve(()=>{if(!_e()||!h)return;c();const Be=V(window,"resize",c),He=V(document.fonts,"loadingdone",c);return()=>{Be(),He()}},[]),Oe(()=>{h&&c()},[Ie]),We(Re,c),e.jsx(Ee.textarea,{ref:Ae(s,R),className:Pe("ui-textarea",Te),resize:Fe,rows:H,onChange:qe(h?c:Le,Ce),__css:C,...De})});r.displayName="Textarea";r.__ui__="Textarea";const br={component:r,title:"Components / Forms / Textarea"},p=()=>e.jsx(r,{placeholder:"basic"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"block",resize:"block"}),e.jsx(r,{placeholder:"horizontal",resize:"horizontal"}),e.jsx(r,{placeholder:"vertical",resize:"vertical"}),e.jsx(r,{placeholder:"none",resize:"none"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{autosize:!0,placeholder:"autosize"}),e.jsx(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(r,{placeholder:"rows 4",rows:4})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(m,{helperMessage:"We would like to get your feedback.",isDisabled:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(m,{helperMessage:"We would like to get your feedback.",isReadOnly:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(m,{errorMessage:"Feedback is required.",isInvalid:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),T=()=>{const o=D.useRef(null),s=()=>{var t;(t=o.current)==null||t.call(o)};return e.jsxs(I,{children:[e.jsx(r,{placeholder:"use resize",resizeRef:o}),e.jsx(B,{alignSelf:"flex-end",onClick:s,children:"Resize"})]})},w=()=>{var a;const{formState:{errors:o},handleSubmit:s,register:t,watch:l}=ye(),d=n=>console.log("submit:",n);return console.log("watch:",l()),e.jsxs(I,{as:"form",onSubmit:s(d),children:[e.jsx(m,{errorMessage:(a=o.textarea)==null?void 0:a.message,isInvalid:!!o.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...t("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{var n;const o={textarea:"孫悟空"},{formState:{errors:s},handleSubmit:t,register:l,watch:d}=ye({defaultValues:o}),a=i=>console.log("submit:",i);return console.log("watch:",d()),e.jsxs(I,{as:"form",onSubmit:t(a),children:[e.jsx(m,{errorMessage:(n=s.textarea)==null?void 0:n.message,isInvalid:!!s.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...l("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(B,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,W,E;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,P,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Textarea size="xs" placeholder="extra small size" />
      <Textarea size="sm" placeholder="small size" />
      <Textarea size="md" placeholder="medium size" />
      <Textarea size="lg" placeholder="large size" />
    </>;
}`,...(A=(P=x.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var L,N,Y;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Y=(N=f.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var G,U,X;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="block" resize="block" />
      <Textarea placeholder="horizontal" resize="horizontal" />
      <Textarea placeholder="vertical" resize="vertical" />
      <Textarea placeholder="none" resize="none" />
    </>;
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,J,K;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,$,ee;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(ee=($=z.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isDisabled placeholder="outline" />
      <Textarea variant="filled" isDisabled placeholder="filled" />
      <Textarea variant="flushed" isDisabled placeholder="flushed" />
      <Textarea variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="We would like to get your feedback." isDisabled label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,ne;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isReadOnly placeholder="outline" />
      <Textarea variant="filled" isReadOnly placeholder="filled" />
      <Textarea variant="flushed" isReadOnly placeholder="flushed" />
      <Textarea variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="We would like to get your feedback." isReadOnly label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isInvalid placeholder="outline" />
      <Textarea variant="filled" isInvalid placeholder="filled" />
      <Textarea variant="flushed" isInvalid placeholder="flushed" />
      <Textarea variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Feedback is required." isInvalid label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default placeholder" />
      <Textarea placeholder="custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />
      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,pe,xe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const resizeRef = useRef<() => void>(null);
  const onResize = () => {
    resizeRef.current?.();
  };
  return <VStack>
      <Textarea placeholder="use resize" resizeRef={resizeRef} />
      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>;
}`,...(xe=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var fe,ge,be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
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
      <FormControl errorMessage={errors.textarea?.message} isInvalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(be=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ze,ve,Se;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const defaultValues: Data = {
    textarea: "孫悟空"
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
      <FormControl errorMessage={errors.textarea?.message} isInvalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Se=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const zr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{zr as __namedExportsOrder,p as basic,br as default,v as isDisabled,y as isInvalid,S as isReadonly,w as reactHookForm,k as reactHookFormWithDefaultValue,j as stylingPlaceholder,T as useResize,b as withAutosize,z as withBorderColor,g as withResize,x as withSize,f as withVariant};
