import type { Meta, StoryFn } from "@storybook/react"
import { useEffect, useState } from "react"
import { Avatar } from "../avatar"
import { Heading } from "../heading"
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

export const Color: Story = () => {
  return (
    <>
      <Skeleton endColor="orange.500" startColor="pink.500" />

      <SkeletonCircle endColor="orange.500" startColor="pink.500" />

      <SkeletonText endColor="orange.500" startColor="pink.500" />
    </>
  )
}

export const Size: Story = () => {
  return (
    <>
      <Skeleton h={16} />

      <SkeletonCircle boxSize={16} />

      <SkeletonText textHeight={4} />
    </>
  )
}

export const Speed: Story = () => {
  return (
    <>
      <Skeleton speed={2} />

      <SkeletonCircle speed={2} />

      <SkeletonText speed={2} />
    </>
  )
}

export const Gap: Story = () => {
  return <SkeletonText gap={8} />
}

export const LineClamp: Story = () => {
  return <SkeletonText lineClamp={5} />
}

export const IsLoaded: Story = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(3000).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton loaded={isLoaded} />

      <SkeletonCircle loaded={isLoaded} />

      <SkeletonText loaded={isLoaded} />
    </>
  )
}

export const FadeDuration: Story = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(30000).then(() => {
      setIsLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton fadeDuration={2} h={12} loaded={isLoaded}>
        <Heading truncated>ギャルのパンティーおくれーーーっ！！！！！</Heading>
      </Skeleton>

      <SkeletonCircle fadeDuration={2} loaded={isLoaded}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText fadeDuration={2} loaded={isLoaded}>
        <Text truncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>
  )
}
