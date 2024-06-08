import { forwardRef } from "@yamada-ui/core"
import { MailWarning as MailWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailWarningProps = LucideIconProps

/**
 * `MailWarning` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailWarning = forwardRef<MailWarningProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailWarningIcon} {...props} />
))
