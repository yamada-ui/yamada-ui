import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as B}from"./index-uCp2LrAq.js";import{u as je}from"./index.esm-TLwx9zN6.js";import{T as Me,u as Ve,f as Oe,e as We,b as Ee,a as _e,c as qe,h as Ae,ad as Pe,P as Le}from"./factory-Bf0a1C4O.js";import{u as Ne,F as m}from"./form-control-CXekA9Vm.js";import{a as O}from"./event-imqIgfLG.js";import{f as Ye}from"./forward-ref-Dr5Hqd9a.js";import{u as Ge}from"./use-component-style-C1oydc60.js";import{o as Ue}from"./theme-provider-CfMKAtcZ.js";import{V as I}from"./stack-DeQ5YYY4.js";import{B as H}from"./button-C5HSAH_Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";const Xe=(o,s,t)=>{const l=B.useRef();return()=>{const a=o.current;if(!a)return;let{value:n,placeholder:d}=a;if(n===l.current)return;l.current=n,n??(n=d??"x");const u=Je(a);if(!u)return;const F=Ke(a,u,n,s,t);a.rows=F}},Ze=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Je=o=>{const s=window==null?void 0:window.getComputedStyle(o);if(s==null)return null;const t=Me(s,Ze),{boxSizing:l}=t;if(l==="")return null;const i=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),n=parseFloat(t.lineHeight);return{sizingStyle:t,paddingSize:i,borderSize:a,singleRowHeight:n}},Ke=(o,s,t,l,i)=>{const a=o.cloneNode();Object.assign(a.style,s.sizingStyle),Qe(a),a.value=t,document.body.appendChild(a);let n;if(a.scrollHeight){const d=s.singleRowHeight;n=Math.min(l,Math.max(i,Math.floor(a.scrollHeight/d)))}else{const d=(t.match(/\n/g)||[]).length;n=Math.min(l,Math.max(i,d+1))}return document.body.removeChild(a),n},W={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Qe=o=>{Object.keys(W).forEach(s=>{o.style.setProperty(s,W[s],"important")})},r=Ye((o,s)=>{var V;const[{h:t,height:l,minH:i,minHeight:a,maxH:n,maxHeight:d,...u},F]=Ge("Textarea",o);let{className:Te,rows:M,resize:we="none",autosize:h,maxRows:ke=1/0,minRows:Fe=1,resizeRef:Re,onChange:Ce,...R}=Ue(F);R=Ne(R);const De=Le(),C=B.useRef(null),Be=((V=C.current)==null?void 0:V.value)??"",c=Xe(C,ke,Fe);let D;return M||h?D=u:D={h:t,height:l,minH:i,minHeight:a,maxH:n,maxHeight:d,...u},Ve(()=>{if(!De||!h)return;c();const Ie=O(window,"resize",c),He=O(document.fonts,"loadingdone",c);return()=>{Ie(),He()}},[]),Oe(()=>{h&&c()},[Be]),We(Re,c),e.jsx(Ee.textarea,{ref:_e(s,C),className:qe("ui-textarea",Te),__css:D,resize:we,rows:M,onChange:Ae(h?c:Pe,Ce),...R})}),zr={title:"Components / Forms / Textarea",component:r},p=()=>e.jsx(r,{placeholder:"basic"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{resize:"block",placeholder:"block"}),e.jsx(r,{resize:"horizontal",placeholder:"horizontal"}),e.jsx(r,{resize:"vertical",placeholder:"vertical"}),e.jsx(r,{resize:"none",placeholder:"none"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{autosize:!0,placeholder:"autosize"}),e.jsx(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(r,{rows:4,placeholder:"rows 4"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(m,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),T=()=>{const o=B.useRef(null),s=()=>{var t;(t=o.current)==null||t.call(o)};return e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(r,{placeholder:"use resize",resizeRef:o}),e.jsx(H,{alignSelf:"flex-end",onClick:s,children:"Resize"})]})})},w=()=>{var a;const{register:o,handleSubmit:s,watch:t,formState:{errors:l}}=je(),i=n=>console.log("submit:",n);return console.log("watch:",t()),e.jsxs(I,{as:"form",onSubmit:s(i),children:[e.jsx(m,{isInvalid:!!l.textarea,label:"Feedback",errorMessage:(a=l.textarea)==null?void 0:a.message,children:e.jsx(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e.jsx(H,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{var n;const o={textarea:"孫悟空"},{register:s,handleSubmit:t,watch:l,formState:{errors:i}}=je({defaultValues:o}),a=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(I,{as:"form",onSubmit:t(a),children:[e.jsx(m,{isInvalid:!!i.textarea,label:"Feedback",errorMessage:(n=i.textarea)==null?void 0:n.message,children:e.jsx(r,{placeholder:"your feedback",...s("textarea",{required:{value:!0,message:"This is required."}})})}),e.jsx(H,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,_,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,P,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(L=(P=x.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var N,Y,G;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(G=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var U,X,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,re;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(re=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ne,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,de,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,he;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(he=(me=j.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,xe,fe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,be,ze;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ze=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var ve,Se,ye;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(ye=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};const vr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{vr as __namedExportsOrder,p as basic,zr as default,v as isDisabled,y as isInvalid,S as isReadonly,w as reactHookForm,k as reactHookFormWithDefaultValue,j as stylingPlaceholder,T as useResize,b as withAutosize,z as withBorderColor,g as withResize,x as withSize,f as withVariant};
