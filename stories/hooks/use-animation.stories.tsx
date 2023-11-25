import type { Meta } from "@storybook/react"
import type { AnimationStyle } from "@yamada-ui/react"
import {
  Box,
  Button,
  useAnimation,
  useDynamicAnimation,
} from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useAnimation",
}

export default meta

export const basic = () => {
  const animation = useAnimation({
    keyframes: {
      "0%": {
        bg: "red.500",
      },
      "20%": {
        bg: "green.500",
      },
      "40%": {
        bg: "purple.500",
      },
      "60%": {
        bg: "yellow.500",
      },
      "80%": {
        bg: "blue.500",
      },
      "100%": {
        bg: "red.500",
      },
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear",
  })

  return <Box w="full" h="xs" animation={animation} />
}

export const pseudo = () => {
  const animation = useAnimation({
    keyframes: {
      "0%": {
        bg: "red.500",
      },
      "20%": {
        bg: "green.500",
      },
      "40%": {
        bg: "purple.500",
      },
      "60%": {
        bg: "yellow.500",
      },
      "80%": {
        bg: "blue.500",
      },
      "100%": {
        bg: "red.500",
      },
    },
    duration: "10s",
    iterationCount: "infinite",
    timingFunction: "linear",
  })

  return (
    <Box
      pos="relative"
      bg="primary"
      m="lg"
      p="lg"
      rounded="lg"
      color="white"
      _after={{
        content: "'after'",
        pos: "absolute",
        top: "lg",
        left: "lg",
        bg: "secondary",
        p: "lg",
        rounded: "lg",
        color: "white",
        animation,
      }}
    >
      Box
    </Box>
  )
}

export const withMulti = () => {
  const animation = useAnimation([
    {
      keyframes: {
        "0%": {
          bg: "red.500",
        },
        "20%": {
          bg: "green.500",
        },
        "40%": {
          bg: "purple.500",
        },
        "60%": {
          bg: "yellow.500",
        },
        "80%": {
          bg: "blue.500",
        },
        "100%": {
          bg: "red.500",
        },
      },
      duration: "10s",
      iterationCount: "infinite",
      timingFunction: "linear",
    },
    {
      keyframes: {
        "0%": {
          h: "xs",
        },
        "50%": {
          h: "md",
        },
        "100%": {
          h: "xs",
        },
      },
      duration: "10s",
      iterationCount: "infinite",
      timingFunction: "linear",
    },
    {
      keyframes: {
        "0%": {
          w: "full",
        },
        "50%": {
          w: "50%",
        },
        "100%": {
          w: "full",
        },
      },
      duration: "10s",
      iterationCount: "infinite",
      timingFunction: "linear",
    },
  ])

  return <Box w="full" h="xs" animation={animation} />
}

export const withDynamic = () => {
  const [animation, setAnimation] = useDynamicAnimation<
    Record<"moveLeft" | "moveRight", AnimationStyle>
  >({
    moveLeft: {
      keyframes: {
        "0%": {
          transform: "translateX(400%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out",
    },
    moveRight: {
      keyframes: {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(400%)",
        },
      },
      duration: "slower",
      fillMode: "forwards",
      timingFunction: "ease-in-out",
    },
  })

  return (
    <>
      <Button
        onClick={() =>
          setAnimation((key) =>
            key === "moveRight" ? "moveLeft" : "moveRight",
          )
        }
      >
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>
  )
}

export const withDynamicAndMulti = () => {
  const [animation, setAnimation] = useDynamicAnimation<
    Record<"moveLeft" | "moveRight", AnimationStyle[]>
  >({
    moveLeft: [
      {
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
      {
        keyframes: {
          "0%": {
            bg: "secondary",
          },
          "100%": {
            bg: "primary",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
    ],
    moveRight: [
      {
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
      {
        keyframes: {
          "0%": {
            bg: "primary",
          },
          "100%": {
            bg: "secondary",
          },
        },
        duration: "slower",
        fillMode: "forwards",
        timingFunction: "ease-in-out",
      },
    ],
  })

  return (
    <>
      <Button
        onClick={() =>
          setAnimation((key) =>
            key === "moveRight" ? "moveLeft" : "moveRight",
          )
        }
      >
        Please Click
      </Button>

      <Box bg="primary" p="md" rounded="md" color="white" animation={animation}>
        Box
      </Box>
    </>
  )
}
