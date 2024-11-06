import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Puzzle as LucidePuzzleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PuzzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PuzzleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePuzzleIcon} {...props} />
))

/**
 * @deprecated Use `PuzzleIcon` instead.
 */
export const Puzzle = PuzzleIcon
