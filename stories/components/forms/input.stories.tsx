import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, MailIcon, PhoneIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof Input>

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components / Forms / Input",
}

export default meta

export const basic: Story = () => {
  return <Input placeholder="basic" />
}

export const withSize: Story = () => {
  return (
    <>
      <Input size="xs" placeholder="extra small size" />
      <Input size="sm" placeholder="small size" />
      <Input size="md" placeholder="medium size" />
      <Input size="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withHTMLSize: Story = () => {
  return <Input aria-label="Input" htmlSize={4} width="auto" />
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <Input variant="outline" disabled placeholder="outline" />
      <Input variant="filled" disabled placeholder="filled" />
      <Input variant="flushed" disabled placeholder="flushed" />
      <Input variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        helperMessage="We'll never share your email."
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Input variant="outline" placeholder="outline" readOnly />
      <Input variant="filled" placeholder="filled" readOnly />
      <Input variant="flushed" placeholder="flushed" readOnly />
      <Input variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        helperMessage="We'll never share your email."
        label="Email address"
        readOnly
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <Input variant="outline" invalid placeholder="outline" />
      <Input variant="filled" invalid placeholder="filled" />
      <Input variant="flushed" invalid placeholder="flushed" />
      <Input variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="Email is required."
        invalid
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const useAddon: Story = () => {
  return (
    <>
      <InputGroup>
        <InputLeftAddon>+81</InputLeftAddon>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder="your site address" />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </>
  )
}

export const useElement: Story = () => {
  const [show, { toggle }] = useBoolean()

  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <PhoneIcon />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <MailIcon />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="your password"
          pr="4.5rem"
        />
        <InputRightElement clickable w="4.5rem">
          <Button size="sm" h="1.75rem" onClick={toggle}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  )
}

export const stylingPlaceholder: Story = () => {
  return (
    <>
      <Input placeholder="default placeholder" />
      <Input
        placeholder="custom placeholder"
        _dark={{ _placeholder: { color: "blue.500", opacity: 1 } }}
        _placeholder={{ color: "blue.500", opacity: 1 }}
      />
      <Input
        color="green.500"
        placeholder="custom placeholder"
        _dark={{
          _placeholder: { color: "inherit" },
        }}
        _placeholder={{ color: "inherit" }}
      />
    </>
  )
}

export const customType: Story = () => {
  return (
    <Input type="datetime-local" size="md" placeholder="Select Date and Time" />
  )
}

export const reactHookForm: Story = () => {
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
      <FormControl
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
      </FormControl>

      <FormControl
        errorMessage={errors.cellphone?.message}
        invalid={!!errors.cellphone}
        label="Cellphone"
      >
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input
            type="tel"
            placeholder="0000-0000"
            {...register("cellphone", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup>
      </FormControl>

      <FormControl
        errorMessage={errors.email?.message}
        invalid={!!errors.email}
        label="Email"
      >
        <InputGroup>
          <InputLeftElement>
            <MailIcon />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
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
      <FormControl
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
      </FormControl>

      <FormControl
        errorMessage={errors.cellphone?.message}
        invalid={!!errors.cellphone}
        label="Cellphone"
      >
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input
            type="tel"
            placeholder="090-0000-0000"
            {...register("cellphone", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup>
      </FormControl>

      <FormControl
        errorMessage={errors.email?.message}
        invalid={!!errors.email}
        label="Email"
      >
        <InputGroup>
          <InputLeftElement>
            <MailIcon />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { message: "This is required.", value: true },
            })}
          />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
