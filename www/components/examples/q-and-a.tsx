import { Accordion, Heading, VStack } from "@yamada-ui/react"

export function QAndA() {
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
        Q&A
      </Heading>

      <Accordion.Root
        variant="panel"
        defaultIndex={0}
        items={[
          {
            button: "What is Yamada UI?",
            children:
              "Yamada UI is a component library for building web applications.",
          },
          {
            button: "Is it beautiful?",
            children: "Yes, Yamada UI is beautiful.",
          },
          {
            button: "Is Yamada cool?",
            children: "Yes, Yamada is cool. And Yamada is wonderful.",
          },
        ]}
      />
    </VStack>
  )
}
