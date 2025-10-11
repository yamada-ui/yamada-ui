import { Center, Calendar as OriginalCalendar } from "@yamada-ui/react"

export function Calendar() {
  return (
    <Center
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <OriginalCalendar.Root
        colorScheme="primary"
        size="lg"
        defaultValue={{
          end: new Date(new Date().setDate(18)),
          start: new Date(new Date().setDate(8)),
        }}
        fixed={false}
        range
      />
    </Center>
  )
}
