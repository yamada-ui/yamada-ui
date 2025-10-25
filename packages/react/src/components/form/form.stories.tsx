import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useForm } from "react-hook-form"
import { Form } from "."
import { extractObject, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Field } from "../field"
import { Fieldset } from "../fieldset"
import { Input } from "../input"
import { PasswordInput } from "../password-input"
import { Tag } from "../tag"

type Story = StoryFn<typeof Form.Root>

const meta: Meta<typeof Form.Root> = {
  component: Form.Root,
  title: "Components / Form",
}

export default meta

export const Basic: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      variant="panel"
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      required={{ name: true, email: true }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Header>
        <Form.Title>Create an account</Form.Title>
        <Form.Description>Create an account to get started.</Form.Description>
      </Form.Header>

      <Form.Body>
        <Form.Group>
          <Field.Root name="name" label="Name">
            <Input
              placeholder="Hirotomo Yamada"
              {...register("name", {
                required: { message: "Name is required", value: true },
              })}
            />
          </Field.Root>

          <Field.Root name="email" label="Email address">
            <Input
              placeholder="hirotomo@yamada-ui.com"
              {...register("email", {
                required: { message: "Email is required", value: true },
              })}
            />
          </Field.Root>

          <Field.Root
            name="password"
            helperMessage="If not set, a password will be automatically generated."
            label="Password"
          >
            <PasswordInput placeholder="password" {...register("password")} />
          </Field.Root>
        </Form.Group>
      </Form.Body>

      <Form.Footer>
        <Form.SubmitButton>Submit</Form.SubmitButton>
      </Form.Footer>
    </Form.Root>
  )
}

export const PropsPattern: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      description="Create an account to get started."
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      required={{ name: true, email: true }}
      submitButton="Submit"
      title="Create an account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input
            placeholder="Hirotomo Yamada"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input
            placeholder="hirotomo@yamada-ui.com"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root
          name="password"
          helperMessage="If not set, a password will be automatically generated."
          label="Password"
        >
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>
  )
}

export const Variant: Story = () => {
  interface Data {
    name: string
    address: string
    email: string
    password: string
    phone: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <PropsTable
      variant="stack"
      rows={["plain", "elevated", "outline", "panel"]}
    >
      {(_, row, key) => (
        <Box key={key}>
          <Form.Root
            variant={row}
            description="Create an account to get started."
            errorMessage={extractObject(errors, (value) => value?.message)}
            invalid={extractObject(errors, (value) => !!value)}
            required={{ name: true, email: true }}
            submitButton="Submit"
            title={`Create an account (${toTitleCase(row)})`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Fieldset.Root legend="Personal information">
              <Field.Root name="name" label="Name">
                <Input
                  placeholder="Hirotomo Yamada"
                  {...register("name", {
                    required: { message: "Name is required", value: true },
                  })}
                />
              </Field.Root>

              <Field.Root
                name="password"
                helperMessage="If not set, a password will be automatically generated."
                label="Password"
              >
                <PasswordInput
                  placeholder="password"
                  {...register("password")}
                />
              </Field.Root>
            </Fieldset.Root>

            <Fieldset.Root legend="Contact information">
              <Field.Root name="email" label="Email address">
                <Input
                  placeholder="hirotomo@yamada-ui.com"
                  {...register("email", {
                    required: { message: "Email is required", value: true },
                  })}
                />
              </Field.Root>

              <Field.Root name="phone" label="Phone number">
                <Input placeholder="090-1234-5678" {...register("phone")} />
              </Field.Root>

              <Field.Root name="address" label="Address">
                <Input
                  placeholder="123 Main Street, Anytown, USA"
                  {...register("address")}
                />
              </Field.Root>
            </Fieldset.Root>
          </Form.Root>
        </Box>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  interface Data {
    name: string
    address: string
    email: string
    password: string
    phone: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Form.Root
          key={key}
          size={row}
          variant="panel"
          description="Create an account to get started."
          errorMessage={extractObject(errors, (value) => value?.message)}
          invalid={extractObject(errors, (value) => !!value)}
          required={{ name: true, email: true }}
          submitButton="Submit"
          title={`Create an account (${row})`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Fieldset.Root legend="Personal information">
            <Field.Root name="name" label="Name">
              <Input
                placeholder="Hirotomo Yamada"
                {...register("name", {
                  required: { message: "Name is required", value: true },
                })}
              />
            </Field.Root>

            <Field.Root
              name="password"
              helperMessage="If not set, a password will be automatically generated."
              label="Password"
            >
              <PasswordInput placeholder="password" {...register("password")} />
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root legend="Contact information">
            <Field.Root name="email" label="Email address">
              <Input
                placeholder="hirotomo@yamada-ui.com"
                {...register("email", {
                  required: { message: "Email is required", value: true },
                })}
              />
            </Field.Root>

            <Field.Root name="phone" label="Phone number">
              <Input placeholder="090-1234-5678" {...register("phone")} />
            </Field.Root>

            <Field.Root name="address" label="Address">
              <Input
                placeholder="123 Main Street, Anytown, USA"
                {...register("address")}
              />
            </Field.Root>
          </Fieldset.Root>
        </Form.Root>
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      description="Create an account to get started."
      disabled={{ password: true }}
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      required={{ name: true, email: true }}
      submitButton="Submit"
      title="Create an account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input
            placeholder="Hirotomo Yamada"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input
            placeholder="hirotomo@yamada-ui.com"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root
          name="password"
          helperMessage="If not set, a password will be automatically generated."
          label="Password"
        >
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>
  )
}

export const ReadOnly: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>({ defaultValues: { name: "Hirotomo Yamada" } })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      description="Create an account to get started."
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      readOnly={{ name: true }}
      required={{ email: true }}
      submitButton="Submit"
      title="Create an account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input
            placeholder="Hirotomo Yamada"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input
            placeholder="hirotomo@yamada-ui.com"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root
          name="password"
          helperMessage="If not set, a password will be automatically generated."
          label="Password"
        >
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>
  )
}

export const RequiredIndicator: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      description="Create an account to get started."
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      required={{ name: true, email: true }}
      requiredIndicator={
        <Tag colorScheme="red" size="sm">
          required
        </Tag>
      }
      submitButton="Submit"
      title="Create an account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input
            placeholder="Hirotomo Yamada"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input
            placeholder="hirotomo@yamada-ui.com"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root
          name="password"
          helperMessage="If not set, a password will be automatically generated."
          label="Password"
        >
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>
  )
}

export const OptionalIndicator: Story = () => {
  interface Data {
    name: string
    email: string
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <Form.Root
      description="Create an account to get started."
      errorMessage={extractObject(errors, (value) => value?.message)}
      invalid={extractObject(errors, (value) => !!value)}
      optionalIndicator={
        <Tag colorScheme="mono" size="sm">
          optional
        </Tag>
      }
      required={{ name: true, email: true }}
      requiredIndicator={
        <Tag colorScheme="red" size="sm">
          required
        </Tag>
      }
      submitButton="Submit"
      title="Create an account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group>
        <Field.Root name="name" label="Name">
          <Input
            placeholder="Hirotomo Yamada"
            {...register("name", {
              required: { message: "Name is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root name="email" label="Email address">
          <Input
            placeholder="hirotomo@yamada-ui.com"
            {...register("email", {
              required: { message: "Email is required", value: true },
            })}
          />
        </Field.Root>

        <Field.Root
          name="password"
          helperMessage="If not set, a password will be automatically generated."
          label="Password"
        >
          <PasswordInput placeholder="password" {...register("password")} />
        </Field.Root>
      </Form.Group>
    </Form.Root>
  )
}
