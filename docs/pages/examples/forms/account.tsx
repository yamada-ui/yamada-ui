import { DatePicker } from "@yamada-ui/calendar"
import {
  Input,
  Select,
  Spacer,
  Text,
  Option,
  VStack,
  Divider,
} from "@yamada-ui/react"
import { memo } from "react"

export const AccountForm = memo(() => {
  return (
    <VStack divider={<Divider />}>
      <>
        <Text as="h5" fontSize="xl">
          Account
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Update your account settings. Set your preferred language and
          timezone.
        </Text>
      </>
      <>
        <Text as="h6" fontSize="sm">
          Name
        </Text>
        <Input placeholder="Your name" />
        <Text as="p" color="muted" fontSize="xs">
          This is the name that will be displayed on your profile and in emails.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Date of birth
        </Text>
        <DatePicker placeholder="Pick a date" width="xs" />
        <Text as="p" color="muted" fontSize="xs">
          Your date of birth is used to calculate your age.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Language
        </Text>
        <Select width="xs">
          <Option value="English">English</Option>
          <Option value="French">French</Option>
          <Option value="German">German</Option>
          <Option value="Spanish">Spanish</Option>
          <Option value="Portuguese">Portuguese</Option>
          <Option value="Russian">Russian</Option>
          <Option value="Japanese">Japanese</Option>
          <Option value="Korean">Korean</Option>
          <Option value="Chinese">Chinese</Option>
        </Select>
        <Text as="p" color="muted" fontSize="xs">
          This is the language that will be used in the dashboard.
        </Text>
      </>
    </VStack>
  )
})

AccountForm.displayName = "AccountForm"
