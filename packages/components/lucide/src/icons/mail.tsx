import { forwardRef } from "@yamada-ui/core"
import { Mail as MailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailProps = LucideIconProps

/**
 * `Mail` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Mail = forwardRef<MailProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailIcon} {...props} />
))
