import type { StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import {
  Checkbox,
  FormControl,
  HStack,
  noop,
  RadioGroup,
  Spacer,
  Switch,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
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

export const Notifications: FC<NotificationsProps> = memo(({ ...rest }) => {
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
      <FormControl
        errorMessage={errors.notifyMeAbout?.message}
        isInvalid={!!errors.notifyMeAbout?.message}
        label="Notify me about..."
      >
        <Controller
          name="notifyMeAbout"
          control={control}
          render={({ field }) => (
            <RadioGroup items={NOTIFY_ME_ABOUT_ITEMS} {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <VStack as="ul">
        <Text fontSize="xl">Email Notifications</Text>

        {EMAIL_NOTIFICATIONS_ITEMS.map(
          ({ name, description, title }, index) => (
            <HStack key={index} as="li" borderWidth="1px" p="md" rounded="md">
              <VStack gap="xs">
                <Text fontSize="lg">{title}</Text>
                <Text color="muted" fontSize="sm">
                  {description}
                </Text>
              </VStack>

              <Spacer />

              <Switch {...register(name)} />
            </HStack>
          ),
        )}
      </VStack>

      <FormControl helperMessage="You can manage your mobile notifications in the mobile settings page.">
        <Checkbox {...register("useDifferent")}>
          Use different settings for my mobile devices
        </Checkbox>
      </FormControl>
    </Form>
  )
})

Notifications.displayName = "Notifications"
