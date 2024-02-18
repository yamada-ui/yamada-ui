import{j as e,a as h,F as p}from"./jsx-runtime-TtYKBvr-.js";import{u as Se}from"./index.esm-xnaDCuzx.js";import{r as ye}from"./index-IybTgENJ.js";import{Q as ke,o as Fe,b as Re,u as Ce,w as De,a as Ie,h as Be,a5 as He,r as Oe}from"./factory-ilkGXtBr.js";import{u as Ve,F as v}from"./form-control-ZJLHMW15.js";import{a as V}from"./event-ccAYLpd0.js";import{f as We}from"./forward-ref-6T0UNPU-.js";import{a as Ee}from"./use-component-style-Ji6G5y4B.js";import{o as Me}from"./theme-provider-xH9zRqO9.js";import{V as ve}from"./stack-0Rn_od0s.js";import{B as ze}from"./button-IfON6BpW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./use-ripple-jT9FMMYK.js";import"./index-dKw0visz.js";import"./motion-RGBG165B.js";import"./motion-HpRHdgWC.js";import"./loading-lL0YWT3j.js";import"./index-U5zsdkbG.js";import"./index-quyfJ-i_.js";import"./index-Kgfi2DNL.js";import"./icon-tcOP_kzz.js";const Ae=(l,o,a)=>{const n=ye.useRef(0);return()=>{const t=l.current;if(!t)return;const i=qe(t);if(!i)return;let{value:d,placeholder:g,style:m}=t;d??(d=g??"x");const b=je(i,d,o,a);n.current!==b&&(n.current=b,m.height=`${b}px`)}},_e=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],qe=l=>{const o=window==null?void 0:window.getComputedStyle(l);if(o==null)return null;const a=ke(o,_e),{boxSizing:n}=a;if(n==="")return null;const c=parseFloat(a.paddingBottom)+parseFloat(a.paddingTop),t=parseFloat(a.borderBottomWidth)+parseFloat(a.borderTopWidth);return{sizingStyle:a,paddingSize:c,borderSize:t}};let s=null;const je=(l,o,a,n)=>{const c=(x,u)=>{const S=x.scrollHeight;return u.sizingStyle.boxSizing==="border-box"?S+u.borderSize:S-u.paddingSize};s||(s=document.createElement("textarea"),s.setAttribute("tabindex","-1"),s.setAttribute("aria-hidden","true"),E(s)),s.parentNode===null&&document.body.appendChild(s);const{paddingSize:t,borderSize:i,sizingStyle:d}=l,{boxSizing:g}=d;Object.keys(d).forEach(x=>{const u=x;s.style[u]=d[u]}),E(s),s.value=o;let m=c(s,l);s.value="x";const b=s.scrollHeight-t;let f=b*n;g==="border-box"&&(f=f+t+i),m=Math.max(f,m);let y=b*a;return g==="border-box"&&(y=y+t+i),m=Math.min(y,m),m},W={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},E=l=>{Object.keys(W).forEach(o=>{l.style.setProperty(o,W[o],"important")})},Le=Ae,r=We((l,o)=>{const[a,n]=Ee("Textarea",l);let{className:c,rows:t,resize:i="none",autosize:d,maxRows:g=1/0,minRows:m=1,onChange:b,...f}=Me(n);f=Ve(f);const y=Oe(),x=ye.useRef(null),u=Le(x,g,m);let S;return t||d?S=Fe(a,["h","height","minH","minHeight","maxH","maxHeight"]):S=a,Re(()=>{if(!y||!d)return;u();const Te=V(window,"resize",u),we=V(document.fonts,"loadingdone",u);return()=>{Te(),we()}},[]),e(Ce.textarea,{ref:De(o,x),className:Ie("ui-textarea",c),resize:i,rows:t,__css:S,...f,onChange:Be(d?u:He,b)})}),ur={title:"Components / Forms / Textarea",component:r},z=()=>e(r,{placeholder:"basic"}),T=()=>h(p,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),w=()=>h(p,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>h(p,{children:[e(r,{resize:"block",placeholder:"block"}),e(r,{resize:"horizontal",placeholder:"horizontal"}),e(r,{resize:"vertical",placeholder:"vertical"}),e(r,{resize:"none",placeholder:"none"})]}),F=()=>h(p,{children:[e(r,{autosize:!0,placeholder:"autosize"}),e(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e(r,{rows:4,placeholder:"rows 4"})]}),R=()=>h(p,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),C=()=>h(p,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),D=()=>h(p,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),I=()=>h(p,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),B=()=>h(p,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),H=()=>{var t;const{register:l,handleSubmit:o,watch:a,formState:{errors:n}}=Se(),c=i=>console.log("submit:",i);return console.log("watch:",a()),h(ve,{as:"form",onSubmit:o(c),children:[e(v,{isInvalid:!!n.textarea,label:"Feedback",errorMessage:(t=n.textarea)==null?void 0:t.message,children:e(r,{placeholder:"your feedback",...l("textarea",{required:{value:!0,message:"This is required."}})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{var i;const l={textarea:"孫悟空"},{register:o,handleSubmit:a,watch:n,formState:{errors:c}}=Se({defaultValues:l}),t=d=>console.log("submit:",d);return console.log("watch:",n()),h(ve,{as:"form",onSubmit:a(t),children:[e(v,{isInvalid:!!c.textarea,label:"Feedback",errorMessage:(i=c.textarea)==null?void 0:i.message,children:e(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var M,A,_;z.parameters={...z.parameters,docs:{...(M=z.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(_=(A=z.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var q,j,L;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(L=(j=T.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var P,N,Y;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(Y=(N=w.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var $,G,Q;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(Q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,J;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(J=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,U,ee;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(ee=(U=R.parameters)==null?void 0:U.docs)==null?void 0:ee.source}}};var re,ae,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,le,ne;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ne=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ie,de;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(de=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,he;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(he=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,pe,be;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(be=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,ge,xe;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(xe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const hr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","reactHookForm","reactHookFormWithDefaultValue"];export{hr as __namedExportsOrder,z as basic,ur as default,C as isDisabled,I as isInvalid,D as isReadonly,H as reactHookForm,O as reactHookFormWithDefaultValue,B as stylingPlaceholder,F as withAutosize,R as withBorderColor,k as withResize,T as withSize,w as withVariant};
