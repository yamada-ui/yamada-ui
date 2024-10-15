import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PaintBucket as PaintBucketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintBucket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintBucket = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaintBucketIcon} {...props} />
))
