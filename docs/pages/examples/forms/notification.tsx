import {
  Spacer,
  Text,
  Checkbox,
  VStack,
  HStack,
  Switch,
  FormControl,
  RadioGroup,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
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
    title: "Communication emails",
    description: "Receive emails about your account activity.",
  },
  {
    name: "marketingEmails",
    title: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
  {
    name: "socialEmails",
    title: "Social emails",
    description: "Receive emails for friend requests, follows, and more.",
  },
  {
    name: "securityEmails",
    title: "Security emails",
    description: "Receive emails about your account activity and security.",
  },
] as const

interface Data {
  notifyMeAbout: string
  communicationEmails: boolean
  marketingEmails: boolean
  socialEmails: boolean
  securityEmails: boolean
  useDifferent: boolean
}

export interface NotificationsProps extends StackProps {}

export const Notifications: FC<NotificationsProps> = memo(({ ...rest }) => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = () => {}

  return (
    <Form
      title="Notifications"
      description="Configure how you receive notifications."
      submit="Update notifications"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        label="Notify me about..."
        isInvalid={!!errors.notifyMeAbout?.message}
        errorMessage={errors.notifyMeAbout?.message}
      >
        <Controller
          name="notifyMeAbout"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <RadioGroup items={NOTIFY_ME_ABOUT_ITEMS} {...field} />
          )}
        />
      </FormControl>

      <VStack as="ul">
        <Text fontSize="xl">Email Notifications</Text>

        {EMAIL_NOTIFICATIONS_ITEMS.map(
          ({ name, title, description }, index) => (
            <HStack key={index} as="li" borderWidth="1px" rounded="md" p="md">
              <VStack gap="xs">
                <Text fontSize="lg">{title}</Text>
                <Text fontSize="sm" color="muted">
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
