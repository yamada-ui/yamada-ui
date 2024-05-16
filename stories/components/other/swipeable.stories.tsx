import type { Meta, StoryFn } from "@storybook/react"
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Swipeable,
  Text,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Swipeable>

const meta: Meta<typeof Swipeable> = {
  title: "Components / Other / Swipeable",
  component: Swipeable,
}

export default meta

export const basic: Story = () => {
  const renderLeftAction = () => (
    <Box
      h="100%"
      w="100%"
      background="green.500"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      px={4}
    >
      <Text>left</Text>
    </Box>
  )
  const renderRightAction = () => (
    <Box
      h="100%"
      w="100%"
      background="red.500"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      px={4}
    >
      <Text textAlign="center">right</Text>
    </Box>
  )

  return (
    <Swipeable
      maxLeftSwipe={200}
      renderLeftActions={[{ children: renderLeftAction }]}
      renderRightActions={[{ children: renderRightAction }]}
    >
      <Card size="sm">
        <CardHeader>
          <Heading size="md">title</Heading>
        </CardHeader>
        <CardBody>
          <Text>body</Text>
        </CardBody>
      </Card>
    </Swipeable>
  )
}

export const multiActions: Story = () => {
  const renderLeftActions = [
    {
      children: () => (
        <Box
          h="100%"
          background="green.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Text>left1</Text>
        </Box>
      ),
    },
    {
      children: () => (
        <Box
          h="100%"
          background="blue.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Text>left2</Text>
        </Box>
      ),
    },
    {
      children: () => (
        <Box
          h="100%"
          background="gray.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Text>left3</Text>
        </Box>
      ),
    },
  ]
  const renderRightActions = () => (
    <Box
      h="100%"
      w="100%"
      background="red.500"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      px={4}
    >
      <Text textAlign="center">right</Text>
    </Box>
  )

  return (
    <Swipeable
      maxLeftSwipe={200}
      overshootLeft={false}
      renderLeftActions={renderLeftActions}
      renderRightActions={[{ children: renderRightActions }]}
    >
      <Card size="sm">
        <CardHeader>
          <Heading size="md">title</Heading>
        </CardHeader>
        <CardBody>
          <Text>body</Text>
        </CardBody>
      </Card>
    </Swipeable>
  )
}

export const customSwipe: Story = () => {
  return <></>
}
