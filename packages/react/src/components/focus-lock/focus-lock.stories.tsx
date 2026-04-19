import type { Meta, StoryFn } from "@storybook/react-vite"
import { FocusLock } from "."
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button } from "../button"
import { Collapse } from "../collapse"
import { Input } from "../input"
import { VStack } from "../stack"

type Story = StoryFn<typeof FocusLock>

const meta: Meta<typeof FocusLock> = {
  component: FocusLock,
  parameters: { layout: "centered" },
  title: "Components / FocusLock",
}

export default meta

export const Basic: Story = () => {
  const { open, onToggle } = useDisclosure({ defaultOpen: true })

  return (
    <VStack align="flex-start" gap="0">
      <Button onClick={onToggle}>Please Click</Button>

      <Collapse open={open}>
        <FocusLock>
          <VStack bg="bg.panel" mt="lg" p="lg" rounded="l2">
            <Input bg="bg" placeholder="This is Input" />
            <Button alignSelf="flex-end">Button</Button>
          </VStack>
        </FocusLock>
      </Collapse>
    </VStack>
  )
}
