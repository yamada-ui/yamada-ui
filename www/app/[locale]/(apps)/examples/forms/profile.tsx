import type { StackProps } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Autocomplete,
  Button,
  Field,
  Input,
  noop,
  Text,
  Textarea,
  VStack,
} from "@yamada-ui/react"
import { Fragment } from "react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { Form } from "./form"

const EMAIL_ITEMS = [
  { label: "m@example.com", value: "m@example.com" },
  { label: "m@google.com", value: "m@google.com" },
  { label: "m@support.com", value: "m@support.com" },
]

interface Data {
  bio: string
  email: string
  urls: { url: string }[]
  username: string
}

export interface ProfileProps extends StackProps {}

export function Profile({ ...rest }: ProfileProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>({
    defaultValues: {
      urls: [
        { url: "https://yamada-ui.com/" },
        { url: "https://twitter.com/hirotomoyamada" },
      ],
    },
  })
  const { append, fields } = useFieldArray({
    name: "urls",
    control,
    rules: { maxLength: 5 },
  })

  const onSubmit: SubmitHandler<Data> = noop

  return (
    <Form
      description="This is how others will see you on the site."
      submit="Update profile"
      title="Profile"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <Field.Root
        errorMessage={errors.username?.message}
        helperMessage="This is your public display name. It can be your real name or a
        pseudonym. You can only change this once every 30 days."
        invalid={!!errors.username?.message}
        label="Username"
        replace={false}
      >
        <Input
          autoComplete="username"
          placeholder="yamada"
          {...register("username", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.email?.message}
        helperMessage="You can manage verified email addresses in your email settings."
        invalid={!!errors.email?.message}
        label="Email"
        replace={false}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Autocomplete.Root
              items={EMAIL_ITEMS}
              placeholder="Select a verified email to display"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.bio?.message}
        helperMessage="You can @mention other users and organizations to link to them."
        invalid={!!errors.bio?.message}
        label="Bio"
        replace={false}
      >
        <Textarea
          defaultValue="I own a computer"
          {...register("bio", {
            required: { message: "This is required.", value: true },
          })}
        />
      </Field.Root>

      <Field.Root label="URLs">
        <Text color="fg.muted" fontSize="xs" mb="sm">
          Add links to your website, blog, or social media profiles.
        </Text>

        <VStack gap="md">
          <VStack gap="sm">
            {fields.map(({ id }, index) => (
              <Fragment key={id}>
                <Input
                  {...register(`urls.${index}.url`, {
                    required: { message: "This is required.", value: true },
                  })}
                  invalid={!!errors.urls?.[index]?.url?.message}
                />

                {errors.urls?.[index]?.url?.message ? (
                  <Text color={["danger.500", "danger.400"]} fontSize="sm">
                    {errors.urls[index].url.message}
                  </Text>
                ) : null}
              </Fragment>
            ))}
          </VStack>

          <Button alignSelf="flex-start" onClick={() => append({ url: "" })}>
            Add URL
          </Button>
        </VStack>
      </Field.Root>
    </Form>
  )
}
