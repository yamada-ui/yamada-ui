import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import {
  CheckboxGroup,
  FormControl,
  HelperMessage,
  noop,
} from "@yamada-ui/react"
import { memo } from "react"
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

export const Display: FC<DisplayProps> = memo(({ ...rest }) => {
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
      <FormControl
        errorMessage={errors.sidebar?.message}
        isInvalid={!!errors.sidebar?.message}
        isReplace={false}
        label="Sidebar"
      >
        <HelperMessage mb="sm">
          Select the items you want to display in the sidebar.
        </HelperMessage>

        <Controller
          name="sidebar"
          control={control}
          render={({ field }) => (
            <CheckboxGroup items={SIDEBAR_ITEMS} {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>
    </Form>
  )
})

Display.displayName = "Display"
