import { Tag, Text, useOS } from '@yamada-ui/react'

export default {
  title: 'Hooks / useOS',
}

export const basic = () => {
  const os = useOS()

  return (
    <Text>
      Your os is <Tag>{os}</Tag>
    </Text>
  )
}
