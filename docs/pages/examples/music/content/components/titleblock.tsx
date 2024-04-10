import { VStack, Heading, Text, Divider } from "@yamada-ui/react"
import React from "react"

interface TitleBlockComponentProps {
  title: string
  outline: string
}

const TitleBlockComponent: React.FC<TitleBlockComponentProps> = ({
  title,
  outline,
}) => {
  return (
    <VStack>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray">
        {outline}
      </Text>
      <Divider />
    </VStack>
  )
}

export default TitleBlockComponent
