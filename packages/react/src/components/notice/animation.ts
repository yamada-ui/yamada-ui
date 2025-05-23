import type { Variants } from "motion/react"
import { convertFromNoticePlacement } from "../../utils"

const getPlacementInitialValues = (placement: string) => {
  const convertedPlacement = convertFromNoticePlacement(placement)

  switch (convertedPlacement) {
    case "top-left":
      return { x: -100, y: 0 }
    case "top-center":
      return { x: 0, y: -100 }
    case "top-right":
      return { x: 100, y: 0 }
    case "bottom-left":
      return { x: -100, y: 0 }
    case "bottom-center":
      return { x: 0, y: 100 }
    case "bottom-right":
      return { x: 100, y: 0 }
    default:
      console.warn(`Unexpected placement value: ${convertedPlacement}`)
      return { x: 0, y: -100 }
  }
}

const getPlacementExitValues = (closeOnDrag: boolean, placement: string) => {
  const convertedPlacement = convertFromNoticePlacement(placement)

  // If closeOnDrag is enabled, simulate a "swipe away" exit animation
  // with more pronounced movement in the natural drag direction
  if (closeOnDrag) {
    switch (convertedPlacement) {
      case "top-left":
        return { x: -100, y: 0 }
      case "top-center":
        return { x: 0, y: -100 }
      case "top-right":
        return { x: 100, y: 0 }
      case "bottom-left":
        return { x: -100, y: 0 }
      case "bottom-center":
        return { x: 0, y: 100 }
      case "bottom-right":
        return { x: 100, y: 0 }
      default:
        return { x: 0, y: -100 }
    }
  }

  // If closeOnDrag is not enabled, use more subtle exit animations
  // that still respect the natural direction based on placement
  switch (convertedPlacement) {
    case "top-left":
      return { x: -40, y: -10 }
    case "top-center":
      return { x: 0, y: -40 }
    case "top-right":
      return { x: 40, y: -10 }
    case "bottom-left":
      return { x: -40, y: 10 }
    case "bottom-center":
      return { x: 0, y: 40 }
    case "bottom-right":
      return { x: 40, y: 10 }
    default:
      return { x: 0, y: -40 }
  }
}

export const defaultVariants: Variants = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
    x: 0,
    y: 0,
  },
  exit: ({ closeOnDrag, placement }) => ({
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
    ...getPlacementExitValues(closeOnDrag, placement),
  }),
  initial: ({ placement }) => ({
    opacity: 0,
    ...getPlacementInitialValues(placement),
  }),
}
