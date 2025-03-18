import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as B}from"./index-BwPxMuoB.js";import{u as ye}from"./index.esm-C038jXrr.js";import{a3 as Ve,u as _e,l as De,o as We,n as Ee,b as qe,h as Pe,c as Ae,a as Ie,I as Le}from"./factory-DbNU74ts.js";import{u as Ne,d as m}from"./form-control-DgcE1-oN.js";import{a as _}from"./event-C_48urmU.js";import{f as Ye}from"./forward-ref-Ukjd1cIW.js";import{u as Ge}from"./use-component-style-CpB_lyT3.js";import{o as Ue}from"./theme-provider-ChqdwXGn.js";import{V as H}from"./stack-BP8LKMVN.js";import{B as O}from"./button-CqSjNDtY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";import"./icon-Dk5VwDTI.js";import"./use-var-DlbRU9j0.js";const Xe=(o,n,t)=>{const l=B.useRef();return()=>{const a=o.current;if(!a)return;let{placeholder:s,value:i}=a;if(i===l.current)return;l.current=i,i||(i=s||"x");const u=Je(a);if(!u)return;const F=Ke(a,u,i,n,t);a.rows=F}},Ze=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Je=o=>{const n=window.getComputedStyle(o);if(n==null)return null;const t=Ve(n,Ze),{boxSizing:l}=t;if(l==="")return null;const d=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),s=parseFloat(t.lineHeight);return{borderSize:a,paddingSize:d,singleRowHeight:s,sizingStyle:t}},Ke=(o,n,t,l,d)=>{const a=o.cloneNode();Object.assign(a.style,n.sizingStyle),Qe(a),a.value=t,document.body.appendChild(a);let s;if(a.scrollHeight){const i=n.singleRowHeight;s=Math.min(l,Math.max(d,Math.floor(a.scrollHeight/i)))}else{const i=(t.match(/\n/g)||[]).length;s=Math.min(l,Math.max(d,i+1))}return document.body.removeChild(a),s},D={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},Qe=o=>{Object.keys(D).forEach(n=>{o.style.setProperty(n,D[n],"important")})},r=Ye((o,n)=>{var V;const[{h:t,height:l,maxH:d,maxHeight:a,minH:s,minHeight:i,...u},F]=Ge("Textarea",o),je=Ue(F),{className:Te,autosize:h,maxRows:we=1/0,minRows:ke=1,resize:Fe="none",resizeRef:Re,rows:M,onChange:Ce,...Be}=Ne(je),R=B.useRef(null),He=((V=R.current)==null?void 0:V.value)??"",c=Xe(R,we,ke);let C;return M||h?C=u:C={h:t,height:l,maxH:d,maxHeight:a,minH:s,minHeight:i,...u},_e(()=>{if(!De()||!h)return;c();const Oe=_(window,"resize",c),Me=_(document.fonts,"loadingdone",c);return()=>{Oe(),Me()}},[]),We(()=>{h&&c()},[He]),Ee(Re,c),e.jsx(qe.textarea,{ref:Ie(n,R),className:Ae("ui-textarea",Te),resize:Fe,rows:M,onChange:Pe(h?c:Le,Ce),__css:C,...Be})});r.displayName="Textarea";r.__ui__="Textarea";const br={component:r,title:"Components / Forms / Textarea"},p=()=>e.jsx(r,{placeholder:"basic"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"block",resize:"block"}),e.jsx(r,{placeholder:"horizontal",resize:"horizontal"}),e.jsx(r,{placeholder:"vertical",resize:"vertical"}),e.jsx(r,{placeholder:"none",resize:"none"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{autosize:!0,placeholder:"autosize"}),e.jsx(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(r,{placeholder:"rows 4",rows:4})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(m,{disabled:!0,helperMessage:"We would like to get your feedback.",label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(r,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(r,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(m,{helperMessage:"We would like to get your feedback.",label:"Feedback",readOnly:!0,children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(m,{errorMessage:"Feedback is required.",invalid:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),T=()=>{const o=B.useRef(null),n=()=>{var t;(t=o.current)==null||t.call(o)};return e.jsxs(H,{children:[e.jsx(r,{placeholder:"use resize",resizeRef:o}),e.jsx(O,{alignSelf:"flex-end",onClick:n,children:"Resize"})]})},w=()=>{var a;const{formState:{errors:o},handleSubmit:n,register:t,watch:l}=ye(),d=s=>console.log("submit:",s);return console.log("watch:",l()),e.jsxs(H,{as:"form",onSubmit:n(d),children:[e.jsx(m,{errorMessage:(a=o.textarea)==null?void 0:a.message,invalid:!!o.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...t("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(O,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{var s;const o={textarea:"孫悟空"},{formState:{errors:n},handleSubmit:t,register:l,watch:d}=ye({defaultValues:o}),a=i=>console.log("submit:",i);return console.log("watch:",d()),e.jsxs(H,{as:"form",onSubmit:t(a),children:[e.jsx(m,{errorMessage:(s=n.textarea)==null?void 0:s.message,invalid:!!n.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...l("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(O,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var W,E,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var P,A,I;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Textarea size="xs" placeholder="extra small size" />
      <Textarea size="sm" placeholder="small size" />
      <Textarea size="md" placeholder="medium size" />
      <Textarea size="lg" placeholder="large size" />
    </>;
}`,...(I=(A=x.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,N,Y;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
      <Textarea errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(ee=($=z.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" disabled placeholder="outline" />
      <Textarea variant="filled" disabled placeholder="filled" />
      <Textarea variant="flushed" disabled placeholder="flushed" />
      <Textarea variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled helperMessage="We would like to get your feedback." label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,se;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" readOnly />
      <Textarea variant="filled" placeholder="filled" readOnly />
      <Textarea variant="flushed" placeholder="flushed" readOnly />
      <Textarea variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl helperMessage="We would like to get your feedback." label="Feedback" readOnly>
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ie,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" invalid placeholder="outline" />
      <Textarea variant="filled" invalid placeholder="filled" />
      <Textarea variant="flushed" invalid placeholder="flushed" />
      <Textarea variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="Feedback is required." invalid label="Feedback">
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
      <FormControl errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
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
      <FormControl errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
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
}`,...(Se=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const zr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","disabled","readOnly","invalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{zr as __namedExportsOrder,p as basic,br as default,v as disabled,y as invalid,w as reactHookForm,k as reactHookFormWithDefaultValue,S as readOnly,j as stylingPlaceholder,T as useResize,b as withAutosize,z as withBorderColor,g as withResize,x as withSize,f as withVariant};
