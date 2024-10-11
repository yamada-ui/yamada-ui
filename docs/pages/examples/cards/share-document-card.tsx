import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Input,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"
import { UserCard } from "./user-card"

export const ShareDocumentCard = memo(() => {
  return (
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Share this document
        </Heading>
        <Text color="muted">Anyone with the link can view this document.</Text>
      </CardHeader>

      <CardBody>
        <HStack
          alignItems={{ base: "center", sm: "stretch" }}
          flexDirection={{ base: "row", sm: "column" }}
          gap="sm"
          w="full"
        >
          <Input defaultValue="https://example.com/link/to/document" flex={1} />

          <Button>Copy Link</Button>
        </HStack>

        <Text>People with access</Text>

        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/84060430?v=4"
          defaultValue="Can edit"
          options={["Can edit", "Can view"]}
          userId="@hirotomoyamada"
          username="Hirotomo Yamada"
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/61367823?v=4"
          defaultValue="Can edit"
          options={["Can edit", "Can view"]}
          userId="@taroj1205"
          username="Shintaro Jokagi"
        />
        <UserCard
          avatarSrc="https://avatars.githubusercontent.com/u/24850340?v=4"
          defaultValue="Can view"
          options={["Can edit", "Can view"]}
          userId="@hajime_mat"
          username="hajimemat"
        />
      </CardBody>
    </Card>
  )
})

ShareDocumentCard.displayName = "ShareDocumentCard"
