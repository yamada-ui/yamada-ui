import { forwardRef } from "@yamada-ui/core"
import { Anchor as AnchorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AnchorProps = LucideIconProps

/**
 * `Anchor` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Anchor = forwardRef<AnchorProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AnchorIcon} {...props} />
))
