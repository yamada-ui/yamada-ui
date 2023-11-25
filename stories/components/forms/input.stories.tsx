import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Icon,
  Button,
  useBoolean,
  FormControl,
  VStack,
} from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import { FaPhone } from "react-icons/fa"

type Story = StoryFn<typeof Input>

const meta: Meta<typeof Input> = {
  title: "Components / Forms / Input",
  component: Input,
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
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withHTMLSize: Story = () => {
  return (
    <>
      <Input htmlSize={4} width="auto" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Input isDisabled variant="outline" placeholder="outline" />
      <Input isDisabled variant="filled" placeholder="filled" />
      <Input isDisabled variant="flushed" placeholder="flushed" />
      <Input isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Email address"
        helperMessage="We'll never share your email."
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Input isReadOnly variant="outline" placeholder="outline" />
      <Input isReadOnly variant="filled" placeholder="filled" />
      <Input isReadOnly variant="flushed" placeholder="flushed" />
      <Input isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Email address"
        helperMessage="We'll never share your email."
      >
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Input isInvalid variant="outline" placeholder="outline" />
      <Input isInvalid variant="filled" placeholder="filled" />
      <Input isInvalid variant="flushed" placeholder="flushed" />
      <Input isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="Email address"
        errorMessage="Email is required."
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
          <Icon as={FaPhone} color="gray.500" />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <FontAwesomeIcon icon={faCheck} color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="your password"
        />
        <InputRightElement w="4.5rem" isClick>
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
        placeholder="custom placeholder"
        _placeholder={{ opacity: 1, color: "blue.500" }}
        _dark={{ _placeholder: { opacity: 1, color: "blue.500" } }}
      />
      <Input
        color="green.500"
        placeholder="custom placeholder"
        _placeholder={{ color: "inherit" }}
        _dark={{
          _placeholder: { color: "inherit" },
        }}
      />
    </>
  )
}

export const customType: Story = () => {
  return (
    <>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { name: string; cellphone: string; email: string }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.name}
        label="Name"
        errorMessage={errors.name?.message}
      >
        <Input
          placeholder="孫悟空"
          {...register("name", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.cellphone}
        label="Cellphone"
        errorMessage={errors.cellphone?.message}
      >
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input
            type="tel"
            placeholder="0000-0000"
            {...register("cellphone", {
              required: { value: true, message: "This is required." },
            })}
          />
        </InputGroup>
      </FormControl>

      <FormControl
        isInvalid={!!errors.email}
        label="Email"
        errorMessage={errors.email?.message}
      >
        <InputGroup>
          <InputLeftElement>
            <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { value: true, message: "This is required." },
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
  type Data = { name: string; cellphone: string; email: string }

  const defaultValues: Data = {
    name: "孫悟空",
    cellphone: "090-1234-5678",
    email: "hoge@example.com",
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.name}
        label="Name"
        errorMessage={errors.name?.message}
      >
        <Input
          placeholder="孫悟空"
          {...register("name", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.cellphone}
        label="Cellphone"
        errorMessage={errors.cellphone?.message}
      >
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input
            type="tel"
            placeholder="090-0000-0000"
            {...register("cellphone", {
              required: { value: true, message: "This is required." },
            })}
          />
        </InputGroup>
      </FormControl>

      <FormControl
        isInvalid={!!errors.email}
        label="Email"
        errorMessage={errors.email?.message}
      >
        <InputGroup>
          <InputLeftElement>
            <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="your-address@example.com"
            {...register("email", {
              required: { value: true, message: "This is required." },
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
