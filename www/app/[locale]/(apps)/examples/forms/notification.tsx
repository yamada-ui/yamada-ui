import type { StackProps } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Checkbox,
  Field,
  HStack,
  noop,
  RadioGroup,
  Spacer,
  Switch,
  Text,
  VStack,
} from "@yamada-ui/react"
import { Controller, useForm } from "react-hook-form"
import { Form } from "./form"

const NOTIFY_ME_ABOUT_ITEMS = [
  { label: "All new messages", value: "All new messages" },
  {
    label: "Direct messages and mentions",
    value: "Direct messages and mentions",
  },
  { label: "Nothing", value: "Nothing" },
]

const EMAIL_NOTIFICATIONS_ITEMS = [
  {
    name: "communicationEmails",
    description: "Receive emails about your account activity.",
    title: "Communication emails",
  },
  {
    name: "marketingEmails",
    description: "Receive emails about new products, features, and more.",
    title: "Marketing emails",
  },
  {
    name: "socialEmails",
    description: "Receive emails for friend requests, follows, and more.",
    title: "Social emails",
  },
  {
    name: "securityEmails",
    description: "Receive emails about your account activity and security.",
    title: "Security emails",
  },
] as const

interface Data {
  communicationEmails: boolean
  marketingEmails: boolean
  notifyMeAbout: string
  securityEmails: boolean
  socialEmails: boolean
  useDifferent: boolean
}

export interface NotificationsProps extends StackProps {}

export function Notifications({ ...rest }: NotificationsProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = noop

  return (
    <Form
      description="Configure how you receive notifications."
      submit="Update notifications"
      title="Notifications"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <Field.Root
        errorMessage={errors.notifyMeAbout?.message}
        invalid={!!errors.notifyMeAbout?.message}
        label="Notify me about..."
      >
        <Controller
          name="notifyMeAbout"
          control={control}
          render={({ field }) => (
            <RadioGroup.Root items={NOTIFY_ME_ABOUT_ITEMS} {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <VStack as="ul" gap="md">
        <Text fontSize="lg">Email Notifications</Text>

        {EMAIL_NOTIFICATIONS_ITEMS.map(
          ({ name, description, title }, index) => (
            <HStack key={index} as="li" borderWidth="1px" p="md" rounded="l3">
              <VStack gap="xs">
                <Text fontSize="md">{title}</Text>
                <Text color="fg.muted" fontSize="sm">
                  {description}
                </Text>
              </VStack>

              <Spacer />

              <Switch {...register(name)} />
            </HStack>
          ),
        )}
      </VStack>

      <Field.Root helperMessage="You can manage your mobile notifications in the mobile settings page.">
        <Checkbox {...register("useDifferent")}>
          Use different settings for my mobile devices
        </Checkbox>
      </Field.Root>
    </Form>
  )
}
