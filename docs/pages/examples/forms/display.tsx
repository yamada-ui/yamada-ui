import { FormControl, CheckboxGroup, HelperMessage } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
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

  const onSubmit: SubmitHandler<Data> = () => {}

  return (
    <Form
      title="Display"
      description="Turn items on or off to control what's displayed in the app."
      submit="Update display"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        label="Sidebar"
        isReplace={false}
        isInvalid={!!errors.sidebar?.message}
        errorMessage={errors.sidebar?.message}
      >
        <HelperMessage mb="sm">
          Select the items you want to display in the sidebar.
        </HelperMessage>

        <Controller
          name="sidebar"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <CheckboxGroup items={SIDEBAR_ITEMS} {...field} />
          )}
        />
      </FormControl>
    </Form>
  )
})

Display.displayName = "Display"
