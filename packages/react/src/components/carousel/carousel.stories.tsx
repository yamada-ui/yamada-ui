import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo, useRef, useState } from "react"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, dataAttr } from "../../utils"
import { Button, ButtonGroup } from "../button"
import { Center } from "../center"
import { ArrowLeftIcon, ArrowRightIcon, CircleIcon } from "../icon"
import { Image } from "../image"
import { Progress } from "../progress"
import { VStack } from "../stack"
import { Text } from "../text"
import { Carousel } from "./"

type Story = StoryFn<typeof Carousel.Root>

const meta: Meta<typeof Carousel.Root> = {
  component: Carousel.Root,
  title: "Components / Carousel",
}

export default meta

export const Basic: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Size: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} size={row}>
          <Carousel.List>
            {sources.map((src, index) => (
              <Carousel.Item key={index} index={index}>
                <Image
                  src={src}
                  alt="スタジオジブリ作品静止画"
                  boxSize="full"
                  objectFit="cover"
                />
              </Carousel.Item>
            ))}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => (
        <Carousel.Root key={key} colorScheme={row}>
          <Carousel.List>
            {sources.map((src, index) => (
              <Carousel.Item key={index} index={index}>
                <Image
                  src={src}
                  alt="スタジオジブリ作品静止画"
                  boxSize="full"
                  objectFit="cover"
                />
              </Carousel.Item>
            ))}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const DefaultIndex: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root defaultIndex={1}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Orientation: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} orientation={row}>
          <Carousel.List>
            {sources.map((src, index) => (
              <Carousel.Item key={index} index={index}>
                <Image
                  src={src}
                  alt="スタジオジブリ作品静止画"
                  boxSize="full"
                  objectFit="cover"
                />
              </Carousel.Item>
            ))}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const Align: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["center", "start", "end"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} align={row}>
          <Carousel.List>
            {sources.map((src, index) => (
              <Carousel.Item key={index} index={index}>
                <Image
                  src={src}
                  alt="スタジオジブリ作品静止画"
                  boxSize="full"
                  objectFit="cover"
                />
              </Carousel.Item>
            ))}
          </Carousel.List>

          <Carousel.PrevTrigger />
          <Carousel.NextTrigger />

          <Carousel.Indicators />
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const Gap: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root gap={0}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Duration: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root duration={60}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const SlideSize: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root slideSize="50%">
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item
            key={index}
            index={index}
            slideSize={index === 1 ? "100%" : undefined}
          >
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const SlidesToScroll: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root slideSize={`${100 / 3}%`} slidesToScroll={3}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const DragFree: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root dragFree>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Autoplay: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root autoplay>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Delay: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root autoplay delay={1000}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const DisabledStopMouseEnterAutoplay: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root autoplay stopMouseEnterAutoplay={false}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const DisabledLoop: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root loop={false}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const DisabledDraggable: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root draggable={false}>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const DisabledIncludeGapInSize: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root includeGapInSize={false} slideSize="50%">
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const ScrollProgress: Story = () => {
  const [progress, setProgress] = useState(0)
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <>
      <Carousel.Root dragFree loop={false} onScrollProgress={setProgress}>
        <Carousel.List>
          {sources.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                src={src}
                alt="スタジオジブリ作品静止画"
                boxSize="full"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />

        <Carousel.Indicators />
      </Carousel.Root>

      <Progress value={progress} />
    </>
  )
}

export const Methods: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root
      watchDrag={(methods, ev) => {
        console.log("drag", methods, ev)
        return true
      }}
      watchResize={(methods, entries) => {
        console.log("resized", methods, entries)
        return true
      }}
      watchSlides={(methods, mutations) => {
        console.log("slides updated", methods, mutations)
        return true
      }}
    >
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />

      <Carousel.Indicators />
    </Carousel.Root>
  )
}

export const Thumbnails: Story = () => {
  const [index, setIndex] = useState(0)
  const sources = useMemo(
    () =>
      Array.from({ length: 50 }, (_, index) => {
        const num = (index + 1).toString().padStart(2, "0")
        return `https://www.ghibli.jp/gallery/baron0${num}.jpg`
      }),
    [],
  )

  return (
    <VStack gap="md">
      <Carousel.Root index={index} onChange={setIndex}>
        <Carousel.List>
          {sources.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                src={src}
                alt="スタジオジブリ作品静止画"
                boxSize="full"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.List>
      </Carousel.Root>

      <Carousel.Root
        containScroll="keepSnaps"
        dragFree
        h="5xs"
        index={index}
        slideSize="20%"
      >
        <Carousel.List>
          {sources.map((src, index) => (
            <Carousel.Item
              key={index}
              cursor="pointer"
              index={index}
              opacity="0.4"
              _selected={{ opacity: 1 }}
              onClick={() => setIndex(index)}
            >
              <Image
                src={src}
                alt="スタジオジブリ作品静止画"
                boxSize="full"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.List>
      </Carousel.Root>
    </VStack>
  )
}

export const CustomComponent: Story = () => {
  const sources = useMemo(
    () => [
      "https://www.ghibli.jp/gallery/chihiro015.jpg",
      "https://www.ghibli.jp/gallery/howl049.jpg",
      "https://www.ghibli.jp/gallery/totoro036.jpg",
      "https://www.ghibli.jp/gallery/mononoke033.jpg",
      "https://www.ghibli.jp/gallery/laputa047.jpg",
      "https://www.ghibli.jp/gallery/porco025.jpg",
    ],
    [],
  )

  return (
    <Carousel.Root>
      <Carousel.List>
        {sources.map((src, index) => (
          <Carousel.Item key={index} index={index}>
            <Image
              src={src}
              alt="スタジオジブリ作品静止画"
              boxSize="full"
              objectFit="cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.List>

      <Carousel.PrevTrigger
        bottom="4"
        icon={<ArrowLeftIcon />}
        top="unset"
        transform="unset"
      />
      <Carousel.NextTrigger
        bottom="4"
        icon={<ArrowRightIcon />}
        top="unset"
        transform="unset"
      />

      <Carousel.Indicators
        h="6"
        render={({ selected }) => (
          <Center as="button" cursor="pointer">
            <CircleIcon
              data-selected={dataAttr(selected)}
              color="transparent"
              fill="colorScheme.solid/40"
              fontSize="2xl"
              _selected={{ fill: "colorScheme.solid" }}
              _hover={{ _notSelected: { fill: "colorScheme.solid/70" } }}
            />
          </Center>
        )}
      />
    </Carousel.Root>
  )
}

export const CustomControl: Story = () => {
  const controlRef = useRef<Carousel.Control>(null)
  const [index, setIndex] = useState(0)
  const [sources, setSources] = useState([
    "https://www.ghibli.jp/gallery/baron001.jpg",
    "https://www.ghibli.jp/gallery/baron002.jpg",
    "https://www.ghibli.jp/gallery/baron003.jpg",
    "https://www.ghibli.jp/gallery/baron004.jpg",
    "https://www.ghibli.jp/gallery/baron005.jpg",
  ])

  return (
    <>
      <Carousel.Root controlRef={controlRef} index={index} onChange={setIndex}>
        <Carousel.List>
          {sources.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              <Image
                src={src}
                alt="スタジオジブリ作品静止画"
                boxSize="full"
                objectFit="cover"
              />
            </Carousel.Item>
          ))}
        </Carousel.List>

        <Carousel.PrevTrigger />
        <Carousel.NextTrigger />

        <Carousel.Indicators />
      </Carousel.Root>

      <ButtonGroup>
        <Button
          disabled={sources.length === 50}
          onClick={() => {
            const num = (sources.length + 1).toString().padStart(2, "0")
            const nextSources = [
              ...sources,
              `https://www.ghibli.jp/gallery/baron0${num}.jpg`,
            ]

            setSources(nextSources)
            setIndex(nextSources.length - 1)
          }}
        >
          Add
        </Button>
        <Button
          disabled={sources.length === 1}
          onClick={() => {
            if (index === sources.length - 1) setIndex((prev) => prev - 1)

            setSources(sources.slice(0, -1))
          }}
        >
          Remove
        </Button>
      </ButtonGroup>

      <VStack gap="sm">
        <Text>State</Text>
        <ButtonGroup>
          <Button onClick={() => setIndex(0)}>Home</Button>
          <Button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? sources.length - 1 : prev - 1))
            }
          >
            Prev
          </Button>
          <Button
            onClick={() =>
              setIndex((prev) => (prev === sources.length - 1 ? 0 : prev + 1))
            }
          >
            Next
          </Button>
          <Button onClick={() => setIndex(sources.length - 1)}>End</Button>
        </ButtonGroup>
      </VStack>

      <VStack gap="sm">
        <Text>Ref</Text>
        <ButtonGroup>
          <Button onClick={() => controlRef.current?.scrollTo(0)}>Home</Button>
          <Button onClick={() => controlRef.current?.scrollPrev()}>Prev</Button>
          <Button onClick={() => controlRef.current?.scrollNext()}>Next</Button>
          <Button
            onClick={() => controlRef.current?.scrollTo(sources.length - 1)}
          >
            End
          </Button>
        </ButtonGroup>
      </VStack>
    </>
  )
}
