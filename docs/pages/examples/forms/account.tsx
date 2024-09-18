import { DatePicker } from "@yamada-ui/calendar"
import { Input, FormControl, Autocomplete } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
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
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = () => {}

  return (
    <Form
      title="Account"
      description="Update your account settings. Set your preferred language and timezone."
      submit="Update account"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        label="Name"
        helperMessage="This is the name that will be displayed on your profile and in emails."
        isReplace={false}
        isInvalid={!!errors.name?.message}
        errorMessage={errors.name?.message}
      >
        <Input
          placeholder="Your name"
          autoComplete="username"
          {...register("name", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <FormControl
        label="Date of birth"
        helperMessage="Your date of birth is used to calculate your age."
        isReplace={false}
        isInvalid={!!errors.dateOfBirth?.message}
        errorMessage={errors.dateOfBirth?.message}
      >
        <Controller
          name="dateOfBirth"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <DatePicker
              autoComplete="bday"
              maxW="xs"
              placeholder="Pick a date"
              {...field}
            />
          )}
        />
      </FormControl>

      <FormControl
        label="Language"
        helperMessage="This is the language that will be used in the dashboard."
        isReplace={false}
        isInvalid={!!errors.language?.message}
        errorMessage={errors.language?.message}
      >
        <Controller
          name="language"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete
              maxW="xs"
              autoComplete="language"
              placeholder="Select language"
              items={LANGUAGE_ITEMS}
              {...field}
            />
          )}
        />
      </FormControl>
    </Form>
  )
})

Account.displayName = "Account"
