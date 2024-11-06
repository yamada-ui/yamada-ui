import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PaintBucket as LucidePaintBucketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintBucketIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintBucketIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePaintBucketIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PaintBucketIcon` instead.
 */
export const PaintBucket = PaintBucketIcon
