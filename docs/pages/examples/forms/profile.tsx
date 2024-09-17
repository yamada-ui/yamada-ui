import {
  Input,
  Textarea,
  Button,
  FormControl,
  HelperMessage,
  Autocomplete,
  VStack,
  Text,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { Fragment, memo } from "react"
import type { FC } from "react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Form } from "./form"

const EMAIL_ITEMS = [
  { label: "m@example.com", value: "m@example.com" },
  { label: "m@google.com", value: "m@google.com" },
  { label: "m@support.com", value: "m@support.com" },
]

interface Data {
  username: string
  email: string
  bio: string
  urls: { url: string }[]
}

export interface ProfileProps extends StackProps {}

export const Profile: FC<ProfileProps> = memo(({ ...rest }) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>({
    defaultValues: {
      urls: [
        { url: "https://yamada-ui.com/" },
        { url: "https://twitter.com/hirotomoyamada" },
      ],
    },
  })
  const { fields, append } = useFieldArray({
    control,
    name: "urls",
    rules: { maxLength: 5 },
  })

  const onSubmit: SubmitHandler<Data> = () => {}

  return (
    <Form
      title="Profile"
      description="This is how others will see you on the site."
      submit="Update profile"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        label="Username"
        helperMessage="This is your public display name. It can be your real name or a
        pseudonym. You can only change this once every 30 days."
        isReplace={false}
        isInvalid={!!errors.username?.message}
        errorMessage={errors.username?.message}
      >
        <Input
          placeholder="yamada"
          autoComplete="username"
          {...register("username", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <FormControl
        label="Email"
        helperMessage="You can manage verified email addresses in your email settings."
        isReplace={false}
        isInvalid={!!errors.email?.message}
        errorMessage={errors.email?.message}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete
              placeholder="Select a verified email to display"
              items={EMAIL_ITEMS}
              {...field}
            />
          )}
        />
      </FormControl>

      <FormControl
        label="Bio"
        helperMessage="You can @mention other users and organizations to link to them."
        isReplace={false}
        isInvalid={!!errors.bio?.message}
        errorMessage={errors.bio?.message}
      >
        <Textarea
          defaultValue="I own a computer"
          {...register("bio", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <FormControl label="URLs">
        <HelperMessage mb="sm">
          Add links to your website, blog, or social media profiles.
        </HelperMessage>

        <VStack>
          <VStack gap="sm">
            {fields.map(({ id }, index) => (
              <Fragment key={id}>
                <Input
                  {...register(`urls.${index}.url`, {
                    required: { value: true, message: "This is required." },
                  })}
                  isInvalid={!!errors.urls?.[index]?.url?.message}
                />

                {errors.urls?.[index]?.url?.message ? (
                  <Text color={["danger.500", "danger.400"]} fontSize="sm">
                    {errors.urls?.[index]?.url?.message}
                  </Text>
                ) : null}
              </Fragment>
            ))}
          </VStack>

          <Button alignSelf="flex-start" onClick={() => append({ url: "" })}>
            Add URL
          </Button>
        </VStack>
      </FormControl>
    </Form>
  )
})

Profile.displayName = "Profile"
