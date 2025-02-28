import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { FrownIcon, SmileIcon } from "../icon"
import { VStack } from "../stack"
import { Text } from "../text"
import { PasswordInput, StrengthMeter } from "./"

type Story = StoryFn<typeof PasswordInput>

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Components / PasswordInput",
}

export default meta

export const Basic: Story = () => {
  return <PasswordInput placeholder="your password" />
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
          <PasswordInput
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

export const Variants: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <PasswordInput
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

export const DefaultVisible: Story = () => {
  return (
    <PasswordInput
      defaultValue="password"
      defaultVisible
      placeholder="your password"
    />
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <PasswordInput
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const Meter: Story = () => {
  const [value, setValue] = useState("Password")

  const getStrength = (password: string): number => {
    let strength = 0

    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    return strength
  }

  return (
    <VStack>
      <PasswordInput
        placeholder="your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <StrengthMeter value={getStrength(value)} />
    </VStack>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" disabled placeholder="outline" />
      <PasswordInput variant="filled" disabled placeholder="filled" />
      <PasswordInput variant="flushed" disabled placeholder="flushed" />
      <PasswordInput variant="unstyled" disabled placeholder="unstyled" />

      <Field.Root
        disabled
        helperMessage="We'll never share your password."
        label="Password"
      >
        <PasswordInput placeholder="your password" />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" placeholder="outline" readOnly />
      <PasswordInput variant="filled" placeholder="filled" readOnly />
      <PasswordInput variant="flushed" placeholder="flushed" readOnly />
      <PasswordInput variant="unstyled" placeholder="unstyled" readOnly />

      <Field.Root
        helperMessage="We'll never share your password."
        label="Password"
        readOnly
      >
        <PasswordInput placeholder="your password" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" invalid placeholder="outline" />
      <PasswordInput variant="filled" invalid placeholder="filled" />
      <PasswordInput variant="flushed" invalid placeholder="flushed" />
      <PasswordInput variant="unstyled" invalid placeholder="unstyled" />

      <Field.Root errorMessage="Email is required." invalid label="Password">
        <PasswordInput placeholder="your password" />
      </Field.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <PasswordInput
      placeholder="your password"
      visibilityIcon={{ off: <SmileIcon />, on: <FrownIcon /> }}
    />
  )
}

export const CustomControl: Story = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput
        placeholder="your password"
        visible={visible}
        onVisibleChange={setVisible}
      />
    </>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.password?.message}
        invalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </Field.Root>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    password: string
  }

  const defaultValues: Data = {
    password: "password",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.password?.message}
        invalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </Field.Root>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}
