import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES, toTitleCase } from "@yamada-ui/utils"
import { useForm } from "react-hook-form"
import { withMask } from "use-mask-input"
import { PropsTable } from "../../../storybook/components/props-table"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
import { For } from "../for"
import { MailIcon, SearchIcon } from "../icon"
import { VStack } from "../stack"
import { Input, InputGroup } from "./"

type Story = StoryFn<typeof Input>

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components / Input",
}

export default meta

export const Basic: Story = () => {
  return <Input placeholder="Placeholder" />
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <Input
            key={key}
            size={column}
            variant={row}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Input
            key={key}
            colorScheme={row}
            variant={column}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const HTMLSize: Story = () => {
  return <Input aria-label="Input" htmlSize={4} width="auto" />
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <Input
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>+81</InputGroup.Addon>
            <Input type="tel" placeholder="Your phone number" />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        disabled
        helperMessage="We'll never share your email."
        label="Email address"
      >
        <Input type="email" placeholder="Your email address" />
      </Field.Root>

      <Field.Root
        disabled
        helperMessage="We'll never share Your phone number."
        label="Phone number"
      >
        <InputGroup.Root>
          <InputGroup.Addon>+81</InputGroup.Addon>
          <Input type="tel" placeholder="Your phone number" />
        </InputGroup.Root>
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <Input
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <Field.Root
        helperMessage="We'll never share your email."
        label="Email address"
        readOnly
      >
        <Input type="email" placeholder="Your email address" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <Input
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>+81</InputGroup.Addon>
            <Input type="tel" placeholder="Your phone number" />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="Email is required."
        invalid
        label="Email address"
      >
        <Input type="email" placeholder="Your email address" />
      </Field.Root>

      <Field.Root
        helperMessage="We'll never share Your phone number."
        invalid
        label="Phone number"
      >
        <InputGroup.Root>
          <InputGroup.Addon>+81</InputGroup.Addon>
          <Input type="tel" placeholder="Your phone number" />
        </InputGroup.Root>
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <>
      <InputGroup.Root>
        <InputGroup.Addon>+81</InputGroup.Addon>
        <Input type="tel" placeholder="Your phone number" />
      </InputGroup.Root>

      <InputGroup.Root variant="filled">
        <InputGroup.Addon>+81</InputGroup.Addon>
        <Input type="tel" placeholder="Your phone number" />
      </InputGroup.Root>

      <InputGroup.Root variant="flushed">
        <InputGroup.Addon>+81</InputGroup.Addon>
        <Input type="tel" placeholder="Your phone number" />
      </InputGroup.Root>

      <InputGroup.Root>
        <InputGroup.Addon>https://</InputGroup.Addon>
        <Input placeholder="Your site address" />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>
    </>
  )
}

export const Element: Story = () => {
  return (
    <>
      <InputGroup.Root>
        <InputGroup.Element w="auto">https://</InputGroup.Element>
        <Input placeholder="Search contacts" ps="4.75rem" />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>

      <InputGroup.Root
        as="form"
        onSubmit={(ev) => {
          ev.preventDefault()
        }}
      >
        <Input type="search" name="q" placeholder="Search user names" />
        <InputGroup.Element clickable px="2">
          <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
            <SearchIcon fontSize="xl" />
          </Center>
        </InputGroup.Element>
      </InputGroup.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <Input placeholder="Default border color" />
      <Input focusBorderColor="green.500" placeholder="Custom border color" />
      <Input
        errorBorderColor="orange.500"
        invalid
        placeholder="Custom border color"
      />
    </>
  )
}

export const Placeholder: Story = () => {
  return (
    <>
      <Input placeholder="Default placeholder" />
      <Input
        placeholder="Custom placeholder"
        _dark={{ _placeholder: { color: "blue.500", opacity: 1 } }}
        _placeholder={{ color: "blue.500", opacity: 1 }}
      />
      <Input
        color="green.500"
        placeholder="Custom placeholder"
        _dark={{
          _placeholder: { color: "inherit" },
        }}
        _placeholder={{ color: "inherit" }}
      />
    </>
  )
}

export const Type: Story = () => {
  return <Input type="datetime-local" placeholder="Select Date and Time" />
}

export const Mask: Story = () => {
  return (
    <Input ref={withMask("(99) 99999-9999")} placeholder="(99) 99999-9999" />
  )
}

export const FloatingLabel: Story = () => {
  return (
    <Field.Root>
      <Input type="email" data-peer placeholder="" />
      <Field.Label
        css={{
          bg: "bg",
          fontSize: "sm",
          fontWeight: "normal",
          insetStart: "2",
          pointerEvents: "none",
          position: "absolute",
          px: "1",
          top: "-12.5px",
          transitionDuration: "moderate",
          transitionProperty: "top, color, font-size",
          transitionTimingFunction: "ease-in-out",
          zIndex: "1",
          _peerPlaceholderShown: {
            color: "fg.subtle",
            fontSize: "md",
            insetStart: "2",
            top: "8px",
          },
          // eslint-disable-next-line perfectionist/sort-objects
          _peerFocusVisible: {
            color: "fg",
            fontSize: "sm",
            insetStart: "2",
            top: "-12.5px",
          },
        }}
      >
        Email
      </Field.Label>
    </Field.Root>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    name: string
    cellphone: string
    email: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.name?.message}
        invalid={!!errors.name}
        label="Name"
      >
        <Input
          placeholder="孫悟空"
          {...register("name", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.cellphone?.message}
        invalid={!!errors.cellphone}
        label="Cellphone"
      >
        <InputGroup.Root>
          <InputGroup.Addon>+81</InputGroup.Addon>
          <Input
            type="tel"
            placeholder="0000-0000"
            {...register("cellphone", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup.Root>
      </Field.Root>

      <Field.Root
        errorMessage={errors.email?.message}
        invalid={!!errors.email}
        label="Email"
      >
        <InputGroup.Root>
          <InputGroup.Element>
            <MailIcon />
          </InputGroup.Element>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup.Root>
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    name: string
    cellphone: string
    email: string
  }

  const defaultValues: Data = {
    name: "孫悟空",
    cellphone: "090-1234-5678",
    email: "hoge@example.com",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.name?.message}
        invalid={!!errors.name}
        label="Name"
      >
        <Input
          placeholder="孫悟空"
          {...register("name", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.cellphone?.message}
        invalid={!!errors.cellphone}
        label="Cellphone"
      >
        <InputGroup.Root>
          <InputGroup.Addon>+81</InputGroup.Addon>
          <Input
            type="tel"
            placeholder="090-0000-0000"
            {...register("cellphone", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup.Root>
      </Field.Root>

      <Field.Root
        errorMessage={errors.email?.message}
        invalid={!!errors.email}
        label="Email"
      >
        <InputGroup.Root>
          <InputGroup.Element>
            <MailIcon />
          </InputGroup.Element>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup.Root>
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
