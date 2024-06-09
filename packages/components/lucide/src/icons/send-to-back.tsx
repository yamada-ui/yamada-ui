import { forwardRef } from "@yamada-ui/core"
import { SendToBack as SendToBackIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SendToBackProps = LucideIconProps

/**
 * `SendToBack` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SendToBack = forwardRef<SendToBackProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SendToBackIcon} {...props} />
))
