import type { Meta, StoryFn } from "@storybook/react"
import { useMemo, useRef } from "react"
import type { MotionVariants } from "@yamada-ui/react"
import {
  Box,
  Heading,
  Motion,
  Text,
  VStack,
  useScroll,
  useSpring,
  useTransform,
} from "@yamada-ui/react"

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
        The quick brown fox jumps over the lazy dog. Pack my box with five dozen
        liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump;
        dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks
        help fax my big quiz.
      </Text>

      <Text>
        Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft
        Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping
        zebras vex. The five boxing wizards jump quickly. Jackdaws love my big
        sphinx of quartz.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
        for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's
        job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun
        TV quiz game.
      </Text>

      <Text>
        Amazingly few discotheques provide jukeboxes. My girl wove six dozen
        plaid jackets before she quit. Six big devils from Japan quickly forgot
        how to waltz. Big July earthquakes confound zany experimental vow. Foxy
        parsons quiz and cajole the lovably dim wiki-girl.
      </Text>

      <Text>
        Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy
        Fredericka bought many very exquisite opal jewels. Sixty zippers were
        quickly picked from the woven jute bag. A quick movement of the enemy
        will jeopardize six gunboats.
      </Text>

      <Text>
        All questions asked by five watch experts amazed the judge. Jack quietly
        moved up front and seized the big ball of wax. The quick, brown fox
        jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
        graced by fox whelps.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs
        vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt
        fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold
        Jim. Quick zephyrs blow, vexing daft Jim.
      </Text>

      <Text>
        Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax
        jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking
        zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy
        sphinx waves quart jug of bad milk.
      </Text>

      <Text>
        A very bad quack might jinx zippy fowls. Few quips galvanized the mock
        jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox,
        zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.
      </Text>

      <Text>
        The quick brown fox jumps over the lazy dog. Pack my box with five dozen
        liquor jugs. How vexingly quick daft zebras jump! Bright vixens jump;
        dozy fowl quack. Sphinx of black quartz, judge my vow. Two driven jocks
        help fax my big quiz.
      </Text>

      <Text>
        Waltz, nymph, for quick jigs vex Bud. Quick zephyrs blow, vexing daft
        Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping
        zebras vex. The five boxing wizards jump quickly. Jackdaws love my big
        sphinx of quartz.
      </Text>

      <Text>
        The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
        for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's
        job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Jon's fun
        TV quiz game.
      </Text>

      <Heading>Sub-header</Heading>

      <Text>
        Amazingly few discotheques provide jukeboxes. My girl wove six dozen
        plaid jackets before she quit. Six big devils from Japan quickly forgot
        how to waltz. Big July earthquakes confound zany experimental vow. Foxy
        parsons quiz and cajole the lovably dim wiki-girl.
      </Text>

      <Text>
        Have a pick: twenty six letters - no forcing a jumbled quiz! Crazy
        Fredericka bought many very exquisite opal jewels. Sixty zippers were
        quickly picked from the woven jute bag. A quick movement of the enemy
        will jeopardize six gunboats.
      </Text>

      <Text>
        All questions asked by five watch experts amazed the judge. Jack quietly
        moved up front and seized the big ball of wax. The quick, brown fox
        jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
        graced by fox whelps.
      </Text>
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
