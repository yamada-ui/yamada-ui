import {
  Input,
  Select,
  Spacer,
  Text,
  Option,
  VStack,
  Divider,
  Textarea,
  Button,
} from "@yamada-ui/react"
import { memo } from "react"

const emails = ["m@example.com", "m@google.com", "m@support.com"]

export const ProfileForm = memo(() => {
  return (
    <VStack divider={<Divider />}>
      <>
        <Text as="h5" fontSize="xl">
          Profile
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          This is how others will see you on the site.
        </Text>
      </>
      <>
        <Text as="h6" fontSize="sm">
          Username
        </Text>
        <Input placeholder="yamada" />
        <Text as="p" color="muted" fontSize="xs">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Email
        </Text>
        <Select>
          {emails.map((email, index) => (
            <Option key={index} value={email}>
              {email}
            </Option>
          ))}
        </Select>
        <Text as="p" color="muted" fontSize="xs">
          You can manage verified email addresses in your email settings.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          Bio
        </Text>
        <Textarea defaultValue="I own a computer" />
        <Text as="p" color="muted" fontSize="xs">
          You can @mention other users and organizations to link to them.
        </Text>
        <Spacer />
        <Text as="h6" fontSize="sm">
          URLs
        </Text>
        <Text as="p" color="muted" fontSize="xs">
          Add links to your website, blog, or social media profiles.
        </Text>
        <Input defaultValue="https://yamada-ui.com/" />
        <Input defaultValue="https://twitter.com/hirotomoyamada" />
        <Button width="xs">Add URL</Button>
        <Spacer />
        <Button
          width="xs"
          bgColor="black"
          color="white"
          _hover={{ bgColor: "black" }}
        >
          Update profile
        </Button>
      </>
    </VStack>
  )
})

ProfileForm.displayName = "ProfileForm"
