import { forwardRef } from "@yamada-ui/core"
import { Share as ShareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShareProps = LucideIconProps

/**
 * `Share` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Share = forwardRef<ShareProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShareIcon} {...props} />
))
