import type { ImageProps } from "@yamada-ui/next"
import type { StackProps } from "@yamada-ui/react"
import type { Dispatch, FC, ReactNode, SetStateAction } from "react"
import { CirclePlus, Podcast } from "@yamada-ui/lucide"
import { Image } from "@yamada-ui/next"
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  SegmentedControl,
  SegmentedControlButton,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import { memo, useState } from "react"

interface CarouselItem extends Omit<ImageProps, "alt" | "size"> {
  description: string
  title: string
}

const LISTEN_NOW_ITEMS: CarouselItem[] = [
  {
    description:
      "A playlist for driving on quiet night roads under the starry sky.",
    src: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg",
    title: "Night Drive",
  },
  {
    description: "Perfect jazz and soul music for a relaxed afternoon.",
    src: "https://images.pexels.com/photos/10622551/pexels-photo-10622551.jpeg",
    title: "Afternoon at the Cafe",
  },
  {
    description: "Upbeat songs to make your workout more enjoyable.",
    src: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg",
    title: "Energetic Workout",
  },
  {
    description: "Music to improve concentration for work or study.",
    src: "https://images.pexels.com/photos/19664604/pexels-photo-19664604.jpeg",
    title: "Music for Concentration",
  },
  {
    description: "Meditation music to calm the mind and relax.",
    src: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg",
    title: "Relaxation Meditation",
  },
  {
    description: "Bright music to start the day refreshingly.",
    src: "https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg",
    title: "Morning Awakening",
  },
]

const MADE_FOR_YOU_ITEMS: CarouselItem[] = [
  {
    description: "Songs of love and passion for a special night.",
    src: "https://images.pexels.com/photos/12420808/pexels-photo-12420808.jpeg",
    title: "Romantic Night",
  },
  {
    description: "Summer hits for fun with friends on the beach.",
    src: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg",
    title: "Beach Party",
  },
  {
    description: "Warm songs to listen to by the window on a snowy day.",
    src: "https://images.pexels.com/photos/89909/pexels-photo-89909.jpeg",
    title: "Winter Solo",
  },
  {
    description:
      "Heartwarming jazz collection to listen to while feeling the falling leaves.",
    src: "https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg",
    title: "Autumn Jazz",
  },
  {
    description:
      "Bright and refreshing melodies that make you feel the arrival of spring.",
    src: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    title: "Spring Flowers",
  },
  {
    description: "Exciting songs perfect for a summer day's adventure.",
    src: "https://images.pexels.com/photos/15079520/pexels-photo-15079520.png",
    title: "Summer Adventure",
  },
  {
    description: "A playlist to enjoy a retro atmosphere with nostalgic songs.",
    src: "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg",
    title: "Retro Night",
  },
  {
    description: "Music that colors a modern, sophisticated urban life.",
    src: "https://images.pexels.com/photos/3618362/pexels-photo-3618362.jpeg",
    title: "Urban Lifestyle",
  },
]

type ContentMode = "music" | "podcast"

export interface ContentProps extends StackProps {}

export const Content: FC<ContentProps> = memo(({ ...rest }) => {
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

const ContentHeader: FC<ContentHeaderProps> = memo(
  ({ mode, setMode, ...rest }) => {
    return (
      <HStack
        as="header"
        alignItems={{ base: "center", sm: "flex-end" }}
        flexDirection={{ base: "row", sm: "column" }}
        {...rest}
      >
        <SegmentedControl
          defaultValue="music"
          size="sm"
          value={mode}
          w={{ base: "auto", sm: "full" }}
          onChange={(value) => setMode(value as ContentMode)}
        >
          <SegmentedControlButton value="music">Music</SegmentedControlButton>
          <SegmentedControlButton value="podcast">
            Podcast
          </SegmentedControlButton>
          <SegmentedControlButton isDisabled value="live">
            Live
          </SegmentedControlButton>
        </SegmentedControl>

        <Spacer display={{ base: "block", sm: "none" }} />

        <Button colorScheme="primary" leftIcon={<CirclePlus />} size="sm">
          Add Music
        </Button>
      </HStack>
    )
  },
)

ContentHeader.displayName = "ContentHeader"

interface ContentDisplayProps {
  mode: ContentMode
}

const ContentDisplay: FC<ContentDisplayProps> = memo(({ mode }) => {
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

const ContentItemHeader: FC<ContentItemHeaderProps> = memo(
  ({ description, title, ...rest }) => {
    return (
      <VStack as="header" gap="0" {...rest}>
        <Heading as="h3" lineClamp={1} size={{ base: "lg" }}>
          {title}
        </Heading>

        {description ? (
          <Text color="muted" fontSize="sm" lineClamp={1} mb="md">
            {description}
          </Text>
        ) : null}

        <Divider />
      </VStack>
    )
  },
)

ContentItemHeader.displayName = "ContentItemHeader"

interface ContentMusicProps extends StackProps {}

const ContentMusic: FC<ContentMusicProps> = memo(({ ...rest }) => {
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
        <ContentCarousel items={MADE_FOR_YOU_ITEMS} size="sm" />
      </ContentItem>
    </VStack>
  )
})

ContentMusic.displayName = "ContentMusic"

interface ContentPodcastsProps extends StackProps {}

const ContentPodcasts: FC<ContentPodcastsProps> = memo(({ ...rest }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
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
          <Podcast color={["gray.400", "gray.500"]} fontSize="5xl" />
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

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalHeader>Add Podcast</ModalHeader>

        <ModalBody
          gap={{ base: "lg", sm: "md" }}
          mb={{ base: "lg", sm: "md" }}
          mt="0"
        >
          <Text color="muted" fontSize="sm">
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

interface ContentItemProps extends StackProps {}

const ContentItem: FC<ContentItemProps> = memo(({ ...rest }) => {
  return <VStack as="section" {...rest} />
})

ContentItem.displayName = "ContentItem"

interface ContentCarouselProps extends StackProps {
  items: CarouselItem[]
  size?: "md" | "sm"
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

interface ContentCarouselItemProps extends CarouselItem {
  size?: "md" | "sm"
  containerProps?: StackProps
}

const ContentCarouselItem: FC<ContentCarouselItemProps> = memo(
  ({ description, size = "md", title, containerProps, ...rest }) => {
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
          <Image
            _hover={{ transform: "scale(1.05)" }}
            alt={title}
            fill
            objectFit="cover"
            priority
            sizes="100%"
            transitionDuration="slow"
            transitionProperty="transform"
            {...rest}
          />
        </Box>

        <VStack gap="0">
          <Heading as="h4" lineClamp={1} size="sm">
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
