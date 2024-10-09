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
    duration: "10s",
    iterationCount: "infinite",
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
    timingFunction: "linear",
  })

  return <Box animation={animation} h="xs" w="full" />
}

export const pseudo = () => {
  const animation = useAnimation({
    duration: "10s",
    iterationCount: "infinite",
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
    timingFunction: "linear",
  })

  return (
    <Box
      bg="primary"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
      _after={{
        animation,
        bg: "secondary",
        color: "white",
        content: "'after'",
        left: "lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "lg",
      }}
    >
      Box
    </Box>
  )
}

export const withMulti = () => {
  const animation = useAnimation([
    {
      duration: "10s",
      iterationCount: "infinite",
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
      timingFunction: "linear",
    },
    {
      duration: "10s",
      iterationCount: "infinite",
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
      timingFunction: "linear",
    },
    {
      duration: "10s",
      iterationCount: "infinite",
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
      timingFunction: "linear",
    },
  ])

  return <Box animation={animation} h="xs" w="full" />
}

export const withDynamic = () => {
  const [animation, setAnimation] = useDynamicAnimation<{
    [key in "moveLeft" | "moveRight"]: AnimationStyle
  }>({
    moveLeft: {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(400%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      timingFunction: "ease-in-out",
    },
    moveRight: {
      duration: "slower",
      fillMode: "forwards",
      keyframes: {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(400%)",
        },
      },
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

      <Box animation={animation} bg="primary" color="white" p="md" rounded="md">
        Box
      </Box>
    </>
  )
}

export const withDynamicAndMulti = () => {
  const [animation, setAnimation] = useDynamicAnimation<{
    [key in "moveLeft" | "moveRight"]: AnimationStyle[]
  }>({
    moveLeft: [
      {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(400%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        timingFunction: "ease-in-out",
      },
      {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            bg: "secondary",
          },
          "100%": {
            bg: "primary",
          },
        },
        timingFunction: "ease-in-out",
      },
    ],
    moveRight: [
      {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(400%)",
          },
        },
        timingFunction: "ease-in-out",
      },
      {
        duration: "slower",
        fillMode: "forwards",
        keyframes: {
          "0%": {
            bg: "primary",
          },
          "100%": {
            bg: "secondary",
          },
        },
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

      <Box animation={animation} bg="primary" color="white" p="md" rounded="md">
        Box
      </Box>
    </>
  )
}
