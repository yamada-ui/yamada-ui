import{j as e}from"./iframe-BbB59fLB.js";import{P as g}from"./props-table-CLQ6uJWO.js";import{I as a}from"./input-saaqvsoT.js";import{d as r,F as l,e as y,f as v,g as R,h as Y,i as C}from"./use-field-props-vL0R9j3R.js";import"./grid-W1UnxTpU.js";import"./grid-item-Dq6QrI7D.js";import"./for-JwY7aMwm.js";import"./flex-mIT1fSUh.js";import"./heading-DTYqldnT.js";import"./use-input-border-DDo_kBDF.js";const L={component:r,title:"Components / Fieldset"},s=()=>e.jsxs(r,{legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),o=()=>e.jsx(g,{variant:"stack",rows:["plain","elevated","outline","panel"],children:(j,F,b)=>e.jsxs(r,{variant:F,helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]},b)}),t=()=>e.jsx(g,{variant:"stack",rows:["sm","md","lg"],children:(j,F,b)=>e.jsxs(r,{size:F,variant:"panel",helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]},b)}),d=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),n=()=>e.jsxs(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),i=()=>e.jsxs(r,{disabled:!0,helperMessage:"Please provide your contact details below.",legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),c=()=>e.jsxs(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),p=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",children:[e.jsx(y,{color:"blue",children:"Contact details"}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),m=()=>e.jsxs(r,{children:[e.jsxs(v,{borderBottomWidth:"1px",pb:"md",children:[e.jsx(y,{children:"Contact details"}),e.jsx(R,{children:"Please provide your contact details below."})]}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),u=()=>e.jsx(r,{errorMessage:"Some fields are invalid. Please check them.",helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:e.jsxs(Y,{borderWidth:"1px",p:"md",rounded:"l2",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]})}),h=()=>e.jsxs(r,{legend:"Contact details",children:[e.jsx(R,{color:"red",children:"Please provide your contact details below."}),e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})})]}),x=()=>e.jsxs(r,{helperMessage:"Please provide your contact details below.",invalid:!0,legend:"Contact details",children:[e.jsx(l,{label:"Name",children:e.jsx(a,{type:"text",placeholder:"Your name"})}),e.jsx(l,{label:"Email address",children:e.jsx(a,{type:"email",placeholder:"Your email address"})}),e.jsx(C,{color:"green",children:"Some fields are invalid. Please check them."})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
  return <Fieldset.Root disabled helperMessage="Please provide your contact details below." legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root errorMessage="Some fields are invalid. Please check them." helperMessage="Please provide your contact details below." invalid legend="Contact details">
      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Fieldset.Root helperMessage="Please provide your contact details below.">
      <Fieldset.Legend color="blue">Contact details</Fieldset.Legend>

      <Field.Root label="Name">
        <Input type="text" placeholder="Your name" />
      </Field.Root>

      <Field.Root label="Email address">
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </Fieldset.Root>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};const _=["Basic","Variant","Size","HelperMessage","ErrorMessage","Disabled","Invalid","CustomLegend","CustomHeader","CustomContent","CustomHelperMessage","CustomErrorMessage"];export{s as Basic,u as CustomContent,x as CustomErrorMessage,m as CustomHeader,h as CustomHelperMessage,p as CustomLegend,i as Disabled,n as ErrorMessage,d as HelperMessage,c as Invalid,t as Size,o as Variant,_ as __namedExportsOrder,L as default};
