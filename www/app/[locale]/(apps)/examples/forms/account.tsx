import type { StackProps } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { Autocomplete, DatePicker, Field, Input, noop } from "@yamada-ui/react"
import { Controller, useForm } from "react-hook-form"
import { Form } from "./form"

const LANGUAGE_ITEMS = [
  { label: "English", value: "English" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Spanish", value: "Spanish" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Russian", value: "Russian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Chinese", value: "Chinese" },
]

interface Data {
  name: string
  dateOfBirth: Date
  language: string
}

export interface AccountProps extends StackProps {}

export function Account({ ...rest }: AccountProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = noop

  return (
    <Form
      description="Update your account settings. Set your preferred language and timezone."
      submit="Update account"
      title="Account"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <Field.Root
        errorMessage={errors.name?.message}
        helperMessage="This is the name that will be displayed on your profile and in emails."
        invalid={!!errors.name?.message}
        label="Name"
        replace={false}
      >
        <Input
          autoComplete="username"
          placeholder="Your name"
          {...register("name", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.dateOfBirth?.message}
        helperMessage="Your date of birth is used to calculate your age."
        invalid={!!errors.dateOfBirth?.message}
        label="Date of birth"
        maxW="sm"
        replace={false}
      >
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <DatePicker placeholder="Pick a date" {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.language?.message}
        helperMessage="This is the language that will be used in the dashboard."
        invalid={!!errors.language?.message}
        label="Language"
        maxW="sm"
        replace={false}
      >
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <Autocomplete.Root
              items={LANGUAGE_ITEMS}
              placeholder="Select language"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>
    </Form>
  )
}
