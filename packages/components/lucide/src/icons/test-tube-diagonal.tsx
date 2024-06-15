import { forwardRef } from "@yamada-ui/core"
import { TestTubeDiagonal as TestTubeDiagonalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TestTubeDiagonalProps = LucideIconProps

/**
 * `TestTubeDiagonal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeDiagonal = forwardRef<TestTubeDiagonalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TestTubeDiagonalIcon} {...props} />,
)
