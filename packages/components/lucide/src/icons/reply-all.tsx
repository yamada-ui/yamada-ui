import { forwardRef } from "@yamada-ui/core"
import { ReplyAll as ReplyAllIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReplyAllProps = LucideIconProps

/**
 * `ReplyAll` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReplyAll = forwardRef<ReplyAllProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ReplyAllIcon} {...props} />
))
