import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { For } from "../../components/for"
import { COLOR_SCHEMES, transformSize } from "../../utils"
import { Button } from "../button"
import { Heading } from "../heading"
import { Image } from "../image"
import { VStack } from "../stack"
import { Text } from "../text"
import { Card } from "./"

type Story = StoryFn<typeof Card.Root>

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
  title: "Components / Card",
}

export default meta

export const Basic: Story = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading size="xl">『SLAM DUNK』（スラムダンク）</Heading>
      </Card.Header>

      <Card.Body color="fg.muted">
        <Text>
          『SLAM
          DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
        </Text>
      </Card.Body>
    </Card.Root>
  )
}

export const Variant: Story = () => {
  return (
    <For each={["panel", "elevated", "solid", "subtle", "surface", "outline"]}>
      {(variant, index) => (
        <Card.Root key={index} variant={variant}>
          <Card.Header>
            <Heading size="xl">『SLAM DUNK』（スラムダンク）</Heading>
          </Card.Header>

          <Card.Body>
            <Text>
              『SLAM
              DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
            </Text>
          </Card.Body>
        </Card.Root>
      )}
    </For>
  )
}

export const Size: Story = () => {
  return (
    <For each={["sm", "md", "lg"]}>
      {(size, index) => (
        <Card.Root key={index} size={size}>
          <Card.Header>
            <Heading size={transformSize(size, 2)}>
              『SLAM DUNK』（スラムダンク）
            </Heading>
          </Card.Header>

          <Card.Body>
            <Text color="fg.muted">
              『SLAM
              DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
            </Text>
          </Card.Body>
        </Card.Root>
      )}
    </For>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Card.Root key={key} colorScheme={row} variant={column}>
            <Card.Header>
              <Heading size="xl">Card</Heading>
            </Card.Header>

            <Card.Body>
              <Text>ColorScheme is {row}</Text>
            </Card.Body>
          </Card.Root>
        )
      }}
    </PropsTable>
  )
}

export const Horizontal: Story = () => {
  return (
    <Card.Root
      variant="outline"
      flexDirection={{ base: "row", md: "column" }}
      overflow="hidden"
    >
      <Image
        src="https://slamdunk-movie.jp/files/images/p_gallery_03.jpg"
        alt="SLAM DUNK"
        maxW={{ base: "30%", md: "100%" }}
        objectFit="cover"
      />

      <VStack gap="0">
        <Card.Header>
          <Heading size="xl">『SLAM DUNK』（スラムダンク）</Heading>
        </Card.Header>

        <Card.Body color="fg.muted">
          <Text>
            『SLAM
            DUNK』（スラムダンク）は、バスケットボールを題材にした井上雄彦による日本の漫画作品。主人公の不良少年桜木花道の挑戦と成長を軸にしたバスケットボール漫画。
          </Text>
        </Card.Body>

        <Card.Footer>
          <Button colorScheme="primary">Wikipedia</Button>
        </Card.Footer>
      </VStack>
    </Card.Root>
  )
}
