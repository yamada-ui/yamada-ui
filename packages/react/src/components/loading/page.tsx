import type { Variants } from "motion/react"
import type { FC } from "react"
import type { LoadingSharedProps } from "./utils"
import { memo } from "react"
import { useTimeout } from "../../hooks/use-timeout"
import { isValidElement } from "../../utils"
import { motion } from "../motion"
import { Text } from "../text"
import { Loading } from "./"

const variants: { [key: string]: Variants } = {
  overlay: {
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
  },
  panel: {
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 1, 1],
      },
    },
    initial: {
      opacity: 0,
      scale: 0.95,
    },
  },
}

export interface PageProps extends LoadingSharedProps {}

export const Page: FC<PageProps> = memo(
  ({ duration, initialState, message, onFinish }) => {
    useTimeout(onFinish, duration)

    return (
      <motion.div
        data-loading
        alignItems="center"
        animate="animate"
        bg="bg.overlay"
        display="flex"
        exit="exit"
        h="100dvh"
        initial={initialState ? false : "initial"}
        inset={0}
        justifyContent="center"
        p="md"
        position="fixed"
        variants={variants.overlay}
        w="100vw"
        zIndex="beerus"
      >
        <motion.div
          alignItems="center"
          animate="animate"
          bg="bg.panel"
          boxShadow="lg"
          display="flex"
          exit="exit"
          flexDirection="column"
          gap="sm"
          initial={initialState ? false : "initial"}
          justifyContent="center"
          maxW="24rem"
          p="md"
          rounded="l2"
          variants={variants.panel}
        >
          <Loading.Oval fontSize="6xl" />

          {message ? (
            isValidElement(message) ? (
              message
            ) : (
              <Text lineClamp={3}>{message}</Text>
            )
          ) : null}
        </motion.div>
      </motion.div>
    )
  },
)

Page.displayName = "Page"
