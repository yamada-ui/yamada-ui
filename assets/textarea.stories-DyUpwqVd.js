import{j as e,a as c,F as u}from"./jsx-runtime-2xDJh5tt.js";import{r as H}from"./index-CBqU2yxZ.js";import{u as Te}from"./index.esm-CiJ9mLzm.js";import{Q as Be,o as Ie,b as He,e as Me,d as Oe,u as Ve,w as We,a as Ee,h as _e,a5 as qe,r as Ae}from"./factory-DpmudyXM.js";import{u as je,F as m}from"./form-control-D1mB1xBr.js";import{a as W}from"./event-imqIgfLG.js";import{f as Le}from"./forward-ref-DuAegr0M.js";import{a as Pe}from"./use-component-style-C8HPJoXa.js";import{o as Ne}from"./theme-provider-BSSgazaQ.js";import{V as M}from"./stack-DHO7_TeU.js";import{B as O}from"./button-B04h-bnh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./use-ripple-CYLHRNNs.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-BNANSLgb.js";import"./loading-PB7xGStd.js";import"./index-CjPoKz7c.js";import"./index-DTWJYyBb.js";import"./index-Dft46qqu.js";import"./icon-BPDO9FjE.js";const Ye=(o,n,t)=>{const s=H.useRef();return()=>{const a=o.current;if(!a)return;let{value:l,placeholder:d}=a;if(l===s.current)return;s.current=l,l??(l=d??"x");const p=Qe(a);if(!p)return;const C=Ue(a,p,l,n,t);a.rows=C}},Ge=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Qe=o=>{const n=window==null?void 0:window.getComputedStyle(o);if(n==null)return null;const t=Be(n,Ge),{boxSizing:s}=t;if(s==="")return null;const i=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),l=parseFloat(t.lineHeight);return{sizingStyle:t,paddingSize:i,borderSize:a,singleRowHeight:l}},Ue=(o,n,t,s,i)=>{const a=o.cloneNode();Object.assign(a.style,n.sizingStyle),Xe(a),a.value=t,document.body.appendChild(a);let l;if(a.scrollHeight){const d=n.singleRowHeight;l=Math.min(s,Math.max(i,Math.floor(a.scrollHeight/d)))}else{const d=(t.match(/\n/g)||[]).length;l=Math.min(s,Math.max(i,d+1))}return document.body.removeChild(a),l},E={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Xe=o=>{Object.keys(E).forEach(n=>{o.style.setProperty(n,E[n],"important")})},r=Le((o,n)=>{var V;const[t,s]=Pe("Textarea",o);let{className:i,rows:a,resize:l="none",autosize:d,maxRows:p=1/0,minRows:C=1,resizeRef:we,onChange:ke,...D}=Ne(s);D=je(D);const Re=Ae(),B=H.useRef(null),Fe=((V=B.current)==null?void 0:V.value)??"",h=Ye(B,p,C);let I;return a||d?I=Ie(t,["h","height","minH","minHeight","maxH","maxHeight"]):I=t,He(()=>{if(!Re||!d)return;h();const Ce=W(window,"resize",h),De=W(document.fonts,"loadingdone",h);return()=>{Ce(),De()}},[]),Me(()=>{d&&h()},[Fe]),Oe(we,h),e(Ve.textarea,{ref:We(n,B),className:Ee("ui-textarea",i),__css:I,resize:l,rows:a,onChange:_e(d?h:qe,ke),...D})}),xr={title:"Components / Forms / Textarea",component:r},f=()=>e(r,{placeholder:"basic"}),g=()=>c(u,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),b=()=>c(u,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),x=()=>c(u,{children:[e(r,{resize:"block",placeholder:"block"}),e(r,{resize:"horizontal",placeholder:"horizontal"}),e(r,{resize:"vertical",placeholder:"vertical"}),e(r,{resize:"none",placeholder:"none"})]}),z=()=>c(u,{children:[e(r,{autosize:!0,placeholder:"autosize"}),e(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e(r,{rows:4,placeholder:"rows 4"})]}),v=()=>c(u,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),S=()=>c(u,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>c(u,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),T=()=>c(u,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(m,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),w=()=>c(u,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),k=()=>{const o=H.useRef(null);return e(u,{children:c(M,{children:[e(r,{placeholder:"use resize",resizeRef:o}),e(O,{alignSelf:"flex-end",onClick:()=>{var t;(t=o.current)==null||t.call(o)},children:"Resize"})]})})},R=()=>{var a;const{register:o,handleSubmit:n,watch:t,formState:{errors:s}}=Te(),i=l=>console.log("submit:",l);return console.log("watch:",t()),c(M,{as:"form",onSubmit:n(i),children:[e(m,{isInvalid:!!s.textarea,label:"Feedback",errorMessage:(a=s.textarea)==null?void 0:a.message,children:e(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e(O,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},F=()=>{var l;const o={textarea:"孫悟空"},{register:n,handleSubmit:t,watch:s,formState:{errors:i}}=Te({defaultValues:o}),a=d=>console.log("submit:",d);return console.log("watch:",s()),c(M,{as:"form",onSubmit:t(a),children:[e(m,{isInvalid:!!i.textarea,label:"Feedback",errorMessage:(l=i.textarea)==null?void 0:l.message,children:e(r,{placeholder:"your feedback",...n("textarea",{required:{value:!0,message:"This is required."}})})}),e(O,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,q,A;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(A=(q=f.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var j,L,P;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(P=(L=g.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var N,Y,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,J,K;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var $,ee,re;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(se=(le=y.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,ce;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,he,me;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default placeholder" />
      <Textarea placeholder="custom placeholder" _placeholder={{
      opacity: 1,
      color: "gray.500"
    }} />
      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(me=(he=w.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,fe,ge;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const resizeRef = useRef<() => void>(null);
  const onResize = () => {
    resizeRef.current?.();
  };
  return <>
      <VStack>
        <Textarea placeholder="use resize" resizeRef={resizeRef} />
        <Button alignSelf="flex-end" onClick={onResize}>
          Resize
        </Button>
      </VStack>
    </>;
}`,...(ge=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,xe,ze;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  type Data = {
    textarea: string;
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
      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ze=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var ve,Se,ye;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  type Data = {
    textarea: string;
  };
  const defaultValues: Data = {
    textarea: "孫悟空"
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
      <FormControl isInvalid={!!errors.textarea} label="Feedback" errorMessage={errors.textarea?.message}>
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ye=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};const zr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{zr as __namedExportsOrder,f as basic,xr as default,S as isDisabled,T as isInvalid,y as isReadonly,R as reactHookForm,F as reactHookFormWithDefaultValue,w as stylingPlaceholder,k as useResize,z as withAutosize,v as withBorderColor,x as withResize,g as withSize,b as withVariant};
