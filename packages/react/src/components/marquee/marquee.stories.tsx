import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef, useState } from "react"
import {
  SiFigma,
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTypescript,
  SiVercel,
  SiX,
} from "react-icons/si"
import { PropsTable } from "#storybook"
import { Box } from "../box"
import { Button } from "../button"
import { Icon, PauseIcon, PlayIcon } from "../icon"
import { Image } from "../image"
import { Separator } from "../separator"
import { HStack, VStack } from "../stack"
import { Wrap } from "../wrap"
import { Marquee } from "./"

type Story = StoryFn<typeof Marquee.Root>

const meta: Meta<typeof Marquee.Root> = {
  component: Marquee.Root,
  title: "Components / Marquee",
}

export default meta

const items = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    color: "#f7df1e",
    icon: SiJavascript,
    label: "JavaScript",
  },
  {
    href: "https://www.typescriptlang.org",
    color: "#3178c6",
    icon: SiTypescript,
    label: "TypeScript",
  },
  {
    href: "https://github.com",
    color: "currentColor",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "https://gitlab.com",
    color: "#fc6d26",
    icon: SiGitlab,
    label: "GitLab",
  },
  {
    href: "https://vercel.com",
    color: "currentColor",
    icon: SiVercel,
    label: "Vercel",
  },
  {
    href: "https://react.dev",
    color: "#61dafb",
    icon: SiReact,
    label: "React",
  },
  {
    href: "https://nextjs.org",
    color: "currentColor",
    icon: SiNextdotjs,
    label: "Next.js",
  },
  {
    href: "https://storybook.js.org",
    color: "#ff4785",
    icon: SiStorybook,
    label: "Storybook",
  },
  {
    href: "https://www.figma.com",
    color: "#F24E1E",
    icon: SiFigma,
    label: "Figma",
  },
  {
    href: "https://x.com",
    color: "currentColor",
    icon: SiX,
    label: "X",
  },
]

export const Basic: Story = () => {
  return (
    <Marquee.Root aria-label="Brand logos" gap="xl">
      {items.map(({ color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Icon
            as={icon}
            aria-hidden={false}
            aria-label={label}
            color={color}
            fontSize="6xl"
          />
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const Orientation: Story = () => {
  return (
    <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => (
        <Marquee.Root
          key={key}
          aria-label={`${row} brand logos`}
          contain="inline-size"
          gap="xl"
          h={row === "vertical" ? "xl" : undefined}
          orientation={row}
        >
          {items.map(({ color, icon, label }) => (
            <Marquee.Item
              key={label}
              px={row === "vertical" ? "sm" : "xl"}
              py={row === "vertical" ? "xl" : "sm"}
            >
              <Icon
                as={icon}
                aria-hidden={false}
                aria-label={label}
                color={color}
                fontSize="6xl"
              />
            </Marquee.Item>
          ))}
        </Marquee.Root>
      )}
    </PropsTable>
  )
}

export const Direction: Story = () => {
  return (
    <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => (
        <Marquee.Root
          key={key}
          aria-label={`Brand logos moving toward ${row}`}
          contain="inline-size"
          direction={row}
          gap="xl"
        >
          {items.map(({ color, icon, label }) => (
            <Marquee.Item key={label} px="xl" py="sm">
              <Icon
                as={icon}
                aria-hidden={false}
                aria-label={label}
                color={color}
                fontSize="6xl"
              />
            </Marquee.Item>
          ))}
        </Marquee.Root>
      )}
    </PropsTable>
  )
}

export const Speed: Story = () => {
  return (
    <PropsTable variant="stack" rows={["25", "50", "100"]}>
      {(_, row, key) => (
        <Marquee.Root
          key={key}
          aria-label={`Brand logos at ${row} pixels per second`}
          contain="inline-size"
          gap="xl"
          speed={Number(row)}
        >
          {items.map(({ color, icon, label }) => (
            <Marquee.Item key={label} px="xl" py="sm">
              <Icon
                as={icon}
                aria-hidden={false}
                aria-label={label}
                color={color}
                fontSize="6xl"
              />
            </Marquee.Item>
          ))}
        </Marquee.Root>
      )}
    </PropsTable>
  )
}

export const Duration: Story = () => {
  return (
    <Marquee.Root duration={10} gap="xl">
      {items.map(({ color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Icon
            as={icon}
            aria-hidden={false}
            aria-label={label}
            color={color}
            fontSize="6xl"
          />
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const Delay: Story = () => {
  return (
    <Marquee.Root delay={2} gap="xl">
      {items.map(({ color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Icon
            as={icon}
            aria-hidden={false}
            aria-label={label}
            color={color}
            fontSize="6xl"
          />
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const LoopCount: Story = () => {
  return (
    <Marquee.Root
      aria-label="Brand logos scrolling three times"
      gap="xl"
      loopCount={3}
    >
      {items.map(({ color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Icon
            as={icon}
            aria-hidden={false}
            aria-label={label}
            color={color}
            fontSize="6xl"
          />
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const Reverse: Story = () => {
  return (
    <Marquee.Root gap="xl" reverse>
      {items.map(({ color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Icon
            as={icon}
            aria-hidden={false}
            aria-label={label}
            color={color}
            fontSize="6xl"
          />
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const PauseOnHover: Story = () => {
  return (
    <Marquee.Root aria-label="Brand links" gap="xl" pauseOnHover>
      {items.map(({ href, color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Button
            as="a"
            href={href}
            variant="ghost"
            aria-label={label}
            color={color}
            h="auto"
            px="2rem"
            py="2"
          >
            <Icon as={icon} fontSize="6xl" />
          </Button>
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const PauseOnFocus: Story = () => {
  return (
    <Marquee.Root aria-label="Brand links" gap="xl" pauseOnFocus>
      {items.map(({ href, color, icon, label }) => (
        <Marquee.Item key={label} px="xl" py="sm">
          <Button
            as="a"
            href={href}
            variant="ghost"
            aria-label={label}
            color={color}
            h="auto"
            px="2rem"
            py="2"
          >
            <Icon as={icon} fontSize="6xl" />
          </Button>
        </Marquee.Item>
      ))}
    </Marquee.Root>
  )
}

export const Edge: Story = () => {
  return (
    <Marquee.Root
      aria-label="Brand logos with gradient edges"
      gap="xl"
      rounded="l2"
    >
      <Marquee.Edge direction="start" />
      <Marquee.Content>
        {items.map(({ color, icon, label }) => (
          <Marquee.Item key={label} px="xl" py="sm">
            <Icon
              as={icon}
              aria-hidden={false}
              aria-label={label}
              color={color}
              fontSize="6xl"
            />
          </Marquee.Item>
        ))}
      </Marquee.Content>
      <Marquee.Edge direction="end" />
    </Marquee.Root>
  )
}

export const Diagonal: Story = () => {
  return (
    <Box containerType="inline-size" overflow="hidden" w="full">
      <Marquee.Root
        aria-label="Brand logos"
        bg="bg.panel"
        gap="xl"
        mx="-lg"
        my="calc({spaces.lg} + 50cqw * sin(2deg))"
        py="lg"
        rounded="0"
        transform="rotate(-2deg)"
        w="calc(100% + {spaces.lg} * 2)"
      >
        {items.map(({ color, icon, label }) => (
          <Marquee.Item key={label} px="xl" py="sm">
            <Icon
              as={icon}
              aria-hidden={false}
              aria-label={label}
              color={color}
              fontSize="6xl"
            />
          </Marquee.Item>
        ))}
      </Marquee.Root>
    </Box>
  )
}

export const ImageGallery: Story = () => {
  const images = [
    {
      src: "https://www.ghibli.jp/gallery/chihiro015.jpg",
      alt: "Scene from Spirited Away",
    },
    {
      src: "https://www.ghibli.jp/gallery/howl049.jpg",
      alt: "Scene from Howl's Moving Castle",
    },
    {
      src: "https://www.ghibli.jp/gallery/totoro036.jpg",
      alt: "Scene from My Neighbor Totoro",
    },
    {
      src: "https://www.ghibli.jp/gallery/mononoke033.jpg",
      alt: "Scene from Princess Mononoke",
    },
    {
      src: "https://www.ghibli.jp/gallery/laputa047.jpg",
      alt: "Scene from Castle in the Sky",
    },
    {
      src: "https://www.ghibli.jp/gallery/porco025.jpg",
      alt: "Scene from Porco Rosso",
    },
  ]

  return (
    <Box
      containerType="size"
      h="lg"
      overflow="hidden"
      perspective="{sizes.lg}"
      position="relative"
      w="full"
    >
      <HStack
        h="calc(100cqh * cos(9deg) + 100cqw * sin(9deg))"
        left="50%"
        position="absolute"
        top="50%"
        transform="translate(-50%, -50%) rotate(9deg)"
        w="calc(100cqw * cos(9deg) + 100cqh * sin(9deg))"
      >
        {[0, 1, 2].map((column) => (
          <Marquee.Root
            key={column}
            aria-label={`Image gallery, column ${column + 1}`}
            direction={column % 2 ? "end" : "start"}
            flex="1"
            gap="lg"
            h="full"
            minW="0"
            orientation="vertical"
            speed={30 + column * 10}
            contentProps={{ alignItems: "stretch" }}
          >
            {images.map((_, index) => {
              const { src, alt } = images[(index + column * 2) % images.length]!

              return (
                <Marquee.Item key={src} w="full">
                  <Image
                    src={src}
                    alt={alt}
                    boxShadow="md"
                    h="3xs"
                    objectFit="cover"
                    rounded="l2"
                    w="full"
                  />
                </Marquee.Item>
              )
            })}
          </Marquee.Root>
        ))}
      </HStack>
    </Box>
  )
}

export const CustomControl: Story = () => {
  const [paused, setPaused] = useState(false)
  const controlRef = useRef<Marquee.Control>(null)

  return (
    <VStack alignItems="start">
      <Marquee.Root
        aria-label="Controlled brand logos"
        gap="xl"
        paused={paused}
      >
        {items.map(({ color, icon, label }) => (
          <Marquee.Item key={label} px="xl" py="sm">
            <Icon
              as={icon}
              aria-hidden={false}
              aria-label={label}
              color={color}
              fontSize="6xl"
            />
          </Marquee.Item>
        ))}
      </Marquee.Root>

      <Button
        startIcon={paused ? <PlayIcon /> : <PauseIcon />}
        onClick={() => setPaused((prev) => !prev)}
      >
        {paused ? "Resume" : "Pause"}
      </Button>
      <Separator />
      <Marquee.Root
        aria-label="Brand logos with imperative controls"
        controlRef={controlRef}
        gap="xl"
      >
        {items.map(({ color, icon, label }) => (
          <Marquee.Item key={label} px="xl" py="sm">
            <Icon
              as={icon}
              aria-hidden={false}
              aria-label={label}
              color={color}
              fontSize="6xl"
            />
          </Marquee.Item>
        ))}
      </Marquee.Root>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.pause()}>Pause</Button>
        <Button onClick={() => controlRef.current?.resume()}>Resume</Button>
        <Button onClick={() => controlRef.current?.togglePause()}>
          Toggle pause
        </Button>
        <Button onClick={() => controlRef.current?.restart()}>Restart</Button>
      </Wrap>
    </VStack>
  )
}
