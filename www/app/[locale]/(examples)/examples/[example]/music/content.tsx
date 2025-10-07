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
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { memo, useState } from "react"
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

export const Content = memo<ContentProps>(({ ...rest }) => {
  const [mode, setMode] = useState<ContentMode>("music")

  return (
    <VStack
      as="section"
      gap={{ base: "lg", sm: "md" }}
      p={{ base: "lg", sm: "md" }}
      {...rest}
    >
      <ContentHeader mode={mode} setMode={setMode} />
      <ContentDisplay mode={mode} />
    </VStack>
  )
})

Content.displayName = "Content"

interface ContentHeaderProps extends StackProps {
  mode: ContentMode
  setMode: Dispatch<SetStateAction<ContentMode>>
}

const ContentHeader = memo<ContentHeaderProps>(({ mode, setMode, ...rest }) => {
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
        value={mode}
        w={{ base: "auto", sm: "full" }}
        onChange={(value) => setMode(value as ContentMode)}
      >
        <SegmentedControl.Item value="music">Music</SegmentedControl.Item>
        <SegmentedControl.Item value="podcast">Podcast</SegmentedControl.Item>
        <SegmentedControl.Item disabled value="live">
          Live
        </SegmentedControl.Item>
      </SegmentedControl.Root>

      <Spacer display={{ base: "block", sm: "none" }} />

      <Button colorScheme="primary" size="sm" startIcon={<CirclePlusIcon />}>
        Add Music
      </Button>
    </HStack>
  )
})

ContentHeader.displayName = "ContentHeader"

interface ContentDisplayProps {
  mode: ContentMode
}

const ContentDisplay = memo<ContentDisplayProps>(({ mode }) => {
  switch (mode) {
    case "music":
      return <ContentMusic />

    case "podcast":
      return <ContentPodcasts />

    default:
      return null
  }
})

ContentDisplay.displayName = "ContentDisplay"

interface ContentItemHeaderProps extends Omit<StackProps, "title"> {
  title: ReactNode
  description?: ReactNode
}

const ContentItemHeader = memo<ContentItemHeaderProps>(
  ({ description, title, ...rest }) => {
    return (
      <VStack as="header" gap="0" {...rest}>
        <Heading as="h3" size={{ base: "lg" }} lineClamp={1}>
          {title}
        </Heading>

        {description ? (
          <Text color="muted" fontSize="sm" lineClamp={1} mb="md">
            {description}
          </Text>
        ) : null}

        <Separator />
      </VStack>
    )
  },
)

ContentItemHeader.displayName = "ContentItemHeader"

interface ContentMusicProps extends StackProps {}

const ContentMusic = memo<ContentMusicProps>(({ ...rest }) => {
  return (
    <VStack gap={{ base: "lg" }} {...rest}>
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
})

ContentMusic.displayName = "ContentMusic"

interface ContentPodcastsProps extends StackProps {}

const ContentPodcasts = memo<ContentPodcastsProps>(({ ...rest }) => {
  const { open, onClose, onOpen } = useDisclosure()
  return (
    <>
      <ContentItem {...rest}>
        <ContentItemHeader
          description="Your favorite podcasts. Updated daily."
          title="New Episodes"
        />

        <Center
          borderStyle="dashed"
          borderWidth="1px"
          flexDirection="column"
          gap="sm"
          h="lg"
          p="md"
          rounded="md"
          w="full"
        >
          <PodcastIcon color={["gray.400", "gray.500"]} fontSize="5xl" />
          <Heading as="h3" size={{ base: "md" }}>
            No episodes added
          </Heading>

          <Text color="muted" fontSize="sm" mb="md">
            You have not added any podcasts. Add one below.
          </Text>

          <Button
            colorScheme="primary"
            size={{ base: "md", sm: "sm" }}
            onClick={onOpen}
          >
            Add Podcast
          </Button>
        </Center>
      </ContentItem>

      <Modal.Root size="xl" open={open} onClose={onClose}>
        <Modal.Header>Add Podcast</Modal.Header>

        <Modal.Body
          gap={{ base: "lg", sm: "md" }}
          mb={{ base: "lg", sm: "md" }}
          mt="0"
        >
          <Text color="muted" fontSize="sm">
            Copy and paste the podcast feed URL to import.
          </Text>

          <Input placeholder="https://yamada-ui.com/feed.xml" />
        </Modal.Body>

        <Modal.Footer>
          <Button colorScheme="primary" onClick={onClose}>
            Import Podcast
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  )
})

ContentPodcasts.displayName = "ContentPodcasts"

interface ContentItemProps extends StackProps {}

const ContentItem = memo<ContentItemProps>(({ ...rest }) => {
  return <VStack as="section" {...rest} />
})

ContentItem.displayName = "ContentItem"

interface ContentCarouselProps extends StackProps {
  items: CarouselItem[]
  size?: "md" | "sm"
}

const ContentCarousel = memo<ContentCarouselProps>(
  ({ size = "md", items, ...rest }) => {
    return (
      <HStack gap={{ base: "md", sm: "sm" }} overflowX="auto" {...rest}>
        <For each={items}>
          {({ ...rest }, index) => (
            <ContentCarouselItem key={index} size={size} {...rest} />
          )}
        </For>
      </HStack>
    )
  },
)

ContentCarousel.displayName = "ContentCarousel"

interface ContentCarouselItemProps extends CarouselItem {
  size?: "md" | "sm"
  containerProps?: StackProps
}

const ContentCarouselItem = memo<ContentCarouselItemProps>(
  ({ size = "md", description, title, containerProps, ...rest }) => {
    return (
      <VStack as="article" gap="sm" w="auto" {...containerProps}>
        <Box
          h={{
            base: size === "md" ? "sm" : "2xs",
            sm: size === "md" ? "xs" : "3xs",
          }}
          overflow="hidden"
          position="relative"
          rounded="md"
          w={{
            base: size === "md" ? "xs" : "2xs",
            sm: size === "md" ? "2xs" : "3xs",
          }}
        >
          <NextImage
            alt={title}
            // @ts-expect-error TODO
            fill
            // @ts-expect-error TODO
            objectFit="cover"
            priority
            sizes="100%"
            transitionDuration="slow"
            transitionProperty="transform"
            _hover={{ transform: "scale(1.05)" }}
            {...rest}
          />
        </Box>

        <VStack gap="0">
          <Heading as="h4" size="sm" lineClamp={1}>
            {title}
          </Heading>

          <Text color="muted" fontSize="xs" lineClamp={1}>
            {description}
          </Text>
        </VStack>
      </VStack>
    )
  },
)

ContentCarouselItem.displayName = "ContentCarouselItem"
