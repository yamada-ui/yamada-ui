import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "@/storybook"
import { toTitleCase } from "../../utils"
import { HStack, VStack } from "../stack"
import { Status } from "./"

type Story = StoryFn<typeof Status>

const meta: Meta<typeof Status> = {
  component: Status,
  title: "Components / Status",
}

export default meta

export const Basic: Story = () => {
  return (
    <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>
  )
}

export const Label: Story = () => {
  return (
    <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>
  )
}

export const Size: Story = () => {
  return (
    <VStack>
      <PropsTable
        columns={["info", "success", "warning", "error"]}
        rows={["sm", "md", "lg"]}
      >
        {(column, row, key) => (
          <Status key={key} size={row} value={column}>
            {toTitleCase(column)}
          </Status>
        )}
      </PropsTable>
    </VStack>
  )
}
