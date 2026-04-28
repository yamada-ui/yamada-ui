import{n as e}from"./chunk-jRWAZmH_.js";import{Et as t,Z as n,yn as r}from"./core-C7NnSGLR.js";import{t as i}from"./jsx-runtime-D_578c1K.js";import{A as a,D as o,E as s,M as c,N as l,O as u,P as d,T as f,a as p,f as m,j as h,k as g,t as _,v,y}from"./input-9Ni-qBwb.js";import{Jn as b,K as x,Kn as S,q as C}from"./iframe-BiLUJmYf.js";import{n as w,t as T}from"./storybook-DdVa7jlD.js";import{n as E,r as D}from"./index.esm-COyjMJRW.js";var O,k,A,j,M,N,P,F,I,L,R;e((()=>{E(),T(),s(),n(),m(),y(),_(),S(),x(),O=i(),k={component:c,title:`Components / Form`},A=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsxs)(c,{variant:`panel`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,O.jsxs)(h,{children:[(0,O.jsx)(d,{children:`Create an account`}),(0,O.jsx)(u,{children:`Create an account to get started.`})]}),(0,O.jsx)(o,{children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})}),(0,O.jsx)(g,{children:(0,O.jsx)(l,{children:`Submit`})})]})},j=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(c,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})})},M=()=>{let{formState:{errors:e},handleSubmit:n,register:i}=D(),a=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`plain`,`elevated`,`outline`,`panel`],children:(o,s,l)=>(0,O.jsxs)(c,{variant:s,description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${r(s)})`,onSubmit:n(a),children:[(0,O.jsxs)(f,{legend:`Personal information`,children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...i(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...i(`password`)})})]}),(0,O.jsxs)(f,{legend:`Contact information`,children:[(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...i(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(p,{placeholder:`090-1234-5678`,...i(`phone`)})}),(0,O.jsx)(v,{name:`address`,label:`Address`,children:(0,O.jsx)(p,{placeholder:`123 Main Street, Anytown, USA`,...i(`address`)})})]})]},l)})},N=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D(),i=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(a,o,s)=>(0,O.jsxs)(c,{size:o,variant:`panel`,description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${o})`,onSubmit:n(i),children:[(0,O.jsxs)(f,{legend:`Personal information`,children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]}),(0,O.jsxs)(f,{legend:`Contact information`,children:[(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(p,{placeholder:`090-1234-5678`,...r(`phone`)})}),(0,O.jsx)(v,{name:`address`,label:`Address`,children:(0,O.jsx)(p,{placeholder:`123 Main Street, Anytown, USA`,...r(`address`)})})]})]},s)})},P=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(c,{description:`Create an account to get started.`,disabled:{password:!0},errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})})},F=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D({defaultValues:{name:`Hirotomo Yamada`}});return(0,O.jsx)(c,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),readOnly:{name:!0},required:{email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})})},I=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(c,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(C,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})})},L=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(c,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),optionalIndicator:(0,O.jsx)(C,{colorScheme:`mono`,size:`sm`,children:`optional`}),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(C,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(a,{children:[(0,O.jsx)(v,{name:`name`,label:`Name`,children:(0,O.jsx)(p,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(v,{name:`email`,label:`Email address`,children:(0,O.jsx)(p,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(v,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(b,{placeholder:`password`,...r(`password`)})})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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