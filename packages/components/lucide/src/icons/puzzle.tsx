import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Puzzle as PuzzleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Puzzle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Puzzle = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PuzzleIcon} {...props} />
))
