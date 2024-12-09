import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as I}from"./index-ClcD9ViR.js";import{u as je}from"./index.esm-CEdvtQ_U.js";import{a2 as Me,u as Ve,n as _e,l as Oe,b as We,a as Ee,c as qe,h as Ae,H as Le,k as Ne}from"./factory-ZSnRp-09.js";import{u as Pe,d as m}from"./form-control-CsCePsX1.js";import{a as _}from"./event-C_48urmU.js";import{f as Ye}from"./forward-ref-D13m8o2p.js";import{u as Ge}from"./use-component-style-Bj6hwx_Q.js";import{o as Ue}from"./theme-provider-B08WIPTu.js";import{V as B}from"./stack-C-NTCosl.js";import{B as H}from"./button-CP_V-DFs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-ripple-DvgegkL5.js";import"./index-CIS69Ejq.js";import"./proxy-Cmv22F1b.js";import"./factory-g1ZPYqox.js";import"./loading-YSmVr9V5.js";import"./icon-D-mdHq7J.js";import"./use-var-BqMKFNOM.js";const Xe=(o,s,t)=>{const l=I.useRef();return()=>{const a=o.current;if(!a)return;let{placeholder:n,value:i}=a;if(i===l.current)return;l.current=i,i||(i=n||"x");const u=Je(a);if(!u)return;const F=Ke(a,u,i,s,t);a.rows=F}},Ze=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Je=o=>{const s=window.getComputedStyle(o);if(s==null)return null;const t=Me(s,Ze),{boxSizing:l}=t;if(l==="")return null;const d=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),a=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth),n=parseFloat(t.lineHeight);return{borderSize:a,paddingSize:d,singleRowHeight:n,sizingStyle:t}},Ke=(o,s,t,l,d)=>{const a=o.cloneNode();Object.assign(a.style,s.sizingStyle),Qe(a),a.value=t,document.body.appendChild(a);let n;if(a.scrollHeight){const i=s.singleRowHeight;n=Math.min(l,Math.max(d,Math.floor(a.scrollHeight/i)))}else{const i=(t.match(/\n/g)||[]).length;n=Math.min(l,Math.max(d,i+1))}return document.body.removeChild(a),n},O={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},Qe=o=>{Object.keys(O).forEach(s=>{o.style.setProperty(s,O[s],"important")})},r=Ye((o,s)=>{var V;const[{h:t,height:l,maxH:d,maxHeight:a,minH:n,minHeight:i,...u},F]=Ge("Textarea",o);let{className:Te,autosize:h,maxRows:we=1/0,minRows:ke=1,resize:Fe="none",resizeRef:Re,rows:M,onChange:Ce,...R}=Ue(F);R=Pe(R);const De=Ne(),C=I.useRef(null),Ie=((V=C.current)==null?void 0:V.value)??"",c=Xe(C,we,ke);let D;return M||h?D=u:D={h:t,height:l,maxH:d,maxHeight:a,minH:n,minHeight:i,...u},Ve(()=>{if(!De||!h)return;c();const Be=_(window,"resize",c),He=_(document.fonts,"loadingdone",c);return()=>{Be(),He()}},[]),_e(()=>{h&&c()},[Ie]),Oe(Re,c),e.jsx(We.textarea,{ref:Ee(s,C),className:qe("ui-textarea",Te),resize:Fe,rows:M,onChange:Ae(h?c:Le,Ce),__css:D,...R})});r.displayName="Textarea";r.__ui__="Textarea";const br={component:r,title:"Components / Forms / Textarea"},p=()=>e.jsx(r,{placeholder:"basic"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"block",resize:"block"}),e.jsx(r,{placeholder:"horizontal",resize:"horizontal"}),e.jsx(r,{placeholder:"vertical",resize:"vertical"}),e.jsx(r,{placeholder:"none",resize:"none"})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{autosize:!0,placeholder:"autosize"}),e.jsx(r,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(r,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(r,{placeholder:"rows 4",rows:4})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(m,{helperMessage:"We would like to get your feedback.",isDisabled:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(m,{helperMessage:"We would like to get your feedback.",isReadOnly:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(m,{errorMessage:"Feedback is required.",isInvalid:!0,label:"Feedback",children:e.jsx(r,{variant:"outline",placeholder:"your feedback"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),T=()=>{const o=I.useRef(null),s=()=>{var t;(t=o.current)==null||t.call(o)};return e.jsxs(B,{children:[e.jsx(r,{placeholder:"use resize",resizeRef:o}),e.jsx(H,{alignSelf:"flex-end",onClick:s,children:"Resize"})]})},w=()=>{var a;const{formState:{errors:o},handleSubmit:s,register:t,watch:l}=je(),d=n=>console.log("submit:",n);return console.log("watch:",l()),e.jsxs(B,{as:"form",onSubmit:s(d),children:[e.jsx(m,{errorMessage:(a=o.textarea)==null?void 0:a.message,isInvalid:!!o.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...t("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(H,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},k=()=>{var n;const o={textarea:"孫悟空"},{formState:{errors:s},handleSubmit:t,register:l,watch:d}=je({defaultValues:o}),a=i=>console.log("submit:",i);return console.log("watch:",d()),e.jsxs(B,{as:"form",onSubmit:t(a),children:[e.jsx(m,{errorMessage:(n=s.textarea)==null?void 0:n.message,isInvalid:!!s.textarea,label:"Feedback",children:e.jsx(r,{placeholder:"your feedback",...l("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(H,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var W,E,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var A,L,N;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Textarea size="xs" placeholder="extra small size" />
      <Textarea size="sm" placeholder="small size" />
      <Textarea size="md" placeholder="medium size" />
      <Textarea size="lg" placeholder="large size" />
    </>;
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,Y,G;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(G=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var U,X,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="block" resize="block" />
      <Textarea placeholder="horizontal" resize="horizontal" />
      <Textarea placeholder="vertical" resize="vertical" />
      <Textarea placeholder="none" resize="none" />
    </>;
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,re;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default border color" />
      <Textarea focusBorderColor="green.500" placeholder="custom border color" />
      <Textarea errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(re=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isDisabled placeholder="outline" />
      <Textarea variant="filled" isDisabled placeholder="filled" />
      <Textarea variant="flushed" isDisabled placeholder="flushed" />
      <Textarea variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="We would like to get your feedback." isDisabled label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ne,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isReadOnly placeholder="outline" />
      <Textarea variant="filled" isReadOnly placeholder="filled" />
      <Textarea variant="flushed" isReadOnly placeholder="flushed" />
      <Textarea variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="We would like to get your feedback." isReadOnly label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,de,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Textarea variant="outline" isInvalid placeholder="outline" />
      <Textarea variant="filled" isInvalid placeholder="filled" />
      <Textarea variant="flushed" isInvalid placeholder="flushed" />
      <Textarea variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Feedback is required." isInvalid label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>;
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,he;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(he=(me=j.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,xe,fe;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,be,ze;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ze=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var ve,Se,ye;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(ye=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};const zr=["basic","withSize","withVariant","withResize","withAutosize","withBorderColor","isDisabled","isReadonly","isInvalid","stylingPlaceholder","useResize","reactHookForm","reactHookFormWithDefaultValue"];export{zr as __namedExportsOrder,p as basic,br as default,v as isDisabled,y as isInvalid,S as isReadonly,w as reactHookForm,k as reactHookFormWithDefaultValue,j as stylingPlaceholder,T as useResize,b as withAutosize,z as withBorderColor,g as withResize,x as withSize,f as withVariant};
