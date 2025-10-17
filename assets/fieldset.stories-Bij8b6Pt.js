import{j as e}from"./iframe-BynoZ0Oq.js";import{P as R}from"./props-table-fajrmhzO.js";import{b as a}from"./input-igikG93z.js";import{d as r,F as l,e as j,f as C,g as Y,h as M,i as P}from"./use-field-props-DSGZpnoT.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-MdBZoBbZ.js";import"./grid-item-DEfTZrVK.js";import"./for-BimcTw3e.js";import"./flex-zG46G6gY.js";import"./heading-Dpwm0c5v.js";import"./use-input-border-D8Osi-F8.js";const T={component:r,title:"Components / Fieldset"},s=()=>e.jsxs(r,{legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),o=()=>e.jsx(R,{variant:"stack",rows:["plain","elevated","outline","panel"],children:(v,g,y)=>e.jsxs(r,{variant:g,helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]},y)}),t=()=>e.jsx(R,{variant:"stack",rows:["sm","md","lg"],children:(v,g,y)=>e.jsxs(r,{size:g,variant:"panel",helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]},y)}),d=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),n=()=>e.jsxs(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),i=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",legend:"Contact details",required:!0,children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),c=()=>e.jsxs(r,{disabled:!0,helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),p=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",legend:"Contact details",readOnly:!0,children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),m=()=>e.jsxs(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),u=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",children:[e.jsx(j,{color:"blue",children:"Contact details"}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),h=()=>e.jsxs(r,{children:[e.jsxs(C,{borderBottomWidth:"1px",pb:"md",children:[e.jsx(j,{children:"Contact details"}),e.jsx(Y,{children:"Please provide your contact details below."})]}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),x=()=>e.jsx(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:e.jsxs(M,{borderWidth:"1px",p:"md",rounded:"l2",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]})}),F=()=>e.jsxs(r,{legend:"Contact details",children:[e.jsx(Y,{color:"red",children:"Please provide your contact details below."}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),b=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})}),e.jsx(P,{color:"green",children:"Some fields are invalid. Please check them."})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["plain", "elevated", "outline", "panel"]}>
      {(_, row, key) => <Fieldset.Root key={key} variant={row} helperMessage="Please provide your contact details below." legend="Contact details">
          <Field.Root label="Name">
            <Input type="text" placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Fieldset.Root>}
    </PropsTable>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Fieldset.Root key={key} size={row} variant="panel" helperMessage="Please provide your contact details below." legend="Contact details">
          <Field.Root label="Name">
            <Input type="text" placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Fieldset.Root>}
    </PropsTable>;
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below." legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root errorMessage="Some fields are invalid. Please check them." helperMessage="Please provide your contact details below." invalid legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below." legend="Contact details" required>
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root disabled helperMessage="Please provide your contact details below." legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below." legend="Contact details" readOnly>
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root errorMessage="Some fields are invalid. Please check them." helperMessage="Please provide your contact details below." invalid legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below.">
      <Fieldset.Legend color="blue">Contact details</Fieldset.Legend>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root>
      <Fieldset.Header borderBottomWidth="1px" pb="md">
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperMessage>
          Please provide your contact details below.
        </Fieldset.HelperMessage>
      </Fieldset.Header>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root errorMessage="Some fields are invalid. Please check them." helperMessage="Please provide your contact details below." invalid legend="Contact details">
      <Fieldset.Content borderWidth="1px" p="md" rounded="l2">
        <Field.Root label="Name">
          <Input type="text" placeholder="Your name" />
        </Field.Root>

        <Field.Root label="Email address">
          <Input type="email" placeholder="Your email address" />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>;
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root legend="Contact details">
      <Fieldset.HelperMessage color="red">
        Please provide your contact details below.
      </Fieldset.HelperMessage>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...F.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below." invalid legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>

      <Fieldset.ErrorMessage color="green">
        Some fields are invalid. Please check them.
      </Fieldset.ErrorMessage>
    </Fieldset.Root>;
}`,...b.parameters?.docs?.source}}};const q=["Basic","Variant","Size","HelperMessage","ErrorMessage","Required","Disabled","ReadOnly","Invalid","CustomLegend","CustomHeader","CustomContent","CustomHelperMessage","CustomErrorMessage"];export{s as Basic,x as CustomContent,b as CustomErrorMessage,h as CustomHeader,F as CustomHelperMessage,u as CustomLegend,c as Disabled,n as ErrorMessage,d as HelperMessage,m as Invalid,p as ReadOnly,i as Required,t as Size,o as Variant,q as __namedExportsOrder,T as default};
