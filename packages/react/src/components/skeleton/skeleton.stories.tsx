import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useAsync } from "../../hooks/use-async"
import { Avatar } from "../avatar"
import { Badge } from "../badge"
import { Heading } from "../heading"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { Skeleton, SkeletonCircle, SkeletonText } from "./"

type Story = StoryFn<typeof Skeleton>

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "Components / Skeleton",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const Basic: Story = () => {
  return (
    <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["pulse", "shine"]}>
      {(_, row, key) => (
        <VStack key={key} gap="md">
          <HStack>
            <SkeletonCircle variant={row} />

            <SkeletonText variant={row} lineClamp={2} />
          </HStack>

          <Skeleton variant={row} h="4xs" />
        </VStack>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <VStack gap="md">
      <HStack>
        <SkeletonCircle boxSize="14" />

        <SkeletonText h="6" lineClamp={2} />
      </HStack>

      <Skeleton h="20" />
    </VStack>
  )
}

export const Children: Story = () => {
  return (
    <>
      <HStack>
        <Skeleton>
          <Badge>Badge</Badge>
        </Skeleton>

        <Skeleton loading={false}>
          <Badge>Badge</Badge>
        </Skeleton>
      </HStack>

      <HStack>
        <SkeletonCircle>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </SkeletonCircle>

        <SkeletonCircle loading={false}>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
          />
        </SkeletonCircle>
      </HStack>
    </>
  )
}

export const StartAndEndColor: Story = () => {
  return (
    <VStack gap="md">
      <HStack>
        <SkeletonCircle
          variant="shine"
          endColor="pink.500"
          startColor="orange.500"
        />

        <SkeletonText
          variant="shine"
          endColor="pink.500"
          lineClamp={2}
          startColor="orange.500"
        />
      </HStack>

      <Skeleton
        variant="shine"
        endColor="pink.500"
        h="4xs"
        startColor="orange.500"
      />
    </VStack>
  )
}

export const Duration: Story = () => {
  return (
    <>
      <Skeleton duration={2} />

      <SkeletonCircle duration={2} />

      <SkeletonText duration={2} />
    </>
  )
}

export const TextGap: Story = () => {
  return <SkeletonText gap="md" />
}

export const TextLineClamp: Story = () => {
  return <SkeletonText lineClamp={5} />
}

export const Loaded: Story = () => {
  const { loading } = useAsync(async () => {
    await wait(3000)
  })

  return (
    <VStack gap="md">
      <HStack>
        <SkeletonCircle loading={loading}>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            size="xl"
          />
        </SkeletonCircle>

        <SkeletonText lineClamp={2} loading={loading} _loading={{ h: "5" }}>
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>
  )
}

export const FadeDuration: Story = () => {
  const { loading } = useAsync(async () => {
    await wait(3000)
  })

  return (
    <VStack gap="md">
      <HStack>
        <SkeletonCircle fadeDuration={2} loading={loading}>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            size="xl"
          />
        </SkeletonCircle>

        <SkeletonText
          fadeDuration={2}
          lineClamp={2}
          loading={loading}
          _loading={{ h: "5" }}
        >
          <Text fontWeight="bold" lineClamp={1}>
            Hirotomo Yamada
          </Text>
          <Text lineClamp={1}>
            Developer of Yamada UI. Designer, design system and UI engineer.
          </Text>
        </SkeletonText>
      </HStack>

      <Skeleton fadeDuration={2} loading={loading}>
        <Heading lineClamp={1}>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>
    </VStack>
  )
}
