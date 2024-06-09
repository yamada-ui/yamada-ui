import { forwardRef } from "@yamada-ui/core"
import { HandHelping as HandHelpingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HandHelpingProps = LucideIconProps

/**
 * `HandHelping` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHelping = forwardRef<HandHelpingProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HandHelpingIcon} {...props} />
))
