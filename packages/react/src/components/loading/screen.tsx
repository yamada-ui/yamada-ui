import type { Variants } from "motion/react"
import type { FC } from "react"
import type { LoadingSharedProps } from "./utils"
import { memo } from "react"
import { useTimeout } from "../../hooks/use-timeout"
import { isValidElement } from "../../utils"
import { Center } from "../center"
import { motion } from "../motion"
import { Text } from "../text"
import { Loading } from "./"

const variants: Variants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
  initial: {
    opacity: 0,
  },
}

export interface ScreenProps extends LoadingSharedProps {}

export const Screen: FC<ScreenProps> = memo(
  ({ duration, initial, message, onFinish }) => {
    useTimeout(onFinish, duration)

    return (
      <motion.div
        data-loading
        alignItems="center"
        animate="animate"
        bg="bg"
        display="flex"
        exit="exit"
        h="100dvh"
        initial={initial}
        inset={0}
        justifyContent="center"
        p="md"
        position="fixed"
        variants={variants}
        w="100vw"
        zIndex="beerus"
      >
        <Center flexDirection="column" gap="sm" maxW="24rem">
          <Loading.Oval fontSize="6xl" />

          {message ? (
            isValidElement(message) ? (
              message
            ) : (
              <Text lineClamp={3}>{message}</Text>
            )
          ) : null}
        </Center>
      </motion.div>
    )
  },
)

Screen.displayName = "Screen"
