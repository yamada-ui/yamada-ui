import type { Meta } from "@storybook/react-vite"
import { useOS } from "."
import { Tag } from "../../components/tag"
import { Text } from "../../components/text"

const meta: Meta = {
  title: "Hooks / useOS",
}

export default meta

export const Basic = () => {
  const os = useOS()

  return (
    <Text>
      Your os is <Tag>{os}</Tag>
    </Text>
  )
}
