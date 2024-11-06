import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Bone as LucideBoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoneIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBoneIcon} {...props} />
))

/**
 * @deprecated Use `BoneIcon` instead.
 */
export const Bone = BoneIcon
