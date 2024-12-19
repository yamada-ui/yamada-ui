import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import { useBoolean } from "../../hooks/use-boolean"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { CheckIcon, MailIcon, PhoneIcon } from "../icon"
import { VStack } from "../stack"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "./"

type Story = StoryFn<typeof Input>

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components / Input",
}

export default meta

export const Basic: Story = () => {
  return <Input placeholder="basic" />
}

export const WithSize: Story = () => {
  return (
    <>
      <Input size="xs" placeholder="extra small size" />
      <Input size="sm" placeholder="small size" />
      <Input size="md" placeholder="medium size" />
      <Input size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithHTMLSize: Story = () => {
  return <Input aria-label="Input" htmlSize={4} width="auto" />
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const IsDisabled: Story = () => {
  return (
    <>
      <Input variant="outline" isDisabled placeholder="outline" />
      <Input variant="filled" isDisabled placeholder="filled" />
      <Input variant="flushed" isDisabled placeholder="flushed" />
      <Input variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl
        helperMessage="We'll never share your email."
        isDisabled
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const IsReadonly: Story = () => {
  return (
    <>
      <Input variant="outline" isReadOnly placeholder="outline" />
      <Input variant="filled" isReadOnly placeholder="filled" />
      <Input variant="flushed" isReadOnly placeholder="flushed" />
      <Input variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl
        helperMessage="We'll never share your email."
        isReadOnly
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const IsInvalid: Story = () => {
  return (
    <>
      <Input variant="outline" isInvalid placeholder="outline" />
      <Input variant="filled" isInvalid placeholder="filled" />
      <Input variant="flushed" isInvalid placeholder="flushed" />
      <Input variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl
        errorMessage="Email is required."
        isInvalid
        label="Email address"
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const UseAddon: Story = () => {
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

export const UseElement: Story = () => {
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
        <InputRightElement isClickable w="4.5rem">
          <Button size="sm" h="1.75rem" onClick={toggle}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  )
}

export const StylingPlaceholder: Story = () => {
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

export const CustomType: Story = () => {
  return (
    <Input type="datetime-local" size="md" placeholder="Select Date and Time" />
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
      <FormControl
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
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
        isInvalid={!!errors.cellphone}
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
        isInvalid={!!errors.email}
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
      <FormControl
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
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
        isInvalid={!!errors.cellphone}
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
        isInvalid={!!errors.email}
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
