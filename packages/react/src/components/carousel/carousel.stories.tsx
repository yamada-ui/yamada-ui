import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { PropsTable } from "../../../storybook/components"
// import { Progress } from "../../components/progress"
import { Button } from "../button"
import { Card } from "../card"
import { Center } from "../center"
import { Heading } from "../heading"
import { ArrowLeftIcon, ArrowRightIcon, GhostIcon } from "../icon"
import { Image } from "../image"
import { Text } from "../text"
import { Carousel } from "./"

type Story = StoryFn<typeof Carousel.Root>

const meta: Meta<typeof Carousel.Root> = {
  component: Carousel.Root,
  title: "Components / Carousel",
}

export default meta

export const Basic: Story = () => {
  return (
    <Carousel.Root>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} size={row}>
          <Carousel.Slide as={Center} bg="blue">
            1
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="violet">
            2
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="orange">
            3
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="red">
            4
          </Carousel.Slide>
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const Orientation: Story = () => {
  return (
    <PropsTable variant="column" rows={["horizontal", "vertical"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} orientation={row}>
          <Carousel.Slide as={Center} bg="blue">
            1
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="violet">
            2
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="orange">
            3
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="red">
            4
          </Carousel.Slide>
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const DefaultIndex: Story = () => {
  return (
    <Carousel.Root defaultIndex={1}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Gap: Story = () => {
  return (
    <Carousel.Root gap={0}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Duration: Story = () => {
  return (
    <Carousel.Root duration={60}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const SlideSize: Story = () => {
  return (
    <Carousel.Root slideSize="50%">
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} size="100%" bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Align: Story = () => {
  return (
    <PropsTable variant="column" rows={["center", "start", "end"]}>
      {(_, row, key) => (
        <Carousel.Root key={key} align={row} slideSize="50%">
          <Carousel.Slide as={Center} bg="blue">
            1
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="violet">
            2
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="orange">
            3
          </Carousel.Slide>
          <Carousel.Slide as={Center} bg="red">
            4
          </Carousel.Slide>
        </Carousel.Root>
      )}
    </PropsTable>
  )
}

export const SlidesToScroll: Story = () => {
  return (
    <Carousel.Root loop={false} slideSize="33.3%" slidesToScroll={3}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="blue">
        5
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        6
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        7
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="blue">
        8
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        9
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const CardSlide: Story = () => {
  return (
    <Carousel.Root align="start" h="auto" slideSize="50%" slidesToScroll={2}>
      {Array(4)
        .fill(0)
        .map((_, key) => (
          <Carousel.Slide key={key} as={Card.Root} variant="outline">
            <Card.Header justifyContent="center">
              <Image
                src="https://asset.zebrack-comic.com/title/39/landscape/603536.jpg?drm_key=lDsO5yBXNSy0Teth3eO9iQ&expires=1766016000"
                alt="いちご100%"
                rounded="md"
                w="full"
              />
            </Card.Header>

            <Card.Body>
              <Heading size="md">
                『いちご100%』（いちごひゃくパーセント）
              </Heading>

              <Text>
                『いちご100%』（いちごひゃくパーセント）は、河下水希の漫画作品。放課後、校舎の屋上で出会ったいちごパンツの美少女。フツーの中学3年生・真中淳平は夕日に映えるその姿にすっかり心を奪われてしまった!!　彼女は誰？　いきなり恋の迷路に突入のいちご模様学園ラブコメディ登場!!
              </Text>
            </Card.Body>

            <Card.Footer>
              <Button colorScheme="blue">Wikipedia</Button>
            </Card.Footer>
          </Carousel.Slide>
        ))}
    </Carousel.Root>
  )
}

export const Autoplay: Story = () => {
  return (
    <Carousel.Root autoplay loop={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Delay: Story = () => {
  return (
    <Carousel.Root autoplay delay={1000}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DragFree: Story = () => {
  return (
    <Carousel.Root dragFree>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

// export const ScrollProgress: Story = () => {
//   const [value, onScrollProgress] = useState<number>(0)

//   return (
//     <>
//       <Carousel.Root dragFree loop={false} onScrollProgress={onScrollProgress}>
//         <Carousel.Slide as={Center} bg="blue">
//           1
//         </Carousel.Slide>
//         <Carousel.Slide as={Center} bg="violet">
//           2
//         </Carousel.Slide>
//         <Carousel.Slide as={Center} bg="orange">
//           3
//         </Carousel.Slide>
//         <Carousel.Slide as={Center} bg="red">
//           4
//         </Carousel.Slide>
//       </Carousel.Root>

//       <Progress colorScheme="gray" value={value} />
//     </>
//   )
// }

export const DisabledIncludeGapInSize: Story = () => {
  return (
    <Carousel.Root includeGapInSize={false} slideSize="50%">
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DisabledLoop: Story = () => {
  return (
    <Carousel.Root loop={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DisabledDraggable: Story = () => {
  return (
    <Carousel.Root draggable={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DisabledStopMouseEnterAutoplay: Story = () => {
  return (
    <Carousel.Root autoplay stopMouseEnterAutoplay={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DisabledControlButton: Story = () => {
  return (
    <Carousel.Root withControls={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const DisabledIndicators: Story = () => {
  return (
    <Carousel.Root withIndicators={false}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const Methods: Story = () => {
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
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const CustomControl: Story = () => {
  const [index, onChange] = useState<number>(0)

  return (
    <Carousel.Root draggable={false} index={index} onChange={onChange}>
      <Carousel.Slide as={Center} bg="blue">
        1
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="violet">
        2
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="orange">
        3
      </Carousel.Slide>
      <Carousel.Slide as={Center} bg="red">
        4
      </Carousel.Slide>
    </Carousel.Root>
  )
}

export const CustomControlButton: Story = () => {
  return (
    <>
      <Carousel.Root controlProps={{ icon: <GhostIcon /> }}>
        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>
      </Carousel.Root>

      <Carousel.Root controlPrevProps={{ icon: <ArrowLeftIcon /> }}>
        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>
      </Carousel.Root>

      <Carousel.Root controlNextProps={{ icon: <ArrowRightIcon /> }}>
        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>
      </Carousel.Root>

      <Carousel.Root>
        <Carousel.ControlPrev icon={<ArrowLeftIcon />} />
        <Carousel.ControlNext icon={<ArrowRightIcon />} />

        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>
      </Carousel.Root>
    </>
  )
}

export const CustomIndicators: Story = () => {
  return (
    <>
      <Carousel.Root
        indicatorsProps={{
          bottom: "8",
          component: ({ selected }) => (
            <GhostIcon
              color={selected ? "whiteAlpha.700" : "whiteAlpha.400"}
              cursor="pointer"
              fontSize="2xl"
            />
          ),
        }}
      >
        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>
      </Carousel.Root>

      <Carousel.Root>
        <Carousel.Slide as={Center} bg="blue">
          1
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="violet">
          2
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="orange">
          3
        </Carousel.Slide>
        <Carousel.Slide as={Center} bg="red">
          4
        </Carousel.Slide>

        <Carousel.Indicators
        // sx={{
        //   "& > *": {
        //     transitionDuration: "slower",
        //     transitionProperty: "width",
        //     w: "4",
        //     _selected: { w: "12" },
        //   },
        // }}
        />
      </Carousel.Root>
    </>
  )
}
