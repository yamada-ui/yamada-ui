import{j as e,a as u,F as h}from"./jsx-runtime-5BUNAZ9W.js";import{u as Se}from"./index.esm-CyGGJs5T.js";import{r as M}from"./index-4g5l5LRQ.js";import{Q as ke,o as Fe,Y as Re,u as Ce,a as De,r as Ie}from"./factory-lmgb8SbK.js";import{u as Be,F as S}from"./form-control-qo1fPo3g.js";import{a as V}from"./event-ccAYLpd0.js";import{f as He}from"./forward-ref-A-8Arhkk.js";import{a as Oe}from"./use-component-style-Axb1BJYP.js";import{o as Me}from"./theme-provider-IB7hRMrv.js";import{V as ve}from"./stack-NmFeMWxf.js";import{B as ze}from"./button-bkIvFm6P.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-ripple-PNbKb5Vk.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-Dqnuc81k.js";import"./loading-cjRO83ci.js";import"./index-lCa3lDej.js";import"./index-ugFs2A6D.js";import"./index-C0FW0akd.js";import"./icon-nIMognNo.js";const Ve=(l,o,t)=>{const n=M.useRef(0);return()=>{const a=l.current,d=Ee(a);if(!d)return;const s=_e(d,a.value||a.placeholder||"x",o,t);n.current!==s&&(n.current=s,a.style.height=`${s}px`)}},We=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Ee=l=>{const o=window.getComputedStyle(l);if(o===null)return null;const t=ke(o,We),{boxSizing:n}=t;if(n==="")return null;const c=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:c,borderSize:a}};let i=null;const _e=(l,o,t,n)=>{const c=(g,m)=>{const f=g.scrollHeight;return m.sizingStyle.boxSizing==="border-box"?f+m.borderSize:f-m.paddingSize};i||(i=document.createElement("textarea"),i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true"),E(i)),i.parentNode===null&&document.body.appendChild(i);const{paddingSize:a,borderSize:d,sizingStyle:s}=l,{boxSizing:v}=s;Object.keys(s).forEach(g=>{const m=g;i.style[m]=s[m]}),E(i),i.value=o;let p=c(i,l);i.value="x";const x=i.scrollHeight-a;let b=x*n;v==="border-box"&&(b=b+a+d),p=Math.max(b,p);let y=x*t;return v==="border-box"&&(y=y+a+d),p=Math.min(y,p),p},W={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},E=l=>{Object.keys(W).forEach(o=>{l.style.setProperty(o,W[o],"important")})},qe=Ve,r=He((l,o)=>{const[t,n]=Oe("Textarea",l);let{className:c,rows:a,resize:d="none",autosize:s,maxRows:v=1/0,minRows:p=1,onChange:x,...b}=Me(n);b=Be(b);const y=a||s?Fe(t,["h","height","minH","minHeight","maxH","maxHeight"]):t,g=M.useRef(null),m=Re(g,o),f=qe(g,v,p),Te=we=>{s&&f(),x&&x(we)};return Ie()&&s&&(M.useLayoutEffect(f),V(window,"resize",f),V(document.fonts,"loadingdone",f)),e(Ce.textarea,{ref:m,className:De("ui-textarea",c),resize:d,rows:a,__css:y,...b,onChange:Te})}),dr={title:"Components / Forms / Textarea",component:r},z=()=>e(r,{placeholder:"basic"}),T=()=>u(h,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),w=()=>u(h,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>u(h,{children:[e(r,{resize:"block",placeholder:"block"}),e(r,{resize:"horizontal",placeholder:"horizontal"}),e(r,{resize:"vertical",placeholder:"vertical"}),e(r,{resize:"none",placeholder:"none"})]}),F=()=>u(h,{children:[e(r,{autosize:!0,placeholder:"autosize"}),e(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e(r,{rows:4,placeholder:"rows 4"})]}),R=()=>u(h,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),C=()=>u(h,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(S,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),D=()=>u(h,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(S,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),I=()=>u(h,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(S,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),B=()=>u(h,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),H=()=>{var a;const{register:l,handleSubmit:o,watch:t,formState:{errors:n}}=Se(),c=d=>console.log("submit:",d);return console.log("watch:",t()),u(ve,{as:"form",onSubmit:o(c),children:[e(S,{isInvalid:!!n.textarea,label:"Feedback",errorMessage:(a=n.textarea)==null?void 0:a.message,children:e(r,{placeholder:"your feedback",...l("textarea",{required:{value:!0,message:"This is required."}})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{var d;const l={textarea:"孫悟空"},{register:o,handleSubmit:t,watch:n,formState:{errors:c}}=Se({defaultValues:l}),a=s=>console.log("submit:",s);return console.log("watch:",n()),u(ve,{as:"form",onSubmit:t(a),children:[e(S,{isInvalid:!!c.textarea,label:"Feedback",errorMessage:(d=c.textarea)==null?void 0:d.message,children:e(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,q,A;z.parameters={...z.parameters,docs:{...(_=z.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(A=(q=z.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var j,P,L;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(L=(P=T.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,Y,$;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...($=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,Q,X;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,J,K;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,ee,re;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(re=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(oe=(te=C.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ne,se;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(se=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,de,ce;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ce=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,he,me;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(me=(he=B.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,be,fe;H.parameters={...H.parameters,docs:{...(pe=H.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(be=H.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,xe,ye;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ye=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const cr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{cr as __namedExportsOrder,z as basic,dr as default,C as isDisabled,I as isInvalid,D as isReadonly,H as reactHookForm,O as reactHookFormWithDefaultValue,B as stylingPlaceholder,F as withAutosize,R as withBorderColor,k as withResize,T as withSize,w as withVariant};
