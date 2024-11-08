import type { MotionTransitionProps } from "@yamada-ui/motion"
import type { PropsWithChildren } from "react"
import type { ModalProps } from "./modal"
import { scaleFadeProps, slideFadeProps } from "@yamada-ui/transitions"
import { findChildren, getValidChildren } from "@yamada-ui/utils"
import { DialogCloseButton } from "./dialog-close-button"
import { ModalCloseButton } from "./modal-close-button"

export interface UseModalContentProps extends PropsWithChildren {
  animation?: ModalProps["animation"]
  duration?: MotionTransitionProps["duration"]
}

export const useModalContent = ({
  animation,
  children,
  duration,
}: UseModalContentProps) => {
  const getModalContentProps = (
    animation: ModalProps["animation"] = "scale",
    duration?: MotionTransitionProps["duration"],
  ) => {
    switch (animation) {
      case "scale":
        return {
          ...scaleFadeProps,
          custom: { duration, reverse: true, scale: 0.95 },
        }
      case "top":
        return {
          ...slideFadeProps,
          custom: { duration, offsetY: -16, reverse: true },
        }
      case "right":
        return {
          ...slideFadeProps,
          custom: { duration, offsetX: 16, reverse: true },
        }
      case "left":
        return {
          ...slideFadeProps,
          custom: { duration, offsetX: -16, reverse: true },
        }
      case "bottom":
        return {
          ...slideFadeProps,
          custom: { duration, offsetY: 16, reverse: true },
        }
    }
  }

  const computedModalContentProps =
    animation !== "none" ? getModalContentProps(animation, duration) : {}

  const validChildren = getValidChildren(children)

  const [customModalCloseButton, ...cloneChildren] = findChildren(
    validChildren,
    ModalCloseButton,
    DialogCloseButton,
  )

  return {
    cloneChildren,
    customModalCloseButton,
    computedModalContentProps,
  }
}

export type UseModalContentReturn = ReturnType<typeof useModalContent>
