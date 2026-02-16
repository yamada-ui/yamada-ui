"use client"

import type { ImageProps, StackProps } from "@yamada-ui/react"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import {
  Box,
  Button,
  Center,
  CirclePlusIcon,
  For,
  Heading,
  HStack,
  Input,
  Modal,
  PodcastIcon,
  SegmentedControl,
  Separator,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { NextImage } from "@/components"

interface CarouselItem extends Omit<ImageProps, "alt" | "size"> {
  description: string
  title: string
}

const LISTEN_NOW_ITEMS: CarouselItem[] = [
  {
    src: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
    description:
      "A playlist for driving on quiet night roads under the starry sky.",
    title: "Night Drive",
  },
  {
    src: "https://images.pexels.com/photos/10622551/pexels-photo-10622551.jpeg",
    description: "Perfect jazz and soul music for a relaxed afternoon.",
    title: "Afternoon at the Cafe",
  },
  {
    src: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
    description: "Upbeat songs to make your workout more enjoyable.",
    title: "Energetic Workout",
  },
  {
    src: "https://images.pexels.com/photos/19664604/pexels-photo-19664604.jpeg",
    description: "Music to improve concentration for work or study.",
    title: "Music for Concentration",
  },
  {
    src: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg",
    description: "Meditation music to calm the mind and relax.",
    title: "Relaxation Meditation",
  },
  {
    src: "https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg",
    description: "Bright music to start the day refreshingly.",
    title: "Morning Awakening",
  },
]

const MADE_FOR_YOU_ITEMS: CarouselItem[] = [
  {
    src: "https://images.pexels.com/photos/12420808/pexels-photo-12420808.jpeg",
    description: "Songs of love and passion for a special night.",
    title: "Romantic Night",
  },
  {
    src: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg",
    description: "Summer hits for fun with friends on the beach.",
    title: "Beach Party",
  },
  {
    src: "https://images.pexels.com/photos/89909/pexels-photo-89909.jpeg",
    description: "Warm songs to listen to by the window on a snowy day.",
    title: "Winter Solo",
  },
  {
    src: "https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg",
    description:
      "Heartwarming jazz collection to listen to while feeling the falling leaves.",
    title: "Autumn Jazz",
  },
  {
    src: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    description:
      "Bright and refreshing melodies that make you feel the arrival of spring.",
    title: "Spring Flowers",
  },
  {
    src: "https://images.pexels.com/photos/15079520/pexels-photo-15079520.png",
    description: "Exciting songs perfect for a summer day's adventure.",
    title: "Summer Adventure",
  },
  {
    src: "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg",
    description: "A playlist to enjoy a retro atmosphere with nostalgic songs.",
    title: "Retro Night",
  },
  {
    src: "https://images.pexels.com/photos/3618362/pexels-photo-3618362.jpeg",
    description: "Music that colors a modern, sophisticated urban life.",
    title: "Urban Lifestyle",
  },
]

type ContentMode = "music" | "podcast"

export interface ContentProps extends StackProps {}

export function Content({ ...rest }: ContentProps) {
  const [mode, setMode] = useState<ContentMode>("music")

  return (
    <VStack as="section" p="{space}" {...rest}>
      <ContentHeader mode={mode} setMode={setMode} />
      <ContentDisplay mode={mode} />
    </VStack>
  )
}

interface ContentHeaderProps extends StackProps {
  mode: ContentMode
  setMode: Dispatch<SetStateAction<ContentMode>>
}

function ContentHeader({ mode, setMode, ...rest }: ContentHeaderProps) {
  return (
    <HStack
      as="header"
      alignItems={{ base: "center", sm: "flex-end" }}
      flexDirection={{ base: "row", sm: "column" }}
      {...rest}
    >
      <SegmentedControl.Root
        size="sm"
        defaultValue="music"
        items={[
          { label: "Music", value: "music" },
          { label: "Podcast", value: "podcast" },
          { disabled: true, label: "Live", value: "live" },
        ]}
        value={mode}
        w={{ base: "auto", sm: "full" }}
        onChange={(value) => setMode(value as ContentMode)}
      />

      <Spacer display={{ base: "block", sm: "none" }} />

      <Button size="sm" startIcon={<CirclePlusIcon />}>
        Add Music
      </Button>
    </HStack>
  )
}

interface ContentDisplayProps {
  mode: ContentMode
}

function ContentDisplay({ mode }: ContentDisplayProps) {
  switch (mode) {
    case "music":
      return <ContentMusic />

    case "podcast":
      return <ContentPodcasts />

    default:
      return null
  }
}

interface ContentItemHeaderProps extends Omit<StackProps, "title"> {
  description?: ReactNode
  title: ReactNode
}

function ContentItemHeader({
  description,
  title,
  ...rest
}: ContentItemHeaderProps) {
  return (
    <VStack as="header" gap="0" {...rest}>
      <Heading as="h3" size="2xl" lineClamp={1}>
        {title}
      </Heading>

      {description ? (
        <Text color="fg.muted" fontSize="sm" lineClamp={1} mb="md">
          {description}
        </Text>
      ) : null}

      <Separator />
    </VStack>
  )
}

interface ContentMusicProps extends StackProps {}

function ContentMusic({ ...rest }: ContentMusicProps) {
  return (
    <VStack gap="lg" {...rest}>
      <ContentItem>
        <ContentItemHeader
          description="Top picks for you. Updated daily."
          title="Listen Now"
        />

        <ContentCarousel items={LISTEN_NOW_ITEMS} />
      </ContentItem>

      <ContentItem>
        <ContentItemHeader
          description="Your personal playlists. Updated daily."
          title="Made for You"
        />
        <ContentCarousel size="sm" items={MADE_FOR_YOU_ITEMS} />
      </ContentItem>
    </VStack>
  )
}

interface ContentPodcastsProps extends StackProps {}

function ContentPodcasts({ ...rest }: ContentPodcastsProps) {
  return (
    <ContentItem {...rest}>
      <ContentItemHeader
        description="Your favorite podcasts. Updated daily."
        title="New Episodes"
      />

      <Center
        borderStyle="dashed"
        borderWidth="1px"
        flexDirection="column"
        gap="lg"
        h="lg"
        p="md"
        rounded="l3"
        w="full"
      >
        <PodcastIcon color="fg.muted" fontSize="6xl" />

        <VStack alignItems="center" gap="sm">
          <Heading as="h3" size="xl">
            No episodes added
          </Heading>

          <Text color="fg.muted" fontSize="sm">
            You have not added any podcasts. Add one below.
          </Text>
        </VStack>

        <Modal.Root
          body={
            <>
              <Text color="fg.muted" fontSize="sm">
                Copy and paste the podcast feed URL to import.
              </Text>

              <Input placeholder="https://yamada-ui.com/feed.xml" />
            </>
          }
          cancel="Cancel"
          success="Import Podcast"
          title="Add Podcast"
          trigger={
            <Button size={{ base: "md", sm: "sm" }} minW="fit-content">
              Add Podcast
            </Button>
          }
        />
      </Center>
    </ContentItem>
  )
}

interface ContentItemProps extends StackProps {}

function ContentItem({ ...rest }: ContentItemProps) {
  return <VStack as="section" {...rest} />
}

interface ContentCarouselProps extends StackProps {
  size?: "md" | "sm"
  items: CarouselItem[]
}

function ContentCarousel({
  size = "md",
  items,
  ...rest
}: ContentCarouselProps) {
  return (
    <HStack gap="md" overflowX="auto" {...rest}>
      <For each={items}>
        {({ ...rest }, index) => (
          <ContentCarouselItem key={index} size={size} {...rest} />
        )}
      </For>
    </HStack>
  )
}

interface ContentCarouselItemProps extends CarouselItem {
  size?: "md" | "sm"
  containerProps?: StackProps
}

function ContentCarouselItem({
  size = "md",
  description,
  title,
  containerProps,
  ...rest
}: ContentCarouselItemProps) {
  return (
    <VStack as="article" gap="md" w="auto" {...containerProps}>
      <Box
        h={{
          base: size === "md" ? "sm" : "2xs",
          sm: size === "md" ? "xs" : "3xs",
        }}
        overflow="hidden"
        position="relative"
        rounded="l3"
        w={{
          base: size === "md" ? "xs" : "2xs",
          sm: size === "md" ? "2xs" : "3xs",
        }}
      >
        <NextImage
          alt={title}
          // @ts-ignore
          fill
          // @ts-ignore
          objectFit="cover"
          priority
          sizes="100%"
          transitionDuration="moderate"
          transitionProperty="transform"
          _hover={{ transform: "scale(1.05)" }}
          {...rest}
        />
      </Box>

      <VStack gap="xs">
        <Heading as="h4" size="md" lineClamp={1}>
          {title}
        </Heading>

        <Text color="fg.muted" fontSize="xs" lineClamp={1}>
          {description}
        </Text>
      </VStack>
    </VStack>
  )
}
