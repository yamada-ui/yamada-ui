import type { StackProps } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckboxGroup, Field, noop } from "@yamada-ui/react"
import { Controller, useForm } from "react-hook-form"
import { Form } from "./form"

const SIDEBAR_ITEMS = [
  { label: "Recent", value: "Recent" },
  { label: "Home", value: "Home" },
  { label: "Applications", value: "Applications" },
  { label: "Desktop", value: "Desktop" },
  { label: "Downloads", value: "Downloads" },
  { label: "Documents", value: "Documents" },
]

interface Data {
  sidebar: string[]
}

export interface DisplayProps extends StackProps {}

export function Display({ ...rest }: DisplayProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = noop

  return (
    <Form
      description="Turn items on or off to control what's displayed in the app."
      submit="Update display"
      title="Display"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <Field.Root
        errorMessage={errors.sidebar?.message}
        helperMessage="Select the items you want to display in the sidebar."
        invalid={!!errors.sidebar?.message}
        label="Sidebar"
        replace={false}
      >
        <Controller
          name="sidebar"
          control={control}
          render={({ field }) => (
            <CheckboxGroup.Root items={SIDEBAR_ITEMS} {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>
    </Form>
  )
}
