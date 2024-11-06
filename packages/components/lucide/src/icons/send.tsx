import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Send as LucideSendIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SendIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSendIcon} {...props} />
))

/**
 * @deprecated Use `SendIcon` instead.
 */
export const Send = SendIcon
