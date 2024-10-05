import type { Meta, StoryFn } from "@storybook/react"
import {
  Avatar,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@yamada-ui/react"
import { useEffect, useState } from "react"

type Story = StoryFn<typeof Skeleton>

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "Components / Feedback / Skeleton",
}

export default meta

const wait = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

export const basic: Story = () => {
  return (
    <>
      <Skeleton />

      <SkeletonCircle />

      <SkeletonText />
    </>
  )
}

export const withColor: Story = () => {
  return (
    <>
      <Skeleton endColor="orange.500" startColor="pink.500" />

      <SkeletonCircle endColor="orange.500" startColor="pink.500" />

      <SkeletonText endColor="orange.500" startColor="pink.500" />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>
  )
}

export const withSpeed: Story = () => {
  return (
    <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>
  )
}

export const withGap: Story = () => {
  return <SkeletonText gap={8} />
}

export const withLineClamp: Story = () => {
  return <SkeletonText lineClamp={5} />
}

export const withIsLoaded: Story = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton isLoaded={isLoaded} />

      <SkeletonCircle isLoaded={isLoaded} />

      <SkeletonText isLoaded={isLoaded} />
    </>
  )
}

export const withFadeDuration: Story = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton fadeDuration={2} h={12} isLoaded={isLoaded}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle fadeDuration={2} isLoaded={isLoaded}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText fadeDuration={2} isLoaded={isLoaded}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>
  )
}
