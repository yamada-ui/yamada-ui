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
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(3000).then(() => {
      setLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton loaded={loaded} />

      <SkeletonCircle loaded={loaded} />

      <SkeletonText loaded={loaded} />
    </>
  )
}

export const FadeDuration: Story = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    wait(3000).then(() => {
      setLoaded(true)
    })
  }, [])

  return (
    <>
      <Skeleton fadeDuration={2} h={12} loaded={loaded}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle fadeDuration={2} loaded={loaded}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText fadeDuration={2} loaded={loaded}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>
  )
}
