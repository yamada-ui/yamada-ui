import { forwardRef } from "@yamada-ui/core"
import { ClipboardX as ClipboardXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardXProps = LucideIconProps

/**
 * `ClipboardX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardX = forwardRef<ClipboardXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ClipboardXIcon} {...props} />
))
