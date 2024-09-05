import { motion } from "@yamada-ui/motion"
import { useState } from "react"
import type { CSSProperties, ReactElement, FC } from "react"

type VerticalFlipProps = {
  from: ReactElement
  to: ReactElement
  direction: "horizontal" | "vertical"
}

const swapStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  backfaceVisibility: "hidden",
}

const DURATION = 0.5

export const Flip: FC<VerticalFlipProps> = ({ from, to, direction }) => {
  const [isVisible, setIsVisible] = useState(false)

  const switchVisibility = () => {
    setIsVisible(!isVisible)
  }

  const flipMotion = {
    horizontal: {
      from: {
        initial: {
          rotateY: 0,
        },
        animate: {
          rotateY: isVisible ? 180 : 0,
        },
      },
      to: {
        initial: {
          rotateY: 180,
        },
        animate: {
          rotateY: isVisible ? 0 : 180,
        },
      },
    },
    vertical: {
      from: {
        initial: {
          rotateX: 0,
        },
        animate: {
          rotateX: isVisible ? 180 : 0,
        },
      },
      to: {
        initial: {
          rotateX: 180,
        },
        animate: {
          rotateX: isVisible ? 0 : 180,
        },
      },
    },
  }

  return (
    <>
      <motion.div
        onClick={switchVisibility}
        initial={flipMotion[direction].from.initial}
        animate={flipMotion[direction].from.animate}
        transition={{ duration: DURATION }}
        style={swapStyle}
      >
        {from}
      </motion.div>

      <motion.div
        onClick={switchVisibility}
        initial={flipMotion[direction].to.initial}
        animate={flipMotion[direction].to.animate}
        transition={{ duration: DURATION }}
        style={swapStyle}
      >
        {to}
      </motion.div>
    </>
  )
}
