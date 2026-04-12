import{n as e}from"./chunk-zsgVPwQN.js";import{Qc as t,Zc as n,al as r,am as i,cl as a,dc as o,dl as s,dm as c,fl as l,gr as u,hc as d,il as f,im as p,ll as m,mr as h,nm as g,nt as _,ol as v,pl as y,qc as b,rt as x,sl as S,ul as C}from"./iframe-zMOrAcxo.js";import{n as w,t as T}from"./storybook-DZrXnMZm.js";import{n as E,r as D}from"./index.esm-DK7A1aT2.js";var O,k,A,j,M,N,P,F,I,L,R;e((()=>{T(),E(),r(),g(),b(),t(),o(),h(),_(),O=p(),k={component:s,title:`Components / Form`},A=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D();return(0,O.jsxs)(s,{variant:`panel`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,O.jsxs)(C,{children:[(0,O.jsx)(y,{children:`Create an account`}),(0,O.jsx)(S,{children:`Create an account to get started.`})]}),(0,O.jsx)(v,{children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})}),(0,O.jsx)(a,{children:(0,O.jsx)(l,{children:`Submit`})})]})},j=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D();return(0,O.jsx)(s,{description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:t(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})})},M=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D(),a=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`plain`,`elevated`,`outline`,`panel`],children:(o,l,p)=>(0,O.jsxs)(s,{variant:l,description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${c(l)})`,onSubmit:t(a),children:[(0,O.jsxs)(f,{legend:`Personal information`,children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]}),(0,O.jsxs)(f,{legend:`Contact information`,children:[(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(d,{placeholder:`090-1234-5678`,...r(`phone`)})}),(0,O.jsx)(n,{name:`address`,label:`Address`,children:(0,O.jsx)(d,{placeholder:`123 Main Street, Anytown, USA`,...r(`address`)})})]})]},p)})},N=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D(),a=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(o,c,l)=>(0,O.jsxs)(s,{size:c,variant:`panel`,description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${c})`,onSubmit:t(a),children:[(0,O.jsxs)(f,{legend:`Personal information`,children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]}),(0,O.jsxs)(f,{legend:`Contact information`,children:[(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(d,{placeholder:`090-1234-5678`,...r(`phone`)})}),(0,O.jsx)(n,{name:`address`,label:`Address`,children:(0,O.jsx)(d,{placeholder:`123 Main Street, Anytown, USA`,...r(`address`)})})]})]},l)})},P=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D();return(0,O.jsx)(s,{description:`Create an account to get started.`,disabled:{password:!0},errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:t(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})})},F=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D({defaultValues:{name:`Hirotomo Yamada`}});return(0,O.jsx)(s,{description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),readOnly:{name:!0},required:{email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:t(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})})},I=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D();return(0,O.jsx)(s,{description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(x,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:t(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})})},L=()=>{let{formState:{errors:e},handleSubmit:t,register:r}=D();return(0,O.jsx)(s,{description:`Create an account to get started.`,errorMessage:i(e,e=>e?.message),invalid:i(e,e=>!!e),optionalIndicator:(0,O.jsx)(x,{colorScheme:`mono`,size:`sm`,children:`optional`}),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(x,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:t(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(m,{children:[(0,O.jsx)(n,{name:`name`,label:`Name`,children:(0,O.jsx)(d,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(n,{name:`email`,label:`Email address`,children:(0,O.jsx)(d,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(n,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(u,{placeholder:`password`,...r(`password`)})})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root variant="panel" errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
    name: true,
    email: true
  }} onSubmit={handleSubmit(onSubmit)}>
      <Form.Header>
        <Form.Title>Create an account</Form.Title>
        <Form.Description>Create an account to get started.</Form.Description>
      </Form.Header>

      <Form.Body>
        <Form.Group>
          <Field.Root name="name" label="Name">
            <Input placeholder="Hirotomo Yamada" {...register("name", {
            required: {
              message: "Name is required",
              value: true
            }
          })} />
          </Field.Root>

          <Field.Root name="email" label="Email address">
            <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
            required: {
              message: "Email is required",
              value: true
            }
          })} />
          </Field.Root>

          <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
            <PasswordInput placeholder="password" {...register("password")} />
          </Field.Root>
        </Form.Group>
      </Form.Body>

      <Form.Footer>
        <Form.SubmitButton>Submit</Form.SubmitButton>
      </Form.Footer>
    </Form.Root>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
    name: true,
    email: true
  }} submitButton="Submit" title="Create an account" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input placeholder="Hirotomo Yamada" {...register("name", {
          required: {
            message: "Name is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
          required: {
            message: "Email is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    address: string;
    email: string;
    name: string;
    password: string;
    phone: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <PropsTable variant="stack" rows={["plain", "elevated", "outline", "panel"]}>
      {(_, row, key) => <Form.Root key={key} variant={row} description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
      name: true,
      email: true
    }} submitButton="Submit" title={\`Create an account (\${toTitleCase(row)})\`} onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Root legend="Personal information">
            <Field.Root name="name" label="Name">
              <Input placeholder="Hirotomo Yamada" {...register("name", {
            required: {
              message: "Name is required",
              value: true
            }
          })} />
            </Field.Root>

            <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
              <PasswordInput placeholder="password" {...register("password")} />
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root legend="Contact information">
            <Field.Root name="email" label="Email address">
              <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
            required: {
              message: "Email is required",
              value: true
            }
          })} />
            </Field.Root>

            <Field.Root name="phone" label="Phone number">
              <Input placeholder="090-1234-5678" {...register("phone")} />
            </Field.Root>

            <Field.Root name="address" label="Address">
              <Input placeholder="123 Main Street, Anytown, USA" {...register("address")} />
            </Field.Root>
          </Fieldset.Root>
        </Form.Root>}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    address: string;
    email: string;
    name: string;
    password: string;
    phone: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => <Form.Root key={key} size={row} variant="panel" description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
      name: true,
      email: true
    }} submitButton="Submit" title={\`Create an account (\${row})\`} onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Root legend="Personal information">
            <Field.Root name="name" label="Name">
              <Input placeholder="Hirotomo Yamada" {...register("name", {
            required: {
              message: "Name is required",
              value: true
            }
          })} />
            </Field.Root>

            <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
              <PasswordInput placeholder="password" {...register("password")} />
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root legend="Contact information">
            <Field.Root name="email" label="Email address">
              <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
            required: {
              message: "Email is required",
              value: true
            }
          })} />
            </Field.Root>

            <Field.Root name="phone" label="Phone number">
              <Input placeholder="090-1234-5678" {...register("phone")} />
            </Field.Root>

            <Field.Root name="address" label="Address">
              <Input placeholder="123 Main Street, Anytown, USA" {...register("address")} />
            </Field.Root>
          </Fieldset.Root>
        </Form.Root>}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root description="Create an account to get started." disabled={{
    password: true
  }} errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
    name: true,
    email: true
  }} submitButton="Submit" title="Create an account" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input placeholder="Hirotomo Yamada" {...register("name", {
          required: {
            message: "Name is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
          required: {
            message: "Email is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>({
    defaultValues: {
      name: "Hirotomo Yamada"
    }
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} readOnly={{
    name: true
  }} required={{
    email: true
  }} submitButton="Submit" title="Create an account" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input placeholder="Hirotomo Yamada" {...register("name", {
          required: {
            message: "Name is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
          required: {
            message: "Email is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} required={{
    name: true,
    email: true
  }} requiredIndicator={<Tag colorScheme="red" size="sm">
          required
        </Tag>} submitButton="Submit" title="Create an account" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input placeholder="Hirotomo Yamada" {...register("name", {
          required: {
            message: "Name is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
          required: {
            message: "Email is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    email: string;
    name: string;
    password: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <Form.Root description="Create an account to get started." errorMessage={extractObject(errors, value => value?.message)} invalid={extractObject(errors, value => !!value)} optionalIndicator={<Tag colorScheme="mono" size="sm">
          optional
        </Tag>} required={{
    name: true,
    email: true
  }} requiredIndicator={<Tag colorScheme="red" size="sm">
          required
        </Tag>} submitButton="Submit" title="Create an account" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input placeholder="Hirotomo Yamada" {...register("name", {
          required: {
            message: "Name is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input placeholder="hirotomo@yamada-ui.com" {...register("email", {
          required: {
            message: "Email is required",
            value: true
          }
        })} />
        </Field.Root>

        <Field.Root name="password" helperMessage="If not set, a password will be automatically generated." label="Password">
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>;
}`,...L.parameters?.docs?.source}}},R=[`Basic`,`PropsPattern`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`RequiredIndicator`,`OptionalIndicator`]}))();export{A as Basic,P as Disabled,L as OptionalIndicator,j as PropsPattern,F as ReadOnly,I as RequiredIndicator,N as Size,M as Variant,R as __namedExportsOrder,k as default};