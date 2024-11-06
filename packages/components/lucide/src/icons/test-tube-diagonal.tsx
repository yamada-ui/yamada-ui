import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TestTubeDiagonal as LucideTestTubeDiagonalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TestTubeDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeDiagonalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideTestTubeDiagonalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `TestTubeDiagonalIcon` instead.
 */
export const TestTubeDiagonal = TestTubeDiagonalIcon
