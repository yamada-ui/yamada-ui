import { Meta, StoryFn } from "@storybook/react"
import {
  Box,
  Heading,
  Motion,
  MotionVariants,
  Text,
  VStack,
  useScroll,
  useSpring,
  useTransform,
} from "@yamada-ui/react"
import { useMemo, useRef } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  title: "Components / Motion / Scroll",
  component: Motion,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        mt="100vh"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={(entry) => console.log("Element entries", entry)}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </>
  )
}

export const withTransition: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        mt="100vh"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onViewportEnter={(entry) => console.log("Element entries", entry)}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </>
  )
}

export const withOnce: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        mt="100vh"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </>
  )
}

export const useViewport: Story = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Text>Please scroll</Text>

      <Box
        ref={scrollRef}
        overflow="scroll"
        w="full"
        h="xs"
        p="md"
        borderWidth="1px"
        rounded="md"
      >
        <Motion
          mt="96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef, margin: "50px 0px 0px 0px" }}
          transition={{ duration: 2 }}
          bg="primary"
          color="white"
          p="md"
          rounded="md"
        >
          Motion
        </Motion>
      </Box>
    </>
  )
}

export const useHook: Story = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])

  return (
    <Box w="full" h="300vh">
      <Box
        w="2xs"
        h="2xs"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Motion
          style={{ scale }}
          w="full"
          h="full"
          overflow="hidden"
          bg={["blackAlpha.200", "whiteAlpha.200"]}
          rounded="3xl"
        >
          <Motion
            style={{ scaleY: scrollYProgress }}
            w="inherit"
            h="inherit"
            bg="primary"
            transformOrigin="50% 100%"
          />
        </Motion>
      </Box>
    </Box>
  )
}

export const customScrollBar: Story = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <Motion
        style={{ scaleX }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        h="3"
        bg="primary"
        transformOrigin="0%"
      />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam.
      </Text>

      <Text>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
        eu tincidunt neque tincidunt a.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
        tincidunt odio, sit amet laoreet massa fringilla eu.
      </Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>

      <Text>
        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
        amet lacus mollis, semper massa ut, rutrum mi.
      </Text>

      <Text>
        Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
      </Text>

      <Text>
        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Pellentesque hendrerit ac augue quis pretium.
      </Text>

      <Text>
        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
        ultricies, mollis mi in, euismod dolor.
      </Text>

      <Text>Quisque convallis ligula non magna efficitur tincidunt.</Text>
    </>
  )
}

export const withVariants: Story = () => {
  const card: MotionVariants = useMemo(
    () => ({
      offscreen: {
        y: 300,
      },
      onscreen: {
        y: 50,
        rotate: -10,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      },
    }),
    [],
  )

  const foods: [string, number, number][] = useMemo(
    () => [
      ["🍅", 340, 10],
      ["🍊", 20, 40],
      ["🍋", 60, 90],
      ["🍐", 80, 120],
      ["🍏", 100, 140],
      ["🫐", 205, 245],
      ["🍆", 260, 290],
      ["🍇", 290, 320],
    ],
    [],
  )

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`

  return (
    <VStack maxW="500px" mx="auto" pb="200px">
      {foods.map(([emoji, hueA, hueB], index) => (
        <Motion
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          overflow="hidden"
          display="flex"
          placeContent="center"
          placeItems="center"
          position="relative"
          pt="20px"
          mb="-120px"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            clipPath='path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")'
            bg={`linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`}
          />

          <Motion
            className="card"
            variants={card}
            fontSize="164px"
            w="300px"
            h="430px"
            display="flex"
            placeContent="center"
            placeItems="center"
            bg="white"
            rounded="20px"
            boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)"
            transformOrigin="10% 60%"
          >
            {emoji}
          </Motion>
        </Motion>
      ))}
    </VStack>
  )
}
