import { forwardRef } from "@yamada-ui/core"
import { Bone as BoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BoneProps = LucideIconProps

/**
 * `Bone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bone = forwardRef<BoneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoneIcon} {...props} />
))
