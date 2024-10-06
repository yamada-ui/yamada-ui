import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import { DatePicker } from "@yamada-ui/calendar"
import { Autocomplete, FormControl, Input, noop } from "@yamada-ui/react"
import { memo } from "react"
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

export const Account: FC<AccountProps> = memo(({ ...rest }) => {
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
      <FormControl
        errorMessage={errors.name?.message}
        helperMessage="This is the name that will be displayed on your profile and in emails."
        isInvalid={!!errors.name?.message}
        isReplace={false}
        label="Name"
      >
        <Input
          autoComplete="username"
          placeholder="Your name"
          {...register("name", {
            required: { message: "This is required.", value: true },
          })}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.dateOfBirth?.message}
        helperMessage="Your date of birth is used to calculate your age."
        isInvalid={!!errors.dateOfBirth?.message}
        isReplace={false}
        label="Date of birth"
      >
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field }) => (
            <DatePicker
              autoComplete="bday"
              maxW="xs"
              placeholder="Pick a date"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.language?.message}
        helperMessage="This is the language that will be used in the dashboard."
        isInvalid={!!errors.language?.message}
        isReplace={false}
        label="Language"
      >
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <Autocomplete
              autoComplete="language"
              items={LANGUAGE_ITEMS}
              maxW="xs"
              placeholder="Select language"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>
    </Form>
  )
})

Account.displayName = "Account"
