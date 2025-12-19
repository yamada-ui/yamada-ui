import{n as ir,o as ur,I as dr,d as cr,g as pr,r as c,j as e,s as H,ar as mr,C as hr,P as p,T as _,V as U,W as rr,X as nr,Q as xr}from"./iframe-D_HYglKf.js";import{P as or}from"./props-table-TlEH2bpt.js";import{u as fr,C as Ir}from"./index.esm-B43pSn5g.js";import{i as l,b as gr,u as jr}from"./input-B2WkzUrt.js";import{u as Fr}from"./use-file-input-gC39Xy34.js";import{u as vr}from"./use-input-border-CNq4o9Wo.js";import{T as Sr}from"./tag-CY6V8NxV.js";import{F as u}from"./for-B7ME2eWM.js";import{I as i,b as f,a as M}from"./input-group-B7dEHcg1.js";import{F as q}from"./use-field-props-DKtq6E-0.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";import"./index-B0M5u45h.js";import"./index-L8BvBXnT.js";import"./index-DlPqCcPe.js";import"./group-BP-ePriJ.js";import"./index-YgsjGqza.js";import"./use-breakpoint-DzseuvVx.js";import"./use-breakpoint-value-DJZAC5OA.js";import"./use-color-mode-value-ChIzIqo3.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],Cr=ir("file",br),m=ur(dr)({as:Cr});var L,W,Y,$,N,Q,Z,J,K,ee;const yr=cr({base:{root:{...l.base,alignItems:"center",cursor:"pointer",display:"flex",flexWrap:"wrap",gapX:"1",lineHeight:"1",_readOnly:{layerStyle:"readOnly"}},tag:{display:"inline-block",overflow:"hidden",whiteSpace:"nowrap"}},variants:{filled:{root:(L=l.variants)==null?void 0:L.filled},flushed:{root:{...(W=l.variants)==null?void 0:W.flushed,...gr()}},outline:{root:(Y=l.variants)==null?void 0:Y.outline},plain:{root:($=l.variants)==null?void 0:$.plain}},sizes:{xs:{root:{py:"{--space-y}",...(N=l.sizes)==null?void 0:N.xs}},sm:{root:{py:"{--space-y}",...(Q=l.sizes)==null?void 0:Q.sm}},md:{root:{py:"{--space-y}",...(Z=l.sizes)==null?void 0:Z.md}},lg:{root:{py:"{--space-y}",...(J=l.sizes)==null?void 0:J.lg}},xl:{root:{py:"{--space-y}",...(K=l.sizes)==null?void 0:K.xl}},"2xl":{root:{py:"{--space-y}",...(ee=l.sizes)==null?void 0:ee["2xl"]}}},defaultProps:{size:"md",variant:"outline"}}),Rr=({name:r})=>r,{withContext:kr,withProvider:Gr}=pr("file-input",yr),o=Gr(({children:r,component:n,errorBorderColor:t,focusBorderColor:h,format:d=Rr,placeholder:I,separator:g=",",...j})=>{const a=vr({errorBorderColor:t,focusBorderColor:h}),{values:s,getFieldProps:tr,getInputProps:lr}=Fr(j),sr=c.useMemo(()=>s!=null&&s.length?r?r(s):s.map((X,x)=>{const ar=s.length===x+1;if(n){const D=n({index:x,value:X});return c.isValidElement(D)?c.cloneElement(D,{key:x}):D}else return e.jsxs(Tr,{children:[d(X,x),ar?null:g]},x)}):e.jsx(H.span,{overflow:"hidden",whiteSpace:"nowrap",children:I}),[r,d,I,g,n,s]);return e.jsxs(e.Fragment,{children:[e.jsx(mr,{children:e.jsx(H.input,{...lr()})}),e.jsx(H.div,{...a,...tr(),children:sr})]})},"root")(r=>({...jr(),...r})),Tr=kr("span","tag")(),Kr={component:o,title:"Components / FileInput"},F=()=>e.jsx(o,{placeholder:"placeholder"}),v=()=>e.jsx(or,{variant:"stack",columns:["outline","filled","flushed"],rows:hr,children:(r,n,t)=>e.jsx(o,{colorScheme:n,variant:r,placeholder:p(r)},t)}),S=()=>e.jsx(or,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(o,{size:r,variant:n,placeholder:`Size (${r})`},t)}),b=()=>e.jsx(o,{multiple:!0,placeholder:"multiple"}),C=()=>e.jsx(o,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),y=()=>e.jsx(o,{multiple:!0,placeholder:"multiple",separator:";"}),R=()=>e.jsx(o,{component:({value:{name:r}})=>e.jsx(Sr,{children:r}),gapY:"xs",multiple:!0,placeholder:"multiple"}),k=()=>e.jsx(o,{format:({name:r})=>r.substring(0,r.indexOf(".")),multiple:!0,placeholder:"multiple"}),G=()=>e.jsx(o,{multiple:!0,children:r=>e.jsxs(_,{children:["Selected: ",(r==null?void 0:r.length)??0]})}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,disabled:!0,placeholder:p(r)},n)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(i,{variant:r,disabled:!0,children:[e.jsx(f,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:p(r)})]},n)}),e.jsx(q,{disabled:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,placeholder:p(r),readOnly:!0},n)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(i,{variant:r,readOnly:!0,children:[e.jsx(f,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:p(r)})]},n)}),e.jsx(q,{label:"Upload file",readOnly:!0,children:e.jsx(o,{placeholder:"your file"})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(o,{variant:r,invalid:!0,placeholder:p(r)},n)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(i,{variant:r,invalid:!0,children:[e.jsx(f,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:p(r)})]},n)}),e.jsx(q,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(o,{placeholder:"your file"})})]}),P=()=>e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(i,{variant:r,children:[e.jsx(f,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),V=()=>e.jsx(u,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(i,{variant:r,children:[e.jsx(M,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:"Please upload file"})]},n)}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{placeholder:"Default border color"}),e.jsx(o,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(i,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(M,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:"Custom border color"})]}),e.jsx(o,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(i,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(f,{children:e.jsx(m,{})}),e.jsx(o,{placeholder:"Custom border color"})]})]}),O=()=>{const[r,n]=c.useState(void 0),t=c.useRef(null),h=()=>{var d;n(void 0),(d=t.current)==null||d.call(t)};return e.jsxs(U,{children:[e.jsxs(_,{children:["files: ",(r==null?void 0:r.length)??0]}),e.jsxs(i,{children:[e.jsx(o,{multiple:!0,placeholder:"placeholder",resetRef:t,value:r,onChange:n}),r!=null&&r.length?e.jsx(M,{clickable:!0,onClick:h,children:e.jsx(rr,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(nr,{fontSize:"xl"})})}):null]})]})},B=()=>{const[r,n]=c.useState([]);return e.jsxs(U,{children:[e.jsxs(_,{children:["files: ",r==null?void 0:r.length]}),e.jsx(o,{placeholder:"placeholder",value:r,onChange:n})]})},A=()=>{var j;const r=c.useRef(null),{control:n,formState:{errors:t},handleSubmit:h,setValue:d}=fr(),I=()=>{var a;d("fileInput",void 0),(a=r.current)==null||a.call(r)},g=a=>console.log("submit:",a);return e.jsxs(U,{as:"form",onSubmit:h(g),children:[e.jsx(q,{errorMessage:(j=t.fileInput)==null?void 0:j.message,invalid:!!t.fileInput,label:"Files",children:e.jsx(Ir,{name:"fileInput",control:n,render:({field:a})=>{var s;return e.jsxs(i,{children:[e.jsx(o,{multiple:!0,...a,resetRef:r}),(s=a.value)!=null&&s.length?e.jsx(M,{clickable:!0,onClick:I,children:e.jsx(rr,{as:"button",focusVisibleRing:"outside",p:"0.5",rounded:"xs",children:e.jsx(nr,{fontSize:"xl"})})}):null]})},rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(xr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var re,ne,oe;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <FileInput placeholder="placeholder" />;
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,le,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <FileInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(se=(le=v.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ae,ie,ue;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <FileInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,ce,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...(pe=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,xe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...(xe=(he=C.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,Ie,ge;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...(ge=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var je,Fe,ve;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} gapY="xs" multiple placeholder="multiple" />;
}`,...(ve=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var Se,be,Ce;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...(Ce=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ye,Re,ke;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(ke=(Re=G.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Ge,Te,Ee;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...(Ee=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var ze,Pe,Ve;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="Upload file" readOnly>
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...(Ve=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var we,Oe,Be;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <FileInput key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <FileIcon />
            </InputGroup.Addon>
            <FileInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>;
}`,...(Be=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Ae,Me,qe;P.parameters={...P.parameters,docs:{...(Ae=P.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <FileIcon />
          </InputGroup.Addon>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...(qe=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var De,He,_e;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <FileIcon />
          </InputGroup.Element>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>}
    </For>;
}`,...(_e=(He=V.parameters)==null?void 0:He.docs)==null?void 0:_e.source}}};var Ue,Xe,Le;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="Default border color" />

      <FileInput focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <FileIcon />
        </InputGroup.Element>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>

      <FileInput errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <FileIcon />
        </InputGroup.Addon>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...(Le=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Le.source}}};var We,Ye,$e;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <VStack>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup.Root>
        <FileInput multiple placeholder="placeholder" resetRef={resetRef} value={value} onChange={onChange} />

        {value?.length ? <InputGroup.Element clickable onClick={onReset}>
            <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
              <XIcon fontSize="xl" />
            </Center>
          </InputGroup.Element> : null}
      </InputGroup.Root>
    </VStack>;
}`,...($e=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var Ne,Qe,Ze;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>([]);
  return <VStack>
      <Text>files: {value?.length}</Text>

      <FileInput placeholder="placeholder" value={value} onChange={onChange} />
    </VStack>;
}`,...(Ze=(Qe=B.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var Je,Ke,er;A.parameters={...A.parameters,docs:{...(Je=A.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  interface Data {
    fileInput: File[] | undefined;
  }
  const resetRef = useRef<() => void>(null);
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    setValue
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileInput", undefined);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.fileInput?.message} invalid={!!errors.fileInput} label="Files">
        <Controller name="fileInput" control={control} render={({
        field
      }) => <InputGroup.Root>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputGroup.Element clickable onClick={onReset}>
                  <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
                    <XIcon fontSize="xl" />
                  </Center>
                </InputGroup.Element> : null}
            </InputGroup.Root>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(er=(Ke=A.parameters)==null?void 0:Ke.docs)==null?void 0:er.source}}};const en=["Basic","Variant","Size","Multiple","Accept","Separator","Component","Format","Children","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Reset","CustomControl","ReactHookForm"];export{C as Accept,P as Addon,F as Basic,w as BorderColor,G as Children,R as Component,B as CustomControl,T as Disabled,V as Element,k as Format,z as Invalid,b as Multiple,A as ReactHookForm,E as ReadOnly,O as Reset,y as Separator,S as Size,v as Variant,en as __namedExportsOrder,Kr as default};
