import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as D}from"./index-BwDkhjyp.js";import{u as ve}from"./index.esm-BOJImm3u.js";import{S as Re,Q as Ce,b as De,f as Be,e as Ie,u as He,a as Oe,c as Me,h as Ve,ac as We,O as Ee}from"./factory-QgPjGyGX.js";import{u as _e,F as u}from"./form-control-WUztxq5W.js";import{a as O}from"./event-imqIgfLG.js";import{f as qe}from"./forward-ref-BmTAT9U5.js";import{u as Ae}from"./use-component-style-Dz3o-zMC.js";import{o as Le}from"./theme-provider-CJ7n5K3X.js";import{V as B}from"./stack-BPGCIIRz.js";import{B as I}from"./button-hJJyOv6z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./use-ripple-BYp28iIh.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-TW7fLZQq.js";import"./loading-BANDzD4q.js";import"./icon-BzYp-3aP.js";import"./index-NB1UEv68.js";const Pe=(o,s,t)=>{const l=D.useRef();return()=>{const a=o.current;if(!a)return;let{value:n,placeholder:d}=a;if(n===l.current)return;l.current=n,n??(n=d??"x");const m=Ye(a);if(!m)return;const k=Ge(a,m,n,s,t);a.rows=k}},Ne=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Ye=o=>{const s=window==null?void 0:window.getComputedStyle(o);if(s==null)return null;const t=Re(s,Ne),{boxSizing:l}=t;if(l==="")return null;const i=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),n=parseFloat(t.lineHeight);return{sizingStyle:t,paddingSize:i,borderSize:a,singleRowHeight:n}},Ge=(o,s,t,l,i)=>{const a=o.cloneNode();Object.assign(a.style,s.sizingStyle),Qe(a),a.value=t,document.body.appendChild(a);let n;if(a.scrollHeight){const d=s.singleRowHeight;n=Math.min(l,Math.max(i,Math.floor(a.scrollHeight/d)))}else{const d=(t.match(/\n/g)||[]).length;n=Math.min(l,Math.max(i,d+1))}return document.body.removeChild(a),n},M={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Qe=o=>{Object.keys(M).forEach(s=>{o.style.setProperty(s,M[s],"important")})},r=qe((o,s)=>{var H;const[t,l]=Ae("Textarea",o);let{className:i,rows:a,resize:n="none",autosize:d,maxRows:m=1/0,minRows:k=1,resizeRef:ye,onChange:je,...F}=Le(l);F=_e(F);const Te=Ee(),R=D.useRef(null),we=((H=R.current)==null?void 0:H.value)??"",c=Pe(R,m,k);let C;return a||d?C=Ce(t,["h","height","minH","minHeight","maxH","maxHeight"]):C=t,De(()=>{if(!Te||!d)return;c();const ke=O(window,"resize",c),Fe=O(document.fonts,"loadingdone",c);return()=>{ke(),Fe()}},[]),Be(()=>{d&&c()},[we]),Ie(ye,c),e.jsx(He.textarea,{ref:Oe(s,R),className:Me("ui-textarea",i),__css:C,resize:n,rows:a,onChange:Ve(d?c:We,je),...F})}),pr={title:"Components / Forms / Textarea",component:r},h=()=>e.jsx(r,{placeholder:"basic"}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{resize:"block",placeholder:"block"}),e.jsx(r,{resize:"horizontal",placeholder:"horizontal"}),e.jsx(r,{resize:"vertical",placeholder:"vertical"}),e.jsx(r,{resize:"none",placeholder:"none"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{autosize:!0,placeholder:"autosize"}),e.jsx(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(r,{rows:4,placeholder:"rows 4"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(u,{isDisabled:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(u,{isReadOnly:!0,label:"Feedback",helperMessage:"We would like to get your feedback.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(u,{isInvalid:!0,label:"Feedback",errorMessage:"Feedback is required.",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"gray.500"}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),j=()=>{const o=D.useRef(null),s=()=>{var t;(t=o.current)==null||t.call(o)};return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx(r,{placeholder:"use resize",resizeRef:o}),e.jsx(I,{alignSelf:"flex-end",onClick:s,children:"Resize"})]})})},T=()=>{var a;const{register:o,handleSubmit:s,watch:t,formState:{errors:l}}=ve(),i=n=>console.log("submit:",n);return console.log("watch:",t()),e.jsxs(B,{as:"form",onSubmit:s(i),children:[e.jsx(u,{isInvalid:!!l.textarea,label:"Feedback",errorMessage:(a=l.textarea)==null?void 0:a.message,children:e.jsx(r,{placeholder:"your feedback",...o("textarea",{required:{value:!0,message:"This is required."}})})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{var n;const o={textarea:"孫悟空"},{register:s,handleSubmit:t,watch:l,formState:{errors:i}}=ve({defaultValues:o}),a=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(B,{as:"form",onSubmit:t(a),children:[e.jsx(u,{isInvalid:!!i.textarea,label:"Feedback",errorMessage:(n=i.textarea)==null?void 0:n.message,children:e.jsx(r,{placeholder:"your feedback",...s("textarea",{required:{value:!0,message:"This is required."}})})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var V,W,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic"></Textarea>;
}`,...(E=(W=h.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var _,q,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>;
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var L,P,N;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(N=(P=x.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var Y,G,Q;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>;
}`,...(Q=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,X,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea rows={4} placeholder="rows 4" />
    </>;
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,K,$;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var ee,re,ae;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ae=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Feedback" helperMessage="We would like to get your feedback.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,le,ie;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Feedback" errorMessage="Feedback is required.">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ue;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,he,pe;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(pe=(he=j.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var xe,fe,ge;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,ze,Se;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Se=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:Se.source}}};const xr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{xr as __namedExportsOrder,h as basic,pr as default,z as isDisabled,v as isInvalid,S as isReadonly,T as reactHookForm,w as reactHookFormWithDefaultValue,y as stylingPlaceholder,j as useResize,g as withAutosize,b as withBorderColor,f as withResize,p as withSize,x as withVariant};
