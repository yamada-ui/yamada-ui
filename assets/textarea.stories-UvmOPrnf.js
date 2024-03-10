import{j as e,a as u,F as m}from"./jsx-runtime-5BUNAZ9W.js";import{r as W}from"./index-4g5l5LRQ.js";import{u as De}from"./index.esm-3DtIbTPy.js";import{Q as He,o as Oe,b as Ve,e as Ee,d as We,u as Me,w as Ae,a as _e,h as qe,a5 as je,r as Le}from"./factory-mZ_iv4c5.js";import{u as Pe,F as v}from"./form-control-h2Bmpacr.js";import{a as j}from"./event-ccAYLpd0.js";import{f as Ne}from"./forward-ref-A-8Arhkk.js";import{a as Ye}from"./use-component-style-kbmWGovm.js";import{o as $e}from"./theme-provider-GXaWE2yQ.js";import{V as A}from"./stack-9G9PghDz.js";import{B as _}from"./button-ucuE55cc.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-ripple-epR309bC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-pT_7ipRu.js";import"./loading-yhnSUNiJ.js";import"./index-Gv6rFnuW.js";import"./index-TgqKzHHP.js";import"./index-xCDaEQws.js";import"./icon-_tO3S1Xv.js";const Ge=(t,o,a)=>{const s=W.useRef(0),i=W.useRef();return()=>{const d=t.current;if(!d)return;let{value:n,placeholder:x,style:p}=d;if(n===i.current)return;i.current=n,n??(n=x??"x");const b=Ue(d);if(!b)return;const f=Xe(b,n,o,a);s.current!==f&&(s.current=f,p.height=`${f}px`)}},Qe=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Ue=t=>{const o=window==null?void 0:window.getComputedStyle(t);if(o==null)return null;const a=He(o,Qe),{boxSizing:s}=a;if(s==="")return null;const i=parseFloat(a.paddingBottom)+parseFloat(a.paddingTop),l=parseFloat(a.borderBottomWidth)+parseFloat(a.borderTopWidth);return{sizingStyle:a,paddingSize:i,borderSize:l}};let c=null;const Xe=(t,o,a,s)=>{const i=(S,h)=>{const y=S.scrollHeight;return h.sizingStyle.boxSizing==="border-box"?y+h.borderSize:y-h.paddingSize};c||(c=document.createElement("textarea"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-hidden","true"),P(c)),c.parentNode===null&&document.body.appendChild(c);const{paddingSize:l,borderSize:d,sizingStyle:n}=t,{boxSizing:x}=n;Object.keys(n).forEach(S=>{const h=S;c.style[h]=n[h]}),P(c),c.value=o;let p=i(c,t);c.value="x";const b=c.scrollHeight-l;let f=b*s;x==="border-box"&&(f=f+l+d),p=Math.max(f,p);let g=b*a;return x==="border-box"&&(g=g+l+d),p=Math.min(g,p),p},L={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},P=t=>{Object.keys(L).forEach(o=>{t.style.setProperty(o,L[o],"important")})},Ze=Ge,r=Ne((t,o)=>{var q;const[a,s]=Ye("Textarea",t);let{className:i,rows:l,resize:d="none",autosize:n,maxRows:x=1/0,minRows:p=1,resizeRef:b,onChange:f,...g}=$e(s);g=Pe(g);const S=Le(),h=W.useRef(null),y=((q=h.current)==null?void 0:q.value)??"",z=Ze(h,x,p);let M;return l||n?M=Oe(a,["h","height","minH","minHeight","maxH","maxHeight"]):M=a,Ve(()=>{if(!S||!n)return;z();const Ie=j(window,"resize",z),Be=j(document.fonts,"loadingdone",z);return()=>{Ie(),Be()}},[]),Ee(()=>{n&&z()},[y]),We(b,z),e(Me.textarea,{ref:Ae(o,h),className:_e("ui-textarea",i),__css:M,resize:d,rows:l,onChange:qe(n?z:je,f),...g})}),Sr={title:"Components / Forms / Textarea",component:r},T=()=>e(r,{placeholder:"basic"}),k=()=>u(m,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),w=()=>u(m,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),R=()=>u(m,{children:[e(r,{resize:"block",placeholder:"block"}),e(r,{resize:"horizontal",placeholder:"horizontal"}),e(r,{resize:"vertical",placeholder:"vertical"}),e(r,{resize:"none",placeholder:"none"})]}),F=()=>u(m,{children:[e(r,{autosize:!0,placeholder:"autosize"}),e(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e(r,{rows:4,placeholder:"rows 4"})]}),C=()=>u(m,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),D=()=>u(m,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),I=()=>u(m,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),B=()=>u(m,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(v,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e(r,{variant:"outline",placeholder:"your feedback"})})]}),H=()=>u(m,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),O=()=>{const t=W.useRef(null);return e(m,{children:u(A,{children:[e(r,{placeholder:"use resize",resizeRef:t}),e(_,{alignSelf:"flex-end",onClick:()=>{var a;(a=t.current)==null||a.call(t)},children:"Resize"})]})})},V=()=>{var l;const{register:t,handleSubmit:o,watch:a,formState:{errors:s}}=De(),i=d=>console.log("submit:",d);return console.log("watch:",a()),u(A,{as:"form",onSubmit:o(i),children:[e(v,{isInvalid:!!s.textarea,label:"Feedback",errorMessage:(l=s.textarea)==null?void 0:l.message,children:e(r,{placeholder:"your feedback",...t("textarea",{required:{value:!0,message:"This is required."}})})}),e(_,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},E=()=>{var d;const t={textarea:"孫悟空"},{register:o,handleSubmit:a,watch:s,formState:{errors:i}}=De({defaultValues:t}),l=n=>console.log("submit:",n);return console.log("watch:",s()),u(A,{as:"form",onSubmit:a(l),children:[e(v,{isInvalid:!!i.textarea,label:"Feedback",errorMessage:(d=i.textarea)==null?void 0:d.message,children:e(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e(_,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var N,Y,$;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...($=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,Q,U;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(U=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,J;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(J=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,ee,re;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(re=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(oe=(te=F.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(se=(le=C.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,ce;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,he,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(me=(he=I.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,fe,be;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(be=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ge,xe,ze;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ze=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var Se,ve,ye;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(ye=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Te,ke,we;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(we=(ke=V.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var Re,Fe,Ce;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};const vr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{vr as __namedExportsOrder,T as basic,Sr as default,D as isDisabled,B as isInvalid,I as isReadonly,V as reactHookForm,E as reactHookFormWithDefaultValue,H as stylingPlaceholder,O as useResize,F as withAutosize,C as withBorderColor,R as withResize,k as withSize,w as withVariant};
