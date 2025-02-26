import type { Meta, StoryFn } from "@storybook/react"
import type { Variants } from "motion/react"
import { useScroll, useSpring, useTransform } from "motion/react"
import { useMemo, useRef } from "react"
import { Box } from "../box"
import { Heading } from "../heading"
import { VStack } from "../stack"
import { Text } from "../text"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Scroll",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        bg="mono"
        color="mono.contrast"
        initial={{ opacity: 0 }}
        mt="100vh"
        p="md"
        rounded="l2"
        whileInView={{ opacity: 1 }}
        onViewportEnter={(entry) => console.log("Element entries", entry)}
      >
        Motion
      </Motion>
    </>
  )
}

export const Transition: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        bg="mono"
        color="mono.contrast"
        initial={{ opacity: 0 }}
        mt="100vh"
        p="md"
        rounded="l2"
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={(entry) => console.log("Element entries", entry)}
      >
        Motion
      </Motion>
    </>
  )
}

export const Once: Story = () => {
  return (
    <>
      <Text>Please scroll</Text>

      <Motion
        bg="mono"
        color="mono.contrast"
        initial={{ opacity: 0 }}
        mt="100vh"
        p="md"
        rounded="l2"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        Motion
      </Motion>
    </>
  )
}

export const Viewport: Story = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Text>Please scroll</Text>

      <Box
        ref={scrollRef}
        borderWidth="1px"
        h="xs"
        overflow="scroll"
        p="md"
        rounded="l2"
        w="full"
      >
        <Motion
          bg="mono"
          color="mono.contrast"
          initial={{ opacity: 0 }}
          mt="96"
          p="md"
          rounded="l2"
          transition={{ duration: 2 }}
          viewport={{ margin: "50px 0px 0px 0px", root: scrollRef }}
          whileInView={{ opacity: 1 }}
        >
          Motion
        </Motion>
      </Box>
    </>
  )
}

export const UseScroll: Story = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])

  return (
    <Box h="300vh" w="full">
      <Box
        h="2xs"
        left="50%"
        position="fixed"
        top="50%"
        transform="translate(-50%, -50%)"
        w="2xs"
      >
        <Motion
          style={{ scale }}
          bg="mono.subtle"
          h="full"
          overflow="hidden"
          rounded="l3"
          w="full"
        >
          <Motion
            style={{ scaleY: scrollYProgress }}
            bg="mono"
            h="inherit"
            transformOrigin="50% 100%"
            w="inherit"
          />
        </Motion>
      </Box>
    </Box>
  )
}

export const CustomScrollBar: Story = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100,
  })

  return (
    <>
      <Motion
        style={{ scaleX }}
        bg="mono"
        h="3"
        left="0"
        position="fixed"
        right="0"
        top="0"
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

export const Variant: Story = () => {
  const variants: Variants = useMemo(
    () => ({
      offscreen: {
        y: 300,
      },
      onscreen: {
        rotate: -10,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
        y: 50,
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
          display="flex"
          initial="offscreen"
          mb="-120px"
          overflow="hidden"
          placeContent="center"
          placeItems="center"
          position="relative"
          pt="20px"
          viewport={{ amount: 0.8, once: true }}
          whileInView="onscreen"
        >
          <Box
            bg={`linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`}
            bottom="0"
            clipPath='path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")'
            left="0"
            position="absolute"
            right="0"
            top="0"
          />

          <Motion
            className="card"
            bg="white"
            boxShadow="0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)"
            display="flex"
            fontSize="164px"
            h="430px"
            placeContent="center"
            placeItems="center"
            rounded="3xl"
            transformOrigin="10% 60%"
            variants={variants}
            w="300px"
          >
            {emoji}
          </Motion>
        </Motion>
      ))}
    </VStack>
  )
}
