import{i as e}from"./preload-helper-B45gAKPr.js";import{Kt as t,pt as n,qn as r}from"./core-CBrv4WaS.js";import{t as i}from"./jsx-runtime-BBQGix-2.js";import{Ad as a,Cd as o,Dd as s,Ed as c,Ft as l,Md as u,Nd as d,Od as f,Pt as p,Td as m,Tu as h,_d as g,_i as _,dd as v,hd as y,jd as b,kd as x,mi as S,vu as C}from"./iframe-DQX-AWnu.js";import{n as w,t as T}from"./storybook-BSXXdHw1.js";import{n as E,r as D}from"./index.esm-BGVpNNgE.js";var O,k,A,j,M,N,P,F,I,L,R;e((()=>{E(),T(),m(),n(),v(),g(),C(),S(),p(),O=i(),k={component:b,title:`Components / Form`},A=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsxs)(b,{variant:`panel`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,O.jsxs)(a,{children:[(0,O.jsx)(d,{children:`Create an account`}),(0,O.jsx)(s,{children:`Create an account to get started.`})]}),(0,O.jsx)(c,{children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})}),(0,O.jsx)(f,{children:(0,O.jsx)(u,{children:`Submit`})})]})},j=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(b,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})})},M=()=>{let{formState:{errors:e},handleSubmit:n,register:i}=D(),a=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`plain`,`elevated`,`outline`,`panel`],children:(s,c,l)=>(0,O.jsxs)(b,{variant:c,description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${r(c)})`,onSubmit:n(a),children:[(0,O.jsxs)(o,{legend:`Personal information`,children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...i(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...i(`password`)})})]}),(0,O.jsxs)(o,{legend:`Contact information`,children:[(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...i(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(h,{placeholder:`090-1234-5678`,...i(`phone`)})}),(0,O.jsx)(y,{name:`address`,label:`Address`,children:(0,O.jsx)(h,{placeholder:`123 Main Street, Anytown, USA`,...i(`address`)})})]})]},l)})},N=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D(),i=e=>console.log(`submit:`,e);return(0,O.jsx)(w,{variant:`stack`,rows:[`sm`,`md`,`lg`],children:(a,s,c)=>(0,O.jsxs)(b,{size:s,variant:`panel`,description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account (${s})`,onSubmit:n(i),children:[(0,O.jsxs)(o,{legend:`Personal information`,children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]}),(0,O.jsxs)(o,{legend:`Contact information`,children:[(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`phone`,label:`Phone number`,children:(0,O.jsx)(h,{placeholder:`090-1234-5678`,...r(`phone`)})}),(0,O.jsx)(y,{name:`address`,label:`Address`,children:(0,O.jsx)(h,{placeholder:`123 Main Street, Anytown, USA`,...r(`address`)})})]})]},c)})},P=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(b,{description:`Create an account to get started.`,disabled:{password:!0},errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})})},F=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D({defaultValues:{name:`Hirotomo Yamada`}});return(0,O.jsx)(b,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),readOnly:{name:!0},required:{email:!0},submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})})},I=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(b,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(l,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})})},L=()=>{let{formState:{errors:e},handleSubmit:n,register:r}=D();return(0,O.jsx)(b,{description:`Create an account to get started.`,errorMessage:t(e,e=>e?.message),invalid:t(e,e=>!!e),optionalIndicator:(0,O.jsx)(l,{colorScheme:`mono`,size:`sm`,children:`optional`}),required:{name:!0,email:!0},requiredIndicator:(0,O.jsx)(l,{colorScheme:`red`,size:`sm`,children:`required`}),submitButton:`Submit`,title:`Create an account`,onSubmit:n(e=>console.log(`submit:`,e)),children:(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{name:`name`,label:`Name`,children:(0,O.jsx)(h,{placeholder:`Hirotomo Yamada`,...r(`name`,{required:{message:`Name is required`,value:!0}})})}),(0,O.jsx)(y,{name:`email`,label:`Email address`,children:(0,O.jsx)(h,{placeholder:`hirotomo@yamada-ui.com`,...r(`email`,{required:{message:`Email is required`,value:!0}})})}),(0,O.jsx)(y,{name:`password`,helperMessage:`If not set, a password will be automatically generated.`,label:`Password`,children:(0,O.jsx)(_,{placeholder:`password`,...r(`password`)})})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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