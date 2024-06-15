import { forwardRef } from "@yamada-ui/core"
import { PaintBucket as PaintBucketIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PaintBucketProps = LucideIconProps

/**
 * `PaintBucket` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintBucket = forwardRef<PaintBucketProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaintBucketIcon} {...props} />
))
