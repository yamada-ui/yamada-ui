import { Avatar, Heading, HStack, Select, Text, VStack } from "@yamada-ui/react"

export function Role() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <VStack gap="xs">
        <Heading as="h2" size="xl">
          Role
        </Heading>

        <Text color="fg.muted" fontSize="sm">
          Manage members' role and permissions
        </Text>
      </VStack>

      <HStack>
        <HStack flex="1" gap="sm">
          <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" />

          <VStack gap="0">
            <Heading as="h3" size="sm" lineClamp={1}>
              Hirotomo Yamada
            </Heading>

            <Text color="fg.muted" fontSize="xs" lineClamp={1}>
              @hirotomoyamada
            </Text>
          </VStack>
        </HStack>

        <Select.Root
          defaultValue="owner"
          items={[
            { label: "Owner", value: "owner" },
            { label: "Admin", value: "admin" },
            { label: "Member", value: "member" },
            { label: "Guest", value: "guest" },
          ]}
          rootProps={{ w: "4xs" }}
        />
      </HStack>

      <HStack>
        <HStack flex="1" gap="sm">
          <Avatar src="https://avatars.githubusercontent.com/u/24850340?v=4" />

          <VStack gap="0">
            <Heading as="h3" size="sm" lineClamp={1}>
              hajimemat
            </Heading>

            <Text color="fg.muted" fontSize="xs" lineClamp={1}>
              @hajime_mat
            </Text>
          </VStack>
        </HStack>

        <Select.Root
          defaultValue="owner"
          items={[
            { label: "Owner", value: "owner" },
            { label: "Admin", value: "admin" },
            { label: "Member", value: "member" },
            { label: "Guest", value: "guest" },
          ]}
          rootProps={{ w: "4xs" }}
        />
      </HStack>
    </VStack>
  )
}
