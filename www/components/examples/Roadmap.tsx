import { Heading, Timeline, VStack } from "@yamada-ui/react"

export function Roadmap() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <Heading as="h2" size="xl">
        Roadmap
      </Heading>

      <Timeline.Root
        items={[
          {
            description: (
              <>
                Everything started from here.
                <br />
                Release at 2023-12-25
              </>
            ),
            title: "Version 1.0.0",
          },
          {
            description: (
              <>
                The legend begins again from here.
                <br />
                Release at 2025-10-17
              </>
            ),
            title: "Version 2.0.0",
          },
        ]}
      />
    </VStack>
  )
}
