import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  Center,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  Wrap,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Popover>

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "Components / Overlay / Popover",
}

export default meta

export const basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withFooter: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
          <PopoverFooter>第280話</PopoverFooter>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withAnchor: Story = () => {
  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover closeOnBlur={false}>
        <PopoverAnchor>
          <Text>Here display Popover</Text>
        </PopoverAnchor>

        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
          <PopoverFooter>第280話</PopoverFooter>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withDuration: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover duration={0.7}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const controlPopover: Story = () => {
  const { open, onClose, onToggle } = useDisclosure()

  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button onClick={onToggle}>Open Popover</Button>

      <Popover closeOnBlur={false} open={open} onClose={onClose}>
        <PopoverTrigger>
          <Button colorScheme="primary">Target Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withOffset: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover offset={[16, 16]}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withGutter: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover gutter={32}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const withAnimation: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Popover animation="scale">
          <PopoverTrigger>
            <Button>Open scale Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover animation="top">
          <PopoverTrigger>
            <Button>Open top Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover animation="left">
          <PopoverTrigger>
            <Button>Open left Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover animation="bottom">
          <PopoverTrigger>
            <Button>Open bottom Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover animation="right">
          <PopoverTrigger>
            <Button>Open right Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Wrap>
    </Center>
  )
}

export const withPlacement: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Popover placement="top">
          <PopoverTrigger>
            <Button>Open top center Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="top-start">
          <PopoverTrigger>
            <Button>Open top start Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="top-end">
          <PopoverTrigger>
            <Button>Open top end Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="left">
          <PopoverTrigger>
            <Button>Open left center Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="left-start">
          <PopoverTrigger>
            <Button>Open left start Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="left-end">
          <PopoverTrigger>
            <Button>Open left end Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>Open bottom center Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button>Open bottom start Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Button>Open bottom end Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right">
          <PopoverTrigger>
            <Button>Open right center Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right-start">
          <PopoverTrigger>
            <Button>Open right start Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right-end">
          <PopoverTrigger>
            <Button>Open right end Popover</Button>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>ベジータ!</PopoverHeader>
            <PopoverBody>
              がんばれカカロット……お前がナンバー１だ！！
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Wrap>
    </Center>
  )
}

export const disabledCloseButton: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover closeOnButton={false}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const customCloseButton: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverCloseButton color="gray.400" />
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const changeTrigger: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover trigger="hover">
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const disabledCloseBlur: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover closeOnBlur={false}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}

export const useLazy: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Popover lazy>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>

        <PopoverContent>
          <PopoverHeader>ベジータ!</PopoverHeader>
          <PopoverBody>がんばれカカロット……お前がナンバー１だ！！</PopoverBody>
        </PopoverContent>
      </Popover>
    </Center>
  )
}
