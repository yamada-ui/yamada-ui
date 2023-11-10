import { Meta } from "@storybook/react"
import { Tag, Text, useOS } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useOS",
}

export default meta

export const basic = () => {
  const os = useOS()

  return (
    <Text>
      Your os is <Tag>{os}</Tag>
    </Text>
  )
}
