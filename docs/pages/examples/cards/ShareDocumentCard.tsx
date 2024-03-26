import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Input,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"
import { UserCard } from "./UserCard"

export const ShareDocumentCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Share this document</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">Anyone with the link can view this document.</Text>
        <HStack w="full" gap={1}>
          <Input flex={1} defaultValue="https://example.com/link/to/document" />
          <Button>Copy Link</Button>
        </HStack>
        <Text>People with access</Text>
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          username="Hirotomo Yamada"
          userId="@hirotomoyamada"
          defaultValue="Can edit"
          options={["Can edit", "Can view"]}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/61367823?v=4"
          username="Shintaro Jokagi"
          userId="@taroj1205"
          defaultValue="Can edit"
          options={["Can edit", "Can view"]}
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/24850340?v=4"
          username="hajimemat"
          userId="@hajime_mat"
          defaultValue="Can view"
          options={["Can edit", "Can view"]}
        />
      </CardBody>
    </Card>
  )
})

ShareDocumentCard.displayName = "ShareDocumentCard"
