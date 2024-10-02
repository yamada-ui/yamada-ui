import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Check, Mail, Phone } from "@yamada-ui/lucide"
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
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="sm" />
      <Input placeholder="medium size" size="md" />
      <Input placeholder="large size" size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Input placeholder="outline" variant="outline" />
      <Input placeholder="filled" variant="filled" />
      <Input placeholder="flushed" variant="flushed" />
      <Input placeholder="unstyled" variant="unstyled" />
    </>
  )
}

export const withHTMLSize: Story = () => {
  return (
    <>
      <Input htmlSize={4} width="auto" aria-label="Input" />
    </>
  )
}

export const withBorderColor: Story = () => {
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

export const isDisabled: Story = () => {
  return (
    <>
      <Input isDisabled placeholder="outline" variant="outline" />
      <Input isDisabled placeholder="filled" variant="filled" />
      <Input isDisabled placeholder="flushed" variant="flushed" />
      <Input isDisabled placeholder="unstyled" variant="unstyled" />

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

export const isReadonly: Story = () => {
  return (
    <>
      <Input isReadOnly placeholder="outline" variant="outline" />
      <Input isReadOnly placeholder="filled" variant="filled" />
      <Input isReadOnly placeholder="flushed" variant="flushed" />
      <Input isReadOnly placeholder="unstyled" variant="unstyled" />

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

export const isInvalid: Story = () => {
  return (
    <>
      <Input isInvalid placeholder="outline" variant="outline" />
      <Input isInvalid placeholder="filled" variant="filled" />
      <Input isInvalid placeholder="flushed" variant="flushed" />
      <Input isInvalid placeholder="unstyled" variant="unstyled" />

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
          <Phone />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <Mail />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <Check color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="your password"
          pr="4.5rem"
        />
        <InputRightElement isClickable w="4.5rem">
          <Button h="1.75rem" size="sm" onClick={toggle}>
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
        _dark={{ _placeholder: { color: "blue.500", opacity: 1 } }}
        _placeholder={{ color: "blue.500", opacity: 1 }}
        placeholder="custom placeholder"
      />
      <Input
        _dark={{
          _placeholder: { color: "inherit" },
        }}
        _placeholder={{ color: "inherit" }}
        color="green.500"
        placeholder="custom placeholder"
      />
    </>
  )
}

export const customType: Story = () => {
  return (
    <>
      <Input
        type="datetime-local"
        placeholder="Select Date and Time"
        size="md"
      />
    </>
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
            <Mail />
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
            <Mail />
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
