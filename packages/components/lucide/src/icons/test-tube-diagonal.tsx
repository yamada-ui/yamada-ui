import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TestTubeDiagonal as OriginalTestTubeDiagonal } from "lucide-react"

/**
 * `TestTubeDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TestTubeDiagonalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalTestTubeDiagonal} {...props} />,
)

/**
 * `TestTubeDiagonal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TestTubeDiagonalIcon` instead.
 */
export const TestTubeDiagonal = TestTubeDiagonalIcon
