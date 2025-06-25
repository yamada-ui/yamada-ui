import type { Variants } from "motion/react"
import type { FC } from "react"
import type { LoadingSharedProps } from "./utils"
import { memo } from "react"
import { useTimeout } from "../../hooks/use-timeout"
import { isValidElement } from "../../utils"
import { motion } from "../motion"
import { Text } from "../text"
import { Loading } from "./"

const variants: Variants = {
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
}

export interface BackgroundProps extends LoadingSharedProps {}

export const Background: FC<BackgroundProps> = memo(
  ({ duration, initial, message, onFinish }) => {
    useTimeout(onFinish, duration)

    return (
      <motion.div
        data-loading
        alignItems="center"
        animate="animate"
        bg="panel"
        bottom="md"
        boxShadow="lg"
        display="flex"
        exit="exit"
        gap="sm"
        initial={initial}
        justifyContent="center"
        maxW="20rem"
        p="sm"
        position="fixed"
        right="md"
        rounded="l2"
        variants={variants}
        zIndex="beerus"
      >
        <Loading.Oval fontSize="xl" />

        {message ? (
          isValidElement(message) ? (
            message
          ) : (
            <Text fontSize="sm" lineClamp={1}>
              {message}
            </Text>
          )
        ) : null}
      </motion.div>
    )
  },
)

Background.displayName = "Background"
