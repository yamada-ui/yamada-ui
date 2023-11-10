import { Meta, StoryFn } from "@storybook/react"
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
  title: "Components / Feedback / Skeleton",
  component: Skeleton,
}

export default meta

const wait = (ms: number) =>
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
      <Skeleton startColor="pink.500" endColor="orange.500" />

      <SkeletonCircle startColor="pink.500" endColor="orange.500" />

      <SkeletonText startColor="pink.500" endColor="orange.500" />
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

export const withNoOfLines: Story = () => {
  return <SkeletonText noOfLines={5} />
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
      <Skeleton h={12} isLoaded={isLoaded} fadeDuration={2}>
        <Heading isTruncated>
          ギャルのパンティーおくれーーーっ！！！！！
        </Heading>
      </Skeleton>

      <SkeletonCircle isLoaded={isLoaded} fadeDuration={2}>
        <Avatar name="Hirotomo Yamada" />
      </SkeletonCircle>

      <SkeletonText isLoaded={isLoaded} fadeDuration={2}>
        <Text isTruncated>
          私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
        </Text>
      </SkeletonText>
    </>
  )
}
