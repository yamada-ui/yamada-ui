import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { CirclePlus, Podcast } from "@yamada-ui/lucide"
import { memo, useState } from "react"
import type { Dispatch, FC, ReactNode, SetStateAction } from "react"
import { Image, type ImageProps } from "@yamada-ui/nextjs"

type CarouselItem = Omit<ImageProps, "alt"> & {
  title: string
  description: string
}

const LISTEN_NOW_ITEMS: CarouselItem[] = [
  {
    src: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
    title: "Night Drive",
    description:
      "A playlist for driving on quiet night roads under the starry sky.",
  },
  {
    src: "https://images.pexels.com/photos/10622551/pexels-photo-10622551.jpeg",
    title: "Afternoon at the Cafe",
    description: "Perfect jazz and soul music for a relaxed afternoon.",
  },
  {
    src: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
    title: "Energetic Workout",
    description: "Upbeat songs to make your workout more enjoyable.",
  },
  {
    src: "https://images.pexels.com/photos/19664604/pexels-photo-19664604.jpeg",
    title: "Music for Concentration",
    description: "Music to improve concentration for work or study.",
  },
  {
    src: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg",
    title: "Relaxation Meditation",
    description: "Meditation music to calm the mind and relax.",
  },
  {
    src: "https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg",
    title: "Morning Awakening",
    description: "Bright music to start the day refreshingly.",
  },
]

const MADE_FOR_YOU_ITEMS: CarouselItem[] = [
  {
    src: "https://images.pexels.com/photos/12420808/pexels-photo-12420808.jpeg",
    title: "Romantic Night",
    description: "Songs of love and passion for a special night.",
  },
  {
    src: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg",
    title: "Beach Party",
    description: "Summer hits for fun with friends on the beach.",
  },
  {
    src: "https://images.pexels.com/photos/89909/pexels-photo-89909.jpeg",
    title: "Winter Solo",
    description: "Warm songs to listen to by the window on a snowy day.",
  },
  {
    src: "https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg",
    title: "Autumn Jazz",
    description:
      "Heartwarming jazz collection to listen to while feeling the falling leaves.",
  },
  {
    src: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    title: "Spring Flowers",
    description:
      "Bright and refreshing melodies that make you feel the arrival of spring.",
  },
  {
    src: "https://images.pexels.com/photos/15079520/pexels-photo-15079520.png",
    title: "Summer Adventure",
    description: "Exciting songs perfect for a summer day's adventure.",
  },
  {
    src: "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg",
    title: "Retro Night",
    description: "A playlist to enjoy a retro atmosphere with nostalgic songs.",
  },
  {
    src: "https://images.pexels.com/photos/3618362/pexels-photo-3618362.jpeg",
    title: "Urban Lifestyle",
    description: "Music that colors a modern, sophisticated urban life.",
  },
]

type ContentMode = "music" | "podcast"

export type ContentProps = StackProps & {}

export const Content: FC<ContentProps> = memo(({ ...rest }) => {
  const [mode, setMode] = useState<ContentMode>("music")

  return (
    <VStack
      as="section"
      p={{ base: "lg", sm: "md" }}
      gap={{ base: "lg", sm: "md" }}
      {...rest}
    >
      <ContentHeader mode={mode} setMode={setMode} />
      <ContentDisplay mode={mode} />
    </VStack>
  )
})

Content.displayName = "Content"

type ContentHeaderProps = StackProps & {
  mode: ContentMode
  setMode: Dispatch<SetStateAction<ContentMode>>
}

const ContentHeader: FC<ContentHeaderProps> = memo(
  ({ mode, setMode, ...rest }) => {
    return (
      <HStack
        as="header"
        flexDirection={{ base: "row", sm: "column" }}
        alignItems={{ base: "center", sm: "flex-end" }}
        {...rest}
      >
        <SegmentedControl
          value={mode}
          w={{ base: "auto", sm: "full" }}
          size="sm"
          defaultValue="music"
          onChange={(value) => setMode(value as ContentMode)}
        >
          <SegmentedControlButton value="music">Music</SegmentedControlButton>
          <SegmentedControlButton value="podcast">
            Podcast
          </SegmentedControlButton>
          <SegmentedControlButton value="live" isDisabled>
            Live
          </SegmentedControlButton>
        </SegmentedControl>

        <Spacer display={{ base: "block", sm: "none" }} />

        <Button colorScheme="primary" size="sm" startIcon={<CirclePlus />}>
          Add Music
        </Button>
      </HStack>
    )
  },
)

ContentHeader.displayName = "ContentHeader"

type ContentDisplayProps = { mode: ContentMode }

const ContentDisplay: FC<ContentDisplayProps> = memo(({ mode }) => {
  switch (mode) {
    case "music":
      return <ContentMusic />

    case "podcast":
      return <ContentPodcasts />

    default:
      return <></>
  }
})

ContentDisplay.displayName = "ContentDisplay"

type ContentItemHeaderProps = StackProps & {
  title: ReactNode
  description?: ReactNode
}

const ContentItemHeader: FC<ContentItemHeaderProps> = memo(
  ({ title, description, ...rest }) => {
    return (
      <VStack as="header" gap="0" {...rest}>
        <Heading as="h3" size={{ base: "lg" }} lineClamp={1}>
          {title}
        </Heading>

        {description ? (
          <Text fontSize="sm" color="muted" mb="md" lineClamp={1}>
            {description}
          </Text>
        ) : null}

        <Divider />
      </VStack>
    )
  },
)

ContentItemHeader.displayName = "ContentItemHeader"

type ContentMusicProps = StackProps

const ContentMusic: FC<ContentMusicProps> = memo(({ ...rest }) => {
  return (
    <VStack gap={{ base: "lg" }} {...rest}>
      <ContentItem>
        <ContentItemHeader
          title="Listen Now"
          description="Top picks for you. Updated daily."
        />

        <ContentCarousel items={LISTEN_NOW_ITEMS} />
      </ContentItem>

      <ContentItem>
        <ContentItemHeader
          title="Made for You"
          description="Your personal playlists. Updated daily."
        />
        <ContentCarousel size="sm" items={MADE_FOR_YOU_ITEMS} />
      </ContentItem>
    </VStack>
  )
})

ContentMusic.displayName = "ContentMusic"

type ContentPodcastsProps = StackProps

const ContentPodcasts: FC<ContentPodcastsProps> = memo(({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <ContentItem {...rest}>
        <ContentItemHeader
          title="New Episodes"
          description="Your favorite podcasts. Updated daily."
        />

        <Center
          flexDirection="column"
          gap="sm"
          w="full"
          h="lg"
          p="md"
          rounded="md"
          borderWidth="1px"
          borderStyle="dashed"
        >
          <Podcast color={["gray.400", "gray.500"]} fontSize="5xl" />
          <Heading as="h3" size={{ base: "md" }}>
            No episodes added
          </Heading>

          <Text fontSize="sm" color="muted" mb="md">
            You have not added any podcasts. Add one below.
          </Text>

          <Button
            size={{ base: "md", sm: "sm" }}
            colorScheme="primary"
            onClick={onOpen}
          >
            Add Podcast
          </Button>
        </Center>
      </ContentItem>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalHeader>Add Podcast</ModalHeader>

        <ModalBody
          mt="0"
          mb={{ base: "lg", sm: "md" }}
          gap={{ base: "lg", sm: "md" }}
        >
          <Text fontSize="sm" color="muted">
            Copy and paste the podcast feed URL to import.
          </Text>

          <FormControl label="Podcast URL">
            <Input placeholder="https://yamada-ui.com/feed.xml" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" onClick={onClose}>
            Import Podcast
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
})

ContentPodcasts.displayName = "ContentPodcasts"

type ContentItemProps = StackProps

const ContentItem: FC<ContentItemProps> = memo(({ ...rest }) => {
  return <VStack as="section" {...rest} />
})

ContentItem.displayName = "ContentItem"

type ContentCarouselProps = StackProps & {
  items: CarouselItem[]
  size?: "sm" | "md"
}

const ContentCarousel: FC<ContentCarouselProps> = memo(
  ({ items, size = "md", ...rest }) => {
    return (
      <HStack gap={{ base: "md", sm: "sm" }} overflowX="auto" {...rest}>
        {items.map(({ ...rest }, index) => (
          <ContentCarouselItem key={index} size={size} {...rest} />
        ))}
      </HStack>
    )
  },
)

ContentCarousel.displayName = "ContentCarousel"

type ContentCarouselItemProps = CarouselItem & {
  containerProps?: StackProps
  size?: "sm" | "md"
}

const ContentCarouselItem: FC<ContentCarouselItemProps> = memo(
  ({ containerProps, size = "md", title, description, ...rest }) => {
    return (
      <VStack as="article" w="auto" gap="sm" {...containerProps}>
        <Box
          overflow="hidden"
          rounded="md"
          w={{
            base: size === "md" ? "xs" : "2xs",
            sm: size === "md" ? "2xs" : "3xs",
          }}
          h={{
            base: size === "md" ? "sm" : "2xs",
            sm: size === "md" ? "xs" : "3xs",
          }}
          position="relative"
        >
          <Image
            alt={title}
            fill
            sizes="100%"
            priority
            objectFit="cover"
            transitionProperty="transform"
            transitionDuration="slow"
            _hover={{ transform: "scale(1.05)" }}
            {...rest}
          />
        </Box>

        <VStack gap="0">
          <Heading as="h4" size="sm" lineClamp={1}>
            {title}
          </Heading>

          <Text fontSize="xs" color="muted" lineClamp={1}>
            {description}
          </Text>
        </VStack>
      </VStack>
    )
  },
)

ContentCarouselItem.displayName = "ContentCarouselItem"
